import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, Landmark, ArrowRight, ShieldCheck, PieChart, Users, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children, isActive, onClick }: { href: string; children: React.ReactNode; isActive: boolean; onClick?: () => void }) => (
  <Link href={href} onClick={onClick} className={cn(
    "text-sm font-medium transition-colors hover:text-primary relative group py-2",
    isActive ? "text-primary" : "text-gray-700"
  )}>
    {children}
    <span className={cn(
      "absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 transition-transform origin-left",
      isActive && "scale-x-100"
    )} />
  </Link>
);

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-md py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Landmark className="text-white h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-secondary text-lg leading-tight tracking-tight">RURAL BANK OF MADRIDEJOS</span>
            <span className="text-xs text-primary font-semibold uppercase tracking-wider">(CEBU), INC.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink href="/" isActive={location === "/"}>Home</NavLink>
          <NavLink href="/about" isActive={location === "/about"}>About Us</NavLink>
          
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2",
              location.startsWith("/products") ? "text-primary" : "text-gray-700"
            )}>
              Products & Services <ChevronDown className="h-4 w-4" />
            </button>
            
            {/* Mega Menu Dropdown */}
            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2">
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Deposits</h3>
                  <div className="space-y-3">
                    <Link href="/products/savings" className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                      <div className="p-2 bg-green-50 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Savings Deposit</p>
                        <p className="text-xs text-gray-500">Secure your future</p>
                      </div>
                    </Link>
                    <Link href="/products/time-deposit" className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                      <div className="p-2 bg-green-50 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <PieChart className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Time Deposit</p>
                        <p className="text-xs text-gray-500">Grow your money faster</p>
                      </div>
                    </Link>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Loans & Services</h3>
                  <div className="space-y-3">
                    <Link href="/products/agricultural-loans" className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                      <div className="p-2 bg-blue-50 rounded-md text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Agricultural Loans</p>
                      </div>
                    </Link>
                    <Link href="/products/commercial-loans" className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                      <div className="p-2 bg-blue-50 rounded-md text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Commercial Loans</p>
                      </div>
                    </Link>
                    <Link href="/products/salary-loans" className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                      <div className="p-2 bg-blue-50 rounded-md text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Salary Loans</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-span-2 pt-4 mt-2 border-t border-gray-100 flex justify-between items-center">
                  <Link href="/products" className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    View all products <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <NavLink href="/board" isActive={location === "/board"}>Board of Directors</NavLink>
          <NavLink href="/news" isActive={location === "/news"}>News</NavLink>
          <NavLink href="/calculator" isActive={location === "/calculator"}>Calculator</NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="outline" className="border-gray-200">Contact Us</Button>
          </Link>
          <Link href="/contact">
            <Button>Open an Account</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="flex flex-col p-4 space-y-4">
            <NavLink href="/" isActive={location === "/"}>Home</NavLink>
            <NavLink href="/about" isActive={location === "/about"}>About Us</NavLink>
            
            <div className="space-y-2">
              <span className="text-sm font-bold text-gray-900 uppercase tracking-wider block mb-2">Products & Services</span>
              <div className="pl-4 border-l-2 border-gray-100 space-y-3">
                <NavLink href="/products/savings" isActive={location === "/products/savings"}>Savings Deposit</NavLink>
                <NavLink href="/products/time-deposit" isActive={location === "/products/time-deposit"}>Time Deposit</NavLink>
                <NavLink href="/products/agricultural-loans" isActive={location === "/products/agricultural-loans"}>Agricultural Loans</NavLink>
                <NavLink href="/products/commercial-loans" isActive={location === "/products/commercial-loans"}>Commercial Loans</NavLink>
                <NavLink href="/products/salary-loans" isActive={location === "/products/salary-loans"}>Salary Loans</NavLink>
                <NavLink href="/products/remittance" isActive={location === "/products/remittance"}>Remittance</NavLink>
              </div>
            </div>

            <NavLink href="/board" isActive={location === "/board"}>Board of Directors</NavLink>
            <NavLink href="/news" isActive={location === "/news"}>News</NavLink>
            <NavLink href="/careers" isActive={location === "/careers"}>Careers</NavLink>
            <NavLink href="/calculator" isActive={location === "/calculator"}>Calculator</NavLink>
            <NavLink href="/contact" isActive={location === "/contact"}>Contact Us</NavLink>

            <div className="pt-4 grid gap-2">
              <Link href="/contact"><Button className="w-full">Open an Account</Button></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}