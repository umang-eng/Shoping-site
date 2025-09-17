
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlayCircle, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import type { ProductImage } from '@/lib/product-data';

type ImageGalleryProps = {
  images: ProductImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const video = images.find(img => img.type === 'video');

  return (
    <div className="grid grid-cols-[80px_1fr] gap-4">
      <div className="flex flex-col gap-3">
        {images.filter(img => img.type !== 'video').map((image, index) => (
          <button
            key={image.id}
            onClick={() => setMainImage(image)}
            className={cn(
              "relative aspect-square rounded-lg overflow-hidden border-2 transition-colors",
              mainImage.id === image.id ? 'border-primary' : 'border-transparent'
            )}
            style={{ animation: `fade-in-up 0.5s ease-out ${0.3 + index * 0.1}s forwards`, opacity: 0}}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 10vw, 80px"
              className="object-cover"
            />
          </button>
        ))}
        {video && (
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent"
                style={{ animation: 'fade-in-up 0.5s ease-out 0.8s forwards', opacity: 0}}
              >
                <Image
                  src={images[0].url} // Use first image as poster
                  alt="Product video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <PlayCircle className="h-10 w-10 text-white" />
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-black border-none">
              <video src={video.url} controls autoPlay className="w-full h-auto rounded-lg" />
            </DialogContent>
          </Dialog>
        )}
      </div>
      
      <div 
        className="relative aspect-square rounded-xl overflow-hidden group"
        style={{ animation: 'fade-in-up 0.5s ease-out 0.2s forwards', opacity: 0 }}
      >
        {isMounted && (
            <Image
              key={mainImage.id} // Re-triggers animation on change
              src={mainImage.url}
              alt={mainImage.alt}
              fill
              className="object-cover animate-fade-in-up"
            />
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <ZoomIn className="h-12 w-12 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
