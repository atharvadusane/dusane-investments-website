import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import TestimonialsSection from "./components/TestimonialsSection";
import Image from "next/image";


// Initialize fonts
const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dusane Investments | Trusted Financial Planning for Over 40 Years",
  description: "Disciplined, long-term investment planning with over 40 years of experience. Helping families build, protect, and grow wealth with confidence.",
};

export default function Home() {
  return (
    <main className={`min-h-screen bg-[#F9FAFB] text-[#0B1F3A] ${inter.className}`}>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <h1 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#0B1F3A] mb-6`}>
              40+ Years of Trusted Financial Planning
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7280] mb-4 font-medium">
              Helping families build, protect, and grow wealth through disciplined, long-term investing.
            </p>
            <p className="text-base text-[#6B7280] mb-8 leading-relaxed">
              From mutual funds and insurance to child future planning and long-term wealth creation. We simplify investments so you can focus on living your life to the fullest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/+918793494663" className="inline-block bg-[#0B1F3A] text-white px-8 py-3.5 rounded text-base font-medium hover:bg-[#152a4d] transition-colors text-center">
                Schedule Free Consultation
              </a>
              <a href="https://wa.me/+918793494663" className="inline-block border border-[#0B1F3A] text-[#0B1F3A] px-8 py-3.5 rounded text-base font-medium hover:bg-gray-50 transition-colors text-center">
                WhatsApp an Advisor
              </a>
            </div>
          </div>
          {/* Placeholder Div */}
          <div className="h-[400px] lg:h-[500px] w-full bg-[#E5E7EB] rounded-lg flex items-center justify-center text-[#6B7280]">
            <span className="text-sm font-medium">Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "40+ Years", subtitle: "Experience" },
              { title: "9-Digit", subtitle: "Portfolio Under Advisory" },
              { title: "Generational", subtitle: "Client Relationships" },
            ].map((metric, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-[#F9FAFB]">
                <div className={`${playfair.className} text-3xl sm:text-4xl font-bold text-[#C8A951] mb-2`}>
                  {metric.title}
                </div>
                <div className="text-[#0B1F3A] font-medium text-lg">
                  {metric.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-6`}>
            A Legacy of Trust Built Over Decades
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed">
            Dusane Investments has been guiding investors for over 40 years with a disciplined, goal-based approach to wealth creation.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold text-[#0B1F3A]`}>
              Our Expertise
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Mutual Funds Advisory",
              "Long-Term Wealth Creation",
              "Child Future Planning",
              "Insurance & Protection",
              "Tax-Efficient Investments",
            ].map((service, idx) => (
              <div key={idx} className="p-8 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow bg-[#F9FAFB]">
                <h3 className={`${playfair.className} text-xl font-bold text-[#0B1F3A] mb-3`}>
                  {service}
                </h3>
                <p className="text-[#6B7280]">
                  Expert guidance tailored to your financial goals and risk appetite.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Reassurance Section */}
      <section className="py-20 lg:py-28 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold mb-6`}>
            Investing doesn’t have to be complicated.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            You don’t need to track markets daily or decode financial jargon. With the right guidance, your financial future can be secure and stress-free.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 lg:py-28 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-10`}>
            Let’s Plan Your Future — The Right Way
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/+918793494663" className="inline-block bg-[#0B1F3A] text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#152a4d] transition-colors">
              Book a Consultation
            </a>
            <Link href="/contact" className="inline-block border border-[#0B1F3A] text-[#0B1F3A] px-8 py-4 rounded text-lg font-medium hover:bg-gray-50 transition-colors">
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
