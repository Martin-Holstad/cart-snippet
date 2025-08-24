import { createContext, useContext, useState, type Dispatch, type SetStateAction, type ReactNode } from "react";
import { type CartProduct } from "../types/CartProduct";

type AppContextType = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cart: CartProduct[];
  setCart: Dispatch<SetStateAction<CartProduct[]>>;
};

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartProduct[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"));

  const contextValue: AppContextType = {
    isCartOpen,
    setIsCartOpen,
    cart,
    setCart,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
