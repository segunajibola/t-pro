"use client";

import "./globals.css";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "T-pro signature",
  description: "T-pro signature, bead making, event planner, make-up artist",
};

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => setDarkMode(!darkMode);
  return (
    <html lang="en">
      <head />
      <body>
        <div
          className={`overflow-hidden bg-gray-800 ${darkMode ? "dark" : ""}`}
          id="dark"
        >
          <Navbar handleMode={handleMode} darkMode={darkMode} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
