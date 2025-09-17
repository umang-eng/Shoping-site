
export type ProductImage = {
  id: string;
  url: string;
  alt: string;
  type: 'main' | 'lifestyle' | 'detail' | 'video';
  hint: string;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  artisan: string;
  price: number;
  salePrice?: number;
  shortDescription: string;
  description: string;
  category: {
    name: string;
    slug: string;
  };
  images: ProductImage[];
  variants?: {
    color?: { value: string; hex: string }[];
    size?: string[];
  };
  specifications: { name: string; value: string }[];
};

const products: Product[] = [
  {
    id: 1,
    slug: 'ceramic-vase',
    name: 'The Artisan Vase',
    artisan: 'Studio Pottery',
    price: 75,
    category: { name: 'Home & Decor', slug: 'home-decor' },
    shortDescription: 'A minimalist ceramic vase, hand-thrown by master potters. Its clean lines and matte finish bring a touch of serene elegance to any space.',
    description: 'Crafted with passion in the heart of the city, this vase is more than just a vessel for flowers; it\'s a piece of art. Each vase is individually thrown and glazed, ensuring no two are exactly alike. The minimalist design is inspired by Scandinavian principles, focusing on form, function, and a deep respect for the material. Its subtle texture and neutral tone complement any decor style, from modern to rustic.',
    images: [
      { id: 'img1-1', url: 'https://picsum.photos/seed/prod1-main/800/800', alt: 'Minimalist ceramic vase on white background', type: 'main', hint: 'minimalist ceramic vase' },
      { id: 'img1-2', url: 'https://picsum.photos/seed/prod1-life/800/800', alt: 'Ceramic vase with flowers on a wooden table', type: 'lifestyle', hint: 'vase on table' },
      { id: 'img1-3', url: 'https://picsum.photos/seed/prod1-detail/800/800', alt: 'Close up of the ceramic vase texture', type: 'detail', hint: 'ceramic texture' },
      { id: 'img1-4', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', alt: 'Video of the vase being made', type: 'video', hint: 'pottery making' },
    ],
    specifications: [
        { name: 'Dimensions', value: '8" H x 4" W' },
        { name: 'Materials', value: 'Stoneware Clay, Matte Glaze' },
        { name: 'Origin', value: 'Handmade in USA' },
    ]
  },
  {
    id: 2,
    slug: 'linen-throw-blanket',
    name: 'Woven Linen Throw',
    artisan: 'Woven Dreams',
    price: 120,
    category: { name: 'Home & Decor', slug: 'home-decor' },
    shortDescription: 'Experience ultimate comfort with our 100% pure linen throw blanket. Breathable, soft, and effortlessly stylish, it\'s perfect for any season.',
    description: 'Our Woven Linen Throw is a testament to timeless comfort and sustainable luxury. Made from the finest European flax, this blanket is pre-washed for incredible softness that only gets better with time. Its natural texture and lightweight feel make it the perfect companion for a cozy evening on the sofa or a stylish addition to your bedding.',
    images: [
      { id: 'img2-1', url: 'https://picsum.photos/seed/prod2-main/800/800', alt: 'Linen throw blanket folded neatly', type: 'main', hint: 'cozy linen blanket' },
      { id: 'img2-2', url: 'https://picsum.photos/seed/prod2-life/800/800', alt: 'Linen throw draped over a modern sofa', type: 'lifestyle', hint: 'blanket on sofa' },
    ],
     specifications: [
        { name: 'Dimensions', value: '50" x 60"' },
        { name: 'Materials', value: '100% European Linen' },
        { name: 'Care', value: 'Machine wash cold, tumble dry low' },
    ]
  },
  {
    id: 3,
    slug: 'gold-signet-ring',
    name: 'Aura Signet Ring',
    artisan: 'Aura Jewels',
    price: 250,
    salePrice: 225,
    category: { name: 'Jewelry', slug: 'jewelry' },
    shortDescription: 'A classic signet ring reimagined for the modern woman. Crafted from 14k gold vermeil, it\'s a timeless piece for everyday elegance.',
    description: 'The Aura Signet Ring is a symbol of identity and style. With a smooth, polished surface ready for engraving or to be worn as is, this ring blends traditional significance with contemporary design. Its comfortable, substantial feel makes it a durable and cherished piece for years to come.',
    images: [
      { id: 'img3-1', url: 'https://picsum.photos/seed/prod3-main/800/800', alt: 'Gold signet ring on a white background', type: 'main', hint: 'gold ring' },
      { id: 'img3-2', url: 'https://picsum.photos/seed/prod3-life/800/800', alt: 'Hand wearing the gold signet ring', type: 'lifestyle', hint: 'gold ring hand' },
      { id: 'img3-3', url: 'https://picsum.photos/seed/prod3-detail/800/800', alt: 'Detail shot of the gold ring surface', type: 'detail', hint: 'gold texture' },
    ],
    variants: {
        size: ['6', '7', '8'],
    },
    specifications: [
        { name: 'Material', value: '14k Gold Vermeil on Sterling Silver' },
        { name: 'Finish', value: 'High Polish' },
    ]
  },
  {
    id: 4,
    slug: 'leather-tote-bag',
    name: 'Artisan Leather Tote',
    artisan: 'Artisan Hide',
    price: 180,
    category: { name: 'Apparel', slug: 'apparel' },
    shortDescription: 'The perfect carry-all tote, crafted from full-grain Italian leather that patinas beautifully over time. Both functional and sophisticated.',
    description: 'Designed for the modern individual on the go, the Artisan Leather Tote combines minimalist design with exceptional craftsmanship. Its spacious, unlined interior is large enough to hold a laptop and daily essentials, while the vegetable-tanned leather develops a unique, personal character with every use.',
    images: [
      { id: 'img4-1', url: 'https://picsum.photos/seed/prod4-main/800/800', alt: 'Brown leather tote bag', type: 'main', hint: 'leather bag' },
      { id: 'img4-2', url: 'https://picsum.photos/seed/prod4-life/800/800', alt: 'Woman carrying the leather tote bag', type: 'lifestyle', hint: 'woman leather bag' },
    ],
    variants: {
      color: [
        { value: 'Cognac', hex: '#9A6A44' },
        { value: 'Black', hex: '#000000' },
      ],
    },
    specifications: [
        { name: 'Dimensions', value: '15" W x 12" H x 5" D' },
        { name: 'Material', value: 'Full-Grain Italian Leather' },
    ]
  },
  {
    id: 5,
    name: 'Hand-poured Candle',
    slug: 'hand-poured-candle',
    artisan: 'Scent & Co.',
    price: 45,
    category: { name: 'Home & Decor', slug: 'home-decor' },
    shortDescription: 'An aromatic journey in a jar. Our hand-poured soy wax candles feature complex scents derived from natural essential oils.',
    description: 'Transform your home into a sanctuary with our hand-poured candles. Made with 100% natural soy wax and lead-free cotton wicks for a clean, long-lasting burn. The "Sandalwood & Amber" scent is a warm, woody, and inviting fragrance that creates a calming atmosphere.',
    images: [
        { id: 'img5-1', url: 'https://picsum.photos/seed/prod5-main/800/800', alt: 'Amber jar candle', type: 'main', hint: 'amber jar candle' },
        { id: 'img5-2', url: 'https://picsum.photos/seed/prod5-life/800/800', alt: 'Candle burning on a coffee table', type: 'lifestyle', hint: 'burning candle' },
    ],
    specifications: [
        { name: 'Burn Time', value: 'Approx. 50 hours' },
        { name: 'Wax', value: '100% Natural Soy Wax' },
        { name: 'Size', value: '8 oz' },
    ]
  },
  {
    id: 6,
    name: 'Abstract Wall Art',
    slug: 'abstract-wall-art',
    artisan: 'Canvas Creations',
    price: 320,
    category: { name: 'Home & Decor', slug: 'home-decor' },
    shortDescription: 'A vibrant and expressive piece of original abstract art. Mixed media on canvas, this piece adds a dynamic focal point to any room.',
    description: 'Titled "Urban Sunrise," this piece captures the energy of a city awakening. Using a combination of acrylics, inks, and collage, the artist creates a multi-layered composition full of texture and movement. The gallery-wrapped canvas is ready to hang and make a statement.',
    images: [
        { id: 'img6-1', url: 'https://picsum.photos/seed/prod6-main/800/800', alt: 'Abstract painting with bold colors', type: 'main', hint: 'abstract painting' },
        { id: 'img6-2', url: 'https://picsum.photos/seed/prod6-life/800/800', alt: 'Abstract art hanging in a modern living room', type: 'lifestyle', hint: 'art in room' },
    ],
    specifications: [
        { name: 'Dimensions', value: '24" x 36"' },
        { name: 'Medium', value: 'Mixed Media on Canvas' },
        { name: 'Frame', value: 'Unframed, Gallery Wrapped' },
    ]
  },
  {
    id: 7,
    name: 'Silver Hoops',
    slug: 'silver-hoops',
    artisan: 'Aura Jewels',
    price: 110,
    category: { name: 'Jewelry', slug: 'jewelry' },
    shortDescription: 'Effortlessly chic and lightweight, these sterling silver hoops are the perfect everyday accessory. A modern take on a timeless classic.',
    description: 'Our Silver Hoops are designed to be your go-to earrings. Crafted from polished sterling silver, they feature a secure latch-back closure and a hollow, lightweight construction for all-day comfort. Their versatile size makes them suitable for both casual and formal occasions.',
    images: [
        { id: 'img7-1', url: 'https://picsum.photos/seed/prod7-main/800/800', alt: 'A pair of silver hoop earrings', type: 'main', hint: 'silver hoop earrings' },
        { id: 'img7-2', url: 'https://picsum.photos/seed/prod7-life/800/800', alt: 'Model wearing silver hoop earrings', type: 'lifestyle', hint: 'earrings model' },
    ],
    specifications: [
        { name: 'Diameter', value: '1.5 inches' },
        { name: 'Material', value: '925 Sterling Silver' },
        { name: 'Closure', value: 'Latch back' },
    ]
  },
  {
    id: 8,
    name: 'Wooden Salad Bowl',
    slug: 'wooden-salad-bowl',
    artisan: 'Forest & Forge',
    price: 90,
    category: { name: 'Home & Decor', slug: 'home-decor' },
    shortDescription: 'Serve your salads in style with this large, hand-carved acacia wood bowl. Each bowl showcases the unique grain of the wood.',
    description: 'Bring the beauty of nature to your dining table. This salad bowl is carved from a single piece of sustainable acacia wood, known for its durability and rich, warm tones. The food-safe finish highlights the natural wood grain, making each bowl a one-of-a-kind piece for entertaining.',
    images: [
        { id: 'img8-1', url: 'https://picsum.photos/seed/prod8-main/800/800', alt: 'Large wooden salad bowl', type: 'main', hint: 'wooden salad bowl' },
        { id: 'img8-2', url: 'https://picsum.photos/seed/prod8-life/800/800', alt: 'Salad bowl filled with fresh salad on a dining table', type: 'lifestyle', hint: 'salad bowl table' },
    ],
    specifications: [
        { name: 'Dimensions', value: '12" Diameter x 4" H' },
        { name: 'Material', value: 'Acacia Wood' },
        { name: 'Care', value: 'Hand wash only' },
    ]
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === 'all') return products;
  return products.filter(p => p.category.slug === categorySlug);
}

export function getRelatedProducts(categorySlug: string | undefined, excludeId: number | undefined): Product[] {
  if (!categorySlug || !excludeId) return [];
  return products.filter(p => p.category.slug === categorySlug && p.id !== excludeId).slice(0, 4);
}
