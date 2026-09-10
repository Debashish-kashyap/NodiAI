'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CloudShader } from '@/components/ui/cloud-shader';
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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#fcfbf9] via-[#f8f6f0] to-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e5e1d8] shadow-xs text-xs md:text-sm text-neutral-700 hover:border-blue-300 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-neutral-900">Private By Design</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-600">{siteConfig.locationBadge}</span>
          </div>
        </div>

        {/* Editorial Serif Headline (Voiceflow Style) */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-tight text-neutral-950 font-normal leading-[1.08]">
            AI for your documents.{' '}
            <span className="italic block sm:inline font-serif font-light text-neutral-800">
              On your terms.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
            The Private Document Intelligence platform enabling schools, clinics, legal firms, and enterprises to search, summarize, and automate internal records — with zero data exposure.
          </p>

          {/* Voiceflow Style Email Input Pill CTA */}
          <div className="pt-3 max-w-md mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-white p-1.5 pl-4 rounded-full border border-neutral-300/90 shadow-sm hover:border-blue-400 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your institutional email..."
                className="w-full text-sm text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-hidden"
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium shadow-xs transition-all"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex items-center justify-center gap-4 mt-3 text-xs text-neutral-500">
              <span className="inline-flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                Air-gapped & On-Premise
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-blue-600" />
                No Public Cloud Telemetry
              </span>
            </div>
          </div>
        </div>

        {/* Scenic Visual Canvas with Integrated CloudShader & Floating Mockup */}
        <div className="mt-12 sm:mt-16 relative mx-auto max-w-5xl rounded-3xl border border-neutral-200/90 bg-white/60 p-2 sm:p-3 shadow-xl backdrop-blur-md overflow-hidden">
          {/* Cloud Shader Backdrop */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#3876ba] to-[#8cbfe8]">
            <CloudShader
              className="absolute inset-0 w-full h-full"
              speed={0.8}
              count={5}
              cloudColor="#ffffff"
              skyTopColor="#2b5993"
              skyBottomColor="#8cbfe8"
            />

            {/* Subtle Horizon Mist Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />

            {/* Central Institutional Intelligence Workspace Preview */}
            <div className="absolute inset-x-4 bottom-4 md:inset-x-12 md:bottom-6 z-20">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-2xl border border-white/80 max-w-2xl mx-auto">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      N
                    </div>
                    <span className="text-xs font-semibold text-neutral-800 tracking-tight">
                      Internal Document Repository · Private Node
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Encrypted Local RAG
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-neutral-700">
                  <div className="flex items-start gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                    <FileText className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">
                        Query: &ldquo;Extract semester fee rebate policies & circular deadines from 2024-2026 files&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-blue-50/70 p-2.5 rounded-lg border border-blue-100/70">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-neutral-800 leading-relaxed">
                        <strong>NodiAI:</strong> Identified 3 applicable circulars. Section 4(B) specifies a 15% merit concession deadline of Oct 15. Action item generated for Registrar notice drafting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Voiceflow Floating Story / Badge Card */}
            <div className="hidden lg:block absolute bottom-6 right-6 z-30">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 border border-white shadow-lg text-left max-w-xs">
                <p className="text-[11px] font-semibold text-neutral-900">
                  Institutional Pilot Program
                </p>
                <p className="text-[10px] text-neutral-500 mt-0.5">
                  Currently accepting 10 select institutions for on-premise evaluation.
                </p>
                <Link
                  href="#pilot"
                  className="mt-2 text-[10px] font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-0.5"
                >
                  Join pilot cohort →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Voiceflow Style Social Proof / Sector Bar */}
        <div className="mt-14 pt-8 border-t border-neutral-200/60 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mb-6">
            Engineered for high-governance institutional sectors
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-3xl mx-auto opacity-75">
            <div className="flex items-center justify-center gap-2 text-neutral-700 text-sm font-semibold">
              <Building2 className="w-4 h-4 text-neutral-500" />
              <span>Colleges & Universities</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-neutral-700 text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-neutral-500" />
              <span>Healthcare Clinics</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-neutral-700 text-sm font-semibold">
              <FileText className="w-4 h-4 text-neutral-500" />
              <span>Legal Practices</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-neutral-700 text-sm font-semibold">
              <Briefcase className="w-4 h-4 text-neutral-500" />
              <span>Regional Enterprises</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
