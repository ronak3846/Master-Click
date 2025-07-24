import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Master Click Photography | Photographer Portfolio",
  description: "Professional photographer portfolio showcasing my best works.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919887165654" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        >
          <FaWhatsapp size={28} />
        </a>
      </body>
    </html>
  );
}
