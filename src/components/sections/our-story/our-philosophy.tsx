
"use client";
import { Search, Handshake, Leaf } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const philosophy = [
  {
    icon: Search,
    title: 'Curated Excellence',
    description: 'Every piece in our collection is hand-selected through a rigorous process, ensuring it meets our high standards of quality, originality, and narrative depth.',
  },
  {
    icon: Handshake,
    title: 'Ethical Partnership',
    description: 'We build direct, fair-trade relationships with every artisan we work with, ensuring they are compensated properly for their skill and dedication.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Future',
    description: 'We prioritize products made from sustainable materials and eco-friendly practices, contributing to a healthier planet and a more conscious lifestyle.',
  },
];

const PhilosophyCard = ({ icon: Icon, title, description, inView, delay }: (typeof philosophy[0] & { inView: boolean, delay: string })) => (
  <div 
    className={cn(
      'text-center transition-all duration-700 ease-out',
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    )}
    style={{ transitionDelay: delay }}
  >
    <div className="flex justify-center mb-4">
      <div className="bg-secondary p-4 rounded-full">
        <Icon className="h-8 w-8 text-primary" />
      </div>
    </div>
    <h3 className="text-xl font-headline font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-balance">{description}</p>
  </div>
);


const OurPhilosophy = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline text-foreground">
                Our Guiding Principles
            </h2>
            <p className="text-muted-foreground mt-2">The foundation upon which Verve Curations is built, ensuring every piece we offer is one we're proud of.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {philosophy.map((item, index) => (
            <PhilosophyCard key={item.title} {...item} inView={inView} delay={`${200 + index * 200}ms`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
