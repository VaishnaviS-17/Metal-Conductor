import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Eye, Shield, Zap, Settings, Users, Award, ArrowRight, CheckCircle, Info } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const products = [
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
  },
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
  },
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
  },
  {
    id: 9,
    name: "Portable Metal Detector System",
    model: "DH000",
    category: "Portable",
    image: "/uploads/9.png",
    badge: "Portable",
    description: "Foldable, lightweight scanner with multi-zone detection and battery backup—ideal for quick, reliable security anywhere.",
    specifications: {
      "Power": "230 VAC +/- 10% 50 Hz",
      "Visual Indication": "Bar graph & LED",
      "Audio Indication": "Speaker",
      "Sensitivity": "Detects Object As small as 35mm Sq. ferrous and non-ferrous Metal cube for top to bottom",
      "All Dimensions": "76 x 34 x 18 inches",
      "Operating Temperature": "0 to 50 degrees",
      "Counter Display": "16 x 2",
      "Sensitivity Control": "0-9 in steps"
    },
    features: [
      "Detects, ferrous & non-ferrous metals, conductive metal alloys",
      "Auto set calibration, no setting required once the metal detector is switched ON",
      "Microcontroller based counter",
      "Sensitivity control 0-9 in steps",
      "Search coil housed in PVC frame with wooden stand side supports",
      "System health indication ready and not ready",
      "IR sensor to avoid alarm indication for metal movement outside the frame",
      "6 Digits IN counter",
      "Counter Display 16 x 2",
      "Plug in type PCB for ease of maintenance",
      "One Fiber bag / briefcase for the control unit separately",
      "Complete set in bag for easy transportation",
      "Works on AC, rechargeable battery",
      "PVC frame and supply cable are detachable both side",
      "Wooden platform (optional at extra cost)"
    ],
    applications: [
      "Mobile Security Operations",
      "Event Security & Temporary Installations",
      "Construction Site Security",
      "Military & Defense Checkpoints",
      "Customs & Border Control",
      "VIP Protection & Personal Security",
      "Emergency Response & Disaster Management",
      "Remote Location Security Screening"
    ]
  }
];

