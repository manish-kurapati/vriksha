'use client';

import React, { useState, useEffect } from 'react';
import { useQuoteModal } from './QuoteModalContext';
import { siteConfig } from '../data/siteData';
import { X, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

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

export default function QuoteModal() {
  const { isOpen, closeModal, servicePreference } = useQuoteModal();
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

  useEffect(() => {
    if (servicePreference) {
      setFormData((prev) => ({ ...prev, projectType: servicePreference }));
    }
  }, [servicePreference]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const currentBudgetLabel = formatLakhsToIndianCurrency(budgetLakhs);

  const getWhatsAppUrl = () => {
    const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, '');
    const msg = `*New Quotation Inquiry - Vriksha Constructions*
----------------------------------------
*Name:* ${formData.name || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
${formData.email ? `*Email:* ${formData.email}\n` : ''}*Project Type:* ${formData.projectType || 'Residential Construction'}
*Estimated Budget:* ${currentBudgetLabel}
*Location & Notes:* ${formData.message || 'Plot / renovation inquiry'}
----------------------------------------
_Sent via Vriksha Website Quotation Form_`;

    return `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const whatsappUrl = getWhatsAppUrl();

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Automatically trigger WhatsApp in a new tab
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setBudgetLakhs(50);
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'Residential Construction',
      message: '',
    });
    closeModal();
  };

  // Calculate percentage for slider gradient track
  const sliderPercentage = ((budgetLakhs - 10) / (300 - 10)) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B1B2B]/75 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-xl bg-surface-white border border-surface-border shadow-2xl p-5 sm:p-8 md:p-9 transition-all max-h-[92vh] overflow-y-auto rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-ink-muted hover:text-navy-deep transition-colors p-1.5"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-5 sm:mb-6">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0B1B2B] uppercase block mb-1">
                INSTANT WHATSAPP QUOTATION
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-[#0B1B2B] font-medium leading-tight">
                Request a Project Quotation
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted mt-1 font-light">
                Fill in your project parameters below. Your customized quotation brief will be routed directly to our WhatsApp desk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wide font-medium text-ink-main mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-surface-border rounded-md text-ink-main focus:outline-none focus:border-[#0B1B2B] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wide font-medium text-ink-main mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="99893 82877"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-surface-border rounded-md text-ink-main focus:outline-none focus:border-[#0B1B2B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide font-medium text-ink-main mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-surface-border rounded-md text-ink-main focus:outline-none focus:border-[#0B1B2B] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide font-medium text-ink-main mb-1">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-surface-border rounded-md text-ink-main focus:outline-none focus:border-[#0B1B2B] transition-colors cursor-pointer"
                >
                  <option value="Residential Construction">Residential Construction</option>
                  <option value="Commercial Construction">Commercial Construction</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                </select>
              </div>

              {/* SLIDING BUDGET BAR: 10 Lakhs to 3 Crores */}
              <div className="bg-[#F8FAFC] p-4 rounded-lg border border-surface-border space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wide font-semibold text-[#0B1B2B]">
                    Estimated Budget Range
                  </label>
                  <span className="px-3 py-1 bg-[#0B1B2B] text-surface-white text-xs sm:text-sm font-semibold rounded-full shadow-sm">
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
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#0B1B2B]"
                    style={{
                      background: `linear-gradient(to right, #0B1B2B 0%, #0B1B2B ${sliderPercentage}%, #E2E8F0 ${sliderPercentage}%, #E2E8F0 100%)`
                    }}
                    aria-label="Estimated budget range from 10 Lakhs to 3 Crores"
                  />
                </div>

                {/* Slider range markers */}
                <div className="flex justify-between items-center text-[11px] text-ink-muted font-medium pt-0.5">
                  <span>₹10 Lakhs</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crores</span>
                  <span>₹3 Crores +</span>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide font-medium text-ink-main mb-1">
                  Project Notes & Location
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Plot location (e.g. Jubilee Hills, Gachibowli), sq ft, or specific requirements..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-surface-border rounded-md text-ink-main focus:outline-none focus:border-[#0B1B2B] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-md active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>{loading ? 'Sending to WhatsApp...' : 'Get Quotation on WhatsApp'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-ink-muted pt-2 border-t border-surface-border">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
                  Instant WhatsApp Connect
                </span>
                <span className="font-semibold text-[#0B1B2B]">
                  {siteConfig.phoneFormatted}
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
            </div>
            <span className="text-[11px] font-semibold tracking-wider text-[#25D366] uppercase block mb-1">
              QUOTATION INITIATED
            </span>
            <h3 className="text-2xl font-serif text-[#0B1B2B] font-medium mb-2">
              Thank You, {formData.name || 'Valued Client'}
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto mb-5 font-light leading-relaxed">
              Your quotation details with budget <strong>{currentBudgetLabel}</strong> have been formatted for our WhatsApp team at <strong className="text-[#0B1B2B]">{siteConfig.phoneFormatted}</strong>.
            </p>

            <div className="p-4 bg-[#F8FAFC] border border-surface-border rounded-lg text-left text-xs text-ink-main space-y-1.5 mb-6">
              <div className="flex justify-between">
                <span className="text-ink-muted">Client Phone:</span>
                <span className="font-semibold text-[#0B1B2B]">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Service Type:</span>
                <span className="font-semibold text-[#0B1B2B]">{formData.projectType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Selected Budget:</span>
                <span className="font-semibold text-[#0B1B2B]">{currentBudgetLabel}</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>Open in WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full px-6 py-2.5 bg-[#F1F5F9] text-ink-main hover:bg-[#E2E8F0] text-xs uppercase tracking-wider font-medium rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
