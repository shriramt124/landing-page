import { useRoute } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

import livingRoom1 from '@assets/stock_images/premium_furniture_sh_16e38513.jpg';
import livingRoom2 from '@assets/stock_images/luxury_modern_living_84302017.jpg';
import livingRoom3 from '@assets/stock_images/luxury_modern_living_faff2fe1.jpg';
import livingRoom4 from '@assets/stock_images/luxury_modern_living_ace75d0d.jpg';
import bedroom1 from '@assets/stock_images/elegant_bedroom_inte_360ca3e2.jpg';
import bedroom2 from '@assets/stock_images/elegant_bedroom_inte_4c96c9d2.jpg';
import bedroom3 from '@assets/stock_images/elegant_bedroom_inte_5242a996.jpg';
import bedroom4 from '@assets/stock_images/elegant_bedroom_inte_291c3a57.jpg';
import office1 from '@assets/stock_images/modern_home_office_w_dfc41675.jpg';
import office2 from '@assets/stock_images/modern_home_office_w_8c3d628e.jpg';
import office3 from '@assets/stock_images/modern_home_office_w_3a8b7895.jpg';
import office4 from '@assets/stock_images/modern_home_office_w_d72b9f8a.jpg';

export default function CollectionDetail() {
  const [, params] = useRoute('/collection/:id');
  const collectionId = params?.id || 'living-room';
  const productsRef = useGsapStagger(0.15);

  const collections: Record<string, any> = {
    'living-room': {
      title: 'Living Room Collection',
      description: 'Discover our curated selection of living room furniture that combines comfort with contemporary design. Each piece is crafted to be the centerpiece of your home.',
      hero: livingRoom1,
      products: [
        { image: livingRoom1, name: 'Meridian Sofa', price: '$2,499', category: 'Sofas' },
        { image: livingRoom2, name: 'Cloud Sectional', price: '$3,299', category: 'Sofas' },
        { image: livingRoom3, name: 'Aria Coffee Table', price: '$899', category: 'Tables' },
        { image: livingRoom4, name: 'Luxe Armchair', price: '$1,299', category: 'Chairs' },
      ],
    },
    'bedroom': {
      title: 'Bedroom Collection',
      description: 'Transform your bedroom into a serene sanctuary with our thoughtfully designed furniture. Quality craftsmanship meets timeless elegance.',
      hero: bedroom1,
      products: [
        { image: bedroom1, name: 'Nordic Bed Frame', price: '$1,899', category: 'Beds' },
        { image: bedroom2, name: 'Haven Platform Bed', price: '$2,199', category: 'Beds' },
        { image: bedroom3, name: 'Serenity Nightstand', price: '$599', category: 'Storage' },
        { image: bedroom4, name: 'Luna Dresser', price: '$1,499', category: 'Storage' },
      ],
    },
    'office': {
      title: 'Office Collection',
      description: 'Create a productive and inspiring workspace with our office furniture collection. Designed for comfort, functionality, and style.',
      hero: office1,
      products: [
        { image: office1, name: 'Executive Desk', price: '$1,799', category: 'Desks' },
        { image: office2, name: 'Studio Workstation', price: '$1,299', category: 'Desks' },
        { image: office3, name: 'Ergonomic Chair', price: '$799', category: 'Chairs' },
        { image: office4, name: 'Modern Bookshelf', price: '$999', category: 'Storage' },
      ],
    },
  };

  const collection = collections[collectionId] || collections['living-room'];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/collections">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Collections
          </Button>
        </Link>

        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <img
            src={collection.hero}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-5xl font-serif font-bold mb-4" data-testid="text-collection-title">
              {collection.title}
            </h1>
            <p className="text-lg text-white/90 max-w-3xl">{collection.description}</p>
          </div>
        </div>

        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collection.products.map((product: any, index: number) => (
            <Card key={index} className="overflow-hidden hover-elevate cursor-pointer group" data-testid={`card-product-${index}`}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-primary font-bold">{product.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
