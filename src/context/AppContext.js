import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  return <AppContext.Provider value={{ isCartOpen, setIsCartOpen, cart, setCart }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
