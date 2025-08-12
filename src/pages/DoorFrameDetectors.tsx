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

const doorFrameProducts = [
  {
    id: 7,
    name: "Single Zone Door Frame Metal Detector",
    model: " DH000",
    category: "Portable",
    image: "/uploads/7.png",
    badge: "Portable",
    description: "Reliable walk-through scanner offering uniform metal detection for standard security needs.",
    specifications: {
      "Power": "230 VAC +/- 10% 50 Hz",
      "Visual Indication": "Bar graph & LED",
      "Audio Indication": "Speaker",
      "Counter Display": "16 x 2",
      "Sensitivity": "Detects Object As small as 35mm Sq. Ferrous and non-ferrous Metal cube for top to Bottom",
      "Operating Temperature": "0 to 50 degree C",
      "Dimensions": "2135 x 788 x 446 mm"
    },
    features: [
      "Auto Set Calibration, no setting required once the metal detector is switched ON",
      "Detects, ferrous & non-ferrous metals, conductive metal alloys",
      "Wide range of sensitivity, up-to 9 levels settable through thumbwheel switch",
      "Audio & Visual alarm on metal detection",
      "Walk Stop Indicator for flow control",
      "Plug in type PCB for ease of maintenance",
      "Side Panel & control unit are detachable for ease of transportation",
      "Metal Detector Frame made laminated plywood material (ABS Material – optional at extra cost)",
      "Infrared Sensor for counting the traffic",
      "Six digits in and out counting",
      "Rain Water Protected Cover (optional at extra cost)"
    ],
    applications: [
      "Hotels, Resorts & Convention Centers",
      "Stadiums, Events & Exhibition Halls", 
      "Schools, Colleges & Examination Halls",
      "Hospitals & Medical Institutions",
      "Government Buildings & Public Offices",
      "Airports, Metro Stations & Border Checkpoints",
      "Perfect for high-footfall areas requiring maximum security with walk-through detection efficiency"
    ]
  },
  {
    id: 8,
    name: "Multi Zone Door Frame Metal Detector",
    model: " DH000",
    category: "Portable",
    image: "/uploads/8.png",
    badge: "Portable",
    description: "Advanced scanner with 6–18+ zones for precise metal location, fast screening, and accurate threat detection with visual indicators",
    specifications: {
      "All Dimensions": "2160 x 810 x 446mm",
      "Power Supply": "230v AC 50hz",
      "Power Consumption": "less than 35w",
      "Weight": "60kg Approx",
      "Material": "Metal Detector made wood and PVC fiber Material",
      "Walking Space": "79 X 27 Inch",
      "Display": "16 X 2 Characters LCD for Parameters Display",
      "Detection": "Detects Object as small as 35mm Sq. Metal cube for top to bottom"
    },
    features: [
      "Heavy Side Panel, control unit & Self Balance",
      "Side Panel & control units are detachable for ease of transportation",
      "Bright Led Indicator on Both Side Panel",
      "Detection zone show precise target location on the left, middle and right of the body from head to toe",
      "Walking Space 79 X 27 Inch",
      "16 X 2 Characters LCD for Parameters Display",
      "6 Digits IN & OUT Counter",
      "Counter Reset Setting",
      "Human Bar Graph Indicator",
      "Sound Controller on Front (Adjustable Sound)",
      "Audio & Visual alarm on metal detection",
      "Wide range of sensitivity, up-to 9 levels settable through thumbwheel switch",
      "Independent sensitivity setting at each zone",
      "Detects Object as small as 35mm Sq. Metal cube for top to bottom",
      "Indication - Visual Indication Led on Both Side Panels and Control Head",
      "ABS Fiber Coated Panel Inbuilt Control Unit (Optional at extra cost)",
      "Rain Water Protected Cover (optional at extra cost)"
    ],
    applications: [
      "Hotels, Resorts & Convention Centers",
      "Stadiums, Events & Exhibition Halls",
      "Schools, Colleges & Examination Halls",
      "Hospitals & Medical Institutions",
      "Government Buildings & Public Offices",
      "Airports, Metro Stations & Border Checkpoint"
    ]
  }
];

const DoorFrameDetectors = () => {
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
              Door Frame <span className="text-primary">Detectors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Professional walk-through metal detectors designed for high-traffic areas, providing comprehensive security screening with advanced detection capabilities
            </p>
          </div>

          <div ref={productsRef} className="space-y-16">
            {doorFrameProducts.map((product, index) => (
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
                        Shop Now
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

export default DoorFrameDetectors;