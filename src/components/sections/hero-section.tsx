
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');
  const headline = "Curated with Passion. Designed for Life.";
  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-foreground overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage?.imageUrl || ''}
          alt={heroImage?.description || 'Artisanal pottery creation'}
          fill
          priority
          className="object-cover"
          data-ai-hint="artisanal pottery"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-4 text-balance">
          {isMounted && headline.split(' ').map((word, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ animation: `fade-in-up 0.8s ease-out ${index * 0.15}s forwards`, opacity: 0 }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>
        <p 
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 text-balance"
          style={{ animation: 'fade-in-up 0.8s ease-out 1s forwards', opacity: 0 }}
        >
          Discover artisanal goods, timeless apparel, and unique decor from the world's finest creators.
        </p>
        <div
          style={{ animation: 'fade-in-up 0.8s ease-out 1.2s forwards', opacity: 0 }}
        >
          <Button asChild size="lg" className="text-lg h-14 px-8 font-bold hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <Link href="/collections/all">EXPLORE THE COLLECTION</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
