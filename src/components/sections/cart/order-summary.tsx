
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type OrderSummaryProps = {
  subtotal: number;
};

const OrderSummary = ({ subtotal }: OrderSummaryProps) => {
  const [shipping, setShipping] = useState(15.00);
  const [tax, setTax] = useState(0.00);
  const [total, setTotal] = useState(0);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const newTax = subtotal * 0.08; // 8% tax rate
    const newTotal = subtotal + shipping + newTax;
    setTax(newTax);

    if (newTotal !== total) {
      setTotal(newTotal);
      setHighlight(true);
      const timer = setTimeout(() => setHighlight(false), 300);
      return () => clearTimeout(timer);
    }
  }, [subtotal, shipping, total]);
  

  return (
    <div className="sticky top-24 rounded-lg border border-border bg-background/50 shadow-sm p-6">
      <h2 className="text-xl font-semibold font-headline mb-4">Order Summary</h2>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Shipping</span>
          <span className="font-medium">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Grand Total</span>
        <span
          className={`transition-all duration-300 ${highlight ? 'text-primary scale-105' : ''}`}
        >
          ${total.toFixed(2)}
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-2">
            <Input type="text" placeholder="Enter Discount Code" className="bg-background" />
            <Button variant="outline">Apply</Button>
        </div>
        <Button asChild size="lg" className="w-full h-12 text-base font-bold">
          <Link href="/checkout">PROCEED TO CHECKOUT</Link>
        </Button>
        <div className="text-center">
          <Link href="/collections/all" className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
