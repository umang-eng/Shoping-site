import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import FeaturedCollections from '@/components/sections/featured-collections';
import NewArrivals from '@/components/sections/new-arrivals';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCollections />
        <NewArrivals />
      </main>
      <Footer />
    </div>
  );
}
