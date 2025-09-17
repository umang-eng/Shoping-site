import CategoryHeader from '@/components/sections/category-header';
import FilterSortBar from '@/components/sections/filter-sort-bar';
import ProductGrid from '@/components/sections/product-grid';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';

export default function AllCollectionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <CategoryHeader
          categoryName="All Collections"
          description="Explore the full range of our artisanal goods, from handcrafted jewelry to timeless home decor. Every piece is a story of passion and craftsmanship."
        />
        <FilterSortBar />
        <ProductGrid />
        <div className="text-center py-12">
          <Button variant="default" size="lg" className="h-12 px-10 font-bold">
            Show More Products
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
