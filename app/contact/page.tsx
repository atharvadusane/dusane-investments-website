import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact Dusane Investments | Speak With an Investment Advisor",
  description: "Get in touch with Dusane Investments for professional, long-term financial planning and investment guidance.",
};

export default function Contact() {
  return (
    <main className={`min-h-screen bg-[#F9FAFB] text-[#0B1F3A] ${inter.className}`}>
      {/* 1. Page Header */}
      <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold text-[#0B1F3A] mb-6`}>
            Contact Us
          </h1>
          <p className="text-xl text-[#6B7280] font-medium">
            Let’s plan your financial future together
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* 2. Contact Information Section */}
          <div>
            <h2 className={`${playfair.className} text-3xl font-bold text-[#0B1F3A] mb-8`}>
              Get in Touch
            </h2>
            <p className="text-lg text-[#6B7280] mb-12 leading-relaxed">
              Reach out to us for a consultation or any investment-related queries. We are here to help you navigate your financial journey.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-[#0B1F3A] text-lg mb-2">Office Location</h3>
                <p className="text-[#6B7280]">
                  Bajirao Nagar, Tidke Colony,<br />
                  Nashik City - 422008
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3A] text-lg mb-2">Email Address</h3>
                <p className="text-[#6B7280]">
                  atharvadusane@gmail.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3A] text-lg mb-2">Phone Number</h3>
                <p className="text-[#6B7280]">
                  +91 87934 94663
                </p>
              </div>
            </div>

            {/* 4. WhatsApp CTA Section */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <p className="text-[#6B7280] mb-4">Prefer a quick conversation?</p>
              <a href="https://wa.me/+918793494663" className="inline-block border border-[#0B1F3A] text-[#0B1F3A] px-6 py-3 rounded text-base font-medium hover:bg-gray-50 transition-colors">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* 3. Contact Form (UI Only) */}
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
            <h2 className={`${playfair.className} text-2xl font-bold text-[#0B1F3A] mb-6`}>
              Request a Consultation
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0B1F3A] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#0B1F3A] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0B1F3A] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] outline-none transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-[#0B1F3A] text-white px-6 py-3.5 rounded text-base font-medium hover:bg-[#152a4d] transition-colors"
              >
                Request a Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}