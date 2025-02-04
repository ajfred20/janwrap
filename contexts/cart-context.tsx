"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  variation?: string;
}

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Load cart from localStorage
const loadCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (item) =>
          item.name === newItem.name && item.variation === newItem.variation
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      }

      return [...currentItems, newItem];
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

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart }}
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
