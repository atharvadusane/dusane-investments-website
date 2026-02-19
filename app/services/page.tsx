import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    title: "Mutual Funds Advisory",
    description: [
      "Goal-based mutual fund selection.",
      "SIP and lump-sum investment guidance.",
      "Portfolio review and rebalancing.",
    ],
  },
  {
    title: "Long-Term Wealth Creation",
    description: [
      "Disciplined investing for financial independence.",
      "Retirement and long-term goal planning.",
    ],
  },
  {
    title: "Child Future Planning",
    description: [
      "Education and milestone planning.",
      "Long-term investments for children’s future needs.",
    ],
  },
  {
    title: "Insurance & Protection Planning",
    description: [
      "Life insurance and term plan solutions.",
      "Income protection and risk coverage.",
      "Balancing protection with growth.",
    ],
  },
  {
    title: "Tax-Efficient Investment Planning",
    description: [
      "Investments aligned with tax efficiency.",
      "Long-term, compliant wealth structuring.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Our Services | Mutual Funds, Wealth & Investment Planning",
  description: "Explore our investment services including mutual funds, long-term wealth creation, child future planning, and insurance solutions.",
};

export default function Services() {
  return (
    <main className={`min-h-screen bg-[#F9FAFB] text-[#0B1F3A] ${inter.className}`}>
      {/* 1. Page Header */}
      <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold text-[#0B1F3A] mb-6`}>
            Our Services
          </h1>
          <p className="text-xl text-[#6B7280] font-medium">
            Structured financial solutions for every stage of life
          </p>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h3 className={`${playfair.className} text-2xl font-bold text-[#0B1F3A] mb-4`}>
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.description.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8A951] mt-2" />
                      <span className="text-[#6B7280]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Advisory Philosophy Section */}
      <section className="py-20 lg:py-24 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#0B1F3A] mb-6`}>
            Our Advisory Promise
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            We do not believe in one-size-fits-all solutions. Every recommendation is aligned with your goals, time horizon, and risk profile.
          </p>
        </div>
      </section>

      {/* 4. Call To Action */}
      <section className="py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#0B1F3A] mb-8`}>
            Need clarity on where to start?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#0B1F3A] text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#152a4d] transition-colors"
          >
            Talk to an Advisor
          </Link>
        </div>
      </section>
    </main>
  );
}