"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import { Hero, About, Services } from "../sections";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Services />
    </div>
  );
}
