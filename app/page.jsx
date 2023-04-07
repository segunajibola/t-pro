"use client";

// import styles from "./page.module.css";
import { Hero, About, Services, Gallery, Faqs } from "../sections";
import { faqHome } from "../data/faqHome";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Faqs faqHome={faqHome} />
      {/* Gallery, 
      Testimonials, 
      Book Appointment, 
      Special Offers, 
      Terms and Conditions, 
      Products */}
    </div>
  );
}
