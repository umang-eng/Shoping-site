
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Package, MapPin, User, LogOut } from 'lucide-react';

const navItems = [
  { href: '/account', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/account/orders', label: 'My Orders', icon: Package },
  { href: '/account/addresses', label: 'My Addresses', icon: MapPin },
  { href: '/account/details', label: 'Account Details', icon: User },
];

export default function AccountNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            href={item.href}
            key={item.label}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-foreground transition-all hover:bg-secondary",
              isActive && 'bg-primary text-primary-foreground font-semibold hover:bg-primary/90'
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        );
      })}
       <div className="border-t border-border mt-2 pt-2">
          <Button variant="ghost" className="w-full justify-start gap-3 px-3">
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
       </div>
    </nav>
  );
}
