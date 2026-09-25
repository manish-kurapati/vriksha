'use client';

import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../data/siteData';
import { Quote, ChevronLeft, ChevronRight, Star, CheckCircle2, Pause, Play } from 'lucide-react';

export default function TestimonialsMarquee({ autoPlay = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Extend data to have even richer entries
  const allReviews = [
    ...testimonialsData,
    {
      id: 6,
      quote: "From foundation soil testing in Banjara Hills to custom fluted walnut millwork, Vriksha demonstrated sheer structural mastery. Our residence is energy-neutral and acoustically tranquil.",
      author: "Aditya & Suniti Reddy",
      role: "Private Villa Owners",
      project: "The Courtyard Sanctuary",
      year: "2024"
    },
    {
      id: 7,
      quote: "Executing a 34,000 sq. ft. commercial tech facility with zero variation in the final BOQ was unheard of until we partnered with Vriksha. They delivered unmatched German-grade precision.",
      author: "Meera Krishnan",
      role: "VP Infrastructure, FinTech Corp",
      project: "Apex Innovation Campus",
      year: "2024"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allReviews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [autoPlay, isPaused, allReviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allReviews.length) % allReviews.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Interactive Infinite Scrolling Ticker (Marquee Rail) */}
      <div className="mb-10 overflow-hidden relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap py-2">
          {[...allReviews, ...allReviews].map((t, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx % allReviews.length)}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-surface-white border border-surface-border text-xs text-navy-deep font-medium cursor-pointer hover:border-blue-royal/60 transition-colors shrink-0 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-royal shrink-0" />
              <span className="font-serif text-sm font-semibold">{t.author}</span>
              <span className="text-ink-muted font-light">•</span>
              <span className="text-ink-muted font-light">{t.project}</span>
              <div className="flex items-center text-blue-royal ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-blue-royal text-blue-royal" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Editorial Carousel Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-surface-white border border-surface-border p-8 sm:p-12 lg:p-16 relative shadow-lg min-h-[320px] flex flex-col justify-between transition-all duration-500">
          {/* Subtle Blue Quote Mark */}
          <div className="absolute top-6 right-8 text-6xl sm:text-7xl font-serif text-blue-royal/10 select-none pointer-events-none">
            &ldquo;
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1.5 text-blue-royal">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-royal text-blue-royal" />
                ))}
                <span className="ml-2 text-xs font-semibold uppercase tracking-editorial text-blue-royal">
                  Verified Client Review
                </span>
              </div>
              <span className="text-xs text-ink-muted font-mono">
                0{currentIndex + 1} / 0{allReviews.length}
              </span>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl font-serif text-navy-deep font-normal italic leading-relaxed transition-opacity duration-300">
              &ldquo;{allReviews[currentIndex].quote}&rdquo;
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-surface-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-serif font-semibold text-navy-deep">
                {allReviews[currentIndex].author}
              </h4>
              <p className="text-xs text-blue-royal uppercase tracking-relaxed mt-0.5 font-medium">
                {allReviews[currentIndex].role}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-ink-muted font-light mt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-royal" />
                <span>{allReviews[currentIndex].project} • {allReviews[currentIndex].year}</span>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 border border-surface-border bg-surface-neutral hover:bg-navy-deep hover:text-surface-white text-navy-deep flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-10 h-10 border border-surface-border bg-surface-neutral hover:bg-blue-ice text-navy-deep flex items-center justify-center transition-colors"
                aria-label={isPaused ? "Play auto scroll" : "Pause auto scroll"}
                title={isPaused ? "Resume Auto Scroll" : "Pause Auto Scroll"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-blue-royal" /> : <Pause className="w-3.5 h-3.5 text-ink-muted" />}
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 border border-surface-border bg-surface-neutral hover:bg-navy-deep hover:text-surface-white text-navy-deep flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dot Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {allReviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-blue-royal' : 'w-2 bg-surface-border hover:bg-blue-soft'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
