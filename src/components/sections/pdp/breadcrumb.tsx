
"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

type BreadcrumbProps = {
  category: {
    name: string;
    slug: string;
  };
  productName: string;
};

const Breadcrumb = ({ category, productName }: BreadcrumbProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div 
      className="text-sm text-foreground/80 animate-fade-in-up"
      style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
    >
      <Link href="/" className="text-primary hover:underline">Home</Link>
      <span className="mx-2">&gt;</span>
      <Link href={`/collections/${category.slug}`} className="text-primary hover:underline">{category.name}</Link>
      <span className="mx-2">&gt;</span>
      <span className="text-foreground">{productName}</span>
    </div>
  );
};

export default Breadcrumb;
