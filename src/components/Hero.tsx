import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Star, Users, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '@/assets/hero-detector.jpg';
import TextType from '@/components/ui/text-type';


gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );

      // Stats animation on scroll
      gsap.fromTo(statsRef.current?.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            end: "bottom 15%",
          }
        }
      );

      // Floating animation for the hero image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    // Add top padding so hero content doesn't sit under the fixed navbar on small screens
  <section id="home" ref={heroRef} className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 min-h-[70vh] md:min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-6">
              <h1 
                ref={titleRef}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                style={{ wordBreak: 'break-word' }}
              >
                <TextType 
                  text={["Your Shield Against Uncertainty", "Precision Detection Systems", "Ultimate Peace of Mind"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  as="span"
                  className="text-primary"
                />
              </h1>
              <p 
                ref={subtitleRef}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
              >
                Professional metal detectors, security scanners, and detection equipment for ultimate peace of mind.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="accent" size="xl" className="group w-full sm:w-auto">
                <Shield className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Shop Now
              </Button>
              <Button variant="trust" size="xl" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-deep-orange" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-teal" />
                </div>
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-deep-orange" />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          {/* Hide large hero image on very small screens to prioritize content and avoid collision */}
          <div ref={imageRef} className="relative mt-6 md:mt-0 hidden xs:block sm:block md:block lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage}
                alt="Professional Metal Detection Equipment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-r from-deep-orange to-teal text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-glow animate-float">
              <div className="text-center">
                <div className="font-bold text-lg">Trusted</div>
                <div className="text-sm opacity-90">Since 2008</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div> */}
    </section>
  );
};