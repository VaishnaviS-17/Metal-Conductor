import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Award, Target, Eye, Star, Zap, Heart, CheckCircle, Globe, Clock, TrendingUp, Building2, Factory, Hotel, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Sandeep Lokhande",
    role: "Founder & CEO",
    experience: "13+ years in the industry",
    expertise: "Marketing, Strategy & Product Innovation",
    icon: Shield,
    color: "from-primary to-accent",
    description: "Visionary leader driving innovation in metal detection technology"
  },
  {
    name: "Kiran Lokhande",
    role: "Operations Director",
    experience: "Expert in Business Operations",
    expertise: "Oversees Purchase, Sales, Accounts, and Production",
    icon: Users,
    color: "from-secondary to-secondary-hover",
    description: "Ensuring operational excellence across all business functions"
  },
  {
    name: "Dashrath Bane",
    role: "Customer Success Manager",
    experience: "Dedicated Support Specialist",
    expertise: "Handles all customer service, maintenance, and installation support",
    icon: Award,
    color: "from-accent to-primary",
    description: "Building lasting relationships through exceptional customer service"
  }
];

const achievements = [
  {
    icon: Star,
    title: "13+ Years",
    description: "Industry Expertise",
    detail: "Decades of experience in metal detection technology"
  },
  {
    icon: Shield,
    title: "500+",
    description: "Installations",
    detail: "Successful deployments across India"
  },
  {
    icon: Users,
    title: "1000+",
    description: "Happy Clients",
    detail: "Trusted by leading organizations"
  },
  {
    icon: Award,
    title: "24/7",
    description: "Support",
    detail: "Round-the-clock customer assistance"
  }
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous testing to ensure reliability and performance"
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We're here to support you every step of the way"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Continuously pushing boundaries to deliver cutting-edge security solutions"
  },
  {
    icon: Globe,
    title: "Trust & Reliability",
    description: "Building lasting partnerships through transparency and dependable service"
  }
];

const industries = [
  { icon: Hotel, name: "Hospitality", description: "5-star hotels and resorts" },
  { icon: Factory, name: "Manufacturing", description: "Factories and warehouses" },
  { icon: Building2, name: "Government", description: "Public infrastructure" },
  { icon: Shield, name: "Security", description: "Security agencies" }
];

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Floating elements animation
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Team cards animation
      gsap.fromTo(teamRef.current?.children,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
          }
        }
      );

      // Mission/Vision animation
      gsap.fromTo(missionRef.current?.children,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 75%",
          }
        }
      );

      // Stats animation
      gsap.fromTo(statsRef.current?.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          }
        }
      );

      // Values animation
      gsap.fromTo(valuesRef.current?.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
          }
        }
      );

      // Industries animation
      gsap.fromTo(industriesRef.current?.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: industriesRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl floating-element"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl floating-element" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary/10 rounded-full blur-xl floating-element" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Back Button */}
      <div className="absolute left-6 top-6 z-30">
        <Link to="/" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white/30 text-primary font-semibold text-base hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20" stroke="currentColor" className="inline-block group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10H5m0 0l5-5m-5 5l5 5" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="mb-8">
              <img 
                src="/uploads/3bea0fa6-a980-48c2-8bd4-48ea35b9a994.png" 
                alt="Detector House Logo" 
                className="h-24 w-auto mx-auto mb-6 drop-shadow-lg"
              />
            </div>
            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Detector House</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Leading manufacturer of metal detectors in India with over 13 years of expertise in custom-built security solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>13+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>500+ Installations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Your Trusted Partner in <span className="text-primary">Security Solutions</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Detector House is a leading manufacturer of metal detectors in India with over 13 years of expertise. 
                  We specialize in custom-built metal detectors for various industries including hospitality, manufacturing, 
                  security agencies, and government organizations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From manufacturing to service and repair – we provide end-to-end solutions for hand held metal detectors, 
                  door frame metal detectors, and pole metal detectors. Our commitment to quality, innovation, and reliable 
                  after-sales support makes us a trusted choice for 5-star hotels, factories, warehouses, and public infrastructure across India.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Established</h3>
                  <p className="text-muted-foreground text-sm">2021</p>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Growth</h3>
                  <p className="text-muted-foreground text-sm">500+ Installations</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Our Heritage
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Susangat Electronics was founded in 2005 with a vision to manufacture high-quality metal detectors. 
                    Over the years, we have built a reputation for excellence and innovation in the field of metal detection technology. 
                    Our commitment to quality and customer satisfaction has driven our growth and success.
                  </p>
                  <p>
                    In 2021, we expanded our expertise and reach by establishing Detector House, a new venture aimed at providing 
                    even more advanced and reliable metal detection solutions. Through continuous improvement and dedication, 
                    Susangat Electronics and Detector House together continue to lead the industry with cutting-edge technology 
                    and unparalleled service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div ref={missionRef} className="py-20 bg-gradient-to-br from-background to-rich-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Mission</span> & <span className="text-accent">Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driving innovation in security technology to create safer environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group border-0 shadow-soft hover:shadow-medium bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Detector House, our mission is to design, manufacture, and distribute cutting-edge metal detectors, 
                  ensuring the safety and security of individuals and environments worldwide. We are committed to relentless 
                  innovation, uncompromising quality, and customer-centric solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through continuous research and development, we aim to empower our clients with advanced detection technology, 
                  contributing to a safer and more worry-free world.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-soft hover:shadow-medium bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To create a worry-free environment for people through innovative security solutions that provide peace of mind 
                  and protect what matters most. We envision a world where advanced detection technology seamlessly integrates 
                  into everyday security protocols.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision drives us to continuously push the boundaries of what's possible in metal detection technology, 
                  ensuring that every product we create contributes to a safer, more secure future for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div ref={valuesRef} className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group border-0 shadow-soft bg-white/10 backdrop-blur-sm border-white/20 text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div ref={industriesRef} className="py-20 bg-gradient-to-br from-rich-brown to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading organizations across diverse sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="group border-0 shadow-soft bg-white/10 backdrop-blur-sm border-white/20 text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to innovation and excellence in metal detection technology
            </p>
          </div>

          <div ref={teamRef} className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card key={index} className="group hover-lift border-0 shadow-soft hover:shadow-strong bg-white/10 backdrop-blur-sm border-white/20 text-center">
                  <CardContent className="p-8">
                    <div className={`mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${member.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.experience}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.expertise}
                    </p>
                    <p className="text-muted-foreground text-xs italic">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Achievements Stats */}
      <div ref={statsRef} className="py-20 bg-gradient-to-br from-background to-rich-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="group border-0 shadow-soft bg-white/10 backdrop-blur-sm border-white/20 text-center hover-lift">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {achievement.detail}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to <span className="text-primary">Secure Your Future</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of satisfied customers who trust Detector House for their security needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-hover transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-foreground font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 