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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-warm/95 backdrop-blur-md border-b border-surface-border py-2.5 sm:py-3 shadow-[0_2px_16px_rgba(12,36,54,0.06)]'
            : 'bg-surface-warm border-b border-surface-border/60 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* LEFT: Vriksha Logo */}
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 group focus:outline-none z-10" 
              aria-label="Vriksha Home"
            >
              <div className="relative h-12 sm:h-14 md:h-16 w-48 sm:w-64 md:w-72 transition-opacity group-hover:opacity-90">
                <Image
                  src="/images/vriksha_logo.png"
                  alt="Vriksha Constructions & Interior Designers Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 288px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* CENTER: Navigation Links (Centered in the Navbar) */}
            <nav 
              className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2 z-10" 
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-[13px] font-medium transition-all rounded-full ${
                      active
                        ? 'text-primary font-semibold bg-secondary/35 shadow-xs'
                        : 'text-ink-body hover:text-primary hover:bg-black/[0.04]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: Get a Quote CTA + Hamburger Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4 z-10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-brand-orange text-surface-white hover:bg-brand-orangeHover text-xs font-semibold rounded-full transition-all shadow-md active:scale-95"
              >
                <span>Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-primary hover:text-brand-orange transition-colors rounded-lg active:bg-secondary/20"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Dropdown - Positioned absolute top-full so it ALWAYS appears directly below header regardless of scroll position */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 bg-surface-warm border-b border-surface-border shadow-2xl px-6 py-6 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100svh-80px)] overflow-y-auto z-50">
            <nav className="flex flex-col space-y-3 mb-6" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
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
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-brand-orange to-[#FF914D] text-surface-white text-xs uppercase tracking-editorial font-semibold shadow-md transition-colors"
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

        {/* Real-time Scroll Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-transparent overflow-hidden pointer-events-none">
          <div 
            className="h-full bg-gradient-to-r from-primary via-brand-orange to-[#FF914D] transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Backdrop outside header so it reliably covers the entire viewport without containing-block issues */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-[#081824]/40 backdrop-blur-xs z-40 transition-opacity" 
          onClick={() => setMobileMenuOpen(false)} 
          aria-hidden="true"
        />
      )}
    </>
  );
}
