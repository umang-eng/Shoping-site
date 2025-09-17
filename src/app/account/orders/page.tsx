"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

const orders = [
  {
    id: 'VERVE-12345',
    date: 'March 15, 2024',
    status: 'Delivered',
    total: 240.50,
    items: [
      {
        id: 3,
        name: 'Aura Signet Ring',
        price: 225.00,
        quantity: 1,
        image: 'https://picsum.photos/seed/prod3-main/100/100',
      },
    ]
  },
  {
    id: 'VERVE-12301',
    date: 'February 28, 2024',
    status: 'Shipped',
    total: 90.00,
    items: [
       {
        id: 8,
        name: 'Wooden Salad Bowl',
        price: 90.00,
        quantity: 1,
        image: 'https://picsum.photos/seed/prod8-main/100/100',
      },
    ]
  },
   {
    id: 'VERVE-12256',
    date: 'January 10, 2024',
    status: 'Processing',
    total: 75.00,
    items: [
      {
        id: 1,
        name: 'The Artisan Vase',
        price: 75.00,
        quantity: 1,
        image: 'https://picsum.photos/seed/prod1-main/100/100',
      },
    ]
  },
];

const getStatusVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case 'delivered': return 'default';
    case 'shipped': return 'secondary';
    case 'processing': return 'outline';
    default: return 'outline';
  }
}

export default function MyOrdersPage() {

    if (orders.length === 0) {
        return (
            <div className="text-center py-20 animate-fade-in-up">
                <h1 className="text-3xl font-bold font-headline mb-4">My Orders</h1>
                <p className="text-muted-foreground mb-8">You have not placed any orders yet.</p>
                <Button asChild>
                    <Link href="/collections/all">START SHOPPING</Link>
                </Button>
            </div>
        )
    }


  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold font-headline mb-8">My Orders</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {orders.map(order => (
          <AccordionItem value={order.id} key={order.id} className="border border-border rounded-lg px-6 bg-background/30">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-sm sm:gap-4">
                <div className="text-left">
                    <p className="font-bold text-base text-foreground">Order #{order.id}</p>
                    <p className="text-muted-foreground mt-1 sm:hidden">Placed on {order.date}</p>
                </div>
                <div className="hidden sm:block text-muted-foreground">{order.date}</div>
                <div className="font-semibold text-foreground sm:w-28 text-left sm:text-right mt-2 sm:mt-0">${order.total.toFixed(2)}</div>
                <Badge variant={getStatusVariant(order.status)} className="w-24 justify-center mt-2 sm:mt-0">{order.status}</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="border-t border-border mt-4 pt-6">
                <h3 className="font-semibold mb-4">Items in this order</h3>
                {order.items.map(item => (
                     <div key={item.id} className="flex items-start gap-4 text-sm mb-4">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-grow">
                            <p className="font-medium text-foreground">{item.name}</p>
                            <p className="text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <div className="font-medium text-right">
                            ${(item.price * item.quantity).toFixed(2)}
                        </div>
                    </div>
                ))}
                 <div className="flex justify-end gap-2 mt-6">
                    {order.status === 'Shipped' && <Button variant="secondary">Track Shipment</Button>}
                    <Button variant="outline">View Details</Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
