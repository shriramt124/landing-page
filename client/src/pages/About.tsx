import { Card } from '@/components/ui/card';
import { Leaf, Users, Award, Heart } from 'lucide-react';
import { useGsapFadeIn, useGsapStagger } from '@/hooks/useGsapAnimation';

import craftsman1 from '@assets/stock_images/artisan_craftsman_wo_436b5d09.jpg';
import craftsman2 from '@assets/stock_images/artisan_craftsman_wo_371d5d26.jpg';
import workshop from '@assets/stock_images/artisan_craftsman_wo_53074a44.jpg';

export default function About() {
  const valuesRef = useGsapStagger(0.2);
  const storyRef = useGsapFadeIn({ y: 40, duration: 1 });

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source only sustainable materials and partner with eco-conscious suppliers to minimize our environmental impact.',
    },
    {
      icon: Users,
      title: 'Craftsmanship',
      description: 'Our master artisans bring decades of experience, ensuring every piece meets the highest standards of quality.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never compromise on quality. Each piece is inspected and perfected before it reaches your home.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide exceptional service from selection to delivery and beyond.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" data-testid="text-about-title">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, HomeAura has been crafting premium furniture that transforms houses into homes.
          </p>
        </div>

        <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <img
              src={craftsman1}
              alt="Master craftsman at work"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              A Legacy of Quality
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              HomeAura was born from a simple belief: that furniture should be more than just functional. It should inspire, comfort, and reflect the unique personality of those who live with it.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              What started as a small workshop has grown into a celebrated furniture brand, but our commitment to handcrafted excellence remains unchanged. Every piece we create is a labor of love, combining traditional techniques with contemporary design.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we're proud to serve thousands of customers worldwide, helping them create spaces that truly feel like home.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Values</h2>
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center" data-testid={`card-value-${index}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <img
            src={craftsman2}
            alt="Craftsman working on furniture"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
          <img
            src={workshop}
            alt="Our workshop"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>

        <div className="bg-primary/5 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Visit Our Showroom
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Experience the quality and craftsmanship of HomeAura furniture in person. Our design consultants are ready to help you find the perfect pieces for your home.
          </p>
          <p className="text-muted-foreground">
            <strong>Location:</strong> INDORE<br />
            <strong>Hours:</strong> Monday - Saturday, 10am - 6pm
          </p>
        </div>
      </div>
    </div>
  );
}
