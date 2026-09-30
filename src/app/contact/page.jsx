'use client';

import React, { useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { siteConfig } from '../../data/siteData';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

function formatLakhsToIndianCurrency(val) {
  const num = Number(val);
  if (isNaN(num) || num <= 10) return '₹10 Lakhs';
  if (num >= 300) return '₹3 Crores +';
  if (num < 100) {
    return `₹${num} Lakhs`;
  }
  const cr = (num / 100).toFixed(num % 100 === 0 ? 0 : 2);
  return `₹${cr} Crore${num > 100 ? 's' : ''}`;
}

export default function ContactPage() {
  const [budgetLakhs, setBudgetLakhs] = useState(50);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Construction',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const currentBudgetLabel = formatLakhsToIndianCurrency(budgetLakhs);

  const getWhatsAppUrl = () => {
    const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, '');
    const msg = `*New Consultation Inquiry - Vriksha Constructions*
----------------------------------------
*Name:* ${formData.name || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
${formData.email ? `*Email:* ${formData.email}\n` : ''}*Project Type:* ${formData.projectType || 'Residential Construction'}
*Estimated Budget:* ${currentBudgetLabel}
*Location & Notes:* ${formData.message || 'Plot / renovation inquiry'}
----------------------------------------
_Sent via Vriksha Website Contact Form_`;

    return `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const whatsappUrl = getWhatsAppUrl();

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
    }, 400);
  };

  const sliderPercentage = ((budgetLakhs - 10) / (300 - 10)) * 100;

  return (
    <div className="bg-surface-warm">
      {/* 1. HERO */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* LEFT COLUMN: INTRODUCTION & STUDIO DETAILS */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal animation="fade-up">
                <div>
                  <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-3">
                    INITIATE A CONVERSATION
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary font-normal leading-[1.1] tracking-tight">
                    Let&apos;s Create<br />
                    Something Exceptional
                  </h1>
                  <p className="mt-6 text-base sm:text-lg text-ink-muted font-light leading-relaxed">
                    We invite prospective homeowners, corporate leaders, and design collaborators to share their site requirements. Every inquiry is reviewed directly by our founding team.
                  </p>
                </div>

                {/* Quote Block */}
                <div className="p-6 bg-surface-white border border-surface-border rounded-lg shadow-xs mt-8">
                  <p className="font-serif italic text-base sm:text-lg text-navy-deep leading-relaxed">
                    &ldquo;{siteConfig.tagline}&rdquo;
                  </p>
                </div>

                {/* Contact Details List */}
                <div className="space-y-6 pt-8 border-t border-surface-border mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-surface-border bg-surface-white rounded-lg flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wide text-ink-muted font-semibold block">
                        Direct Studio Desk & WhatsApp
                      </span>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-lg font-sans font-semibold text-navy-deep hover:text-brand-orange transition-colors mt-0.5 block"
                      >
                        {siteConfig.phoneFormatted}
                      </a>
                      <span className="text-xs text-ink-muted font-light">Available Mon – Sat, 9am – 7pm</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-surface-border bg-surface-white rounded-lg flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wide text-ink-muted font-semibold block">
                        Direct Email Inquiries
                      </span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-medium text-navy-deep hover:text-primary transition-colors mt-0.5 block"
                      >
                        {siteConfig.email}
                      </a>
                      <span className="text-xs text-ink-muted font-light">Architectural briefs & drawing submissions</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-surface-border bg-surface-white rounded-lg flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wide text-ink-muted font-semibold block">
                        Studio Presence
                      </span>
                      <p className="text-sm text-navy-deep font-light mt-0.5">
                        {siteConfig.address}
                      </p>
                      <span className="text-xs text-ink-muted font-light">By appointment only</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-surface-border bg-surface-white rounded-lg flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-xs">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wide text-ink-muted font-semibold block">
                        Consultation Hours
                      </span>
                      <p className="text-sm text-navy-deep font-light mt-0.5">
                        {siteConfig.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN: STATIC INQUIRY FORM */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-up" delay={150}>
                <div className="bg-surface-white border border-surface-border p-6 sm:p-10 lg:p-12 rounded-xl shadow-sm">
                {!submitted ? (
                  <div>
                    <div className="mb-6 sm:mb-8">
                      <span className="text-[11px] font-semibold tracking-wider text-brand-orange uppercase block mb-1">
                        INSTANT INQUIRY
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif text-primary font-normal">
                        Request a Project Quotation
                      </h2>
                      <p className="text-xs sm:text-sm text-ink-muted font-light mt-1.5">
                        Please outline your project scope below. Your quotation details will be delivered instantly to WhatsApp.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wide font-medium text-navy-deep mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 text-base sm:text-sm bg-surface-white border border-surface-border rounded-lg text-ink-main focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-wide font-medium text-navy-deep mb-1.5">
                            WhatsApp / Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="99893 82877"
                            className="w-full px-4 py-3 text-base sm:text-sm bg-surface-white border border-surface-border rounded-lg text-ink-main focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wide font-medium text-navy-deep mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@domain.com"
                            className="w-full px-4 py-3 text-base sm:text-sm bg-surface-white border border-surface-border rounded-lg text-ink-main focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wide font-medium text-navy-deep mb-1.5">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-base sm:text-sm bg-surface-white border border-surface-border rounded-lg text-ink-main focus:outline-none focus:border-primary transition-colors cursor-pointer"
                        >
                          <option value="Residential Construction">Residential Construction</option>
                          <option value="Commercial Construction">Commercial Construction</option>
                          <option value="Interior Design">Interior Design</option>
                          <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                        </select>
                      </div>

                      {/* SLIDING BUDGET BAR: 10 Lakhs to 3 Crores */}
                      <div className="bg-surface-warm p-4 sm:p-5 rounded-lg border border-secondary/60 space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-xs uppercase tracking-wide font-semibold text-primary">
                            Estimated Budget Range
                          </label>
                          <span className="px-3.5 py-1 bg-primary text-surface-white text-xs sm:text-sm font-semibold rounded-full shadow-sm">
                            {currentBudgetLabel}
                          </span>
                        </div>

                        {/* Range Input Slider */}
                        <div className="pt-1">
                          <input
                            type="range"
                            min="10"
                            max="300"
                            step="5"
                            value={budgetLakhs}
                            onChange={(e) => setBudgetLakhs(Number(e.target.value))}
                            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#006A9E]"
                            style={{
                              background: `linear-gradient(to right, #006A9E 0%, #006A9E ${sliderPercentage}%, #E5DACB ${sliderPercentage}%, #E5DACB 100%)`
                            }}
                            aria-label="Estimated budget range from 10 Lakhs to 3 Crores"
                          />
                        </div>

                        {/* Slider range markers */}
                        <div className="flex justify-between items-center text-[10px] sm:text-[11px] text-ink-muted font-medium pt-0.5">
                          <span><span className="hidden sm:inline">₹10 Lakhs</span><span className="sm:hidden">₹10L</span></span>
                          <span><span className="hidden sm:inline">₹50 Lakhs</span><span className="sm:hidden">₹50L</span></span>
                          <span><span className="hidden sm:inline">₹1 Crore</span><span className="sm:hidden">₹1Cr</span></span>
                          <span><span className="hidden sm:inline">₹2 Crores</span><span className="sm:hidden">₹2Cr</span></span>
                          <span><span className="hidden sm:inline">₹3 Crores +</span><span className="sm:hidden">₹3Cr+</span></span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wide font-medium text-navy-deep mb-1.5">
                          Project Location & Vision Notes
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please specify plot size (e.g. 500 sq. yards in Jubilee Hills), expected timeline, or key architectural requirements..."
                          className="w-full px-4 py-3 text-base sm:text-sm bg-surface-white border border-surface-border rounded-lg text-ink-main focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-lg transition-all shadow-md active:scale-[0.99]"
                        >
                          <MessageCircle className="w-4 h-4 fill-white text-white" />
                          <span>{loading ? 'Sending to WhatsApp...' : 'Get Quotation on WhatsApp'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-[11px] text-ink-muted text-center pt-2 font-light">
                        Strict client confidentiality assured. Direct WhatsApp consultation.
                      </p>
                    </form>
                  </div>
                ) : (
                  <div className="py-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-[#25D366]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider text-[#25D366] uppercase block mb-1">
                        QUOTATION INITIATED
                      </span>
                      <h3 className="text-3xl font-serif text-primary font-normal">
                        Thank You, {formData.name}
                      </h3>
                      <p className="mt-3 text-sm text-ink-muted font-light leading-relaxed max-w-md mx-auto">
                        Your project parameters with estimated budget <strong>{currentBudgetLabel}</strong> have been prepared for WhatsApp support at <strong className="text-primary">{siteConfig.phoneFormatted}</strong>.
                      </p>
                    </div>

                    <div className="p-6 bg-surface-white border border-surface-border rounded-lg text-left space-y-2 text-xs text-ink-main max-w-md mx-auto shadow-sm">
                      <div className="flex justify-between">
                        <span className="text-ink-muted">Service Category:</span>
                        <span className="font-semibold text-navy-deep">{formData.projectType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-muted">Budget Window:</span>
                        <span className="font-semibold text-navy-deep">{currentBudgetLabel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-muted">Studio Desk:</span>
                        <span className="font-semibold text-[#25D366]">{siteConfig.phoneFormatted}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white hover:bg-[#20bd5a] text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                        <span>Open in WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-white border border-surface-border text-navy-deep text-xs uppercase tracking-wider font-medium hover:bg-surface-neutral rounded-lg transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ / CONSULTATION PROTOCOL */}
      <section className="py-20 lg:py-24 bg-surface-warm border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-primary font-normal leading-tight">
                Consultation Guidance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 bg-surface-white border border-surface-border rounded-lg shadow-sm">
                <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                  What documents should I prepare?
                </h3>
                <p className="text-xs text-ink-muted font-light leading-relaxed">
                  If available, having your plot layout diagram, municipal survey numbers, and rough aesthetic preferences helps our team formulate initial spatial ideas during the first consultation.
                </p>
              </div>

              <div className="p-7 bg-surface-white border border-surface-border rounded-lg shadow-sm">
                <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                  Do you provide initial site visits?
                </h3>
                <p className="text-xs text-ink-muted font-light leading-relaxed">
                  Yes. Our structural engineers and architects conduct on-site soil and topography inspections across Hyderabad and surrounding regions.
                </p>
              </div>

              <div className="p-7 bg-surface-white border border-surface-border rounded-lg shadow-sm">
                <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                  Is our first consultation complimentary?
                </h3>
                <p className="text-xs text-ink-muted font-light leading-relaxed">
                  Yes. The initial 45-minute conceptual feasibility and zoning review with our principal team is complimentary and carries zero obligation.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
