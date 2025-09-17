
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
import Link from 'next/link';

const artisans = [
  {
    name: 'Kenji Tanaka',
    craft: 'Woodworker',
    location: 'Ahmedabad',
    image: 'https://picsum.photos/seed/artisan1/600/800',
    hint: 'male woodworker portrait'
  },
  {
    name: 'Isabella Rossi',
    craft: 'Ceramicist',
    location: 'Florence',
    image: 'https://picsum.photos/seed/artisan2/600/800',
    hint: 'female potter portrait'
  },
  {
    name: 'Amina Khouri',
    craft: 'Jeweler',
    location: 'Cairo',
    image: 'https://picsum.photos/seed/artisan3/600/800',
    hint: 'female jeweler portrait'
  },
  {
    name: 'Samuel Adebayo',
    craft: 'Weaver',
    location: 'Lagos',
    image: 'https://picsum.photos/seed/artisan4/600/800',
    hint: 'male weaver portrait'
  },
  {
    name: 'Maria Garcia',
    craft: 'Glassblower',
    location: 'Oaxaca',
    image: 'https://picsum.photos/seed/artisan5/600/800',
    hint: 'female glassblower portrait'
  },
];

const CreatorsSpotlight = () => {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center mb-12 text-foreground">
          The Hands Behind the Craft
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {artisans.map((artisan, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-2">
                  <div className="group relative block aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src={artisan.image}
                      alt={`Portrait of ${artisan.name}`}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      data-ai-hint={artisan.hint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                     <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-headline font-semibold text-foreground">{artisan.name}</h3>
                        <p className="text-sm text-foreground/80">{artisan.craft}, {artisan.location}</p>
                        <div className="mt-2 text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                           View their work &rarr;
                        </div>
                     </div>
                  </div>
                </div>
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

export default CreatorsSpotlight;
