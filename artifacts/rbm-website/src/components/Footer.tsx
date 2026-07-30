import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import rbmLogo from "@assets/Screenshot_2026-05-28_092603_1785304319721.png";

export function Footer() {
  return (
    <footer className="bg-[#0b2848] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img
                src={rbmLogo}
                alt="Rural Bank of Madridejos (Cebu), Inc. Logo"
                className="h-12 w-12 object-contain flex-shrink-0 brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-white text-lg leading-tight tracking-tight">RURAL BANK OF MADRIDEJOS</span>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">(CEBU), INC.</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              A trusted community bank serving Northern Cebu for over four decades, committed to fostering financial inclusion and community growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/board" className="text-gray-300 hover:text-primary transition-colors text-sm">Board of Directors</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-primary transition-colors text-sm">News & Advisories</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/calculator" className="text-gray-300 hover:text-primary transition-colors text-sm">Calculators</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products/savings" className="text-gray-300 hover:text-primary transition-colors text-sm">Savings Deposit</Link></li>
              <li><Link href="/products/time-deposit" className="text-gray-300 hover:text-primary transition-colors text-sm">Time Deposit</Link></li>
              <li><Link href="/products/agricultural-loans" className="text-gray-300 hover:text-primary transition-colors text-sm">Agricultural Loans</Link></li>
              <li><Link href="/products/commercial-loans" className="text-gray-300 hover:text-primary transition-colors text-sm">Commercial Loans</Link></li>
              <li><Link href="/products/salary-loans" className="text-gray-300 hover:text-primary transition-colors text-sm">Salary Loans</Link></li>
              <li><Link href="/products/remittance" className="text-gray-300 hover:text-primary transition-colors text-sm">Remittance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">JD Villacarlos Street, Poblacion, Madridejos, Cebu, Philippines</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">rbmlawis82@yahoo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">0917-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">Mon–Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2026 Rural Bank of Madridejos (Cebu), Inc. All Rights Reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Regulated by the Bangko Sentral ng Pilipinas
            </div>
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] inline-block"></span>
              Deposits are insured by PDIC up to PHP 1,000,000 per depositor
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}