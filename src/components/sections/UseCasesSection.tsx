'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import { useCasesData } from '@/data/useCases';
import {
  GraduationCap,
  Stethoscope,
  Building,
  Scale,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const useCaseIcons: Record<string, React.ReactNode> = {
  education: <GraduationCap className="w-5 h-5" />,
  healthcare: <Stethoscope className="w-5 h-5" />,
  sme: <Building className="w-5 h-5" />,
  legal: <Scale className="w-5 h-5" />,
};

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(useCasesData[0].id);
  const activeCase = useCasesData.find((c) => c.id === activeTab) || useCasesData[0];

  return (
    <section id="use-cases" className="py-20 md:py-28 bg-[#fcfbf9] border-t border-[#e9e6e0]">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold text-blue-700">
            Tailored Industry Workflows
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-neutral-950 font-normal tracking-tight">
            Designed for documents that matter.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            See how different institutions leverage private document intelligence to eliminate repetitive work while keeping confidential data safe.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {useCasesData.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer text-center ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs scale-102'
                    : 'bg-white text-neutral-600 hover:text-neutral-950 border border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                <span>{useCaseIcons[item.id]}</span>
                <span className="truncate">{item.industry}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 p-5 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {activeCase.headline}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                {activeCase.industry}
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {activeCase.description}
              </p>

              <div className="space-y-3 pt-2">
                {activeCase.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Explore this workflow with our engineering team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-6 border border-neutral-100/90 text-neutral-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-200/70">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-neutral-500 ml-2">node.active</span>
              </div>

              <div className="space-y-2 text-xs">
                <p className="text-neutral-500 font-medium">Sample Prompt:</p>
                <div className="bg-white p-3 rounded-xl border border-neutral-200 text-neutral-800 italic">
                  &ldquo;Extract all pending audit actions and statutory deadlines from this quarter&apos;s circulars.&rdquo;
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <p className="text-neutral-500 font-medium">Output Delivery:</p>
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-200/70 text-blue-900 font-medium">
                  3 verified action items compiled with page-level citations. Draft ready for review.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UseCasesSection;
