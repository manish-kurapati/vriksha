'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks, siteConfig } from '../data/siteData';
import { useQuoteModal } from './QuoteModalContext';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-white/95 backdrop-blur-md border-b border-surface-border py-2.5 sm:py-3 shadow-[0_2px_16px_rgba(16,47,87,0.06)]'
          : 'bg-surface-white border-b border-surface-border/60 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: Vriksha Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Vriksha Home">
            <div className="relative h-10 sm:h-12 w-36 sm:w-48 transition-opacity group-hover:opacity-90">
              <Image
                src="/images/vriksha_logo.png"
                alt="Vriksha Constructions & Interior Designers Logo"
                fill
                priority
                sizes="(max-width: 640px) 144px, 192px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] tracking-normal font-medium transition-colors ${
                    active ? 'text-navy-deep font-semibold' : 'text-ink-muted hover:text-navy-deep'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Get a Quote CTA + Hamburger Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange text-surface-white hover:bg-[#c45a1b] text-xs font-semibold rounded-full transition-all shadow-md active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-navy-deep hover:text-brand-orange transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bg-surface-white border-b border-surface-border shadow-2xl px-6 py-6 animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">
          <nav className="flex flex-col space-y-3 mb-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wider uppercase font-medium py-2 flex items-center justify-between border-b border-surface-border/50 ${
                    active ? 'text-brand-orange font-semibold' : 'text-ink-main hover:text-brand-orange'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-brand-orange" />}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-brand-orange to-[#F06529] text-surface-white text-xs uppercase tracking-editorial font-semibold shadow-md transition-colors"
            >
              <span>Get a Consultation & Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-ink-muted pt-2">
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>Direct Studio Desk:</span>
              <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand-orange underline">
                {siteConfig.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
