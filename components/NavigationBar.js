"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Water Damage", href: "/water-damage" },
  { label: "Fire & Smoke Damage", href: "/fire-damage" },
  { label: "Mold Remediation", href: "/mold-remediation" },
  { label: "Sewer back up", href: "/sewer" },
  { label: "content restoration", href: "/content" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white">
      <div className="max-w-8xl mx-auto px-6">
        {/* Desktop nav */}
        <div className="hidden items-center justify-center gap-8 py-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-bold tracking-wide uppercase transition-colors duration-200 hover:text-orange-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile nav top row */}
        <div className="flex items-center justify-between py-4 md:hidden">
          <span className="text-sm font-semibold tracking-wide uppercase">
            Services Menu
          </span>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md border border-black px-4 py-2 text-2xl leading-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="flex flex-col gap-1 border-t border-white/30 pb-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-orange-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
