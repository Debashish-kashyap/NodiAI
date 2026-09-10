'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import { pilotProgramContent } from '@/data/siteContent';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const PilotProgramSection: React.FC = () => {
  return (
    <section id="pilot" className="py-20 md:py-24 bg-[#fcfbf9] border-t border-[#e9e6e0]">
      <Container>
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-blue-200/90 bg-gradient-to-b from-blue-50/70 via-white to-white p-6 sm:p-14 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-semibold text-blue-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                {pilotProgramContent.badge}
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-950 font-normal tracking-tight">
                {pilotProgramContent.title}
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {pilotProgramContent.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {pilotProgramContent.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md transition-all active:scale-95"
              >
                <span>{pilotProgramContent.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-neutral-500 mt-2.5">
                Limited cohort size · Priority on-site support
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PilotProgramSection;
