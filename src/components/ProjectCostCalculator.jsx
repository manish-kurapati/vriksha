'use client';

import React, { useState } from 'react';
import { useQuoteModal } from './QuoteModalContext';
import { siteConfig } from '../data/siteData';
import { Calculator, ArrowRight, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function ProjectCostCalculator() {
  const { openModal } = useQuoteModal();
  const [projectType, setProjectType] = useState('residential');
  const [area, setArea] = useState(4500);
  const [grade, setGrade] = useState('bespoke');

  // Rates per sq.ft in INR
  const rates = {
    residential: {
      essential: 2800,
      bespoke: 3800,
      ultra: 5200,
      durationFactor: 0.0018, // months per sqft
      baseMonths: 8,
    },
    commercial: {
      essential: 2400,
      bespoke: 3200,
      ultra: 4400,
      durationFactor: 0.0012,
      baseMonths: 10,
    },
    interior: {
      essential: 1800,
      bespoke: 2600,
      ultra: 3800,
      durationFactor: 0.0008,
      baseMonths: 3,
    },
    renovation: {
      essential: 1600,
      bespoke: 2400,
      ultra: 3400,
      durationFactor: 0.0010,
      baseMonths: 4,
    },
  };

  const selectedRate = rates[projectType][grade];
  const estimatedCost = area * selectedRate;
  const estimatedMonths = Math.min(
    24,
    Math.round(rates[projectType].baseMonths + area * rates[projectType].durationFactor)
  );

  const formatLakhsCrores = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Crores`;
    }
    return `₹${(val / 100000).toFixed(1)} Lakhs`;
  };

  return (
    <div className="bg-surface-white border border-surface-border p-6 sm:p-10 lg:p-12 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-surface-border pb-6">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-editorial text-blue-royal uppercase mb-1">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE ARCHITECTURAL ESTIMATOR</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-navy-deep font-normal">
            Project Feasibility & Budget Modeler
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted font-light mt-1">
            Model your prospective construction or interior parameters for an instant preliminary timeline & BOQ estimate.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-ice border border-blue-veryLight text-xs text-blue-royal font-medium self-start lg:self-auto">
          <ShieldCheck className="w-4 h-4" />
          <span>Transparent 100% Fixed BOQ</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Project Type Select */}
          <div>
            <label className="block text-xs uppercase tracking-relaxed font-semibold text-navy-deep mb-2.5">
              1. Select Project Discipline
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: 'Villa / Home', value: 'residential' },
                { label: 'Commercial HQ', value: 'commercial' },
                { label: 'Interior Design', value: 'interior' },
                { label: 'Renovation', value: 'renovation' },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setProjectType(item.value)}
                  className={`p-3 text-xs font-medium uppercase tracking-wide border transition-all ${
                    projectType === item.value
                      ? 'bg-navy-deep text-surface-white border-navy-deep shadow-sm'
                      : 'bg-surface-neutral text-ink-main border-surface-border hover:border-blue-royal'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase tracking-relaxed font-semibold text-navy-deep">
                2. Built Area Specification
              </label>
              <span className="text-sm font-serif font-bold text-blue-royal px-2.5 py-0.5 bg-blue-ice border border-blue-veryLight">
                {area.toLocaleString()} sq. ft.
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="15000"
              step="250"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-navy-deep cursor-pointer h-2 bg-surface-neutral border border-surface-border"
            />
            <div className="flex justify-between text-[10px] text-ink-muted mt-1 font-mono">
              <span>1,000 sq.ft</span>
              <span>5,000 sq.ft</span>
              <span>10,000 sq.ft</span>
              <span>15,000+ sq.ft</span>
            </div>
          </div>

          {/* Finish Grade */}
          <div>
            <label className="block text-xs uppercase tracking-relaxed font-semibold text-navy-deep mb-2.5">
              3. Architectural Finish Specification
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: 'essential',
                  name: 'Contemporary Standard',
                  spec: 'Engineered tiles, standard glazing, refined plaster'
                },
                {
                  id: 'bespoke',
                  name: 'Bespoke Architectural',
                  spec: 'Honed limestone, acoustic oak, double low-E glass'
                },
                {
                  id: 'ultra',
                  name: 'Ultra-Prime Signature',
                  spec: 'Bookmatched Carrara marble, robotic automation, structural glass'
                }
              ].map((g) => (
                <div
                  key={g.id}
                  onClick={() => setGrade(g.id)}
                  className={`p-3.5 border cursor-pointer transition-all ${
                    grade === g.id
                      ? 'border-blue-royal bg-blue-ice/40 shadow-sm'
                      : 'border-surface-border bg-surface-neutral hover:border-blue-soft'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-navy-deep">{g.name}</span>
                    <input
                      type="radio"
                      name="grade"
                      checked={grade === g.id}
                      onChange={() => setGrade(g.id)}
                      className="accent-blue-royal"
                    />
                  </div>
                  <p className="text-[11px] text-ink-muted font-light mt-1.5 leading-snug">
                    {g.spec}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Panel (5 cols) */}
        <div className="lg:col-span-5 bg-navy-deep text-surface-white p-6 sm:p-8 relative">
          <span className="text-[10px] font-semibold uppercase tracking-editorial text-blue-soft block mb-1">
            PRELIMINARY ESTIMATE
          </span>
          <h4 className="text-xl font-serif font-normal text-surface-white">
            Estimated Project Range
          </h4>

          <div className="my-6 py-6 border-y border-white/10 space-y-4">
            <div>
              <span className="text-xs text-blue-veryLight/70 font-light block">
                Turnkey Investment Scope
              </span>
              <div className="text-3xl sm:text-4xl font-serif text-surface-white font-normal mt-0.5">
                {formatLakhsCrores(estimatedCost * 0.95)} – {formatLakhsCrores(estimatedCost * 1.05)}
              </div>
              <span className="text-[11px] text-blue-soft font-light mt-0.5 block">
                (Approx. ₹{selectedRate.toLocaleString()} / sq. ft.)
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-blue-veryLight/80">Turnkey Duration:</span>
              <span className="text-sm font-semibold text-surface-white flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-soft" />
                <span>{estimatedMonths} – {estimatedMonths + 3} Months</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-veryLight/80">Warranty Coverage:</span>
              <span className="text-sm font-semibold text-surface-white">10-Year Structural</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => openModal(projectType === 'residential' ? 'Residential Construction' : projectType === 'commercial' ? 'Commercial Construction' : projectType === 'interior' ? 'Interior Design' : 'Renovation & Remodeling')}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-surface-white text-navy-deep hover:bg-blue-veryLight text-xs uppercase tracking-editorial font-semibold transition-colors shadow-md"
            >
              <span>Request Detailed BOQ Brief</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-royal" />
            </button>
            <p className="text-[10px] text-blue-veryLight/60 text-center font-light">
              *Estimates are preliminary and subject to final site topography and municipal zoning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
