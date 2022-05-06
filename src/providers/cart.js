import { useState, createContext } from "react";

export const ContextCart = createContext([]);

export const ProviderCart = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (produto) => {
    setCart([...cart, produto]);
    localStorage.setItem("@cart", JSON.stringify([...cart, produto]));
  };

  const removeCart = (produto) => {
    const newCart = cart.filter((elem) => elem.title !== produto.title);
    setCart(newCart);
    localStorage.setItem("@cart", JSON.stringify(newCart));
  };

  const limparCart = () => {
    setCart([]);
    localStorage.clear();
  };

  return (
    <ContextCart.Provider
      value={{ cart, addCart, removeCart, limparCart, setCart }}
    >
      {children}
    </ContextCart.Provider>
  );
};
