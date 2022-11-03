import { createContext, ReactNode, useEffect, useState } from 'react';

interface CartContextProviderProps {
  children: ReactNode;
}

interface Cart {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState([] as Cart[]);

  useEffect(() => {
    const savedCartString = localStorage.getItem('coffee-delivery-1.0.0-cart');
    if (!savedCartString) {
      return;
    }
    const savedCart = JSON.parse(savedCartString) as Cart[];

    setCart(savedCart);
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
