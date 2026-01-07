"use client";
import { createContext, useContext, useState, useEffect, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount (only on client side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCart = localStorage.getItem("eco-cart");
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error("Failed to load cart", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes (only on client side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("eco-cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Failed to save cart", error);
      }
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // Product mein agar price nahi hai to "0" maan lenge taaki crash na ho
      return [...prev, { ...product, qty: 1, price: product.price || "0" }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
      )
    );
  };

  // --- FIXED: Safe Total Calculation with useMemo ---
  // Ye function ab check karega ki price exist karta hai ya nahi
  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      // Agar price nahi hai, to 0 add karo
      if (!item.price) return total;

      // Agar price pehle se Number hai
      if (typeof item.price === "number") {
        return total + item.price * (item.qty || 1);
      }

      // Agar price String hai (e.g., "₹500"), to Symbols hatakar calculate karo
      if (typeof item.price === "string") {
        const cleanPrice = parseFloat(item.price.replace(/[₹,]/g, "")) || 0;
        return total + cleanPrice * (item.qty || 1);
      }

      return total;
    }, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        cartTotal,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);