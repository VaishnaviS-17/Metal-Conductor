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

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover-lift border-0 shadow-soft hover:shadow-strong bg-card overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-4 h-4",
                            i < Math.floor(product.rating) 
                              ? "text-primary fill-primary" 
                              : "text-muted-foreground"
                          )} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-semibold">
                      Save ${product.originalPrice - product.price}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="cart" className="flex-1">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="buy" size="sm">
                    Buy Now
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