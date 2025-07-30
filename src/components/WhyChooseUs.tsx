import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Zap, HeadphonesIcon, Truck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Shield,
    title: "Trusted Quality",
    description: "15+ years of experience in security solutions with certified, tested equipment"
  },
  {
    icon: Award,
    title: "Industry Leading",
    description: "Award-winning products recognized by security professionals worldwide"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated technical team providing 24/7 customer support and guidance"
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "Latest detection technology with high sensitivity and precision accuracy"
  },
  {
    icon: HeadphonesIcon,
    title: "Professional Service",
    description: "Complete installation, training, and maintenance services included"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick nationwide shipping with secure packaging and tracking"
  }
];

export const WhyChooseUs = () => {
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
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Detector House</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in professional security and detection solutions
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover-lift border-0 shadow-soft hover:shadow-strong bg-card text-center">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};