"use client";

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';

type CategoryHeaderProps = {
  categoryName: string;
  description: string;
};

const CategoryHeader = ({ categoryName, description }: CategoryHeaderProps) => {
  const headerImage = PlaceHolderImages.find(p => p.id === 'collection-1'); // Placeholder for now
  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-24 flex items-center justify-center text-center text-foreground overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={headerImage?.imageUrl || ''}
          alt={categoryName}
          fill
          priority
          className="object-cover"
          data-ai-hint="artisanal pottery tools"
          style={{ transform: 'translateZ(0)' }} // For parallax
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <div 
          className="mb-2 text-sm"
          style={{ animation: 'fade-in-up 0.8s ease-out 0.2s forwards', opacity: 0 }}
        >
          <Link href="/" className="text-primary hover:underline">Home</Link>
          <span className="mx-2 text-muted-foreground">&gt;</span>
          <Link href="/collections" className="text-primary hover:underline">Collections</Link>
          <span className="mx-2 text-muted-foreground">&gt;</span>
          <span className="text-foreground">{categoryName}</span>
        </div>
        <h1 
          className="text-4xl md:text-5xl font-bold font-headline mb-4 text-balance"
          style={{ animation: 'fade-in-up 0.8s ease-out 0.4s forwards', opacity: 0 }}
        >
          {categoryName}
        </h1>
        <p 
          className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto text-balance"
          style={{ animation: 'fade-in-up 0.8s ease-out 0.6s forwards', opacity: 0 }}
        >
          {description}
        </p>
      </div>
    </section>
  );
};

export default CategoryHeader;
