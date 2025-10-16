import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});


  const addToCart = (producto) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === producto.id);
      if (existing) {

        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });


    setSelectedItems((prev) => ({ ...prev, [producto.id]: true }));

  };


const removeFromCart = (id) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter((item) => item.cantidad > 0)
  );

    setSelectedItems((prev) => {
      const newSelected = { ...prev };
      if (!cartItems.find(item => item.id === id)) {
        delete newSelected[id];
      }
      return newSelected;
    });
};


  const removeItemCompletely = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedItems((prev) => {
      const newSelected = { ...prev };
      delete newSelected[id];
      return newSelected;
    });
  };


  const clearCart = () => {
    setCartItems([]);
    setSelectedItems({});
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
      if (selectedItems[item.id]) {
        return total + item.precio * item.cantidad;
      }
      return total;
    }, 0);


  const getTotalQuantity = () =>
    cartItems.reduce((total, item) => {
      if (selectedItems[item.id]) {
        return total + item.cantidad;
      }
      return total;
    }, 0);


  return (
    <CartContext.Provider
      value={{
        cartItems,
        savedItems,
        setCartItems,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para acceder al contexto del carrito
export const useCart = () => useContext(CartContext);
