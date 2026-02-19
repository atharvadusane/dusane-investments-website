"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Philosophy", href: "/philosophy" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className={`${playfair.className} text-2xl font-bold tracking-tight text-[#0B1F3A]`}>
              Dusane Investments
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors border-b-2 ${
                    pathname === item.href
                      ? "text-[#0B1F3A] font-semibold border-[#0B1F3A]"
                      : "text-[#6B7280] hover:text-[#0B1F3A] border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:block">
              <a href="https://wa.me/+918793494663" className="inline-block bg-[#0B1F3A] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[#152a4d] transition-colors">
                Schedule Consultation
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#0B1F3A] focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-20 flex flex-col py-6 px-6 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 ${
                  pathname === item.href ? "text-[#0B1F3A] font-semibold" : "text-[#6B7280]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="https://wa.me/+918793494663" className="inline-block bg-[#0B1F3A] text-white px-5 py-3.5 rounded text-base font-medium hover:bg-[#152a4d] transition-colors w-full text-center mt-4">
              Schedule Consultation
            </a>
          </div>
        )}
      </nav>
  );
}