import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Search, Building, Home, Users, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 1,
    name: "Hand Held Detectors",
    description: "Portable and easy-to-use metal detectors for security checks",
    icon: Search,
    productCount: 12,
    color: "from-primary to-accent",
    image: "https://metaldetectorhouse.com/wp-content/uploads/2024/01/product01.webp"
  },
  {
    id: 2,
    name: "Door Frame Detectors",
    description: "Professional walk-through metal detectors for entrances",
    icon: Building,
    productCount: 8,
    color: "from-secondary to-secondary-hover",
    image: "https://metaldetectorhouse.com/wp-content/uploads/2024/01/Industrial-Door-Frame-Metal-Detector-1.jpg"
  },
  {
    id: 3,
    name: "Pole Metal Detectors",
    description: "Advanced detection systems for police and security",
    icon: Shield,
    productCount: 6,
    color: "from-accent to-primary",
    image: "https://metaldetectorhouse.com/wp-content/uploads/2024/01/MULTI-ZONE-DOOR-FRAME-METAL-DETECTOR-2.jpg"
  },
  {
    id: 4,
    name: "Security Solutions",
    description: "Complete security packages for businesses",
    icon: Users,
    productCount: 15,
    color: "from-muted-foreground to-secondary",
    image: "https://metaldetectorhouse.com/wp-content/uploads/2024/01/product04.webp"
  },
  {
    id: 5,
    name: "Portable Systems",
    description: "Mobile and temporary detection solutions",
    icon: Home,
    productCount: 10,
    color: "from-primary to-secondary",
    image: "https://metaldetectorhouse.com/wp-content/uploads/2024/01/product06.webp"
  }
];

export const Categories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
        { opacity: 0, y: 50, rotateY: 15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
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
    <section id="categories" ref={sectionRef} className="py-20 bg-rich-brown">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Product <span className="text-primary">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of professional metal detection equipment
          </p>
        </div>

        {/* First row: 3 cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.slice(0,3).map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`group hover-lift border border-white/10 shadow-soft hover:shadow-strong bg-card/90 backdrop-blur-sm overflow-hidden relative rounded-2xl`}
              >
                <div className="relative h-48 overflow-hidden bg-white">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain"
                  />
                  
                  
                  
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto"
                    onClick={() => {
                      if (category.name === "Hand Held Detectors") {
                        navigate('/handheld-detectors');
                      } else if (category.name === "Door Frame Detectors") {
                        navigate('/doorframe-detectors');
                      } else if (category.name === "Pole Metal Detectors") {
                        navigate('/pole-metal-detectors');
                      }
                    }}
                  >
                    <span className="font-semibold">Shop Category</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            {categories.slice(3,5).map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id} 
                  className={`group hover-lift border border-white/10 shadow-soft hover:shadow-strong bg-card/90 backdrop-blur-sm overflow-hidden relative rounded-2xl`}
                >
                  <div className="relative h-48 overflow-hidden bg-white">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-contain"
                    />
                    
                    
                    
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto"
                      onClick={() => {
                        if (category.name === "Hand Held Detectors") {
                          navigate('/handheld-detectors');
                        } else if (category.name === "Door Frame Detectors") {
                          navigate('/doorframe-detectors');
                        } else if (category.name === "Pole Metal Detectors") {
                          navigate('/pole-metal-detectors');
                        }
                      }}
                    >
                      <span className="font-semibold">Shop Category</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg">
            Browse All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};