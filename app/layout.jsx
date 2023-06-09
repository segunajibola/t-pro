"use client";

import "./globals.css";
import { useState } from "react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => setDarkMode(!darkMode);
  return (
    <html lang="en">
      <head />
      <body>
        <div
          className={`overflow-hidden ${darkMode ? "dark" : ""}`}
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
