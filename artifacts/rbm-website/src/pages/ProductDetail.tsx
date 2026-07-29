import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { 
  ShieldCheck, 
  PieChart, 
  Landmark, 
  DollarSign, 
  Users, 
  Send,
  CheckCircle2,
  ChevronRight,
  HelpCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productData = {
  "savings": {
    title: "Savings Deposit",
    icon: ShieldCheck,
    tagline: "Build your financial foundation.",
    overview: "A safe, accessible way to store your money while earning interest. Our Savings Deposit account is designed for individuals, families, and organizations who want a reliable place to grow their funds without the worry of maintaining balances.",
    features: [
      "No maintaining balance required",
      "Passbook issuance for easy tracking",
      "Competitive interest rates",
      "Insured by PDIC up to PHP 500,000",
      "Easy deposit and withdrawal process"
    ],
    benefits: "Enjoy peace of mind knowing your hard-earned money is secure. With no maintaining balance, it's perfect for first-time savers and everyday transactions.",
    eligibility: [
      "Filipino citizens at least 18 years old (minors can open In-Trust-For accounts)",
      "Two (2) valid government-issued IDs",
      "Proof of billing address",
      "Initial deposit amount"
    ],
    faqs: [
      { q: "Is there a maintaining balance?", a: "No, our regular savings account does not require a maintaining balance." },
      { q: "How much is the initial deposit?", a: "Please visit our branch or contact us for the current initial deposit requirement." },
      { q: "Is my deposit insured?", a: "Yes, all deposit accounts are insured by the Philippine Deposit Insurance Corporation (PDIC) up to PHP 500,000 per depositor." }
    ]
  },
  "time-deposit": {
    title: "Time Deposit",
    icon: PieChart,
    tagline: "Watch your money grow faster.",
    overview: "Maximize the return on your savings with our Time Deposit account. By committing your funds for a fixed period, you earn significantly higher interest rates than a regular savings account.",
    features: [
      "Various terms available: 30, 60, 90, 180, and 360 days",
      "Higher interest rates than standard savings",
      "Certificate of Time Deposit issued",
      "Automatic roll-over option",
      "Insured by PDIC up to PHP 500,000"
    ],
    benefits: "Guaranteed returns for your idle funds. Ideal for medium to long-term financial goals where you don't need immediate access to your cash.",
    eligibility: [
      "Existing Savings Account holders",
      "Two (2) valid government-issued IDs",
      "Minimum placement amount applies"
    ],
    faqs: [
      { q: "Can I withdraw before maturity?", a: "Pre-termination is allowed, but it will be subject to a penalty and a lower interest rate." },
      { q: "What happens when it matures?", a: "You can choose to withdraw the principal and interest, or let it automatically roll over for another term." },
      { q: "What terms are available?", a: "We offer terms of 30, 60, 90, 180, and 360 days." }
    ]
  },
  "agricultural-loans": {
    title: "Agricultural Loans",
    icon: Landmark,
    tagline: "Cultivating growth for farmers.",
    overview: "Designed specifically for the backbone of our local economy. Our Agricultural Loans provide the necessary capital for crop production, livestock raising, and equipment acquisition for farmers and fisherfolk in Northern Cebu.",
    features: [
      "Competitive interest rates",
      "Flexible payment terms matched to crop/harvest cycles",
      "For crop production, livestock, and fishing",
      "Supervised and compliant with BSP regulations",
      "Dedicated loan officers for assistance"
    ],
    benefits: "Get the capital you need when you need it. Payments are structured around your harvest timeline so you aren't burdened during planting season.",
    eligibility: [
      "Must be an active farmer/fisherfolk in the community",
      "Barangay clearance/certificate",
      "Proof of farm land ownership or lease agreement",
      "Co-maker may be required"
    ],
    faqs: [
      { q: "How are payments scheduled?", a: "Payment terms are tailored to match your harvest or production cycle." },
      { q: "Can I use it to buy a tractor?", a: "Yes, agricultural loans can be used for acquiring farm machinery and equipment." },
      { q: "Do I need collateral?", a: "Depending on the loan amount, agricultural land, equipment, or acceptable co-makers may be required." }
    ]
  },
  "commercial-loans": {
    title: "Commercial Loans",
    icon: DollarSign,
    tagline: "Empowering local businesses.",
    overview: "Fuel the growth of your enterprise with our Commercial Loans. Whether you need working capital for inventory, funds for expansion, or money to purchase new equipment, we have a solution for your SME.",
    features: [
      "Working capital financing",
      "Term loans for expansion/equipment",
      "Flexible repayment options (monthly/quarterly)",
      "Collateral-based lending",
      "Personalized service from our account officers"
    ],
    benefits: "Expand your operations, manage cash flow during slow seasons, or take advantage of bulk inventory discounts with our accessible commercial credit.",
    eligibility: [
      "Business operating profitably for at least 2 years",
      "DTI/SEC Registration",
      "Mayor's/Business Permit",
      "Audited Financial Statements",
      "Acceptable real estate collateral"
    ],
    faqs: [
      { q: "What is the maximum loan amount?", a: "Loan amounts depend on your business capacity and the appraised value of the collateral offered." },
      { q: "How long is the processing time?", a: "Typically 7-14 working days upon submission of complete documentary requirements." },
      { q: "Can a startup apply?", a: "Currently, we require businesses to have at least a 2-year track record of profitable operations." }
    ]
  },
  "salary-loans": {
    title: "Salary Loans",
    icon: Users,
    tagline: "Fast cash for immediate needs.",
    overview: "A quick and convenient personal loan facility for employed individuals. Whether for tuition fees, emergency medical expenses, or home repairs, our salary loan gets you the funds fast.",
    features: [
      "Loan amount based on monthly basic salary",
      "Fast processing and approval",
      "Flexible terms (up to 24 months)",
      "Minimal documentary requirements",
      "Convenient salary deduction arrangement (for accredited companies)"
    ],
    benefits: "No need for real estate collateral. Get access to funds quickly with a straightforward application process.",
    eligibility: [
      "Regular/permanent employee for at least 1 year",
      "Certificate of Employment with Compensation",
      "Latest 1-month payslip",
      "Company ID and Government ID"
    ],
    faqs: [
      { q: "How do I pay?", a: "Payments are typically made through post-dated checks or salary deduction if your employer is accredited with us." },
      { q: "How much can I borrow?", a: "The amount is usually a multiple of your basic monthly salary, subject to our credit evaluation." },
      { q: "Do I need a co-maker?", a: "A co-maker may be required depending on the loan amount and your credit profile." }
    ]
  },
  "remittance": {
    title: "Remittance Services",
    icon: Send,
    tagline: "Connecting families.",
    overview: "Send and receive money safely and quickly. We partner with reliable domestic remittance networks to ensure your hard-earned money reaches your loved ones without delay.",
    features: [
      "Fast domestic money transfers",
      "Wide partner network across the Philippines",
      "Safe and reliable transaction tracking",
      "Competitive and transparent fees",
      "Instant payout at our branch"
    ],
    benefits: "No need to travel far. Receive your remittances right here in Madridejos safely and conveniently.",
    eligibility: [
      "Valid Government ID of the sender/receiver",
      "Reference Number for claiming"
    ],
    faqs: [
      { q: "What remittance partners do you have?", a: "Please visit our branch for the updated list of our domestic remittance partners." },
      { q: "How fast can I claim the money?", a: "Remittances are usually available for claiming within minutes after the sender completes the transaction." },
      { q: "What IDs are accepted for claiming?", a: "We accept primary government-issued IDs such as Passport, Driver's License, UMID, Postal ID, and PhilSys ID." }
    ]
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:slug");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!match || !params?.slug) return null;

  const product = productData[params.slug as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1>Product not found</h1>
        <Link href="/products" className="text-primary mt-4 inline-block">Back to products</Link>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/products" className="hover:text-primary">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Reveal direction="right" className="md:w-2/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6">
                <Icon size={16} />
                Products & Services
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{product.title}</h1>
              <p className="text-xl text-blue-100 font-medium mb-6">{product.tagline}</p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                {product.overview}
              </p>
            </Reveal>
            <Reveal direction="left" className="md:w-1/3 w-full">
              <div className="bg-white rounded-2xl p-8 text-center text-secondary shadow-2xl shadow-black/20">
                <Icon size={64} className="text-primary mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-6">Ready to apply?</h3>
                <Link href="/contact">
                  <Button className="w-full h-12 text-base">Open an Account</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal>
              <h2 className="text-2xl font-serif font-bold text-secondary mb-6 border-b border-gray-100 pb-4">Key Features</h2>
              <ul className="space-y-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-serif font-bold text-secondary mb-6 mt-12 border-b border-gray-100 pb-4">Benefits</h2>
              <p className="text-gray-600 text-lg leading-relaxed bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                {product.benefits}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-2xl font-serif font-bold text-secondary mb-6 border-b border-gray-100 pb-4">Eligibility & Requirements</h2>
              <ul className="space-y-3 mb-12">
                {product.eligibility.map((req, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="text-primary" size={28} />
                  <h2 className="text-2xl font-serif font-bold text-secondary">Frequently Asked Questions</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  {product.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left font-semibold text-gray-800">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-base leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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