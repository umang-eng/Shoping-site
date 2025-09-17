
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getAllProducts } from '@/lib/product-data';
import ProductCardSimple from '../product/product-card-simple';

const products = getAllProducts().slice(0, 8); // Get first 8 products as new arrivals

const NewArrivals = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            Fresh from the Workshop
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Our latest arrivals, showcasing the newest creations from our community of artisans.</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                <ProductCardSimple product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default NewArrivals;
