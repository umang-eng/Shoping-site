
"use client";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const OurMission = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="bg-background py-20 sm:py-32">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 
          className={cn(
            'text-sm font-semibold tracking-widest uppercase text-muted-foreground transition-all duration-700 ease-out',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          Our Purpose
        </h2>
        <p 
          className={cn(
            'mt-6 font-headline text-3xl sm:text-4xl font-medium text-foreground text-balance transition-all duration-700 ease-out',
             inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          To be the definitive bridge between passionate artisans and those who seek objects with meaning, celebrating timeless craft in a modern world.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
