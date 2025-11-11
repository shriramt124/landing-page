import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

import livingRoomImage from '@assets/stock_images/premium_furniture_sh_16e38513.jpg';
import bedroomImage from '@assets/stock_images/elegant_bedroom_inte_360ca3e2.jpg';
import officeImage from '@assets/stock_images/modern_home_office_w_dfc41675.jpg';
import diningImage from '@assets/stock_images/minimalist_dining_ro_7b8cee4c.jpg';

export default function Collections() {
  const collectionsRef = useGsapStagger(0.2);

  const collections = [
    {
      title: 'Living Room',
      description: 'Comfortable and elegant seating solutions for your living space',
      image: livingRoomImage,
      items: '24 pieces',
      path: '/collection/living-room',
    },
    {
      title: 'Bedroom',
      description: 'Serene and luxurious bedroom furniture for restful nights',
      image: bedroomImage,
      items: '18 pieces',
      path: '/collection/bedroom',
    },
    {
      title: 'Office',
      description: 'Functional and stylish furniture for productive workspaces',
      image: officeImage,
      items: '15 pieces',
      path: '/collection/office',
    },
    {
      title: 'Dining',
      description: 'Elegant dining sets for memorable gatherings',
      image: diningImage,
      items: '12 pieces',
      path: '/collection/dining',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" data-testid="text-collections-title">
            Our Collections
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated furniture collections, each designed to bring warmth, elegance, and functionality to every room in your home.
          </p>
        </div>

        <div ref={collectionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Link key={index} href={collection.path}>
              <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group" data-testid={`card-collection-${index}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-serif font-bold mb-3">{collection.title}</h3>
                    <p className="text-muted-foreground mb-4">{collection.description}</p>
                    <p className="text-sm text-muted-foreground mb-6">{collection.items}</p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                      View Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
