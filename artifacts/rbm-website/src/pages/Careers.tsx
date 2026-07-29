import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers | Rural Bank of Madridejos";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 flex flex-col">
      <Navbar />
      
      <section className="bg-secondary text-white py-20 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Briefcase size={36} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Build Your Career With Us</h1>
              <p className="text-xl text-blue-100 mb-12">
                Join a team dedicated to making a real difference in the local community through excellent financial service.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-white">No Open Positions Currently</h3>
                <p className="text-blue-100 mb-8">
                  While we don't have any specific openings right now, we are always looking for talented individuals who share our values. 
                </p>
                <p className="text-gray-300 text-sm mb-6">
                  You may send your resume to <span className="text-primary font-semibold">rbmlawis82@yahoo.com</span> and we'll keep it in our active file for future opportunities.
                </p>
                <Button variant="outlineWhite">Email Your Resume</Button>
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