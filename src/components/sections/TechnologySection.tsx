'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import { technologyHighlights } from '@/data/siteContent';
import { Cpu, ShieldCheck, FileCheck, Layers, Globe2, Radio } from 'lucide-react';

const techIcons: Record<string, React.ReactNode> = {
  rag: <Layers className="w-5 h-5 text-blue-600" />,
  'compact-models': <Cpu className="w-5 h-5 text-blue-600" />,
  governance: <ShieldCheck className="w-5 h-5 text-blue-600" />,
  audit: <FileCheck className="w-5 h-5 text-blue-600" />,
  multilingual: <Globe2 className="w-5 h-5 text-blue-600" />,
  airgap: <Radio className="w-5 h-5 text-blue-600" />,
};

export const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="py-20 md:py-28 bg-white border-t border-[#e9e6e0]">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold text-blue-700">
            Engineered For Strict Environments
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-neutral-950 font-normal tracking-tight">
            Built for privacy and performance.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            NodiAI combines retrieval-augmented generation with high-efficiency localized models to deliver rapid insights on cost-effective hardware.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologyHighlights.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl border border-neutral-200/80 bg-[#fcfbf9] hover:border-blue-300 hover:shadow-xs transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 shadow-2xs flex items-center justify-center mb-4">
                {techIcons[item.id] || <Cpu className="w-5 h-5 text-blue-600" />}
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Origin Story Banner from PRD (Assamese 74M model) */}
        <div className="rounded-3xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-blue-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700/50">
              The NodiAI Story
            </span>
            <h3 className="font-editorial text-2xl sm:text-4xl font-normal leading-tight">
              Rooted in low-resource language engineering.
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              NodiAI began with the development of an optimized 74M-parameter Assamese language model, proving that lightweight, highly targeted AI models can outmatch generic giants in efficiency, domain precision, and multilingual depth.
            </p>
            <p className="text-xs text-neutral-400 pt-2 font-medium">
              Today, that foundation powers our privacy-preserving document intelligence suite across Indian institutions.
            </p>
          </div>

          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 text-right">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center space-y-2">
              <span className="text-4xl font-bold font-mono text-blue-400">74M</span>
              <p className="text-xs text-neutral-300 font-medium">Param Foundations</p>
              <span className="inline-block text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">
                Optimized Inference
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechnologySection;
