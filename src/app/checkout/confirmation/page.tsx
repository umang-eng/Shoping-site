
"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CheckCircle2 } from 'lucide-react';
import CheckoutOrderSummary from '@/components/sections/checkout/checkout-order-summary';
import { getAllProducts } from '@/lib/product-data';
import type { CartItem } from '@/app/cart/page';
import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Mock data
const initialCartProducts = getAllProducts().slice(0, 3);
const initialCartItems: CartItem[] = initialCartProducts.map((product, index) => ({
  ...product,
  quantity: index + 1,
}));
const subtotal = initialCartItems.reduce((sum, item) => sum + (item.salePrice || item.price) * item.quantity, 0);

const ConfirmationContent = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const name = searchParams.get('name');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 sm:py-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="flex justify-center mb-6">
                 <CheckCircle2 className="h-20 w-20 text-green-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}/>
            </div>
            <h1 
                className="text-3xl sm:text-4xl font-bold font-headline text-foreground animate-fade-in-up"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
                Thank You, {name || 'Valued Customer'}!
            </h1>
            <p 
                className="mt-3 text-muted-foreground animate-fade-in-up"
                style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
            >
                Your order is confirmed. You'll receive a confirmation email with your order details shortly.
            </p>
            <div 
                className="mt-6 animate-fade-in-up"
                style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
            >
                <p className="text-sm text-muted-foreground">Your Order Number is</p>
                <p className="text-lg font-bold text-primary">{orderId || '#UNKNOWN'}</p>
            </div>

            <div 
                className="mt-12 text-left animate-fade-in-up"
                style={{ animationDelay: '1s', animationFillMode: 'both' }}
            >
                <CheckoutOrderSummary items={initialCartItems} subtotal={subtotal} />
            </div>

            <div 
                className="mt-10 animate-fade-in-up"
                style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
            >
                <Button asChild size="lg" className="h-12 px-8 font-bold">
                    <Link href="/collections/all">CONTINUE SHOPPING</Link>
                </Button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


const OrderConfirmationPage = () => {
  return (
    <Suspense fallback={<ConfirmationSkeleton />}>
      <ConfirmationContent />
    </Suspense>
  );
};

const ConfirmationSkeleton = () => (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 sm:py-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
            <Skeleton className="h-20 w-20 rounded-full mx-auto mb-6" />
            <Skeleton className="h-10 w-3/4 mx-auto mb-3" />
            <Skeleton className="h-5 w-full max-w-md mx-auto mb-6" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 mx-auto" />
              <Skeleton className="h-6 w-40 mx-auto" />
            </div>
            <div className="mt-12 text-left">
               <div className="rounded-lg border border-border bg-background/50 shadow-sm p-6 space-y-4">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-px w-full" />
                    <div className="flex justify-between">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-24" />
                    </div>
               </div>
            </div>
            <div className="mt-10">
                <Skeleton className="h-12 w-52 mx-auto" />
            </div>
        </div>
      </main>
      <Footer />
    </div>
);


export default OrderConfirmationPage;
