"use client";

import React, { useState, useEffect } from "react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Menu, X, ArrowUp } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReturnToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo with Custom AERION SVG Symbol */}
          <a
            href="#"
            onClick={handleReturnToTop}
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="AERION - Return to top"
          >
            <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
              <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
                <defs>
                  <linearGradient id="nav-sym-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="60%" stopColor="#C5CBD3" />
                    <stop offset="100%" stopColor="#7B828E" />
                  </linearGradient>
                  <linearGradient id="nav-sym-core" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#4B5260" />
                  </linearGradient>
                </defs>
                <path d="M50 14 L18 84 L30 84 L50 36 L70 84 L82 84 Z" fill="url(#nav-sym-grad)" />
                <path d="M50 42 L34 80 L66 80 Z" fill="#050505" />
                <path d="M50 46 L40 70 L60 70 Z" fill="url(#nav-sym-core)" />
                <path d="M32 64 L68 64 L65 67 L35 67 Z" fill="#FFFFFF" opacity="0.6" />
              </svg>
            </div>
            <span className="text-base sm:text-lg font-light tracking-[0.3em] text-white uppercase font-display leading-none group-hover:text-zinc-200 transition-colors">
              {BRAND.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-colors relative py-1 focus:outline-none focus:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Replay / Return */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleReturnToTop}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white text-xs font-mono tracking-widest uppercase transition-colors"
              aria-label="Scroll to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-center px-10 py-12 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-8 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-light uppercase tracking-[0.3em] text-white hover:text-zinc-300 transition-colors font-display"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8 border-t border-white/10 flex justify-center">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleReturnToTop(e);
                }}
                className="py-3 px-8 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-widest"
              >
                RETURN TO TOP
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
