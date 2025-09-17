
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';

const EmptyCart = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div 
            className="text-center p-8 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <div className="flex justify-center mb-6">
            <ShoppingBag className="h-24 w-24 text-muted-foreground" strokeWidth={1} />
          </div>
          <h1 
            className="text-3xl font-bold font-headline text-foreground"
            style={{ animation: 'fade-in-up 0.5s ease-out 0.4s forwards', opacity: 0 }}
          >
            Your Cart is Currently Empty
          </h1>
          <p 
            className="mt-3 text-muted-foreground max-w-sm mx-auto"
            style={{ animation: 'fade-in-up 0.5s ease-out 0.6s forwards', opacity: 0 }}
          >
            Discover our collections to find something you'll love.
          </p>
          <div 
            className="mt-8"
            style={{ animation: 'fade-in-up 0.5s ease-out 0.8s forwards', opacity: 0 }}
          >
            <Button asChild size="lg" className="h-12 px-8 font-bold">
              <Link href="/collections/all">EXPLORE OUR PRODUCTS</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmptyCart;
