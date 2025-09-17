
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import type { Product } from '@/lib/product-data';

type ProductCardProps = {
  product: Product;
  staggerIndex: number;
};

const ProductCard = ({ product, staggerIndex }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const hoverImage = product.images.find(img => img.type === 'lifestyle') || product.images[1] || product.images[0];

  return (
    <div 
      className="group animate-fade-in-up"
      style={{ animationDelay: `${staggerIndex * 100}ms`, animationFillMode: 'both' }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-sm aspect-square">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            data-ai-hint={product.images[0].hint}
          />
          {hoverImage && (
            <Image
              src={hoverImage.url}
              alt={`${product.name} (context)`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              data-ai-hint={hoverImage.hint}
            />
          )}
        </Link>

        <div className="absolute top-3 right-3">
          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 bg-background/50 backdrop-blur-sm hover:bg-background/70 rounded-full"
            onClick={() => setIsWishlisted(!isWishlisted)}
            aria-label="Add to wishlist"
          >
            <Heart className={cn("h-5 w-5 text-foreground transition-all", isWishlisted && "fill-primary text-primary")} />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 flex gap-2 justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Button asChild variant="secondary" className="bg-foreground/80 hover:bg-foreground text-background flex-1">
            <Link href="#">Add to Cart</Link>
          </Button>
          <Button asChild variant="secondary" className="bg-foreground/80 hover:bg-foreground text-background flex-1">
            <Link href={`/products/${product.slug}`}>Quick View</Link>
          </Button>
        </div>
      </div>
      <div className="pt-4 text-center">
        <h3 className="text-lg font-semibold text-foreground">
           <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">{product.name}</Link>
        </h3>
        <p className="text-sm text-muted-foreground">{product.artisan}</p>
        <p className="font-semibold text-foreground mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
