import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Award, Target, Eye, Star, Zap, Heart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Sandeep Lokhande",
    role: "Founder",
    experience: "13+ years in the industry",
    expertise: "Marketing, Strategy & Product Innovation",
    icon: Shield,
    color: "from-primary to-accent"
  },
  {
    name: "Kiran Lokhande",
    role: "Operations Director",
    experience: "Expert in Business Operations",
    expertise: "Oversees Purchase, Sales, Accounts, and Production",
    icon: Users,
    color: "from-secondary to-secondary-hover"
  },
  {
    name: "Dashrath Bane",
    role: "Customer Success Manager",
    experience: "Dedicated Support Specialist",
    expertise: "Handles all customer service, maintenance, and installation support",
    icon: Award,
    color: "from-accent to-primary"
  }
];

const achievements = [
  {
    icon: Star,
    title: "13+ Years",
    description: "Industry Expertise"
  },
  {
    icon: Shield,
    title: "500+",
    description: "Installations"
  },
  {
    icon: Users,
    title: "1000+",
    description: "Happy Clients"
  },
  {
    icon: Award,
    title: "24/7",
    description: "Support"
  }
];

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Team cards animation
      gsap.fromTo(teamRef.current?.children,
        { opacity: 0, y: 50, scale: 0.9 },
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
        { opacity: 0, x: -30 },
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
        { opacity: 0, y: 30 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">Detector House</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Leading manufacturer of metal detectors in India with over 13 years of expertise in custom-built security solutions
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src="/uploads/3bea0fa6-a980-48c2-8bd4-48ea35b9a994.png" 
                alt="Detector House Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h2 className="text-2xl font-bold text-foreground">Detector House</h2>
                <p className="text-muted-foreground">Established 2021</p>
              </div>
            </div>
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
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Heritage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Susangat Electronics was founded in 2005 with a vision to manufacture high-quality metal detectors. 
                Over the years, we have built a reputation for excellence and innovation in the field of metal detection technology. 
                Our commitment to quality and customer satisfaction has driven our growth and success.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                In 2021, we expanded our expertise and reach by establishing Detector House, a new venture aimed at providing 
                even more advanced and reliable metal detection solutions. Through continuous improvement and dedication, 
                Susangat Electronics and Detector House together continue to lead the industry with cutting-edge technology 
                and unparalleled service.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div ref={missionRef} className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-0 shadow-soft hover:shadow-medium bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                At Detector House, our mission is to design, manufacture, and distribute cutting-edge metal detectors, 
                ensuring the safety and security of individuals and environments worldwide. We are committed to relentless 
                innovation, uncompromising quality, and customer-centric solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Through continuous research and development, we aim to empower our clients with advanced detection technology, 
                contributing to a safer and more worry-free world.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft hover:shadow-medium bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create a worry-free environment for people through innovative security solutions that provide peace of mind 
                and protect what matters most. We envision a world where advanced detection technology seamlessly integrates 
                into everyday security protocols.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our vision drives us to continuously push the boundaries of what's possible in metal detection technology, 
                ensuring that every product we create contributes to a safer, more secure future for all.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
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
                    <div className={`mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${member.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-3">{member.experience}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.expertise}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements Stats */}
        <div ref={statsRef} className="grid md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="border-0 shadow-soft bg-white/10 backdrop-blur-sm border-white/20 text-center hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About; 