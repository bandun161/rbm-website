import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  PieChart, 
  Landmark, 
  DollarSign, 
  Users, 
  Send,
  ArrowRight
} from "lucide-react";

const products = [
  { 
    id: "savings",
    icon: ShieldCheck, 
    title: "Savings Deposit", 
    desc: "Secure your future with our accessible savings accounts.",
    features: ["No maintaining balance", "Passbook issuance", "PDIC insured up to PHP 1,000,000", "Earns interest"]
  },
  { 
    id: "time-deposit",
    icon: PieChart, 
    title: "Time Deposit", 
    desc: "Maximize your earnings with fixed-term deposits offering higher yields.",
    features: ["Flexible terms (30 to 360 days)", "Higher interest rates", "Certificate issued", "PDIC insured"]
  },
  { 
    id: "agricultural-loans",
    icon: Landmark, 
    title: "Agricultural Loans", 
    desc: "Empowering farmers and fisherfolk with flexible credit.",
    features: ["Competitive rates", "Flexible terms based on crop cycle", "For production/equipment"]
  },
  { 
    id: "commercial-loans",
    icon: DollarSign, 
    title: "Commercial Loans", 
    desc: "Fueling the growth of local SMEs with working capital.",
    features: ["Working capital financing", "Term loans", "Collateral-based", "Flexible repayment"]
  },
  { 
    id: "salary-loans",
    icon: Users, 
    title: "Salary Loans", 
    desc: "Fast and convenient personal credit for employed individuals.",
    features: ["Based on salary", "Fast processing", "Minimal requirements", "Salary deduction option"]
  },
  { 
    id: "remittance",
    icon: Send, 
    title: "Remittance Services", 
    desc: "Safe, fast, and reliable money transfer services.",
    features: ["Fast domestic transfers", "Partner network", "Competitive fees", "Reliable tracking", "POS withdrawals"]
  },
];

export default function ProductsOverview() {
  useEffect(() => {
    document.title = "Products & Services | Rural Bank of Madridejos";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Products & Services</h1>
              <p className="text-xl text-blue-100">
                Financial solutions designed to support your personal goals and grow your business.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-50 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors group-hover:scale-110 duration-300">
                    <product.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.desc}</p>
                  
                  <ul className="space-y-2 mb-8 flex-grow">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      View Details
                    </Button>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Not sure which product is right for you?</h2>
            <p className="text-green-50 mb-8 max-w-2xl mx-auto text-lg">Our friendly staff is ready to help you find the perfect financial solution tailored to your needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Contact Us Today <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}