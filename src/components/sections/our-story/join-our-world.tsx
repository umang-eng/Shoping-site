
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const JoinOurWorld = () => {
  return (
    <section className="relative py-32 sm:py-48 w-full flex items-center justify-center text-center text-foreground overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/join/1920/1080"
          alt="Beautifully styled room with artisanal products"
          fill
          className="object-cover"
          data-ai-hint="artisanal products room"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 text-balance">
          Discover a Story of Your Own.
        </h2>
        <div
          style={{ animation: 'fade-in-up 0.8s ease-out 0.4s forwards', opacity: 0 }}
        >
          <Button asChild size="lg" className="text-lg h-14 px-8 font-bold text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <Link href="/collections/all">EXPLORE THE COLLECTION</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinOurWorld;
