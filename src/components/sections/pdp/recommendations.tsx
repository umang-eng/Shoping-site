
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Product } from '@/lib/product-data';
import ProductCard from '@/components/product/product-card-simple';

type RecommendationsProps = {
  products: Product[];
};

const Recommendations = ({ products }: RecommendationsProps) => {
  if (products.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center mb-12 text-foreground">
          Customers Also Loved
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-background hover:bg-primary text-foreground hover:text-primary-foreground" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-background hover:bg-primary text-foreground hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Recommendations;
