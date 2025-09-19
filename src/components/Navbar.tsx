import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { EnquiryForm } from '@/components/EnquiryForm';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#products', label: 'Products' },
    { href: '/#categories', label: 'Categories' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-lg shadow-medium border-b border-border" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-28">
          {/* Logo */}
          <div className="flex items-center space-x-3 md:space-x-4 ml-0 md:ml-0">
            <div className="relative">
              <img 
                src="/uploads/3bea0fa6-a980-48c2-8bd4-48ea35b9a994.png" 
                alt="Detector House Logo" 
                className="h-14 md:h-20 lg:h-28 w-auto max-w-[140px] md:max-w-[200px]"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-2xl lg:text-2xl font-bold text-foreground">DETECTOR HOUSE</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.includes('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn("text-lg transition-colors duration-200 font-semibold text-foreground hover:text-primary")}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-lg transition-colors duration-200 font-semibold",
                    location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Dialog open={isSearchOpen} onOpenChange={(o)=>{ setIsSearchOpen(o); setSearchQuery(''); }}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden sm:flex h-10 w-10 md:h-12 md:w-12" onClick={()=>setIsSearchOpen(true)}>
                  <Search className="w-6 h-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Search Products</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    autoFocus
                    placeholder="Type a product name..."
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                  />
                  <div className="max-h-80 overflow-y-auto space-y-2">
                    {products.filter(p=>p.name.toLowerCase().includes(searchQuery.toLowerCase())).map(p=> (
                      <Card key={p.id} className="p-3 flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-12 h-12 object-contain" />
                        <div className="flex-1">
                          <div className="font-semibold">{p.name}</div>
                          <div className="text-sm text-muted-foreground">Model: {p.model}</div>
                        </div>
                        <a href="/#products" className="text-primary font-medium">View</a>
                      </Card>
                    ))}
                    {searchQuery && products.filter(p=>p.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                      <div className="text-sm text-muted-foreground">No products found.</div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Enquiry Form Button */}
            <div className="hidden lg:block">
              <EnquiryForm />
            </div>



            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-10 w-10 md:h-12 md:w-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-strong">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "block text-lg transition-colors duration-200 font-semibold py-3",
                    link.href.startsWith('#') 
                      ? "text-foreground hover:text-primary" 
                      : location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Enquiry Form Button */}
              <div className="pt-2">
                <EnquiryForm />
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};