
import ProductCard from '@/components/product/product-card';
import { getAllProducts } from '@/lib/product-data';

const products = getAllProducts();

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} staggerIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
