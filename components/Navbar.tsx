"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const serviceDropdown = [
  {
    category: "Foundations",
    href: "/services/foundations",
    children: [
      { label: "Foundation Installation", href: "/services/foundations/foundation-installation" },
      { label: "Concrete Basements", href: "/services/foundations/concrete-basements" },
      { label: "Retaining Walls", href: "/services/foundations/retaining-walls" },
    ],
  },
  {
    category: "Flat Concrete Work",
    href: "/services/flat-concrete-work",
    children: [
      { label: "Patio", href: "/services/flat-concrete-work/patio" },
      { label: "Driveway", href: "/services/flat-concrete-work/driveway" },
      { label: "Walkway", href: "/services/flat-concrete-work/walkway" },
    ],
  },
  {
    category: "Commercial Concrete",
    href: "/services/commercial-concrete",
    children: [
      { label: "Parking Decks", href: "/services/commercial-concrete/parking-decks" },
      { label: "Parking Lots", href: "/services/commercial-concrete/parking-lots" },
      { label: "Public Works Project", href: "/services/commercial-concrete/public-works-project" },
      { label: "Road Paving", href: "/services/commercial-concrete/road-paving" },
      { label: "Piers", href: "/services/commercial-concrete/piers" },
    ],
  },
  {
    category: "Masonry Services",
    href: "/services/masonry-services",
    children: [],
  },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-concrete-black/95 backdrop-blur-sm border-b border-concrete-charcoal"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-logo-216w.png"
              alt="Vazquez Millan Concrete"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-body text-concrete-gray hover:text-amber-brand transition-colors tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-body text-concrete-gray hover:text-amber-brand transition-colors tracking-wide uppercase"
            >
              About
            </Link>

            {/* Services Mega Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-body text-concrete-gray hover:text-amber-brand transition-colors tracking-wide uppercase"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-concrete-dark border border-concrete-charcoal shadow-2xl">
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-concrete-dark border-l border-t border-concrete-charcoal rotate-45" />
                  <div className="grid grid-cols-4 gap-0">
                    {serviceDropdown.map((group) => (
                      <div key={group.category} className="border-r border-concrete-charcoal last:border-r-0 p-4">
                        <Link
                          href={group.href}
                          onClick={() => setServicesOpen(false)}
                          className="block font-display text-sm text-amber-brand tracking-widest uppercase mb-3 hover:text-amber-light transition-colors"
                        >
                          {group.category}
                        </Link>
                        <ul className="space-y-2">
                          {group.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setServicesOpen(false)}
                                className="text-xs text-concrete-gray hover:text-concrete-offwhite transition-colors leading-snug block"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-concrete-charcoal px-4 py-2.5">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs text-concrete-gray hover:text-amber-brand transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {["Gallery", "Reviews", "Areas We Serve", "Contact"].map((label) => {
              const href = `/${label.toLowerCase().replace(/ /g, "-")}`;
              return (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-body text-concrete-gray hover:text-amber-brand transition-colors tracking-wide uppercase"
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:4086908051"
            className="hidden lg:flex items-center gap-2 bg-amber-brand text-concrete-black font-display tracking-widest uppercase text-sm px-5 py-2.5 hover:bg-amber-light transition-colors flex-shrink-0"
          >
            <Phone size={16} />
            (408) 690-8051
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-concrete-offwhite hover:text-amber-brand transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-concrete-dark border-t border-concrete-charcoal max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4 gap-0">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-body text-concrete-offwhite hover:text-amber-brand transition-colors py-3 border-b border-concrete-charcoal tracking-wide uppercase text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-body text-concrete-offwhite hover:text-amber-brand transition-colors py-3 border-b border-concrete-charcoal tracking-wide uppercase text-sm"
            >
              About
            </Link>

            {/* Mobile Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between font-body text-concrete-offwhite hover:text-amber-brand transition-colors py-3 border-b border-concrete-charcoal tracking-wide uppercase text-sm"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="bg-concrete-black/50 px-4 py-3 border-b border-concrete-charcoal">
                  {serviceDropdown.map((group) => (
                    <div key={group.category} className="mb-4">
                      <Link
                        href={group.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-xs text-amber-brand font-display tracking-widest uppercase mb-2"
                      >
                        {group.category}
                      </Link>
                      {group.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-xs text-concrete-gray hover:text-concrete-offwhite transition-colors py-1 pl-2"
                        >
                          — {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {["Gallery", "Reviews", "Areas We Serve", "Contact"].map((label) => {
              const href = `/${label.toLowerCase().replace(/ /g, "-")}`;
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-concrete-offwhite hover:text-amber-brand transition-colors py-3 border-b border-concrete-charcoal tracking-wide uppercase text-sm"
                >
                  {label}
                </Link>
              );
            })}

            <a
              href="tel:4086908051"
              className="flex items-center gap-2 bg-amber-brand text-concrete-black font-display tracking-widest uppercase text-sm px-5 py-3 mt-4 justify-center hover:bg-amber-light transition-colors"
            >
              <Phone size={16} />
              (408) 690-8051
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
