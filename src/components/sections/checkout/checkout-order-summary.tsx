
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from '@/components/ui/separator';
import type { CartItem } from '@/app/cart/page';

type CheckoutOrderSummaryProps = {
  items: CartItem[];
  subtotal: number;
};

const CheckoutOrderSummary = ({ items, subtotal }: CheckoutOrderSummaryProps) => {
  const [shipping] = useState(15.00);
  const [tax] = useState(subtotal * 0.08);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(subtotal + shipping + tax);
  }, [subtotal, shipping, tax]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="sticky top-24 rounded-lg border border-border bg-background/50 shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold font-headline mb-4">Your Order</h2>
      </div>

      <Accordion type="single" collapsible defaultValue="item-1" className="px-6">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger>{totalItems} Items</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4 max-h-64 overflow-y-auto pr-2">
              {items.map(item => (
                <div key={item.id} className="flex items-start gap-4 text-sm">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border">
                    <Image
                      src={item.images[0].url}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-muted-foreground">{item.artisan}</p>
                  </div>
                  <div className="font-medium text-right">
                    ${((item.salePrice || item.price) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="p-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span className="font-medium">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Taxes</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrderSummary;
