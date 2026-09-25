'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Layers, ShieldCheck, Check } from 'lucide-react';

export default function MaterialExplorer() {
  const materials = [
    {
      id: 'marble',
      name: 'Bookmatched Carrara & Blue Marble',
      category: 'Interior Architecture & Monoliths',
      origin: 'Carrara, Italy & Regional Quarries',
      textureImage: '/images/materials_details.jpg',
      finish: 'Honed Silk Satin (2000-grit water polished)',
      description: 'Hand-selected natural stone slabs with deep blue-grey veining, paired in bookmatched mirror orientation for signature kitchen islands, fireplace hearths, and bathroom vanities.',
      specs: [
        'Density: 2,710 kg/m³',
        'Water Absorption: < 0.15%',
        'Sealer: Triple-penetrating food-safe fluoropolymer',
        'Zero artificial resin filler'
      ]
    },
    {
      id: 'limestone',
      name: 'Natural Honed Limestone',
      category: 'Exterior Facades & Thermal Mass',
      origin: 'Tandur & Regional Deccan Quarries',
      textureImage: '/images/project_contemporary_residence.jpg',
      finish: 'Split-Face & Honed Architectural Masonry',
      description: 'Fine-grained sedimentary stone providing outstanding thermal inertia for South Indian climates, naturally softening exterior daylight and weathering with grace over generations.',
      specs: [
        'Compressive Strength: > 85 MPa',
        'Thermal Conductivity: 1.3 W/m·K (high insulation)',
        'Efflorescence Resistance: Grade 1 Certified',
        'Mechanical anchoring with 316 stainless steel brackets'
      ]
    },
    {
      id: 'oak',
      name: 'Quarter-Sawn Fluted White Oak',
      category: 'Millwork, Joinery & Acoustics',
      origin: 'FSC-Certified European Forests',
      textureImage: '/images/service_interior_design.jpg',
      finish: 'Ultra-Matte Zero-VOC Natural Hardwax Oil',
      description: 'Precision-milled vertical fluting providing acoustic dampening and tactile warmth. Applied across hidden pivot doors, double-height feature walls, and bespoke cabinetry.',
      specs: [
        'Acoustic NRC Rating: 0.75 with acoustic backing',
        'Moisture Content: Kiln-dried to 8% ± 1%',
        'Adhesive: Formaldehyde-free D4 structural bond',
        'Flame Spread Index: Class B compliant'
      ]
    },
    {
      id: 'glass',
      name: 'Low-Iron Structural Glazing',
      category: 'Curtain Walls & Panoramic Fenestration',
      origin: 'Saint-Gobain / Guardian Glass',
      textureImage: '/images/hero_modern_villa.jpg',
      finish: 'Double-Silver Low-E Solar Control Coating',
      description: 'Ultra-clear crystal glazing with minimized green iron tint, delivering 70% light transmission while rejecting 68% of solar heat gain.',
      specs: [
        'U-Value: 1.1 W/m²·K (argon-filled cavity)',
        'Solar Heat Gain Coefficient (SHGC): 0.32',
        'Sound Transmission Class: STC 42 acoustic rating',
        '100% Heat-Strengthened / Laminated Safety Glass'
      ]
    }
  ];

  const [activeId, setActiveId] = useState('marble');
  const activeMat = materials.find((m) => m.id === activeId) || materials[0];

  return (
    <div className="bg-surface-white border border-surface-border p-6 sm:p-10 lg:p-12 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-surface-border pb-6">
        <div>
          <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-1.5">
            TACTILE EXPLORER
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-navy-deep font-normal">
            Architectural Materiality
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted font-light mt-1">
            Click any material below to inspect real-time laboratory specifications and architectural applications.
          </p>
        </div>
        <div className="text-xs text-ink-muted font-light">
          Inspecting: <strong className="text-navy-deep font-medium">{activeMat.name}</strong>
        </div>
      </div>

      {/* Material Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {materials.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveId(m.id)}
            className={`p-4 text-left border transition-all ${
              activeId === m.id
                ? 'bg-navy-deep text-surface-white border-navy-deep shadow-md'
                : 'bg-surface-neutral text-ink-main border-surface-border hover:border-blue-royal'
            }`}
          >
            <span className={`text-[10px] font-semibold uppercase tracking-editorial block mb-1 ${
              activeId === m.id ? 'text-blue-soft' : 'text-blue-royal'
            }`}>
              {m.category.split('&')[0]}
            </span>
            <div className="text-sm font-serif font-normal truncate">
              {m.name.split('&')[0]}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Material Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-neutral/40 border border-surface-border p-6 sm:p-8">
        {/* Left: Image / Texture */}
        <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-surface-border bg-surface-white shadow-sm">
          <Image
            src={activeMat.textureImage}
            alt={activeMat.name}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-navy-dark/85 backdrop-blur-md text-surface-white text-[11px] font-light border border-white/10">
            {activeMat.finish}
          </div>
        </div>

        {/* Right: Technical Details & Specs */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-editorial text-blue-royal">
              {activeMat.category}
            </span>
            <h4 className="text-2xl font-serif text-navy-deep font-normal mt-0.5">
              {activeMat.name}
            </h4>
            <p className="text-xs text-ink-muted font-light mt-0.5">
              Provenance: <strong className="text-navy-deep font-medium">{activeMat.origin}</strong>
            </p>
          </div>

          <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
            {activeMat.description}
          </p>

          <div className="pt-2 border-t border-surface-border/80">
            <span className="text-[11px] uppercase tracking-editorial font-semibold text-navy-deep block mb-2.5">
              Laboratory & Engineering Specifications:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeMat.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2 text-xs text-ink-main bg-surface-white p-2.5 border border-surface-border">
                  <Check className="w-3.5 h-3.5 text-blue-royal shrink-0" />
                  <span className="font-light">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
