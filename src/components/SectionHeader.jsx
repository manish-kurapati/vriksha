import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  dark = false,
  className = '',
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span
          className={`text-[11px] font-semibold tracking-editorial uppercase block mb-2.5 ${
            dark ? 'text-blue-soft' : 'text-blue-royal'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight ${
          dark ? 'text-surface-white' : 'text-navy-deep'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${
            dark ? 'text-blue-veryLight/80' : 'text-ink-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
