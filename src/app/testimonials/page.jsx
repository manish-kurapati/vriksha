'use client';

import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import CTASection from '../../components/CTASection';
import TestimonialsMarquee from '../../components/TestimonialsMarquee';
import { testimonialsData, siteConfig } from '../../data/siteData';
import { Quote, Star, Award, CheckCircle2 } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div className="bg-surface-white">
      {/* 1. HERO */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
              CLIENT TESTIMONIALS & REPUTATION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
              What Our Clients Say
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
              Unfiltered reflections from homeowners, managing directors, and design patrons who entrusted their visions to Vriksha.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-surface-border text-xs">
            <div>
              <div className="text-2xl font-serif text-navy-deep">{siteConfig.happyClients}</div>
              <div className="text-ink-muted uppercase tracking-relaxed mt-1">Families & Businesses</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-blue-royal">{siteConfig.onTimeHandoverRate}</div>
              <div className="text-ink-muted uppercase tracking-relaxed mt-1">On-Time Handover Rate</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-navy-deep">100%</div>
              <div className="text-ink-muted uppercase tracking-relaxed mt-1">Fixed BOQ Transparency</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-blue-royal">5.0 / 5.0</div>
              <div className="text-ink-muted uppercase tracking-relaxed mt-1">Client Satisfaction Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC SCROLLING MARQUEE & CAROUSEL */}
      <section className="py-16 lg:py-20 bg-surface-neutral/30 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-1">
              CONTINUOUS TESTIMONIAL TICKER
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-navy-deep font-normal">
              Live Client Reflections
            </h2>
          </div>

          <TestimonialsMarquee autoPlay={true} />
        </div>
      </section>

      {/* 3. TESTIMONIALS EDITORIAL CARDS GRID */}
      <section className="py-20 lg:py-28 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ARCHIVED VOICES"
            title="Complete Patron Record"
            subtitle="Explore detailed narratives across residential villas, high-rise penthouses, commercial campuses, and historic restorations."
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="bg-surface-neutral/30 border border-surface-border p-8 sm:p-10 flex flex-col justify-between relative shadow-sm hover:border-blue-royal/50 transition-colors"
              >
                <div>
                  <span className="text-4xl font-serif text-blue-royal/50 leading-none select-none block mb-4">
                    &ldquo;
                  </span>
                  <p className="text-base text-ink-main font-light italic leading-relaxed">
                    {t.quote}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-surface-border/70">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-serif text-navy-deep font-semibold">
                        {t.author}
                      </h4>
                      <p className="text-xs text-blue-royal uppercase tracking-relaxed mt-0.5">
                        {t.role}
                      </p>
                    </div>
                    <span className="text-xs text-ink-muted font-mono">{t.year}</span>
                  </div>
                  <div className="mt-2 text-xs text-ink-muted font-light flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-royal" />
                    <span>{t.project}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <CTASection
        title={"Join Our Community of Satisfied Patrons"}
        subtitle="Experience an architectural and building partnership rooted in honesty, precision, and mutual respect."
        buttonText="Discuss Your Project"
      />
    </div>
  );
}
