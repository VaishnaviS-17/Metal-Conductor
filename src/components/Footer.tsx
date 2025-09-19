import { Button } from '@/components/ui/button';
//
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="/uploads/image.png" 
                  alt="Detector House Logo" 
                  className="h-16 lg:h-20 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-secondary-foreground">DETECTOR HOUSE</h1>
                </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Your trusted shield against uncertainty. Professional metal detection equipment for security and peace of mind.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary hover:bg-primary/10" asChild>
                <a href="https://www.facebook.com/detectorhouse" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary hover:bg-primary/10" asChild>
                <a href="https://www.instagram.com/detectorhouse" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-primary hover:bg-primary/10" asChild>
                <a href="https://www.linkedin.com/company/detector-house/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-foreground">Categories</h3>
            <ul className="space-y-3">
              <li><span className="text-secondary-foreground/80">Hand Held Detectors</span></li>
              <li><span className="text-secondary-foreground/80">Door Frame Systems</span></li>
              <li><span className="text-secondary-foreground/80">Multi Zone Detectors</span></li>
              <li><span className="text-secondary-foreground/80">Security Solutions</span></li>
              <li><span className="text-secondary-foreground/80">Portable Systems</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-foreground">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-secondary-foreground/80">+91 98331 37158 / +91 87796 45332</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-secondary-foreground/80">trucedetectorhouse@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-secondary-foreground/80">Charkop, Kandivali West, Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 md:py-6 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <div className="text-secondary-foreground/60 text-sm">
              © {currentYear} Detector House. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-secondary-foreground/60">Privacy Policy</span>
              <span className="text-secondary-foreground/60">Terms of Service</span>
              <span className="text-secondary-foreground/60">Shipping Info</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};