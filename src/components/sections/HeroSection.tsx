'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteContent';
import { ShieldCheck, ArrowRight, Lock, CheckCircle2, FileText, Briefcase, Building2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-transparent">
      {/* Subtle radial scrim behind hero content for crisp legibility */}
      <div className="absolute inset-0 bg-radial from-slate-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 shadow-md text-xs md:text-sm text-white hover:bg-white/35 transition-all">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Private By Design</span>
            <span className="text-white/40">|</span>
            <span className="text-white/95">{siteConfig.locationBadge}</span>
          </div>
        </div>

        {/* Editorial Serif Headline (Bloom / Reference Style) */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-white font-normal leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
            AI for your documents.{' '}
            <span className="italic block sm:inline font-serif font-light text-white/95">
              On your terms.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-normal px-2 sm:px-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            The Private Document Intelligence platform enabling schools, clinics, legal firms, and enterprises to search, summarize, and automate internal records — with zero data exposure.
          </p>

          {/* Action CTAs: Bloom Pill Button + Institutional Email Input */}
          <div className="pt-3 sm:pt-6 max-w-xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Primary Bloom-style circular arrow pill CTA */}
              <Link
                href="#contact"
                className="group shrink-0 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 font-medium text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-102 transition-all border border-white/80 active:scale-98"
              >
                <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className="font-semibold">Book Consultation</span>
              </Link>

              {/* Direct Demo Input Pill */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center bg-white/95 backdrop-blur-xl p-1.5 pl-4 rounded-full border border-white/60 shadow-xl hover:border-blue-400 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all w-full sm:w-auto grow max-w-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Institutional email..."
                  className="w-full text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-500 bg-transparent px-2 py-1.5 focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-medium shadow-xs transition-all cursor-pointer"
                >
                  <span>Request</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            </div>

            {/* Security Guarantee Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
              <span className="inline-flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/25">
                <Lock className="w-3.5 h-3.5 text-emerald-300" />
                Air-gapped & On-Premise
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/25">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-300" />
                No Public Cloud Telemetry
              </span>
            </div>
          </div>
        </div>

        {/* Floating Intelligence Workspace Preview Card */}
        <div className="mt-14 sm:mt-18 relative mx-auto max-w-4xl">
          <div className="bg-white/92 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/90 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between pb-3.5 mb-4 border-b border-neutral-200/80 gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  N
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight">
                    Internal Document Repository · Private Node
                  </span>
                  <span className="hidden sm:inline-block text-[10px] text-neutral-500 font-mono bg-neutral-100 px-2 py-0.5 rounded">
                    v2.4-airgap
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Encrypted Local RAG
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-start gap-2.5 bg-neutral-50/90 p-3 rounded-xl border border-neutral-200/80">
                <FileText className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-neutral-900">
                    Query: &ldquo;Extract semester fee rebate policies & circular deadlines from 2024-2026 files&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-blue-50/80 p-3.5 rounded-xl border border-blue-200/70">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-800 leading-relaxed">
                    <strong className="text-neutral-950">NodiAI:</strong> Identified 3 applicable circulars. Section 4(B) specifies a 15% merit concession deadline of Oct 15. Action item generated for Registrar notice drafting. Zero external network telemetry transmitted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-governance Institutional Sector Proof Bar */}
        <div className="mt-14 pt-8 border-t border-white/25 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] mb-6">
            Engineered for high-governance institutional sectors
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 bg-white/85 backdrop-blur-xl border border-white/80 py-2.5 px-3 rounded-xl text-neutral-800 text-xs sm:text-sm font-semibold shadow-sm hover:bg-white transition-all">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>Colleges & Universities</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/85 backdrop-blur-xl border border-white/80 py-2.5 px-3 rounded-xl text-neutral-800 text-xs sm:text-sm font-semibold shadow-sm hover:bg-white transition-all">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Healthcare Clinics</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/85 backdrop-blur-xl border border-white/80 py-2.5 px-3 rounded-xl text-neutral-800 text-xs sm:text-sm font-semibold shadow-sm hover:bg-white transition-all">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Legal Practices</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/85 backdrop-blur-xl border border-white/80 py-2.5 px-3 rounded-xl text-neutral-800 text-xs sm:text-sm font-semibold shadow-sm hover:bg-white transition-all">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Regional Enterprises</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bloom-inspired Scenic Landscape & Mist Horizon Silhouette */}
      <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none overflow-hidden z-0">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full opacity-65"
        >
          {/* Back Lavender Mountain Ridge */}
          <path
            d="M0,120 Q360,60 720,110 T1440,80 L1440,180 L0,180 Z"
            fill="#8d79b2"
            opacity="0.4"
          />
          {/* Mid Violet Heather Ridge */}
          <path
            d="M0,140 Q400,90 880,130 T1440,110 L1440,180 L0,180 Z"
            fill="#79669e"
            opacity="0.5"
          />
          {/* Golden Dusk Flora Shimmer */}
          <path
            d="M120,155 Q300,125 500,155 T900,145 T1300,150 L1440,180 L0,180 Z"
            fill="#d99955"
            opacity="0.3"
          />
          {/* Scenic River / Stream Ribbon */}
          <path
            d="M580,180 C640,150 670,135 710,120 C735,110 760,115 780,125 C820,145 860,165 920,180 Z"
            fill="#6d83a3"
            opacity="0.45"
          />
        </svg>

        {/* Soft atmospheric mist fading down into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
