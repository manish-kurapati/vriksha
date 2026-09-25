'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuoteModal } from './QuoteModalContext';
import { siteConfig } from '../data/siteData';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export default function CTASection({
  title = "Your Vision.\nOur Expertise.",
  subtitle = "Ready to discuss your project? Get in touch with our team for a personalized consultation.",
  buttonText = "Get a Consultation",
}) {
  const { openModal } = useQuoteModal();

  return (
    <section className="relative text-surface-white py-20 lg:py-24 overflow-hidden bg-navy-dark">
      {/* Background Architectural Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/service_residential.jpg"
          alt="Architectural Consultation Background"
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071320]/95 via-[#0B1B2B]/90 to-[#071320]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
          {/* Left Title */}
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-soft uppercase block mb-3">
              LET&apos;S BUILD TOGETHER
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight whitespace-pre-line text-surface-white">
              {title}
            </h2>
          </div>

          {/* Right Text + CTA Button */}
          <div className="max-w-md flex flex-col items-start lg:items-end gap-6 text-left lg:text-right">
            <p className="text-sm sm:text-base text-blue-veryLight/90 font-light leading-relaxed">
              {subtitle}
            </p>

            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-orange text-white hover:bg-[#c45a1b] text-xs font-semibold rounded-full transition-all shadow-xl active:scale-95"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
