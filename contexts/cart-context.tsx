"use client";

import React, { createContext, useContext, useState } from "react";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.name === newItem.name
      );
      if (existingItem) {
        return currentItems.map((item) =>
          item.name === newItem.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { ...newItem, quantity: 1 }];
    });
  };

  const removeItem = (name: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.name !== name)
    );
  };

  const updateQuantity = (name: string, quantity: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.name === name ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
