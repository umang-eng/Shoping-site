
"use client";

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CartItemsList from '@/components/sections/cart/cart-items-list';
import OrderSummary from '@/components/sections/cart/order-summary';
import EmptyCart from '@/components/sections/cart/empty-cart';
import type { Product } from '@/lib/product-data';
import { getAllProducts } from '@/lib/product-data';

// Extend product with cart-specific properties
export type CartItem = Product & {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
};

// Mock initial cart state
const initialCartProducts = getAllProducts().slice(0, 3);
const initialCartItems: CartItem[] = initialCartProducts.map((product, index) => ({
  ...product,
  quantity: index + 1,
  selectedColor: product.variants?.color?.[0]?.value,
  selectedSize: product.variants?.size?.[0],
}));


export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.salePrice || item.price) * item.quantity, 0);

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(0, newQuantity) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(items => items.filter(item => item.id !== productId));
  };
  
  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          {/* SECTION 1: PAGE HEADER */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">My Cart</h1>
            <p className="text-muted-foreground mt-2">
              You have {totalItems} item{totalItems !== 1 ? 's' : ''} ready for checkout.
            </p>
          </div>

          {/* SECTION 2: MAIN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <CartItemsList 
                items={cartItems} 
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <OrderSummary subtotal={subtotal} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