export const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with enhanced effects
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

      // Initial cards animation - fade in from bottom
      /*gsap.fromTo(cardsRef.current?.children,
        { 
          opacity: 0, 
          y: 80, 
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          }
        }
      );*/

      // Carousel animation - automatic horizontal sliding
      const productGroups = cardsRef.current?.children;
      if (productGroups && productGroups.length > 0) {
        // Calculate total width of all groups
        const totalWidth = Array.from(productGroups).reduce((total, group) => {
          const groupElement = group as HTMLElement;
          return total + groupElement.offsetWidth + 32; // 32px for gap
        }, 0);
        
        // Create infinite loop animation with proper reset
        gsap.to(productGroups, {
          x: -totalWidth / 2, // Move half way to show the duplicate content
          duration: 75,
          ease: "none",
          repeat: -1,
          yoyo: false,
          onComplete: () => {
            // Reset position to start for seamless loop
            gsap.set(productGroups, { x: 0 });
          }
        });
      }

      // Subtle floating animation for visual appeal
      gsap.to(cardsRef.current?.children, {
        y: -8,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-rich-brown">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover our comprehensive range of professional metal detection equipment designed for security, safety, and peace of mind
          </p>
        </div>

        <div ref={cardsRef} className="flex gap-8 overflow-hidden">
          {/* First group of 3 cards */}
          <div className="flex gap-8 flex-shrink-0">
            {products.slice(0, 3).map((product, index) => (
              <Card 
                key={product.id} 
                className="group bg-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden relative hover:scale-105 flex-shrink-0 w-96 min-h-[600px]"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-card to-rich-brown overflow-hidden">
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
                
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        Model: {product.model}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 group/btn h-12">
                          <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-foreground">
                            {product.name} - {product.model}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* Product Image */}
                          <div className="relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-auto object-contain rounded-lg shadow-medium max-h-80"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                {product.badge}
                              </Badge>
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2">Description</h3>
                              <p className="text-muted-foreground text-sm">{product.description}</p>
                            </div>

                            {/* Specifications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Specifications
                              </h3>
                              <div className="space-y-3">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                  <div key={key} className="border border-border/30 rounded-lg p-3 bg-card/50">
                                    <h4 className="font-semibold text-foreground text-sm mb-1">{key}</h4>
                                    <p className="text-muted-foreground text-xs leading-relaxed">{value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                Key Features
                              </h3>
                              <div className="grid grid-cols-1 gap-1">
                                {product.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Applications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Applications
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {product.applications.map((app, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-accent text-accent-foreground text-xs">
                                    {app}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="accent" className="flex-1 group/btn h-12">
                      <Info className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second group of 3 cards */}
          <div className="flex gap-8 flex-shrink-0">
            {products.slice(3, 6).map((product, index) => (
              <Card 
                key={product.id} 
                className="group bg-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden relative hover:scale-105 flex-shrink-0 w-96 min-h-[600px]"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-card to-rich-brown overflow-hidden">
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
                
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        Model: {product.model}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 group/btn h-12">
                          <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-foreground">
                            {product.name} - {product.model}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* Product Image */}
                          <div className="relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-auto object-contain rounded-lg shadow-medium max-h-80"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                {product.badge}
                              </Badge>
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2">Description</h3>
                              <p className="text-muted-foreground text-sm">{product.description}</p>
                            </div>

                            {/* Specifications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Specifications
                              </h3>
                              <div className="space-y-3">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                  <div key={key} className="border border-border/30 rounded-lg p-3 bg-card/50">
                                    <h4 className="font-semibold text-foreground text-sm mb-1">{key}</h4>
                                    <p className="text-muted-foreground text-xs leading-relaxed">{value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                Key Features
                              </h3>
                              <div className="grid grid-cols-1 gap-1">
                                {product.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Applications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Applications
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {product.applications.map((app, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-accent text-accent-foreground text-xs">
                                    {app}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="accent" className="flex-1 group/btn h-12">
                      <Info className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Third group for remaining cards */}
          <div className="flex gap-8 flex-shrink-0">
            {products.slice(6).map((product, index) => (
              <Card 
                key={product.id} 
                className="group bg-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden relative hover:scale-105 flex-shrink-0 w-96 min-h-[600px]"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-card to-rich-brown overflow-hidden">
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
                
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        Model: {product.model}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 group/btn h-12">
                          <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-foreground">
                            {product.name} - {product.model}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* Product Image */}
                          <div className="relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-auto object-contain rounded-lg shadow-medium max-h-80"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                {product.badge}
                              </Badge>
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2">Description</h3>
                              <p className="text-muted-foreground text-sm">{product.description}</p>
                            </div>

                            {/* Specifications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Specifications
                              </h3>
                              <div className="space-y-3">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                  <div key={key} className="border border-border/30 rounded-lg p-3 bg-card/50">
                                    <h4 className="font-semibold text-foreground text-sm mb-1">{key}</h4>
                                    <p className="text-muted-foreground text-xs leading-relaxed">{value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                Key Features
                              </h3>
                              <div className="grid grid-cols-1 gap-1">
                                {product.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Applications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Applications
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {product.applications.map((app, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-accent text-accent-foreground text-xs">
                                    {app}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="accent" className="flex-1 group/btn h-12">
                      <Info className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Duplicate groups for seamless loop */}
          {/* First group duplicate */}
          <div className="flex gap-8 flex-shrink-0">
            {products.slice(0, 3).map((product, index) => (
              <Card 
                key={`duplicate-${product.id}`} 
                className="group bg-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden relative hover:scale-105 flex-shrink-0 w-96 min-h-[600px]"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-card to-rich-brown overflow-hidden">
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
                
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        Model: {product.model}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 group/btn h-12">
                          <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-foreground">
                            {product.name} - {product.model}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* Product Image */}
                          <div className="relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-auto object-contain rounded-lg shadow-medium max-h-80"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                {product.badge}
                              </Badge>
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2">Description</h3>
                              <p className="text-muted-foreground text-sm">{product.description}</p>
                            </div>

                            {/* Specifications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Specifications
                              </h3>
                              <div className="space-y-3">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                  <div key={key} className="border border-border/30 rounded-lg p-3 bg-card/50">
                                    <h4 className="font-semibold text-foreground text-sm mb-1">{key}</h4>
                                    <p className="text-muted-foreground text-xs leading-relaxed">{value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                Key Features
                              </h3>
                              <div className="grid grid-cols-1 gap-1">
                                {product.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Applications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Applications
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {product.applications.map((app, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-accent text-accent-foreground text-xs">
                                    {app}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="accent" className="flex-1 group/btn h-12">
                      <Info className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second group duplicate */}
          <div className="flex gap-8 flex-shrink-0">
            {products.slice(3, 6).map((product, index) => (
              <Card 
                key={`duplicate-2-${product.id}`} 
                className="group bg-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden relative hover:scale-105 flex-shrink-0 w-96 min-h-[600px]"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-card to-rich-brown overflow-hidden">
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
                
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        Model: {product.model}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 group/btn h-12">
                          <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-foreground">
                            {product.name} - {product.model}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* Product Image */}
                          <div className="relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-auto object-contain rounded-lg shadow-medium max-h-80"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                {product.badge}
                              </Badge>
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2">Description</h3>
                              <p className="text-muted-foreground text-sm">{product.description}</p>
                            </div>

                            {/* Specifications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Specifications
                              </h3>
                              <div className="space-y-3">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                  <div key={key} className="border border-border/30 rounded-lg p-3 bg-card/50">
                                    <h4 className="font-semibold text-foreground text-sm mb-1">{key}</h4>
                                    <p className="text-muted-foreground text-xs leading-relaxed">{value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                Key Features
                              </h3>
                              <div className="grid grid-cols-1 gap-1">
                                {product.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Applications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Applications
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {product.applications.map((app, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-accent text-accent-foreground text-xs">
                                    {app}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="accent" className="flex-1 group/btn h-12">
                      <Info className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Third group duplicate */}
          <div className="flex gap-8 flex-shrink-0">
            {products.slice(6).map((product, index) => (
              <Card 
                key={`duplicate-3-${product.id}`} 
                className="group bg-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden relative hover:scale-105 flex-shrink-0 w-96 min-h-[600px]"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-card to-rich-brown overflow-hidden">
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
                
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        Model: {product.model}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1 group/btn h-12">
                          <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-foreground">
                            {product.name} - {product.model}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* Product Image */}
                          <div className="relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-auto object-contain rounded-lg shadow-medium max-h-80"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                {product.badge}
                              </Badge>
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2">Description</h3>
                              <p className="text-muted-foreground text-sm">{product.description}</p>
                            </div>

                            {/* Specifications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Specifications
                              </h3>
                              <div className="space-y-3">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                  <div key={key} className="border border-border/30 rounded-lg p-3 bg-card/50">
                                    <h4 className="font-semibold text-foreground text-sm mb-1">{key}</h4>
                                    <p className="text-muted-foreground text-xs leading-relaxed">{value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                Key Features
                              </h3>
                              <div className="grid grid-cols-1 gap-1">
                                {product.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Applications */}
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Applications
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {product.applications.map((app, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-accent text-accent-foreground text-xs">
                                    {app}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="accent" className="flex-1 group/btn h-12">
                      <Info className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="accent" size="lg" className="group">
            <span>Explore All Products</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};