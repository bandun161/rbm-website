import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";

export default function News() {
  useEffect(() => {
    document.title = "News & Advisories | Rural Bank of Madridejos";
    window.scrollTo(0, 0);
  }, []);

  const newsItems = [
    {
      date: "May 15, 2026",
      category: "Advisory",
      title: "Branch Operations During Upcoming Holidays",
      excerpt: "Please be guided by our branch schedule for the upcoming national holidays this June. ATMs will remain fully operational."
    },
    {
      date: "March 18, 2026",
      category: "News",
      title: "Celebrating 44 Years of Community Banking",
      excerpt: "The Rural Bank of Madridejos marks its 44th anniversary with special promotions and a community outreach program in Northern Cebu."
    },
    {
      date: "January 10, 2026",
      category: "Update",
      title: "New Enhanced Time Deposit Rates",
      excerpt: "Maximize your savings with our newly updated Time Deposit rates for 2026. Visit our branch to learn more about these competitive yields."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">News & Advisories</h1>
              <p className="text-xl text-blue-100">
                Stay updated with the latest announcements, updates, and events from Rural Bank of Madridejos.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {newsItems.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-semibold text-primary">{item.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{item.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 hover:text-primary transition-colors cursor-pointer">{item.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{item.excerpt}</p>
                  <button className="text-primary font-semibold hover:underline">Read full article →</button>
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