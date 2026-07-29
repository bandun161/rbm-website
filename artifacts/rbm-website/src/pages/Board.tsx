import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import board1 from "@assets/generated_images/board-1.jpg";
import board2 from "@assets/generated_images/board-2.jpg";
import board3 from "@assets/generated_images/board-3.jpg";
import board4 from "@assets/generated_images/board-4.jpg";
import board5 from "@assets/generated_images/board-5.jpg";

const boardMembers = [
  {
    name: "Warlito D. Pasasadaba",
    position: "Acting Chairman",
    appointed: "April 1, 2025",
    image: board2,
  },
  {
    name: "Frederick F. Salazar",
    position: "Director",
    appointed: "April 1, 2025",
    image: board1,
  },
  {
    name: "Sisenia B. Chin",
    position: "Director",
    appointed: "April 1, 2025",
    image: board3,
  },
  {
    name: "Johan Ustin F. Sisno",
    position: "Independent Director",
    appointed: "April 1, 2025",
    image: board4,
  },
  {
    name: "Joanna Angelita F. Salazar",
    position: "Board Secretary",
    appointed: "April 1, 2025",
    image: board5,
  }
];

export default function Board() {
  useEffect(() => {
    document.title = "Board of Directors | Rural Bank of Madridejos";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Board of Directors</h1>
              <p className="text-xl text-blue-100">
                Guided by experienced leaders committed to ethical governance, sound banking principles, and community development.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Board Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-secondary mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">{member.position}</p>
                    <div className="inline-block bg-gray-50 rounded px-3 py-1 border border-gray-100">
                      <p className="text-xs text-gray-500 font-medium">Appointed: {member.appointed}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}