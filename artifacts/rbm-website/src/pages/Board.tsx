import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";

const boardMembers = [
  {
    name: "Warlito D. Pasasadaba",
    position: "Acting Chairman",
    appointed: "April 1, 2025",
    initials: "WP",
    color: "bg-[#0F3D6E]",
  },
  {
    name: "Frederick F. Salazar",
    position: "Director",
    appointed: "April 1, 2025",
    initials: "FS",
    color: "bg-[#16A34A]",
  },
  {
    name: "Sisenia B. Chin",
    position: "Director",
    appointed: "April 1, 2025",
    initials: "SC",
    color: "bg-[#0F3D6E]",
  },
  {
    name: "Johan Ustin F. Sisno",
    position: "Independent Director",
    appointed: "April 1, 2025",
    initials: "JS",
    color: "bg-[#16A34A]",
  },
  {
    name: "Joanna Angelita F. Salazar",
    position: "Board Secretary",
    appointed: "April 1, 2025",
    initials: "JA",
    color: "bg-[#0F3D6E]",
  },
];

function AvatarPlaceholder({ initials, color }: { initials: string; color: string }) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${color}`}>
      <span className="text-white font-serif font-bold text-6xl tracking-wide select-none">
        {initials}
      </span>
    </div>
  );
}

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
                    <AvatarPlaceholder initials={member.initials} color={member.color} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
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
