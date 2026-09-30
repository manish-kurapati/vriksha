'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up', // 'fade-up', 'fade-down', 'fade-in', 'slide-left', 'slide-right', 'zoom-in'
  delay = 0,
  duration = 650,
  threshold = 0.08,
  once = false, // false enables re-animating whenever scrolling up or down
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else {
            if (!once) {
              setIsVisible(false);
            }
          }
        });
      },
      { 
        threshold,
        rootMargin: '0px 0px -30px 0px' 
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold, once]);

  const getAnimationStyles = () => {
    // When entering, use full duration, delay, and luxurious easing.
    // When leaving, reset quickly and cleanly with 0 delay so re-entry is always primed.
    const enterTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
    const exitTransition = `opacity 200ms ease-out 0ms, transform 200ms ease-out 0ms`;
    const transition = isVisible ? enterTransition : exitTransition;

    switch (animation) {
      case 'fade-up':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
          transition,
          willChange: 'opacity, transform',
        };
      case 'fade-down':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-28px)',
          transition,
          willChange: 'opacity, transform',
        };
      case 'fade-in':
        return {
          opacity: isVisible ? 1 : 0,
          transition: isVisible ? `opacity ${duration}ms ease-out ${delay}ms` : `opacity 200ms ease-out 0ms`,
          willChange: 'opacity',
        };
      case 'slide-left':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-32px)',
          transition,
          willChange: 'opacity, transform',
        };
      case 'slide-right':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(32px)',
          transition,
          willChange: 'opacity, transform',
        };
      case 'zoom-in':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition,
          willChange: 'opacity, transform',
        };
      default:
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition,
          willChange: 'opacity, transform',
        };
    }
  };

  return (
    <div ref={domRef} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
}
