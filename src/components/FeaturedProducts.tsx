import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  {
    id: 1,
    name: "Professional Hand Held Metal Detector",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 156,
    image: "https://metaldetectorhouse.com/wp-content/uploads/2024/01/product01.webp",
    badge: "Best Seller",
    features: ["High Sensitivity", "Waterproof", "LED Display"]
  },
  {
    id: 2,
    name: "Industrial Door Frame Metal Detector",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 89,
    image: "https://metaldetectorhouse.com/wp-content/uploads/2024/01/Industrial-Door-Frame-Metal-Detector-1.jpg",
    badge: "Professional",
    features: ["Multi-Zone", "Digital Display", "High Precision"]
  },
  {
    id: 3,
    name: "Multi Zone Door Frame Detector",
    price: 1899,
    originalPrice: 2299,
    rating: 4.9,
    reviews: 67,
    image: "https://metaldetectorhouse.com/wp-content/uploads/2024/01/MULTI-ZONE-DOOR-FRAME-METAL-DETECTOR-2.jpg",
    badge: "Advanced",
    features: ["6 Detection Zones", "Smart Analytics", "Remote Control"]
  },
  {
    id: 4,
    name: "Portable Door Frame Detector",
    price: 899,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 124,
    image: "https://metaldetectorhouse.com/wp-content/uploads/2024/01/product06.webp",
    badge: "Portable",
    features: ["Easy Setup", "Lightweight", "Battery Powered"]
  }
];

export const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Cards animation
      gsap.fromTo(cardsRef.current?.children,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most trusted and advanced metal detection equipment
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group bg-white border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-72 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    {product.badge}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-medium text-base text-foreground mb-2 line-clamp-2 leading-snug">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-3 h-3",
                            i < Math.floor(product.rating) 
                              ? "text-primary fill-primary" 
                              : "text-gray-300"
                          )} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button variant="cart" className="w-full h-9 text-sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="shop" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

// Add cn utility
import { cn } from '@/lib/utils';