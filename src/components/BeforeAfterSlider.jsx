'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sliders, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage = "/images/service_renovation.jpg",
  afterImage = "/images/hero_modern_villa.jpg",
  beforeLabel = "Original Structure / Heritage Masonry",
  afterLabel = "Completed Architectural Transformation",
  title = "Interactive Transformation Comparison",
  subtitle = "Drag the slider to inspect the structural transformation from raw heritage masonry to contemporary cantilevered glass architecture.",
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-1.5">
            ARCHITECTURAL COMPARISON
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-navy-deep font-normal">
            {title}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-ink-muted font-light max-w-xl">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-blue-royal font-medium uppercase tracking-editorial bg-blue-ice px-3.5 py-1.5 border border-blue-veryLight">
          <MoveHorizontal className="w-3.5 h-3.5" />
          <span>Drag Slider to Reveal</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden border border-surface-border select-none cursor-ew-resize shadow-md bg-navy-dark"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-navy-dark/90 text-surface-white text-xs tracking-relaxed font-light border border-white/20 backdrop-blur-md">
            {afterLabel}
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped Layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw', height: '100%' }}>
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 px-3.5 py-1.5 bg-navy-deep/90 text-surface-white text-xs tracking-relaxed font-light border border-white/20 backdrop-blur-md">
              {beforeLabel}
            </div>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-surface-white shadow-2xl pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full bg-navy-deep border-2 border-surface-white flex items-center justify-center text-surface-white shadow-xl pointer-events-auto">
            <Sliders className="w-4 h-4 text-blue-soft rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
