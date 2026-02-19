import type { Metadata } from "next";
import TestimonialsSection from "../components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Testimonials | Dusane Investments",
  description: "Read what our long-term clients have to say about our disciplined approach to wealth creation and financial planning.",
};

export default function TestimonialsPage() {
  return (
    // This component already includes a <section> wrapper and title.
    <TestimonialsSection />
  );
}