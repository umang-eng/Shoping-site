
"use client";

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Send } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.017 1.99a10 10 0 0 0-4.832 1.413.5.5 0 0 0-.224.634l1.436 4.633a.5.5 0 0 1 .05.28l-1.46 4.922a.5.5 0 0 0 .24.602 10.028 10.028 0 0 0 6.622 2.44.5.5 0 0 0 .5-.482l.002-1.44a.5.5 0 0 1 .29-.465 1.5 1.5 0 0 1 1.838.25.5.5 0 0 0 .6.069 10 10 0 1 0-7.336-13.04Z" />
    <path d="M12 11.5c1.5 0 3-2 3-3.5a2.5 2.5 0 0 0-5 0c0 1.5 1.5 3.5 3 3.5Z" />
  </svg>
);

const Footer = () => {
  const pathname = usePathname();
  const isCheckout = pathname.startsWith('/checkout');

  if (isCheckout) {
    return (
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <div className="space-x-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>&middot;</span>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <span>&middot;</span>
             <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
          <p className="mt-4">&copy; {new Date().getFullYear()} Verve Curations. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-headline font-bold text-foreground mb-4">Verve Curations</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              A celebration of craftsmanship, timeless design, and sustainable living. We bring you a curated selection of artisanal goods from around the globe.
            </p>
          </div>
          
          <div>
            <h4 className="font-headline font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/collections/new-arrivals" className="text-sm text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/collections/all" className="text-sm text-muted-foreground hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="/collections/home-decor" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home & Decor</Link></li>
              <li><Link href="/collections/jewelry" className="text-sm text-muted-foreground hover:text-primary transition-colors">Jewelry</Link></li>
              <li><Link href="/collections/apparel" className="text-sm text-muted-foreground hover:text-primary transition-colors">Apparel</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-headline font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/our-story" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Link href="#" aria-label="Instagram"><Instagram className="text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Pinterest"><PinterestIcon className="text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Facebook"><Facebook className="text-muted-foreground hover:text-primary transition-colors" /></Link>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Join our newsletter for exclusive offers.</p>
            <form className="flex w-full max-w-sm">
              <Input type="email" placeholder="Your email" className="rounded-r-none focus:border-primary focus:ring-primary" />
              <Button type="submit" className="rounded-l-none" aria-label="Subscribe to newsletter">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Verve Curations. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>&middot;</span>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
