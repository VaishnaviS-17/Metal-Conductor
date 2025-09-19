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

const poleMetalProducts = [
  {
    id: 4,
    name: "Vertical Column Metal Detector",
    model: "DHP001",
    category: "Professional",
    image: "/uploads/4.png",
    badge: "Professional",
    description: "Advanced vertical column metal detector with integrated control panel and multi-indicator system. Features precise detection capabilities with visual and audio alerts for comprehensive security screening.",
    specifications: {
      "Power Supply": "230 VAC +/- 10% 50 Hz",
      "Visual Indicators": "Green, Yellow, Red LED lights",
      "Audio Indication": "Built-in speaker system",
      "Display": "LCD screen for real-time data",
      "Control Panel": "Multiple adjustment knobs and buttons",
      "Detection Range": "Up to 600mm height coverage",
      "Operating Temperature": "0 to 50°C",
      "Material": "High-grade steel and industrial plastics",
      "Dimensions": "Height: 1800mm, Base: 400mm x 300mm"
    },
    features: [
      "Vertical column design for unobtrusive installation",
      "Multi-color LED indicator system (Green/Yellow/Red)",
      "LCD display for real-time monitoring and data",
      "Adjustable sensitivity controls via front panel knobs",
      "Audio alarm system with volume control",
      "Compact base unit with integrated electronics",
      "Easy installation and maintenance access",
      "Weather-resistant construction for indoor/outdoor use",
      "Low power consumption design",
      "Quick setup and calibration",
      "Durable construction for long-term reliability",
      "Professional-grade security screening capabilities"
    ],
    applications: [
      "Corporate Office Buildings",
      "Government Facilities",
      "Educational Institutions",
      "Healthcare Facilities",
      "Shopping Centers & Malls",
      "Event Venues & Conference Centers",
      "Industrial Security Checkpoints",
      "VIP Protection & Personal Security"
    ]
  },
  {
    id: 5,
    name: "Pole Metal Detector",
    model: "DHP002",
    category: "Smart",
    image: "/uploads/5.png",
    badge: "Smart",
    description: "Our Pole Metal Detector offers high-level security with a sleek, unobtrusive design—perfect for premium spaces, ensuring guest safety without inconvenience.",
    specifications: {
      "Power": "230 VAC +/- 10% 50 Hz",
      "Visual indication": "LED light",
      "Audio indication": "Speaker",
      "Material": "Pole Metal Detector made plywood, acrylic and PVC fiber",
      "Traffic Counter": "On 16x2 Displays",
      "Operating temperature": "0 to 50-degree C",
      "Dimensions Size": "2135x 508 x 101 mm"
    },
    features: [
      "Auto Set Calibration, no setting required once the metal detector is switched ON",
      "6 Digits IN Counter",
      "Infrared Sensor for counting the traffic",
      "Counter Reset Setting",
      "Sound Controller (Adjustable Sound)",
      "Audio & Visual alarm on metal detection",
      "Wide range of sensitivity up-to 9 levels adjustable through thumbwheel switch each zone",
      "Control - Sensitivity Adjustment, Volume Control, Reset Counting, Sensor Interlock, Auto Detection",
      "Supply cables are detachable",
      "Detection of ferrous metal top to bottom",
      "60mm Metal Square cube Detection of metal on dual side distance of 450mm",
      "Object detection Range: Up to 650mm",
      "Rain Water Protected Cover (optional at extra cost)"
    ],
    applications: [
      "5-Star Hotels & Resorts",
      "Temples and Religious Places",
      "Hospitals & Educational Campuses",
      "Government & VIP Event Entrances",
      "Corporate Buildings & Offices",
      "High-end Residential Complexes"
    ]
  },
  {
    id: 6,
    name: "NeoPole Scanner",
    model: " DHP003",
    category: "Industrial",
    image: "/uploads/6.png",
    badge: "Industrial",
    description: "A sleek single-pole metal detector with touch control, designed for high-precision security in premium environments.",
    specifications: {
      "Detection Zones": "6 Zones",
      "Sensitivity": "Industrial Grade",
      "Operating Frequency": "25 KHz",
      "Power Supply": "AC 110-240V",
      "Dimensions": "2200×800×400mm",
      "Weight": "95kg",
      "Operating Temperature": "-20°C to +60°C",
      "Protection Rating": "IP65"
    },
    features: [
      "Industrial-grade construction",
      "Harsh environment resistant",
      "Continuous operation capability",
      "High-temperature tolerance",
      "Dust and moisture protection",
      "Heavy-duty components",
      "Extended warranty",
      "24/7 operation ready"
    ],
    applications: [
      "Manufacturing Facilities",
      "Mining Operations",
      "Construction Sites",
      "Oil and Gas",
      "Chemical Plants",
      "Heavy Industry"
    ]
  }
];

const PoleMetalDetectors = () => {
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
              Pole Metal <span className="text-primary">Detectors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Advanced pole-mounted metal detection systems designed for premium environments and industrial applications with sleek, unobtrusive designs
            </p>
          </div>

          <div ref={productsRef} className="space-y-16">
            {poleMetalProducts.map((product, index) => (
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
                                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
                                  <Badge key={idx} variant="secondary" className="bg-accent text-accent-foreground">
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

export default PoleMetalDetectors; 