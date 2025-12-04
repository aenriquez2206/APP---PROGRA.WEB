import { createContext, useContext, useState, useEffect } from "react";
import carritoApi from "../../api/carritoApi";
import { useUser } from '../../context/UserContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const { user } = useUser();
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [carritoId, setCarritoId] = useState(null);

  
  const [shippingData, setShippingData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    
    async function cargarCarrito() {
      if (!user?.id) {
        
        setCarritoId(null);
        setCartItems([]);
        setSelectedItems({});
        return;
      }

      try {
        
        let carrito = await carritoApi.getCarritoByUser(user.id);

        if (!carrito || !carrito.id) {
          carrito = await carritoApi.createCarrito(user.id);
        }

        setCarritoId(carrito.id);

        
        const itemsBD = carrito.items || [];

        const itemsFront = itemsBD.map(item => ({
          id: item.productoInfo?.id ?? null,
          nombre: item.productoInfo?.nombre ?? '',
          precio: item.productoInfo?.precio ?? 0,
          img: item.productoInfo?.img ?? '',
          categoria: item.productoInfo?.categoriaDetail?.nombre ?? '',
          cantidad: 1,
          itemIdBD: item.id
        }));

        setCartItems(itemsFront);

        
        const sel = {};
        itemsFront.forEach(item => sel[item.id] = true);
        setSelectedItems(sel);
      } catch (err) {
        console.error('Error cargando carrito para usuario:', err);
        setCartItems([]);
        setSelectedItems({});
        setCarritoId(null);
      }
    }

    cargarCarrito();
  }, [user]);

  const addToCart = async (producto) => {
  try {
    const existing = cartItems.find(i => i.id === producto.id);

    if (existing) {
      
      await carritoApi.addItem({ id_user: user.id, id_producto: producto.id });
      setCartItems(cartItems.map(i =>
        i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
      ));
    } else {
      
      const result = await carritoApi.addItem({ id_user: user.id, id_producto: producto.id });
      setCartItems([...cartItems, { ...producto, cantidad: 1, itemIdBD: result.item.id }]);
    }

    setSelectedItems(prev => ({ ...prev, [producto.id]: true }));
  } catch (error) {
    console.error("Error al agregar al carrito:", error);
  }
};


  const removeFromCart = async (productoOrId) => {
    try {
      const id = typeof productoOrId === 'object' ? productoOrId.id : productoOrId;
      const existing = cartItems.find(i => i.id === id);
      if (!existing) return;

      await carritoApi.removeItem({ id_user: user.id, id_producto: id });

      if (existing.cantidad > 1) {
        setCartItems(cartItems.map(i =>
          i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i
        ));
      } else {
        setCartItems(cartItems.filter(i => i.id !== id));
        setSelectedItems(prev => {
          const n = { ...prev };
          delete n[id];
          return n;
        });
      }
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
    }
  };


  const removeItemCompletely = async (idProducto) => {
    const item = cartItems.find(i => i.id === idProducto);
    if (!item) return;

    
    await carritoApi.removeItem({ id_user: user.id, id_producto: idProducto });
    setCartItems(cartItems.filter(i => i.id !== idProducto));
    setSelectedItems(prev => {
      const n = { ...prev };
      delete n[idProducto];
      return n;
    });
  };

  const clearCart = async () => {
    try {
      
      if (user && user.id) {
        await carritoApi.clearCart(user.id);
      }
    } catch (err) {
      console.error('Error al vaciar carrito en backend:', err);
      
    }

    setCartItems([]);
    setSelectedItems({});
    setSavedItems([]);
    setShippingData({});
    setPaymentMethod("");
  };

  const moveToSaved = (id) => {
    const itemToSave = cartItems.find(item => item.id === id);
    if (!itemToSave) return;

    
    setSavedItems((prev) => {
      const alreadySaved = prev.find(i => i.id === id);
      if (alreadySaved) return prev;
      return [...prev, { ...itemToSave }];
    });

    
    setCartItems((prev) => prev.filter(item => item.id !== id));

   
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
        setSavedItems,
        addToCart,
        removeFromCart,
        removeItemCompletely,
        clearCart,
        moveToSaved,
        moveToCart,
        getTotalPrice,
        getTotalQuantity,
        selectedItems,
        setSelectedItems,
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
