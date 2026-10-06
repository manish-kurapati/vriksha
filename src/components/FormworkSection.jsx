'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { useQuoteModal } from './QuoteModalContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  Box, 
  Sparkles,
  Phone,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const formworkCards = [
  {
    id: 'ms-box-shuttering',
    title: 'MS Box Shuttering',
    eyebrow: 'WHAT WE DO • HEAVY-DUTY STEEL',
    summary: 'Precision steel formwork system engineered for columns, plinth beams, and high-load structural framing.',
    image: '/images/service_formwork_shuttering.jpg',
    icon: Box,
    badge: 'In-House Execution',
    finish: 'Structural Fair-Faced',
    idealFor: 'Columns, Plinth Beams & Load-Bearing RCC Frames',
    features: [
      'Heavy-gauge steel channels with zero column bulging',
      'True 90° corners & millimeter-level vertical plumbness',
      'High-tensile tie-rods with leak-proof wing-nut locking',
      '100% owned in-house inventory for seamless timelines'
    ]
  },
  {
    id: 'pvc-shuttering',
    title: 'PVC / Polymer Shuttering',
    eyebrow: 'WHAT WE DO • WATERPROOF POLYMER',
    summary: 'Advanced composite polymer panels designed for mirror-smooth slabs, ceilings, and fair-faced concrete surfaces.',
    image: '/images/service_pvc_shuttering.jpg',
    icon: Sparkles,
    badge: 'In-House Execution',
    finish: 'Mirror-Smooth Plasterless',
    idealFor: 'Ceiling Slabs, Fair-Faced Walls & Architectural Concrete',
    features: [
      '100% moisture-resistant — zero concrete water absorption',
      'Glass-smooth finish that eliminates thick plastering coats',
      'Lightweight panels for rapid, safe site erection & stripping',
      'Eco-friendly, reusable & rust-free composite technology'
    ]
  }
];

export default function FormworkSection() {
  const { openModal } = useQuoteModal();
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (e) => {
    const el = e.target;
    if (el.clientWidth > 0) {
      const slideIndex = Math.round(el.scrollLeft / el.clientWidth);
      setActiveSlide(slideIndex);
    }
  };

  const scrollSlider = (direction) => {
    const el = document.getElementById('formwork-slider');
    if (el) {
      el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-surface-white border-b border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-2">
                FORMWORK &amp; SHUTTERING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
                Precision Shuttering Solutions
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                The vertical plumbness, strength, and concrete finish of every structure depend on its formwork. At Vriksha, we specialize in MS Box and PVC Shuttering — delivering structural rigidity and plasterless surface quality through our owned in-house systems.
              </p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <Link
                href="/services/formwork-shuttering"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-deep hover:text-brand-orange whitespace-nowrap transition-colors"
              >
                <span>View Shuttering Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Sideways Arrow Buttons */}
              <div className="flex sm:hidden items-center gap-2">
                <button
                  onClick={() => scrollSlider(-1)}
                  className="w-8 h-8 rounded-full border border-surface-border bg-surface-white flex items-center justify-center text-navy-deep shadow-xs active:scale-95 transition-all"
                  aria-label="Previous shuttering system"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollSlider(1)}
                  className="w-8 h-8 rounded-full border border-surface-border bg-surface-white flex items-center justify-center text-navy-deep shadow-xs active:scale-95 transition-all"
                  aria-label="Next shuttering system"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile Sideways 1-Card Snap Scroll / Desktop 2-Card Grid */}
        <ScrollReveal animation="fade-up">
          <div
            id="formwork-slider"
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 max-w-5xl mx-auto overflow-x-auto overflow-y-hidden md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar mobile-slider-scroll w-full items-stretch"
          >
            {formworkCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="w-full min-w-full md:min-w-0 md:w-full shrink-0 md:shrink snap-start flex flex-col"
                >
                  <Link
                    href="/services/formwork-shuttering"
                    className="group block bg-surface-white border border-surface-border/90 rounded-2xl transition-all duration-300 hover:shadow-[0_16px_40px_rgba(16,47,87,0.09)] hover:border-brand-orange/40 overflow-hidden flex flex-col h-full"
                  >
                  {/* Image on top */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-neutral select-none shrink-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none select-none"
                    />
                    {/* Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-surface-white/95 backdrop-blur-md rounded-full border border-surface-border/60 text-[10px] font-semibold uppercase tracking-editorial text-brand-orange shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span>{card.badge}</span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Floating Circle Icon */}
                      <div className="w-12 h-12 -mt-12 sm:-mt-14 mb-4 relative z-10 bg-surface-white border border-surface-border shadow-md rounded-full flex items-center justify-center text-navy-deep group-hover:bg-brand-orange group-hover:text-surface-white transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Eyebrow */}
                      <span className="text-[10px] font-semibold tracking-editorial text-brand-orange uppercase block mb-1">
                        {card.eyebrow}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-serif text-navy-deep group-hover:text-brand-orange transition-colors">
                        {card.title}
                      </h3>

                      {/* Summary */}
                      <p className="mt-2.5 text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                        {card.summary}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-5 pt-4 border-t border-surface-border/60 space-y-2.5">
                        {card.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-navy-deep/90">
                            <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                            <span className="font-light">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Meta & Learn More */}
                    <div className="pt-6 mt-6 border-t border-surface-border/60 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-ink-muted uppercase tracking-editorial block">Finish Quality</span>
                        <span className="text-xs font-semibold text-navy-deep">{card.finish}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-orange group-hover:text-brand-orangeHover transition-colors">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

        {/* Mobile Swipe Dot Indicators */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4">
          {formworkCards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => {
                const el = document.getElementById('formwork-slider');
                if (el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === i ? 'w-6 bg-brand-orange' : 'w-2 bg-navy-deep/20'
              }`}
              aria-label={`Go to shuttering system ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom Consultation Strip */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-12 p-6 sm:p-8 bg-surface-warm border border-secondary/60 rounded-2xl max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-navy-deep">
                Need Formwork &amp; Shuttering for Your Project?
              </h4>
              <p className="text-xs text-ink-muted font-light mt-1">
                We supply, erect, and manage MS Box &amp; PVC Shuttering with dedicated on-site engineering supervision.
              </p>
            </div>
            <button
              onClick={() => openModal('Formwork & Shuttering')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white hover:bg-brand-orangeHover text-xs font-semibold rounded-full transition-all shadow-md active:scale-95 shrink-0"
            >
              <span>Get Shuttering Estimate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
