# Metal Detector House 🏠

A comprehensive e-commerce website for professional metal detection equipment, built with modern web technologies and featuring a beautiful, responsive design.

## 🚀 Live Demo

Visit the live website: [Metal Detector House](https://metaldetectorhouse.com)

## 📋 Project Overview

Metal Detector House is a professional e-commerce platform specializing in high-quality metal detection equipment for security, law enforcement, and industrial applications. The website showcases a comprehensive range of products with detailed specifications, features, and applications.

## ✨ Key Features

### 🏠 **Homepage**
- **Hero Section**: Eye-catching banner with call-to-action
- **Featured Products**: Showcase of premium metal detectors with carousel animation
- **Categories**: Product categorization with visual cards
- **Why Choose Us**: Company benefits and trust indicators
- **Testimonials**: Customer reviews and feedback
- **Support Section**: Contact information and support details

### 📦 **Product Categories**
- **Hand Held Detectors**: Portable metal detectors for security personnel
- **Door Frame Detectors**: Walk-through metal detection systems
- **Pole Metal Detectors**: Vertical column and pole-mounted detectors
- **Multi Zone Systems**: Advanced detection with multiple zones
- **Security Solutions**: Complete security packages
- **Portable Systems**: Mobile and temporary solutions

### 🛍️ **Product Pages**
Each category page features:
- **Side-by-side layout**: Product image on left, details on right
- **Detailed specifications**: Complete technical information
- **Feature lists**: Key capabilities and benefits
- **Application badges**: Use cases and industries
- **Modal dialogs**: Comprehensive product information
- **Responsive design**: Works on all devices

### 🎨 **Design Features**
- **Modern UI**: Clean, professional design with shadcn/ui components
- **Smooth animations**: GSAP-powered scroll animations
- **Responsive layout**: Mobile-first design approach
- **Dark theme**: Rich brown color scheme
- **Interactive elements**: Hover effects and transitions
- **Professional typography**: Clear, readable text hierarchy

## 🛠️ Technology Stack

### **Frontend**
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful, accessible UI components

### **Animation & UX**
- **GSAP**: Professional-grade animations
- **ScrollTrigger**: Scroll-based animations
- **Lucide React**: Beautiful icon library

### **Routing & Navigation**
- **React Router**: Client-side routing
- **Responsive navigation**: Mobile-friendly menu system

### **Development Tools**
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
Metal-Conductor/
├── public/
│   ├── uploads/          # Product images
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Categories.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Support.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChooseUs.tsx
│   ├── pages/
│   │   ├── Index.tsx     # Homepage
│   │   ├── About.tsx     # About page
│   │   ├── HandHeldDetectors.tsx
│   │   ├── DoorFrameDetectors.tsx
│   │   ├── PoleMetalDetectors.tsx
│   │   └── NotFound.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Metal-Conductor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages & Routes

### **Main Pages**
- `/` - Homepage with featured products and categories
- `/about` - Company information and mission
- `/handheld-detectors` - Hand-held metal detector products
- `/doorframe-detectors` - Door frame metal detector products
- `/pole-metal-detectors` - Pole-mounted metal detector products

### **Navigation**
- **Categories**: Click category cards to view specific product pages
- **Back Navigation**: Return to homepage from any product page
- **Responsive Menu**: Mobile-friendly navigation system

## 🎯 Product Categories

### **Hand Held Detectors** (3 Products)
- Handheld Metal Detector (DHG01)
- LoopGuard M-500 (DHG02)
- RingScan R-300 (DHG03)

### **Door Frame Detectors** (2 Products)
- Single Zone Door Frame Metal Detector
- Multi Zone Door Frame Metal Detector

### **Pole Metal Detectors** (3 Products)
- Vertical Column Metal Detector (DHP001)
- Pole Metal Detector (DHP002)
- NeoPole Scanner (DHP003)

## 🎨 Design System

### **Color Palette**
- **Primary**: Rich brown tones
- **Accent**: Complementary colors
- **Background**: Dark theme with card-based layout
- **Text**: High contrast for readability

### **Typography**
- **Headings**: Bold, professional fonts
- **Body Text**: Clean, readable sans-serif
- **Product Names**: Prominent display

### **Components**
- **Cards**: Product display with hover effects
- **Buttons**: Consistent styling with hover states
- **Modals**: Detailed product information
- **Badges**: Category and feature indicators

## 🔧 Customization

### **Adding New Products**
1. Add product data to `FeaturedProducts.tsx`
2. Update category pages with new products
3. Add product images to `public/uploads/`

### **Styling Changes**
- Modify `tailwind.config.ts` for theme changes
- Update component styles in respective files
- Customize animations in component `useEffect` hooks

### **Content Updates**
- Edit product descriptions in component files
- Update company information in relevant components
- Modify contact details in Support component

## 📈 Performance Features

- **Lazy Loading**: Images load on demand
- **Optimized Animations**: Smooth GSAP animations
- **Responsive Images**: Different sizes for different devices
- **Fast Navigation**: Client-side routing
- **Minimal Bundle**: Optimized build size

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is proprietary software for Metal Detector House.

## 🤝 Contributing

For internal development:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For technical support or questions:
- Email: [support@metaldetectorhouse.com]
- Phone: [Contact number]
- Website: [https://metaldetectorhouse.com]

---

**Built with ❤️ for Metal Detector House**
