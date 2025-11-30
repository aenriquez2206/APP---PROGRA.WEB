import { createContext, useContext, useState, useEffect } from "react";
import carritoApi from "../../api/carritoApi";

const CartContext = createContext();
const usuario = JSON.parse(localStorage.getItem("usuario"));

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [carritoId, setCarritoId] = useState(null);

  // NUEVO: Datos de envío y método de pago
  const [shippingData, setShippingData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    async function cargarCarrito() {
      if (!usuario?.id) return;

      // 1. Buscar carrito
      let carrito = await carritoApi.getCarritoByUser(usuario.id);

      if (!carrito || !carrito.id) {
        carrito = await carritoApi.createCarrito(usuario.id);
      }

      setCarritoId(carrito.id);

      // 2. Obtener items del carrito
      const itemsBD = await carritoApi.getItems(carrito.id);

      const itemsFront = itemsBD.map(item => ({
        id: item.productoId,
        nombre: item.nombre,
        precio: item.precio,
        img: item.img,
        categoria: item.categoria,
        cantidad: item.cantidad,
        itemIdBD: item.id
      }));

      setCartItems(itemsFront);

      // Seleccionarlos por defecto
      const sel = {};
      itemsFront.forEach(item => sel[item.id] = true);
      setSelectedItems(sel);
    }

    cargarCarrito();
  }, []);

  const addToCart = async (producto) => {
    const existing = cartItems.find(i => i.id === producto.id);

    if (existing) {
      await carritoApi.updateItem(existing.itemIdBD, existing.cantidad + 1);
      setCartItems(cartItems.map(i =>
        i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
      ));
    } else {
      const nuevoItem = await carritoApi.addItem(carritoId, producto.id, 1);
      setCartItems([...cartItems, { ...producto, cantidad: 1, itemIdBD: nuevoItem.id }]);
    }

    setSelectedItems(prev => ({ ...prev, [producto.id]: true }));
  };

  const removeFromCart = async (idProducto) => {
    const item = cartItems.find(i => i.id === idProducto);
    if (!item) return;

    if (item.cantidad > 1) {
      await carritoApi.updateItem(item.itemIdBD, item.cantidad - 1);
      setCartItems(cartItems.map(i =>
        i.id === idProducto ? { ...i, cantidad: i.cantidad - 1 } : i
      ));
    } else {
      await carritoApi.deleteItem(item.itemIdBD);
      setCartItems(cartItems.filter(i => i.id !== idProducto));
    }
  };

  const removeItemCompletely = async (idProducto) => {
    const item = cartItems.find(i => i.id === idProducto);
    if (!item) return;

    await carritoApi.deleteItem(item.itemIdBD);
    setCartItems(cartItems.filter(i => i.id !== idProducto));
    setSelectedItems(prev => {
      const n = { ...prev };
      delete n[idProducto];
      return n;
    });
  };

  const clearCart = async () => {
    if (carritoId) await carritoApi.clearCarrito(carritoId);
    setCartItems([]);
    setSelectedItems({});
    setSavedItems([]);
    setShippingData({});
    setPaymentMethod("");
  };

  const moveToSaved = (id) => {
    setCartItems((prev) => {
      const itemToSave = prev.find(item => item.id === id);
      if (!itemToSave) return prev;

      setSavedItems((savedPrev) => {
        const alreadySaved = savedPrev.find(i => i.id === id);
        if (alreadySaved) return savedPrev;
        return [...savedPrev, { ...itemToSave, cantidad: 1 }];
      });

      return prev.filter(item => item.id !== id);
    });

    setSelectedItems((prev) => {
      const newSelected = { ...prev };
      delete newSelected[id];
      return newSelected;
    });
  };

  const moveToCart = (id) => {
    const itemToMove = savedItems.find(item => item.id === id);
    if (!itemToMove) return;

    setSavedItems(prev => prev.filter(item => item.id !== id));

    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...itemToMove, cantidad: 1 }];
    });

    setSelectedItems(prev => ({ ...prev, [id]: true }));
  };

  const toggleSelectItem = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => {
      if (selectedItems[item.id]) return total + item.precio * item.cantidad;
      return total;
    }, 0);

  const getTotalQuantity = () =>
    cartItems.reduce((total, item) => {
      if (selectedItems[item.id]) return total + item.cantidad;
      return total;
    }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        savedItems,
        addToCart,
        removeFromCart,
        removeItemCompletely,
        clearCart,
        moveToSaved,
        moveToCart,
        getTotalPrice,
        getTotalQuantity,
        selectedItems,
        toggleSelectItem,
        carritoId,
        shippingData,
        setShippingData,
        paymentMethod,
        setPaymentMethod
      }}
    >
      {children}
    </CartContext.Provider>

    
  );

  
};
// Hook para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
