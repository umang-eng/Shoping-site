
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingCart, X, Menu, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(3);
  const pathname = usePathname();

  const isCheckout = pathname.startsWith('/checkout');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/collections/all' },
    { name: 'New Arrivals', href: '/collections/new-arrivals' },
    { name: 'Home & Decor', href: '/collections/home-decor' },
    { name: 'Jewelry', href: '/collections/jewelry' },
    { name: 'Our Story', href: '/our-story' },
  ];

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col space-y-4 p-6">
           <Link href="/" className="text-xl font-bold font-headline text-foreground mb-4">
            Verve Curations
          </Link>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-in-out',
        scrolled || isCheckout ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            {!isCheckout && <MobileNav />}
             <Link href="/" className="text-2xl font-bold font-headline text-foreground ml-4 lg:ml-0">
              Verve Curations
            </Link>
          </div>

          {!isCheckout && (
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-foreground transition-colors hover:text-primary group">
                  {link.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
                </Link>
              ))}
            </nav>
          )}

          {isCheckout ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-5 w-5" />
              <span>Secure Checkout</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Link href="/account">
                <Button variant="ghost" size="icon" aria-label="Account">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/cart" className="relative">
                <Button variant="ghost" size="icon" aria-label={`Shopping cart with ${cartItemCount} items`}>
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {isSearchOpen && (
        <div 
          className="absolute top-0 left-0 w-full h-20 bg-background border-b border-border px-6"
          style={{ animation: 'slide-down-fade 0.3s ease-out' }}
        >
          <div className="container mx-auto flex h-full items-center">
            <Search className="h-5 w-5 text-muted-foreground mr-3" />
            <Input 
              placeholder="Search for products, collections..." 
              className="w-full bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
              autoFocus
            />
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
