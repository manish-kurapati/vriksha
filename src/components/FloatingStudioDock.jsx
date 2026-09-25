'use client';

import React, { useState, useEffect } from 'react';
import { useQuoteModal } from './QuoteModalContext';
import { siteConfig } from '../data/siteData';
import { Phone, ArrowUp, Sparkles } from 'lucide-react';

export default function FloatingStudioDock() {
  const { openModal } = useQuoteModal();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Floating Studio Actions" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 bg-surface-white/95 hover:bg-navy-deep hover:text-surface-white text-navy-deep border border-surface-border shadow-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Action Pill */}
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 bg-navy-dark/95 backdrop-blur-md border border-white/20 shadow-2xl rounded-full text-surface-white">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-gradient-to-r from-brand-orange to-[#F06529] hover:opacity-95 text-surface-white text-[11px] sm:text-xs uppercase tracking-editorial font-semibold rounded-full transition-all shadow-md btn-orange-glow"
          title={`Call ${siteConfig.phoneFormatted}`}
        >
          <Phone className="w-3.5 h-3.5 animate-pulse-subtle" />
          <span className="inline">Call</span>
        </a>

        <button
          onClick={() => openModal()}
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 text-surface-white text-[11px] sm:text-xs uppercase tracking-editorial font-medium rounded-full transition-colors border border-white/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>Quick Quote</span>
        </button>
      </div>
    </aside>
  );
}
