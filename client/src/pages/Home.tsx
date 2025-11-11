import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Star, CheckCircle, Users, Award, Leaf } from 'lucide-react';
import { useGsapFadeIn, useGsapParallax, useGsapStagger } from '@/hooks/useGsapAnimation';

import heroImage from '@assets/stock_images/luxury_modern_living_84302017.jpg';
import livingRoomImage from '@assets/stock_images/premium_furniture_sh_16e38513.jpg';
import bedroomImage from '@assets/stock_images/elegant_bedroom_inte_360ca3e2.jpg';
import officeImage from '@assets/stock_images/modern_home_office_w_dfc41675.jpg';
import craftsmanImage from '@assets/stock_images/artisan_craftsman_wo_436b5d09.jpg';
import customer1 from '@assets/stock_images/diverse_happy_custom_08981fae.jpg';
import customer2 from '@assets/stock_images/diverse_happy_custom_0a7a2021.jpg';
import customer3 from '@assets/stock_images/diverse_happy_custom_5f16e119.jpg';
import gallery1 from '@assets/stock_images/luxury_modern_living_faff2fe1.jpg';
import gallery2 from '@assets/stock_images/elegant_bedroom_inte_4c96c9d2.jpg';
import gallery3 from '@assets/stock_images/minimalist_dining_ro_7b8cee4c.jpg';
import gallery4 from '@assets/stock_images/modern_home_office_w_8c3d628e.jpg';
import gallery5 from '@assets/stock_images/cozy_interior_design_cb55fa9c.jpg';
import gallery6 from '@assets/stock_images/premium_furniture_sh_92763293.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroContentRef = useGsapFadeIn({ y: 50, duration: 1, stagger: 0.2 });
  const parallaxRef = useGsapParallax(0.3);
  const collectionsRef = useGsapStagger(0.15);
  const testimonialsRef = useGsapStagger(0.2);
  const statsRef = useGsapFadeIn({ duration: 1 });

  const collections = [
    {
      title: 'Living Room',
      image: livingRoomImage,
      items: '24 pieces',
      path: '/collection/living-room',
    },
    {
      title: 'Bedroom',
      image: bedroomImage,
      items: '18 pieces',
      path: '/collection/bedroom',
    },
    {
      title: 'Office',
      image: officeImage,
      items: '15 pieces',
      path: '/collection/office',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'San Francisco, CA',
      image: customer1,
      quote: 'The quality and craftsmanship of HomeAura furniture exceeded all my expectations. Every piece tells a story of dedication and artistry.',
      item: 'Meridian Sofa Collection',
    },
    {
      name: 'Michael Chen',
      location: 'Austin, TX',
      image: customer2,
      quote: 'Absolutely transformed our living space. The comfort is unmatched and the design seamlessly blends with our modern aesthetic.',
      item: 'Nordic Bed Frame',
    },
    {
      name: 'Emily Rodriguez',
      location: 'Portland, OR',
      image: customer3,
      quote: 'From the moment I walked into their showroom, I knew this was different. The attention to detail and sustainable materials make all the difference.',
      item: 'Executive Desk Series',
    },
  ];

  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background/60 z-10" />
          <img
            src={heroImage}
            alt="Luxury modern living room"
            className="w-full h-full object-cover"
          />
        </div>

        <div ref={heroContentRef} className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6" data-testid="text-hero-title">
            Elevate Every Moment at Home
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            Premium furniture crafted for modern living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections">
              <Button
                size="lg"
                className="bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary-border"
                data-testid="button-explore-collections"
              >
                Explore Collections
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-background/10 hover:bg-background/20 backdrop-blur-sm text-white border-white/30"
                data-testid="button-view-showroom"
              >
                View Showroom
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-collections-title">
              Curated Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our thoughtfully designed collections, each piece handcrafted to bring warmth and elegance to your space.
            </p>
          </div>

          <div ref={collectionsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Link key={index} href={collection.path}>
                <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group" data-testid={`card-collection-${index}`}>
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-serif font-bold mb-2">{collection.title}</h3>
                      <p className="text-white/80 text-sm mb-3">{collection.items}</p>
                      <span className="inline-flex items-center text-sm font-medium">
                        View Collection
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftsmanImage}
                alt="Artisan crafting furniture"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div ref={statsRef}>
              <h2 className="text-4xl font-serif font-bold mb-6" data-testid="text-craftsmanship-title">
                Crafted with Passion
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every piece of HomeAura furniture is a testament to exceptional craftsmanship. Our artisans blend traditional techniques with modern design, creating furniture that stands the test of time.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Master Artisans</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="text-3xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Sustainable Materials</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="text-3xl font-bold text-primary">5K+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button data-testid="button-our-story">
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-testimonials-title">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real customers who transformed their spaces with HomeAura.
            </p>
          </div>

          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6" data-testid={`card-testimonial-${index}`}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-muted-foreground mt-1">{testimonial.item}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-gallery-title">
              Design Inspiration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore beautifully curated spaces that showcase the versatility of our collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-72 overflow-hidden rounded-lg hover-elevate cursor-pointer group"
                data-testid={`gallery-image-${index}`}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bTAtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6" data-testid="text-cta-title">
            Transform Your Space Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit our showroom or schedule a virtual consultation to discover how HomeAura can elevate your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-book-consultation">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/collections">
              <Button size="lg" variant="outline" data-testid="button-browse-catalog">
                Browse Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
