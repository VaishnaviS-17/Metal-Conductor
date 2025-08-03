import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, Clock, Shield, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const supportFeatures = [
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and customer support"
  },
  {
    icon: Shield,
    title: "Expert Installation",
    description: "Professional installation and setup by certified technicians"
  },
  {
    icon: Users,
    title: "Training Programs",
    description: "Comprehensive training for your security personnel"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick response times for all technical queries and issues"
  }
];

export const Support = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
        { opacity: 0, x: -30, rotateY: -10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          }
        }
      );

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
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
            Customer <span className="text-primary">Support</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support services to ensure your security systems operate flawlessly
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover-lift border-0 shadow-soft hover:shadow-medium bg-card text-center">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div ref={ctaRef} className="bg-card rounded-2xl shadow-medium p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Need Help? We're Here for You
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Get in touch with our expert support team for technical assistance, product information, or custom solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">+91 98331 37158 / +91 87796 45332</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">trucedetectorhouse@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-foreground font-medium">📍 Charkop, Kandivali West, Mumbai, Maharashtra, India</span>
                </div>
                
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Button variant="shop" size="lg" className="group">
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Call Now
              </Button>
              <Button variant="cta" size="lg" className="group">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};