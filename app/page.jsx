"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import { Hero, About, Services } from "../sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}
