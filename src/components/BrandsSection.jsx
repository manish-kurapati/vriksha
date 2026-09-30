'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

const brandCategories = [
  {
    category: 'Cement',
    brands: [
      { name: 'UltraTech Cement', logo: '/images/brands/ultratech.svg' },
      { name: 'M.P. Birla Cement', logo: '/images/brands/mp_birla.png' },
      { name: 'Maha Cement', logo: '/images/brands/maha_cement.png' },
    ]
  },
  {
    category: 'Steel',
    brands: [
      { name: 'Jindal Steel', logo: '/images/brands/jindal_steel.svg' },
      { name: 'Shree Steel', logo: '/images/brands/shree_steel.png' },
    ]
  },
  {
    category: 'Plywood',
    brands: [
      { name: 'CenturyPly', logo: '/images/brands/centuryply.png' },
      { name: 'Greenply', logo: '/images/brands/greenply.svg' },
      { name: 'Austin Plywood', logo: '/images/brands/austin_plywood.png' },
      { name: 'Action Tesa', logo: '/images/brands/action_tesa.png' },
    ]
  },
  {
    category: 'Paints',
    brands: [
      { name: 'Asian Paints', logo: '/images/brands/asian_paints.svg' },
      { name: 'Birla Opus', logo: '/images/brands/birla_opus.svg' },
    ]
  },
  {
    category: 'Lights',
    brands: [
      { name: 'Havells', logo: '/images/brands/havells.svg' },
      { name: 'Philips', logo: '/images/brands/philips.svg' },
      { name: 'Wipro Lighting', logo: '/images/brands/wipro.svg' },
      { name: 'Filux', logo: '/images/brands/filux.png' },
    ]
  },
  {
    category: 'Wires',
    brands: [
      { name: 'Finolex Cables', logo: '/images/brands/finolex.svg' },
      { name: 'RR Kabel', logo: '/images/brands/rr_kabel.svg' },
      { name: 'Havells Wires', logo: '/images/brands/havells.svg' },
    ]
  },
];

// Flatten all brands for the marquee
const allBrands = brandCategories.flatMap(cat =>
  cat.brands.map(b => ({ ...b, category: cat.category }))
);

// Duplicate for seamless infinite loop
const marqueeItems = [...allBrands, ...allBrands];

function BrandCard({ brand }) {
  const initials = brand.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="flex-shrink-0 w-44 sm:w-48 mx-2.5 sm:mx-3 bg-white border border-surface-border rounded-xl p-4 sm:p-5 flex flex-col items-center justify-between gap-3 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition-all duration-300">
      <div className="relative w-full h-12 sm:h-14 flex items-center justify-center px-1">
        {brand.logo ? (
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-10 sm:max-h-11 max-w-[130px] sm:max-w-[145px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
            onError={e => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }
            }}
          />
        ) : null}
        <div
          className={`w-10 h-10 rounded-lg bg-brand-orange/10 items-center justify-center text-brand-orange font-bold text-sm ${brand.logo ? 'hidden' : 'flex'}`}
        >
          {initials}
        </div>
      </div>
      <div className="text-center w-full pt-2 border-t border-surface-border/60">
        <p className="text-xs font-semibold text-navy-deep leading-tight truncate">{brand.name}</p>
        <p className="text-[10px] text-ink-muted mt-0.5 font-light">{brand.category}</p>
      </div>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="py-20 lg:py-24 bg-surface-warm border-y border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <ScrollReveal animation="fade-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-orange block" />
            <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase">
              Materials &amp; Sourcing
            </span>
            <span className="h-px w-8 bg-brand-orange block" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
            We work across all major brands
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-muted font-light max-w-2xl mx-auto leading-relaxed">
            Brand selection is based on your specification, budget, availability and approved quality
            requirements — not a single-brand tie-up.
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-warm to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-warm to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {marqueeItems.map((brand, i) => (
            <BrandCard key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <ScrollReveal animation="fade-up" delay={150}>
        <p className="text-center text-xs text-ink-muted font-light mt-10 px-4">
          All brands sourced through authorised distributors &amp; dealers with valid documentation.
        </p>
      </ScrollReveal>
    </section>
  );
}
