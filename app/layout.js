import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "T-pro signature",
  description: "T-pro signature, bead making, event planner, make-up artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-800">
      <Navbar />
      {children}
      <Footer />
    </html>
  );
}
