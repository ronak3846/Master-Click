"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/mcplg.png"
            alt="Master Click Logo"
            width={120}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-4 space-y-4 transform transition-transform duration-300">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link href="/services" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
