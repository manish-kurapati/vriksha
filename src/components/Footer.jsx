'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, navLinks, servicesData } from '../data/siteData';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#081824] text-surface-white border-t border-[#E5DACB]/15">
      {/* Main Multi-Column Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Col 1: Brand & Logo (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
                <div className="relative h-20 sm:h-24 w-60 sm:w-72">
                  <Image
                    src="/images/vriksha_logo_white.png"
                    alt="Vriksha Constructions & Interior Designers"
                    fill
                    sizes="(max-width: 640px) 240px, 288px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="text-sm text-blue-veryLight/80 font-light leading-relaxed max-w-sm">
                Creating beautiful, functional and lasting spaces for a better tomorrow.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/vriksha_constructions?stkn=MWJxajI0bWFsajUwMQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-brand-orange hover:bg-brand-orange transition-all duration-300 shadow-sm"
                  aria-label="Follow Vriksha Constructions on Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-surface-white transition-colors">
                    {siteConfig.email}
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
