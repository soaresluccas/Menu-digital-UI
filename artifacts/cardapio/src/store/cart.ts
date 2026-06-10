import { createContext, useContext } from 'react';

export interface CartItem {
  id: string;
  name: string;
  category: string;
  qty: number;
}

export interface CartContextValue {
  items: CartItem[];
  addItem: (id: string, name: string, category: string, qty: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
}

export const CartContext = createContext<CartContextValue>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQty: () => {},
  clearCart: () => {},
  totalCount: 0,
});

export function useCart() {
  return useContext(CartContext);
}
