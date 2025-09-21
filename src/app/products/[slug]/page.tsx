
import type { Metadata } from 'next';
import Breadcrumb from '@/components/sections/pdp/breadcrumb';
import ImageGallery from '@/components/sections/pdp/image-gallery';
import ProductInfo from '@/components/sections/pdp/product-info';
import ProductDetails from '@/components/sections/pdp/product-details';
import Recommendations from '@/components/sections/pdp/recommendations';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getProductBySlug, getRelatedProducts, getAllProducts } from '@/lib/product-data';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: 'Product not found',
    };
  }

  return {
    title: `${product.name} | Verve Haven`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  const relatedProducts = getRelatedProducts(product?.category.slug, product?.id);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <h1 className="text-2xl font-headline">Product not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb category={product.category} productName={product.name} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
            <ImageGallery images={product.images} />
            <ProductInfo product={product} />
          </div>
        </div>

        <ProductDetails 
          description={product.description}
          specifications={product.specifications}
        />
        
        <Recommendations products={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
}
