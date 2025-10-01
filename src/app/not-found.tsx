import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const CompassIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" className="text-muted-foreground/20" />
    <polygon points="12 2, 12 12, 16 10, 14 14, 10 16, 12 12" className="fill-primary stroke-primary">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="15s"
            repeatCount="indefinite"
        />
    </polygon>
    <path d="m12 12-4 2 2 4 2-4" className="fill-foreground/50 stroke-foreground/50" />
    <line x1="12" y1="22" x2="12" y2="20" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="22" y1="12" x2="20" y2="12" />
    <line x1="2" y1="12" x2="4" y2="12" />
  </svg>
);


export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div className="relative flex flex-col items-center">
            <span 
                className="absolute -z-10 text-[10rem] md:text-[15rem] font-serif font-bold text-muted-foreground/10 select-none"
                style={{ animation: 'fade-in-up 0.8s ease-out forwards', opacity: 0 }}
            >
                404
            </span>

            <div 
                className="mb-8" 
                style={{ animation: 'fade-in-up 0.8s ease-out 0.2s forwards', opacity: 0 }}
            >
                <CompassIcon className="text-muted-foreground" />
            </div>
            
            <h1 
                className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-4 text-balance"
                style={{ animation: 'fade-in-up 0.8s ease-out 0.4s forwards', opacity: 0 }}
            >
                A Beautiful Detour
            </h1>

            <p 
                className="max-w-md text-foreground/80 mb-8"
                style={{ animation: 'fade-in-up 0.8s ease-out 0.6s forwards', opacity: 0 }}
            >
                It seems the piece you were looking for isn&apos;t here. Perhaps it&apos;s a unique creation that hasn&apos;t been discovered yet. Let&apos;s guide you back to our curated collection.
            </p>

            <div 
                className="w-full max-w-sm mb-8"
                style={{ animation: 'fade-in-up 0.8s ease-out 0.8s forwards', opacity: 0 }}
            >
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        type="search" 
                        placeholder="Search for a specific creation..." 
                        className="pl-10 h-12 text-base"
                    />
                </div>
            </div>

            <div 
                className="flex flex-col sm:flex-row items-center gap-4"
                style={{ animation: 'fade-in-up 0.8s ease-out 1s forwards', opacity: 0 }}
            >
                <Button asChild size="lg" className="h-12 px-8 font-bold w-full sm:w-auto">
                    <Link href="/">Return to the Homepage</Link>
                </Button>
                <div className="flex gap-4 text-sm">
                    <Link href="/collections/new-arrivals" className="text-primary hover:underline">Explore New Arrivals</Link>
                    <span className="text-muted-foreground/50">|</span>
                    <Link href="/collections/all" className="text-primary hover:underline">Browse All Collections</Link>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}