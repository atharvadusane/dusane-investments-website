import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const principles = [
  {
    title: "Goal-Based Investing",
    description: "Every investment should serve a specific life goal, whether it's retirement, education, or legacy planning.",
  },
  {
    title: "Long-Term Discipline",
    description: "Wealth is created over decades, not days. We prioritize time in the market over timing the market.",
  },
  {
    title: "Risk Management First",
    description: "Protecting your capital is our primary duty. We focus on managing downside risk before chasing upside returns.",
  },
  {
    title: "Consistency Over Timing",
    description: "Regular, disciplined investing smooths out market volatility and builds a robust portfolio over time.",
  },
  {
    title: "Simplicity Over Complexity",
    description: "We avoid unnecessary complexity. Transparent, understandable investment strategies often yield the best results.",
  },
];

export const metadata: Metadata = {
  title: "Investment Philosophy | Disciplined Long-Term Investing",
  description: "Our investment philosophy focuses on goal-based planning, risk management, and disciplined long-term wealth creation.",
};

export default function Philosophy() {
  return (
    <main className={`min-h-screen bg-[#F9FAFB] text-[#0B1F3A] ${inter.className}`}>
      {/* 1. Page Header */}
      <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold text-[#0B1F3A] mb-6`}>
            Investment Philosophy
          </h1>
          <p className="text-xl text-[#6B7280] font-medium">
            A disciplined approach to long-term wealth creation
          </p>
        </div>
      </section>

      {/* 2. Core Principles Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className={`${playfair.className} text-2xl font-bold text-[#0B1F3A] mb-3`}>
                  {principle.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Explanation Section */}
      <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#0B1F3A] mb-6`}>
            Our Approach
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Markets fluctuate, but disciplined investing aligned with life goals has consistently proven to be the most reliable path to long-term wealth creation. Our focus remains on protecting capital while enabling steady growth.
          </p>
        </div>
      </section>

      {/* 4. Reassurance Section */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className={`${playfair.className} text-2xl sm:text-3xl font-medium leading-relaxed`}>
            &ldquo;Investing is not about reacting to noise, but staying committed to a well-structured plan.&rdquo;
          </p>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#0B1F3A] mb-8`}>
            Plan with clarity and confidence
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#0B1F3A] text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#152a4d] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}