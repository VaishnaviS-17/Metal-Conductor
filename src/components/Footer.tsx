import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/3bea0fa6-a980-48c2-8bd4-48ea35b9a994.png" 
                alt="Detector House Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Your trusted shield against uncertainty. Professional metal detection equipment for security and peace of mind.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary hover:bg-primary/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary hover:bg-primary/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary hover:bg-primary/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-secondary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="text-secondary-foreground/80 hover:text-primary transition-colors">Products</a></li>
              <li><a href="#categories" className="text-secondary-foreground/80 hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-secondary-foreground">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Hand Held Detectors</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Door Frame Systems</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Multi Zone Detectors</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Security Solutions</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Portable Systems</a></li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-secondary-foreground">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-secondary-foreground/80">+91 9833137158</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-secondary-foreground/80">info@detectorhouse.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-secondary-foreground/80">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-secondary-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
                />
                <Button variant="cta" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-secondary-foreground/60 text-sm">
              © {currentYear} Detector House. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};