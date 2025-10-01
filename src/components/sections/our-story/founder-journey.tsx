
"use client";
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const FounderJourney = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-secondary/30 py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              'relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ease-out',
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <Image
              src="https://picsum.photos/seed/founder/800/1000"
              alt="Founder of Verve Curations"
              fill
              className="object-cover"
              data-ai-hint="portrait woman"
            />
          </div>
          <div 
            className={cn(
              'transition-all duration-1000 ease-out',
               inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            )}
             style={{ transitionDelay: '400ms' }}
          >
            <h3 className="font-headline text-3xl font-semibold text-foreground mb-4">It Started with a Single Piece.</h3>
            <div className="prose prose-invert max-w-none text-foreground/80 space-y-4">
              <p>
                Our story isn&apos;t one of boardrooms and business plans. It began in a dusty market stall, halfway across the world, with a single hand-carved wooden bowl. It was imperfect, yet flawless. It held the weight of the wood, the mark of the maker&apos;s tool, and the soul of a tradition passed down through generations.
              </p>
              <p>
                That single piece sparked a journey—a quest to find more objects that tell a story. Verve Curations was born from a desire to connect these beautiful, authentic creations with people who appreciate them. We travel the globe, not as tourists, but as story-seekers, building real relationships with the artisans who pour their hearts into their work.
              </p>
               <p>
                We believe that the items we bring into our homes should be more than just things; they should be conversation starters, daily reminders of beauty, and a direct link to the hands that made them. This is more than a store; it&apos;s a curated gallery of global craftsmanship, brought right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
