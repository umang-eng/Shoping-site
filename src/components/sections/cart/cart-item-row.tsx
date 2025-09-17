
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type CartItem } from '@/app/cart/page';
import { cn } from '@/lib/utils';

type CartItemRowProps = {
  item: CartItem;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
};

const CartItemRow = ({ item, onUpdateQuantity, onRemoveItem }: CartItemRowProps) => {
  const [totalPrice, setTotalPrice] = useState((item.salePrice || item.price) * item.quantity);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const newTotalPrice = (item.salePrice || item.price) * item.quantity;
    if (newTotalPrice !== totalPrice) {
      setTotalPrice(newTotalPrice);
      setHighlight(true);
      const timer = setTimeout(() => setHighlight(false), 300);
      return () => clearTimeout(timer);
    }
  }, [item.quantity, item.price, item.salePrice, totalPrice]);

  const handleQuantityChange = (adjustment: number) => {
    onUpdateQuantity(item.id, item.quantity + adjustment);
  };
  
  return (
    <div className="flex items-center gap-4 sm:gap-6 py-6 border-b border-border">
      <div className="relative h-24 w-24 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={item.images[0].url}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <Link href={`/products/${item.slug}`} className="font-semibold text-foreground hover:text-primary transition-colors text-base sm:text-lg">
            {item.name}
          </Link>
          <div className="text-sm text-muted-foreground mt-1">
            {item.selectedColor && <p>Color: {item.selectedColor}</p>}
            {item.selectedSize && <p>Size: {item.selectedSize}</p>}
            <p className="sm:hidden mt-1">
              ${(item.salePrice || item.price).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:items-end justify-between gap-2">
           <div className="flex items-center border border-input rounded-md w-fit">
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="h-9 w-9">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="h-9 w-9">
                <Plus className="h-4 w-4" />
              </Button>
           </div>
           <p 
            className={cn(
              "font-semibold text-foreground text-base transition-all duration-300",
              highlight && "text-primary scale-110"
            )}
            style={{ transitionProperty: 'color, transform' }}
            >
             ${totalPrice.toFixed(2)}
           </p>
        </div>
      </div>

      <div className="ml-auto">
        <Button variant="ghost" size="icon" onClick={() => onRemoveItem(item.id)} aria-label={`Remove ${item.name} from cart`}>
          <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
        </Button>
      </div>
    </div>
  );
};

export default CartItemRow;
