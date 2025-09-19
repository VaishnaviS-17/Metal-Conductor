import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Eye, Shield, Zap, Settings, Users, Award, ArrowRight, CheckCircle, Info, ArrowLeft } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const handheldProducts = [
  {
    id: 1,
    name: "Handheld Metal Detector",
    model: "DHG01",
    category: "Portable",
    image: "/uploads/1.png",
    badge: "Professional",
    description: "Lightweight and compact handheld metal detector with advanced detection capabilities for security personnel and law enforcement applications.",
    specifications: {
      "Model Number": "DHG01",
      "Dimensions": "330 mm x 95 mm x 40 mm",
      "Supply": "9V recharge or (dry cell optional)",
      "Sensitivity": "5mm x 5mm metal cube",
      "Search Coil Area": "90 mm",
      "Rated Current": "12.5 mA (Max)",
      "Power Consumption": "110 mw",
      "Weight": "220gms (Approx.)"
    },
    features: [
      "Lightweight and compact size",
      "Sound and LED to draw attention on the operator",
      "Metal, Steel, Copper, Brass, Platinum, Silver, and Gold are Detected Effectively",
      "Auto Sensitivity adjustment",
      "Rechargeable and Dry battery pack as per requirement",
      "Compatible battery and in market easy Availability"
    ],
    applications: [
      "Security Screening",
      "Law Enforcement",
      "Event Security",
      "School Security",
      "Corporate Security",
      "Personal Protection"
    ]
  },
  {
    id: 2,
    name: "LoopGuard M-500",
    model: "DHG02",
    category: "Portable",
    image: "/uploads/2.png",
    badge: "Professional",
    description: "Advanced handheld metal detector with high sensitivity and wide coverage for comprehensive security screening.",
    specifications: {
      "INDICATION" :  "(a) Solid Red Light : AL - Target Detected (b) Solid Green LED : Pw- Power On (c) Solid Yellow Light : BT Low Battery Indicator",
      "Alarm Indicator":  "(a) Sound Mode : Buzzer with Red LED (b) Vibration Mode : Vibrator with Red LED",
      "CONTROL" : "3 way switch (a) Forward Position : V Vibration On (b) Center Position : O Power Off (c) Back Position : S - Sound On",
      "DIMENSION":  "(a) Weight 290g (b) Length - 14.76\" (375)mm (c) Width - 3.03\" (77)mm (d) Thickness 1.37\"(35)mm",
      "OPERATING TIME":  "-15 to +45 Deg Centigrade"
    },
    features: [
      "For Fast Weapon Screening And Theft Prevention",
      "Highly Sensitive Scanning Circuit - Fast Scan Rate",
      "Instant Response Clear Visual, Audio And Vibrator Alarm",
      "Extra-Large Coil For Wide Coverage",
      "High Sensitivity For Non-Intuitive Body Search",
      "Detects All Metals, Alloys and Ferrites",
      "Low Field Strength No Effect On Pacemakers And Magnetic Media"
    ],
    applications: [
      "Security Screening",
      "Law Enforcement",
      "Event Security",
      "School Security",
      "Corporate Security",
      "Personal Protection"
    ]
  },
  {
    id: 3,
    name: "RingScan R-300",
    model: " DHG03",
    category: "Mobile",
    image: "/uploads/3.png",
    badge: "Portable",
    description: "Lightweight and compact handheld metal detector with advanced detection capabilities for security personnel and law enforcement applications.",
    specifications: {
      "Dimensions": "395 mm x 135 mm x 40 mm",
      "Supply": "9v recharge or (dry cell optional)",
      "Sensitivity": "5mm x 5mm metal cube",
      "Search Coil Area": "13.5 cm",
      "Rated Current": "12.5 mA (Max)",
      "Power Consumption": "110 mw",
      "Weight": "350gms (Approx.)"
    },
    features: [
      "Lightweight and compact size",
      "Sound and LED to draw attention on the operator",
      "Metal, Steel, Copper, Brass, Platinum, Silver, and Gold are Detected Effectively",
      "Auto Sensitivity adjustment",
      "Rechargeable and Dry battery pack as per requirement",
      "Compatible battery and in market easy Availability"
    ],
    applications: [
      "Security Screening",
      "Law Enforcement",
      "Event Security",
      "School Security",
      "Corporate Security",
      "Personal Protection"
    ]
  }
];

const HandHeldDetectors = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Products animation
      gsap.fromTo(productsRef.current?.children,
        { 
          opacity: 0, 
          x: -100,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-rich-brown">
      {/* Header */}
      <div className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <h1 className="text-xl font-semibold text-foreground">DETECTOR HOUSE</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hand Held <span className="text-primary">Detectors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Professional handheld metal detectors designed for security personnel, law enforcement, and comprehensive security screening applications
            </p>
          </div>

          <div ref={productsRef} className="space-y-16">
            {handheldProducts.map((product, index) => (
              <div key={product.id} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Product Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative h-96 lg:h-[600px] bg-gradient-to-br from-card to-rich-brown overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {/* Product Information Section */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Product Header */}
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-lg font-medium">
                        Model: {product.model}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Description</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Key Features - Show only first 6 */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        {product.features.length > 6 && (
                          <div className="text-sm text-muted-foreground mt-2">
                            +{product.features.length - 6} more features available
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Applications - Show only first 4 */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.slice(0, 4).map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-accent text-accent-foreground">
                            {app}
                          </Badge>
                        ))}
                        {product.applications.length > 4 && (
                          <div className="text-sm text-muted-foreground mt-2">
                            +{product.applications.length - 4} more applications
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1 group/btn h-12">
                            <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                            View All Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-foreground">
                              {product.name} - {product.model} - Complete Specifications
                            </DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            {/* Product Image */}
                            <div className="relative">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-auto object-contain rounded-lg shadow-medium max-h-60 mx-auto"
                              />
                              <div className="absolute top-4 left-4">
                                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                  {product.badge}
                                </Badge>
                              </div>
                            </div>

                            {/* All Features */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                All Features
                              </h3>
                              <div className="grid grid-cols-1 gap-2">
                                {product.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-start gap-3 text-sm">
                                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* All Applications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                All Applications
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {product.applications.map((app, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-accent text-accent-foreground text-xs">
                                    {app}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Specifications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5" />
                                Technical Specifications
                              </h3>
                              <div className="grid md:grid-cols-2 gap-4">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                  <div key={key} className="border border-border/30 rounded-lg p-4 bg-card/50">
                                    <h4 className="font-semibold text-foreground text-sm mb-2">{key}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button variant="accent" className="flex-1 group/btn h-12">
                        <ShoppingCart className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="accent" 
              size="lg" 
              className="group"
              onClick={() => navigate('/')}
            >
              <span>Back to All Products</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandHeldDetectors; 