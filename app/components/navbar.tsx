"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import SearchRatio from "./SearchRadio";
import { InteractiveHoverButton } from "./intereactive-hover-button";
import DashBoard from "@/app/components/ui/Dashboard";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/about", label: "ABOUT US" },
    { href: "/news", label: "NEWS" },
    { href: "/what-we-do", label: "WHAT WE DO" },
    { href: "/statistics", label: "STATISTICS" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0A2540]/95 via-[#102A43]/95 to-[#0A2540]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/" className="group">
            <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#38BDF8] to-[#0FB9B1] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
              DELU
            </div>
          </Link>
          <section className="shrink-0 hidden md:block">
            <SearchRatio />
          </section>

          <nav className="hidden md:flex gap-9 items-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-slate-200 hover:text-[#38BDF8] transition-colors duration-300 tracking-wide"
              >
                {label}
              </Link>
            ))}
            <DashBoard />
            <Link href="/auth/register">
              <InteractiveHoverButton>Try For Free</InteractiveHoverButton>
            </Link>
          </nav>

          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8] rounded-md p-1"
            onClick={toggleMenu}
          >
            d{isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed top-[64px] w-full z-40 md:hidden px-4 pb-4 bg-gradient-to-r from-[#0A2540]/95 via-[#102A43]/95 to-[#0A2540]/95 backdrop-blur-xl border-b border-white/10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-3 text-slate-200 hover:text-[#38BDF8] transition-colors tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
