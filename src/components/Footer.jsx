'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, navLinks, servicesData } from '../data/siteData';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1B2B] text-surface-white border-t border-navy-deep/40">
      {/* Main Multi-Column Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Col 1: Brand & Logo (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
                <div className="bg-surface-white px-3.5 py-2 rounded-xl inline-flex items-center shadow-md">
                  <div className="relative h-9 sm:h-10 w-36 sm:w-44">
                    <Image
                      src="/images/vriksha_logo.png"
                      alt="Vriksha Constructions & Interior Designers"
                      fill
                      sizes="176px"
                      className="object-contain object-left"
                    />
                  </div>
                </div>
              </Link>
              <p className="text-sm text-blue-veryLight/80 font-light leading-relaxed max-w-sm">
                Creating beautiful, functional and lasting spaces for a better tomorrow.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <polygon points="10 15 15 12 10 9 10 15" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-surface-white font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs text-blue-veryLight/80 font-light">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-surface-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Our Services (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-surface-white font-semibold">
                Our Services
              </h4>
              <ul className="space-y-2.5 text-xs text-blue-veryLight/80 font-light">
                {servicesData.map((svc) => (
                  <li key={svc.id}>
                    <Link
                      href={svc.href}
                      className="hover:text-surface-white transition-colors"
                    >
                      {svc.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="hover:text-surface-white transition-colors">
                    Turnkey Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Us (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-surface-white font-semibold">
                Contact Us
              </h4>
              <ul className="space-y-3 text-xs text-blue-veryLight/80 font-light">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-soft shrink-0 mt-0.5" />
                  <span>Hyderabad, Telangana</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-blue-soft shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-surface-white transition-colors">
                    {siteConfig.phoneFormatted}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-blue-soft shrink-0" />
                  <a href="mailto:info@vriksha.in" className="hover:text-surface-white transition-colors">
                    info@vriksha.in
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-blue-soft shrink-0 mt-0.5" />
                  <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-veryLight/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-surface-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-surface-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
