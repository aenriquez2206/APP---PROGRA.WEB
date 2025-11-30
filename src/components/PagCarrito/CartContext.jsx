import { createContext, useContext, useEffect, useState, useMemo } from "react";
import carritoApi from "../../api/carritoApi";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});

  // Usuario estable, memoizado para evitar loops
  const usuario = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("usuario"));
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    const cargarCarrito = async () => {
      if (!usuario?.id) return;

      try {
        const carrito = await carritoApi.getCarritoByUser(usuario.id);
        setCartItems(carrito?.items || []);
      } catch (error) {
        console.error("Error cargando carrito:", error);
      }
    };

    cargarCarrito();
  }, [usuario?.id]); // Dependencia segura

  const addToCart = (producto) => {
    setCartItems((prev) => {
      const index = prev.findIndex((i) => i.id === producto.id);
      if (index !== -1) {
        const updated = [...prev];
        updated[index].cantidad += 1;
        return updated;
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (productoId) => {
    setCartItems((prev) => {
      const index = prev.findIndex((i) => i.id === productoId);
      if (index !== -1) {
        const updated = [...prev];
        if (updated[index].cantidad > 1) updated[index].cantidad -= 1;
        else updated.splice(index, 1);
        return updated;
      }
      return prev;
    });
  };

  const removeItemCompletely = (productoId) => setCartItems((prev) => prev.filter((i) => i.id !== productoId));
  const clearCart = () => { setCartItems([]); setSelectedItems({}); };
  const moveToSaved = (productoId) => {
    const item = cartItems.find((i) => i.id === productoId);
    if (item) { setSavedItems((prev) => [...prev, item]); removeItemCompletely(productoId); }
  };
  const moveToCart = (productoId) => {
    const item = savedItems.find((i) => i.id === productoId);
    if (item) { addToCart(item); setSavedItems((prev) => prev.filter((i) => i.id !== productoId)); }
  };
  const toggleSelectItem = (productoId) => setSelectedItems((prev) => ({ ...prev, [productoId]: !prev[productoId] }));
  const getTotalQuantity = () => cartItems.reduce((sum, i) => sum + i.cantidad, 0);
  const getTotalPrice = () => cartItems.reduce((sum, i) => sum + i.cantidad * Number(i.precio), 0); // <-- asegurar Number

  const contextValue = {
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
    setCartItems,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
