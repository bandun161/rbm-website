import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Link } from "wouter";
import { Landmark, ShieldCheck, HeartHandshake, Leaf, Shield, BadgeCheck, LeafyGreen, Store, Briefcase, Send, ChevronRight, PieChart, ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/hero-bg-v2.jpg";
import branchInterior from "@assets/1000003118_1785304506090.jpg";

export default function Home() {
  useEffect(() => {
    document.title = "Rural Bank of Madridejos (Cebu), Inc.";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Community Banking" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D6E]/90 to-[#16A34A]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
          <div className="max-w-3xl">
            <Reveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Serving Northern Cebu Since 1982
              </div>
            </Reveal>
            
            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
                Banking with <span className="text-accent italic">Integrity</span>.<br />
                Growing Communities.
              </h1>
            </Reveal>
            
            <Reveal direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                For over four decades, Rural Bank of Madridejos (Cebu), Inc. has proudly served the people of Madridejos by providing trusted financial services, responsible banking solutions, and unwavering commitment to community development.
              </p>
            </Reveal>
            
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto h-14 text-base font-semibold shadow-xl shadow-primary/20">Open an Account</Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outlineWhite" className="w-full sm:w-auto h-14 text-base font-semibold">Learn More</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full opacity-75"></div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                <img src={branchInterior} alt="Bank Interior" className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20 bg-white p-6 rounded-xl shadow-xl max-w-[240px]">
                  <div className="text-4xl font-serif font-bold text-primary mb-1">
                    <AnimatedCounter end={40} suffix="+" />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Years of Trusted Community Service</p>
                </div>
              </div>
            </Reveal>
            
            <Reveal direction="left">
              <div>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Story</h4>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6 leading-tight">
                  Rooted in Trust.<br />Built for the Future.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Rural Bank of Madridejos (Cebu), Inc. is a Philippine banking corporation established under the laws of the Republic of the Philippines. The Bank was registered with the Securities and Exchange Commission on July 12, 1982, and was granted a Certificate of Authority by the Central Bank of the Philippines on March 18, 1982.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Since opening our doors, we have remained committed to promoting financial inclusion, supporting local businesses, and contributing to the economic growth of the Madridejos community through safe, reliable, and customer-focused banking services.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="gap-2 group">
                    Read Full History 
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose Us</h2>
              <p className="text-blue-100 text-lg">A legacy of trust, stability, and genuine care for our community's financial well-being.</p>
            </Reveal>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                  <Landmark className="text-white w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-accent mb-2"><AnimatedCounter end={40} suffix="+" /></h3>
                <h4 className="font-semibold text-lg mb-2">Years Experience</h4>
                <p className="text-sm text-blue-200">Serving the Madridejos community since 1982.</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-6 rotate-3">
                  <BadgeCheck className="text-white w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-accent mb-2">BSP</h3>
                <h4 className="font-semibold text-lg mb-2">Supervised</h4>
                <p className="text-sm text-blue-200">Operating strictly under Bangko Sentral ng Pilipinas.</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                  <HeartHandshake className="text-white w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-accent mb-2"><AnimatedCounter end={1000} suffix="+" /></h3>
                <h4 className="font-semibold text-lg mb-2">Happy Customers</h4>
                <p className="text-sm text-blue-200">Supporting farmers, entrepreneurs, and families.</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-6 rotate-3">
                  <ShieldCheck className="text-white w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-accent mb-2"><AnimatedCounter end={6} suffix="+" /></h3>
                <h4 className="font-semibold text-lg mb-2">Core Services</h4>
                <p className="text-sm text-blue-200">Committed to integrity and responsible banking.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Offerings</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Comprehensive Financial Solutions</h2>
            </Reveal>
            <Reveal>
              <Link href="/products">
                <Button variant="outline" className="gap-2">View All Services <ChevronRight className="w-4 h-4" /></Button>
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Savings Deposit", desc: "Secure your future with our accessible savings accounts with competitive interest rates.", link: "/products/savings" },
              { icon: PieChart, title: "Time Deposit", desc: "Maximize your earnings with fixed-term deposits offering higher yields.", link: "/products/time-deposit" },
              { icon: LeafyGreen, title: "Agricultural Loans", desc: "Empowering farmers and fisherfolk with flexible credit for production and equipment.", link: "/products/agricultural-loans" },
              { icon: Store, title: "Commercial Loans", desc: "Fueling the growth of local SMEs with working capital and term loan solutions.", link: "/products/commercial-loans" },
              { icon: Briefcase, title: "Salary Loans", desc: "Fast and convenient personal credit for employed individuals.", link: "/products/salary-loans" },
              { icon: Send, title: "Remittance", desc: "Safe, fast, and reliable money transfer services for you and your family.", link: "/products/remittance" },
            ].map((product, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-gray-200/40 hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col h-full">
                  <div className="w-14 h-14 bg-gray-50 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <product.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-8 flex-grow">{product.desc}</p>
                  <Link href={product.link} className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <Reveal delay={0.1} className="h-full">
              <div className="bg-secondary text-white rounded-3xl p-10 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-bl-full opacity-20"></div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-accent">Our Mission</h3>
                <p className="text-blue-50 text-lg leading-relaxed">
                  To provide accessible, reliable, and innovative banking services that promote financial inclusion and contribute to the sustainable economic development of the communities we serve.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2} className="h-full">
              <div className="bg-primary text-white rounded-3xl p-10 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full opacity-10"></div>
                <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                <p className="text-green-50 text-lg leading-relaxed">
                  To be the most trusted rural bank in Northern Cebu by delivering excellent financial services, fostering community growth, and creating lasting value for our customers and stakeholders.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.3} className="h-full">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold mb-6 text-secondary">Core Values</h3>
                <ul className="space-y-4">
                  {[
                    "Integrity & Ethics",
                    "Service Excellence",
                    "Accountability",
                    "Transparency",
                    "Community Partnership"
                  ].map((value, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="font-semibold text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}