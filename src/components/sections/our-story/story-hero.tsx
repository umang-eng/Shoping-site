
"use client";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const StoryHero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://picsum.photos/seed/story-poster/1920/1080"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-balance">
          {isMounted && "Objects with Soul, Stories with Heart.".split(' ').map((word, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ animation: `fade-in-up 0.8s ease-out ${0.5 + index * 0.1}s forwards`, opacity: 0 }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default StoryHero;
