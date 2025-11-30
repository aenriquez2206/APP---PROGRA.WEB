import { createContext, useContext, useEffect, useState } from "react";
import carritoApi from "../../api/carritoApi";

// Crear el contexto
const CartContext = createContext(null);

// Hook para acceder al contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Cargar carrito al iniciar
  useEffect(() => {
    const cargarCarrito = async () => {
      if (!usuario?.id) return;

      try {
        let carrito = await carritoApi.getCarritoByUser(usuario.id);
        if (!carrito || !carrito.items) carrito = { items: [] };

        setCartItems(carrito.items);
      } catch (error) {
        console.error("Error cargando carrito:", error);
      }
    };

    cargarCarrito();
  }, [usuario]);

  // Agregar un producto al carrito
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

  // Quitar 1 unidad de un producto
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

  // Eliminar completamente un producto
  const removeItemCompletely = (productoId) => {
    setCartItems((prev) => prev.filter((i) => i.id !== productoId));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
    setSelectedItems({});
  };

  // Mover a guardados
  const moveToSaved = (productoId) => {
    const item = cartItems.find((i) => i.id === productoId);
    if (item) {
      setSavedItems((prev) => [...prev, item]);
      removeItemCompletely(productoId);
    }
  };

  // Mover de guardados al carrito
  const moveToCart = (productoId) => {
    const item = savedItems.find((i) => i.id === productoId);
    if (item) {
      addToCart(item);
      setSavedItems((prev) => prev.filter((i) => i.id !== productoId));
    }
  };

  // Toggle selección
  const toggleSelectItem = (productoId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [productoId]: !prev[productoId],
    }));
  };

  // Totales
  const getTotalQuantity = () =>
    cartItems.reduce((sum, i) => sum + i.cantidad, 0);

  const getTotalPrice = () =>
    cartItems.reduce((sum, i) => sum + i.cantidad * i.precio, 0);

  // Objeto estable para Fast Refresh
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

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
