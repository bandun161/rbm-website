import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import branchInterior from "@assets/1000003118_1785304506090.jpg";
import { Building2, Calendar, Target, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Rural Bank of Madridejos";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 rounded-l-full blur-3xl transform translate-x-1/3"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Corporate Profile</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                A legacy of trust, stability, and service excellence in Northern Cebu since 1982.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Corporate Info Box */}
      <section className="py-12 -mt-12 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Corporate Name</h3>
                <p className="text-xl font-bold text-secondary">Rural Bank of Madridejos (Cebu), Inc.</p>
              </div>
              <div className="hidden md:block w-px bg-gray-200"></div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Principal Office</h3>
                <p className="text-lg text-gray-700">JD Villacarlos Street, Poblacion,<br/>Madridejos, Cebu</p>
              </div>
              <div className="hidden md:block w-px bg-gray-200"></div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Email</h3>
                <p className="text-lg text-primary font-medium">rbmlawis82@yahoo.com</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <Reveal direction="right">
              <div className="prose prose-lg text-gray-600">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6 not-prose">Our History</h2>
                <p className="mb-6">
                  The Bank was incorporated and registered with the Securities and Exchange Commission on July 12, 1982, and was granted a Certificate of Authority by the Central Bank of the Philippines (now Bangko Sentral ng Pilipinas) on March 18, 1982, pursuant to Republic Act No. 720, as amended, authorizing it to operate as a rural bank.
                </p>
                <p className="mb-6">
                  The Bank's corporate existence has since been extended for another fifty (50) years, cementing our long-term commitment to the community.
                </p>
                <p>
                  Owned by responsible shareholders committed to sound banking principles, ethical governance, and community development, the Bank continues to fulfill its social responsibility to depositors, borrowers, and the communities it serves.
                </p>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-2xl transform translate-x-4 translate-y-4 opacity-10"></div>
                <img src={branchInterior} alt="Bank Branch" className="relative rounded-2xl shadow-xl w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Our Milestones</h2>
            </Reveal>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
              {/* Desktop center line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
              
              <Reveal delay={0.1}>
                <div className="relative md:flex items-center justify-between w-full">
                  <div className="hidden md:block w-5/12 text-right pr-8">
                    <h3 className="text-2xl font-bold text-primary">March 18, 1982</h3>
                  </div>
                  <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white shadow"></div>
                  <div className="md:w-5/12 md:pl-8">
                    <div className="md:hidden text-primary font-bold mb-2">March 18, 1982</div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h4 className="font-bold text-secondary mb-2">Certificate of Authority</h4>
                      <p className="text-gray-600 text-sm">Granted by the Central Bank of the Philippines.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative md:flex items-center justify-between w-full flex-row-reverse">
                  <div className="hidden md:block w-5/12 text-left pl-8">
                    <h3 className="text-2xl font-bold text-primary">July 12, 1982</h3>
                  </div>
                  <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white shadow"></div>
                  <div className="md:w-5/12 md:pr-8 text-left md:text-right">
                    <div className="md:hidden text-primary font-bold mb-2">July 12, 1982</div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h4 className="font-bold text-secondary mb-2">SEC Registration</h4>
                      <p className="text-gray-600 text-sm">Incorporated and registered with the Securities and Exchange Commission.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="relative md:flex items-center justify-between w-full">
                  <div className="hidden md:block w-5/12 text-right pr-8">
                    <h3 className="text-2xl font-bold text-primary">October 10, 1982</h3>
                  </div>
                  <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white shadow"></div>
                  <div className="md:w-5/12 md:pl-8">
                    <div className="md:hidden text-primary font-bold mb-2">October 10, 1982</div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h4 className="font-bold text-secondary mb-2">Operations Commenced</h4>
                      <p className="text-gray-600 text-sm">Officially opened doors as Rural Bank of Madridejos (Cebu), Inc.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="relative md:flex items-center justify-between w-full flex-row-reverse">
                  <div className="hidden md:block w-5/12 text-left pl-8">
                    <h3 className="text-2xl font-bold text-accent">Today</h3>
                  </div>
                  <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-white shadow animate-pulse"></div>
                  <div className="md:w-5/12 md:pr-8 text-left md:text-right">
                    <div className="md:hidden text-accent font-bold mb-2">Today</div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-accent md:border-l-0 md:border-r-4 md:border-r-accent">
                      <h4 className="font-bold text-secondary mb-2">Decades of Trust</h4>
                      <p className="text-gray-600 text-sm">Continuing more than 40 years of trusted community banking in Northern Cebu.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Meet the Leaders Guiding Our Bank</h2>
            <Link href="/board" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              View Board of Directors <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}