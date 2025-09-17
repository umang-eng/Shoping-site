
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/product-data';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {

  return (
    <div className="p-1">
      <Card className="border-none bg-transparent shadow-none group">
        <CardContent className="relative p-0 aspect-square overflow-hidden rounded-xl">
          <Link href={`/products/${product.slug}`}>
            <Image
              src={product.images[0].url}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              data-ai-hint={product.images[0].hint}
            />
          </Link>
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild variant="secondary" className="bg-foreground/80 hover:bg-foreground text-background">
              <Link href={`/products/${product.slug}`}>View Details</Link>
            </Button>
          </div>
        </CardContent>
        <div className="pt-4 text-left">
          <h3 className="font-semibold text-foreground">
            <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                {product.name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{product.artisan}</p>
          <p className="font-semibold text-foreground mt-1">${product.price.toFixed(2)}</p>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
