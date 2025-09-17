"use client";

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { ChevronDown, Filter, SlidersHorizontal, X } from 'lucide-react';
import React, { useState } from 'react';

const FilterSortBar = () => {
  const [sortOption, setSortOption] = useState("newest");
  const [activeFilters, setActiveFilters] = useState([
    { type: 'Material', value: 'Silver' },
    { type: 'Price', value: '$50 - $300' },
  ]);

  const removeFilter = (filterToRemove: { type: string; value: string; }) => {
    setActiveFilters(activeFilters.filter(f => f.value !== filterToRemove.value));
  }

  const FilterPanelContent = () => (
    <>
      <div className="p-6">
        <h4 className="font-semibold mb-4">Material</h4>
        <div className="space-y-2">
          {['Gold', 'Silver', 'Ceramic', 'Linen'].map(material => (
            <div key={material} className="flex items-center">
              <input type="checkbox" id={`mat-${material}`} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" defaultChecked={material === 'Silver'}/>
              <label htmlFor={`mat-${material}`} className="ml-3 text-sm text-foreground">{material}</label>
            </div>
          ))}
        </div>
      </div>
      <DropdownMenuSeparator />
       <div className="p-6">
        <h4 className="font-semibold mb-4">Price Range</h4>
        <Slider defaultValue={[50, 300]} max={1000} step={10} />
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>$50</span>
          <span>$1000</span>
        </div>
      </div>
      <DropdownMenuSeparator />
      <div className="p-6">
        <h4 className="font-semibold mb-4">Artisan</h4>
        <div className="space-y-2">
          {['Studio Pottery', 'Woven Dreams', 'Aura Jewels'].map(artisan => (
            <div key={artisan} className="flex items-center">
              <input type="checkbox" id={`art-${artisan}`} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/>
              <label htmlFor={`art-${artisan}`} className="ml-3 text-sm text-foreground">{artisan}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Material <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {['Gold', 'Silver', 'Ceramic', 'Linen'].map(material => (
                  <DropdownMenuRadioItem key={material} value={material}>{material}</DropdownMenuRadioItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Price <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-4">
                <Slider defaultValue={[50, 300]} max={1000} step={10} />
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Artisan <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                 {['Studio Pottery', 'Woven Dreams', 'Aura Jewels', 'Artisan Hide'].map(artisan => (
                  <DropdownMenuRadioItem key={artisan} value={artisan}>{artisan}</DropdownMenuRadioItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Filter Button */}
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-3/4">
              <SheetHeader>
                <SheetTitle className="flex items-center"><SlidersHorizontal className="mr-2"/> Filters</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <FilterPanelContent />
              </div>
            </SheetContent>
          </Sheet>

          {/* Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Sort By: <span className="font-semibold ml-1 capitalize">{sortOption.replace(':', ': ')}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortOption} onValueChange={setSortOption}>
                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="popular">Most Popular</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price:low-high">Price: Low to High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price:high-low">Price: High to Low</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {activeFilters.length > 0 && (
          <div className="pt-4 flex flex-wrap gap-2">
            {activeFilters.map(filter => (
              <div key={filter.value} className="flex items-center bg-secondary text-secondary-foreground text-sm rounded-full pl-3 pr-1 py-1">
                <span>{filter.type}: {filter.value}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6 ml-1 rounded-full"
                  onClick={() => removeFilter(filter)}
                  aria-label={`Remove filter ${filter.value}`}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border-b border-border" />
    </div>
  );
};

export default FilterSortBar;
