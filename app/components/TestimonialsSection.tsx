"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";


const playfair = Playfair_Display({ subsets: ["latin"] });

const testimonials = [
  { name: "Rajesh & Meera K.", role: "Long-term Investors", text: "Dusane Investments has guided our family’s investments with clarity and discipline for years. Their approach gives us confidence and peace of mind.", initials: "RM" },
  { name: "Anjali S.", role: "Professional & Parent", text: "What we value most is their long-term thinking and transparent advice. We never feel rushed or pressured into making decisions.", initials: "AS" },
  { name: "Vikram D.", role: "Retirement Planner", text: "Their guidance helped us plan for our child’s future with confidence and structure. A truly trustworthy partner for wealth creation.", initials: "VD" },
  { name: "Suresh P.", role: "Business Owner", text: "Managing business finances and personal wealth was overwhelming until I met the team. They simplified everything.", initials: "SP" },
  { name: "Priya M.", role: "First-time Investor", text: "I was intimidated by the market, but their patient explanation and goal-based approach made me feel secure starting out.", initials: "PM" },
  { name: "Amit & Neha", role: "Family Planner", text: "We wanted to ensure our children's education was secured. The roadmap they provided is clear, realistic, and reassuring.", initials: "AN" },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clamp index if switching from mobile to desktop to avoid empty slides
  useEffect(() => {
    if (!isMobile && currentIndex > 2) {
      setCurrentIndex(2);
    }
  }, [isMobile, currentIndex]);

  const itemsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4`}>
            Trusted by Families Across Generations
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Real experiences from clients who have entrusted us with their financial future.
          </p>
        </div>

        <div className="relative">
          {/* Slider Track Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="min-w-full md:min-w-[50%] px-4"
                >
                  <div className="bg-[#E9EEF5] p-8 rounded-xl shadow-md border border-[#E2E8F0] h-full flex flex-col justify-center">
                    <div className="flex items-start gap-6">
                      {/* Avatar */}
                      <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden bg-white shadow-lg ring-1 ring-gray-200">
                        <Image
                            src="/man.jpg"
                            alt="Client testimonial"
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                        />
                        </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-[#6B7280] mb-4 leading-relaxed italic relative">
                          <span className="text-[#E5E7EB] text-4xl font-serif absolute -top-4 -left-2 -z-10">&ldquo;</span>
                          {t.text}
                        </p>
                        <div>
                          <div className="font-bold text-[#0B1F3A] text-lg">{t.name}</div>
                          <div className="text-sm text-[#6B7280] font-medium">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[#0B1F3A] text-[#0B1F3A] flex items-center justify-center hover:bg-[#0B1F3A] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#0B1F3A] text-[#0B1F3A] flex items-center justify-center hover:bg-[#0B1F3A] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}