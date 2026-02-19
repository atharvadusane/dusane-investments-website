import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

// Initialize fonts
const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Dusane Investments | 40+ Years of Investment Experience",
  description: "Learn about Dusane Investments — a legacy-driven investment advisory firm with decades of experience in long-term wealth planning.",
};

export default function About() {
  return (
    <main className={`min-h-screen bg-[#F9FAFB] text-[#0B1F3A] ${inter.className}`}>

      {/* 1. Page Header */}
      <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold text-[#0B1F3A] mb-6`}>
            About Dusane Investments
          </h1>
          <p className="text-xl text-[#6B7280] font-medium">
            Over four decades of trusted financial guidance
          </p>
        </div>
      </section>

      {/* 2. Legacy Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#0B1F3A] mb-6`}>
            A Legacy Built on Trust
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Dusane Investments has been serving investors for over 40 years, helping families plan, protect, and grow their wealth through disciplined and goal-based investing.
          </p>
        </div>
      </section>

      {/* 3. Experience & Philosophy */}
      <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ul className="space-y-6">
            {[
              "40+ years in financial services",
              "9-digit portfolio under advisory",
              "Focus on long-term wealth creation",
              "Protection before returns",
              "Ethical and transparent advisory",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8A951] mt-2.5" />
                <span className="text-lg text-[#0B1F3A] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Client-Centric Approach */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#0B1F3A] mb-6`}>
            Our Approach
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            We believe every investor is unique. Our process begins with understanding your goals, risk appetite, and life stage before recommending any investment solution.
          </p>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="py-20 bg-[#0B1F3A] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className={`${playfair.className} text-2xl sm:text-3xl font-bold mb-8 leading-tight`}>
            Your financial journey deserves experience, discipline, and care.
          </p>
          <a href="https://wa.me/+918793494663" className="inline-block bg-white text-[#0B1F3A] px-8 py-3.5 rounded text-base font-medium hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
