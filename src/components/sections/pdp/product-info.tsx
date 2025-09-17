
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/product-data';

type ProductInfoProps = {
  product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.variants?.color?.[0]?.value);
  const [selectedSize, setSelectedSize] = useState(product.variants?.size?.[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantity = (adjustment: number) => {
    setQuantity(prev => Math.max(1, prev + adjustment));
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 
        className="text-3xl md:text-4xl font-bold font-headline text-balance"
        style={{ animation: `fade-in-up 0.5s ease-out 0.4s forwards`, opacity: 0 }}
      >
        {product.name}
      </h1>

      <div 
        className="text-3xl font-semibold"
        style={{ animation: `fade-in-up 0.5s ease-out 0.5s forwards`, opacity: 0 }}
      >
        {product.salePrice ? (
          <div className="flex items-center gap-4">
            <span className="text-primary">${product.salePrice.toFixed(2)}</span>
            <span className="text-muted-foreground line-through">${product.price.toFixed(2)}</span>
          </div>
        ) : (
          <span>${product.price.toFixed(2)}</span>
        )}
      </div>

      <p 
        className="text-foreground/80 text-balance"
        style={{ animation: `fade-in-up 0.5s ease-out 0.6s forwards`, opacity: 0 }}
      >
        {product.shortDescription}
      </p>

      <div 
        className="space-y-6"
        style={{ animation: `fade-in-up 0.5s ease-out 0.7s forwards`, opacity: 0 }}
      >
        {/* Color Variants */}
        {product.variants?.color && (
          <div>
            <h3 className="text-sm font-medium mb-2">Color: <span className="font-bold">{selectedColor}</span></h3>
            <div className="flex gap-2">
              {product.variants.color.map(color => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={cn(
                    "h-8 w-8 rounded-full border-2 transition-all",
                    selectedColor === color.value ? 'border-primary scale-110' : 'border-border'
                  )}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select color ${color.value}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Size Variants */}
        {product.variants?.size && (
           <div>
            <h3 className="text-sm font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.variants.size.map(size => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Selector */}
        <div>
           <h3 className="text-sm font-medium mb-2">Quantity</h3>
           <div className="flex items-center border border-input rounded-md w-fit">
              <Button variant="ghost" size="icon" onClick={() => handleQuantity(-1)} className="h-10 w-10">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center font-bold">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => handleQuantity(1)} className="h-10 w-10">
                <Plus className="h-4 w-4" />
              </Button>
           </div>
        </div>

      </div>

      <div 
        className="flex flex-col gap-4 mt-6"
        style={{ animation: `fade-in-up 0.5s ease-out 0.8s forwards`, opacity: 0 }}
      >
        <Button size="lg" className="w-full h-14 text-lg font-bold">ADD TO CART</Button>
        <Button
          variant="outline"
          className="w-full h-12"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={cn("mr-2 h-5 w-5 transition-all", isWishlisted && "fill-primary text-primary")} />
          {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
