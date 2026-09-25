'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up', // 'fade-up', 'fade-in', 'slide-left', 'slide-right', 'zoom-in'
  delay = 0,
  duration = 600,
  threshold = 0.12,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    switch (animation) {
      case 'fade-up':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
          transition: baseTransition,
        };
      case 'fade-in':
        return {
          opacity: isVisible ? 1 : 0,
          transition: `opacity ${duration}ms ease-out ${delay}ms`,
        };
      case 'slide-left':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-32px)',
          transition: baseTransition,
        };
      case 'slide-right':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(32px)',
          transition: baseTransition,
        };
      case 'zoom-in':
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: baseTransition,
        };
      default:
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: baseTransition,
        };
    }
  };

  return (
    <div ref={domRef} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
}
