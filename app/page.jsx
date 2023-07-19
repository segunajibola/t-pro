"use client";

// import styles from "./page.module.css";
import { Hero, About, Services, Gallery, Metrics, Testimonials, Faqs } from "../sections";
import { faqHome } from "../data/faqHome";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Metrics />
      <Testimonials />
      <Faqs faqHome={faqHome} />
      {/* 
      Testimonials, 
      Book Appointment, 
      Special Offers, 
      Terms and Conditions,in footer
      Products */}
    </div>
  );
}
