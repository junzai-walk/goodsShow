import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Product } from '../types/product';

// 购物车商品类型
export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

// 购物车上下文类型
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string, size?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

// 创建上下文
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider 组件
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // 从 localStorage 加载购物车数据
    const savedCart = localStorage.getItem('shopping_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 保存到 localStorage
  useEffect(() => {
    localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // 添加到购物车
  const addToCart = (product: Product, quantity = 1, color?: string, size?: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => 
          item.id === product.id && 
          item.selectedColor === color && 
          item.selectedSize === size
      );

      if (existingItem) {
        // 如果商品已存在，增加数量
        return prevItems.map((item) =>
          item.id === product.id && 
          item.selectedColor === color && 
          item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // 添加新商品
        return [...prevItems, { ...product, quantity, selectedColor: color, selectedSize: size }];
      }
    });
  };

  // 从购物车移除
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // 更新数量
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // 清空购物车
  const clearCart = () => {
    setCartItems([]);
  };

  // 计算总价
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // 获取购物车商品总数
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 自定义 Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

