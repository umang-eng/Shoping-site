
import Link from 'next/link';
import Image from 'next/image';

const collections = [
  {
    name: 'Home & Decor',
    href: '/collections/home-decor',
    imageSrc: 'https://picsum.photos/seed/decor/800/1000',
    imageHint: 'artisanal home decor',
  },
  {
    name: 'Handcrafted Jewelry',
    href: '/collections/jewelry',
    imageSrc: 'https://picsum.photos/seed/jewelry/800/1000',
    imageHint: 'handcrafted jewelry',
  },
  {
    name: 'Sustainable Fashion',
    href: '/collections/apparel',
    imageSrc: 'https://picsum.photos/seed/fashion/800/1000',
    imageHint: 'sustainable fashion',
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center mb-12 text-foreground">
          Explore Our World
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link href={collection.href} key={collection.name} className="group relative block aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={collection.imageSrc}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={collection.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-headline font-semibold text-foreground">{collection.name}</h3>
                <div className="mt-2 text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
