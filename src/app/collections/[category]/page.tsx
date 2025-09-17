import CategoryHeader from '@/components/sections/category-header';
import FilterSortBar from '@/components/sections/filter-sort-bar';
import ProductGrid from '@/components/sections/product-grid';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

// Capitalize the first letter of each word
const formatCategoryName = (slug: string) => {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = formatCategoryName(params.category);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <CategoryHeader
          categoryName={categoryName}
          description={`Discover unique, ethically sourced items in our ${categoryName} collection, each piece telling a story of its creator.`}
        />
        <FilterSortBar />
        <ProductGrid />
        <div className="text-center py-12">
          <Button variant="default" size="lg" className="h-12 px-10 font-bold">
            {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
            Show More Products
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
