'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import { Shield, Layers, Cpu, Database, ArrowRight, Check, Activity } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-20 md:py-28 bg-white/75 backdrop-blur-2xl border-t border-white/50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold text-blue-700">
            <Layers className="w-3.5 h-3.5" />
            The NodiAI Architecture
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-neutral-950 font-normal tracking-tight">
            How institutions work with documents without data risk.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            A private intelligence pipeline that turns isolated institutional records into instantly searchable, actionable intelligence.
          </p>
        </div>

        {/* Voiceflow Style 3-Column Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Visual Ingestion Pipeline */}
          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Step 01 · Ingestion & Index
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Local Vector DB
                </span>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Knowledge Ingestion Pipeline
              </h3>
              <p className="text-sm text-neutral-600 mb-6">
                Parse circulars, archives, minutes, and guidelines securely on your own network.
              </p>

              {/* Node diagram mockup */}
              <div className="space-y-3 bg-neutral-50/80 p-4 rounded-2xl border border-neutral-100">
                <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-2xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-neutral-800">
                      Internal Documents (PDF, DOCX)
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
                    Air-gapped
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 bg-blue-300" />
                </div>

                <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-700" />
                    <span className="text-xs font-medium text-blue-950">
                      Compact Embeddings Index
                    </span>
                  </div>
                  <span className="text-[10px] text-blue-700 bg-blue-100/80 px-1.5 py-0.5 rounded font-medium">
                    Zero Cloud Sync
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 relative z-10 flex items-center justify-between text-xs text-neutral-500">
              <span>Supports OCR & Scanned Records</span>
              <Check className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Card 2: Interactive Bilingual Chat Widget */}
          <div className="rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white p-6 shadow-xl flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-neutral-300">
                    NodiAI Interactive Assistant
                  </span>
                </div>
                <span className="text-[10px] bg-neutral-800 border border-neutral-700 text-neutral-300 px-2 py-0.5 rounded-full font-mono">
                  Assamese ↔ English
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Document Q&A & Translation
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Direct natural language conversations with citations grounded in institutional memory.
              </p>

              {/* Chat interaction mockup */}
              <div className="space-y-3 font-sans text-xs">
                <div className="bg-neutral-800/90 text-neutral-200 p-3 rounded-2xl rounded-tr-xs border border-neutral-700/60 ml-auto max-w-[85%]">
                  What are the eligibility criteria for the 2026 faculty research leave?
                </div>

                <div className="bg-blue-950/80 text-blue-100 p-3.5 rounded-2xl rounded-tl-xs border border-blue-800/50 mr-auto max-w-[95%] space-y-1.5">
                  <p className="leading-relaxed">
                    According to <em>Leave Circular 2026/04 (Section 3.2)</em>:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-[11px] text-blue-200">
                    <li>Minimum 3 years of confirmed service.</li>
                    <li>Approval from Departmental Research Board.</li>
                  </ul>
                  <div className="pt-1 text-[10px] text-blue-400 font-mono">
                    Citation: Archive/Circulars/2026_04.pdf (p. 4)
                  </div>
                </div>
              </div>
            </div>

            {/* Input pill */}
            <div className="mt-6 pt-3 relative z-10">
              <div className="flex items-center bg-neutral-800 border border-neutral-700 rounded-full px-3 py-2 text-xs text-neutral-400">
                <span className="truncate">Ask about policies, circulars, or records...</span>
                <div className="ml-auto w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Governance, Resolution & Metrics */}
          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm flex flex-col justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-guilloche opacity-70 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Governance & Proof
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  <Activity className="w-3 h-3" />
                  Audit Logged
                </span>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Controlled Audit & Privacy
              </h3>
              <p className="text-sm text-neutral-600 mb-6">
                Verifiable security guarantees designed to satisfy institutional compliance boards.
              </p>

              {/* Metric Line Graphic Mockup */}
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100 space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-600 font-medium">
                  <span>Privacy Integrity Index</span>
                  <span className="text-blue-600 font-bold">100% Secured</span>
                </div>

                {/* SVG Accuracy / Privacy Line */}
                <div className="h-16 w-full flex items-end">
                  <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                    <path
                      d="M 0,45 Q 40,40 70,25 T 140,20 T 200,8"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 0,45 Q 40,40 70,25 T 140,20 T 200,8 L 200,60 L 0,60 Z"
                      fill="url(#gradient)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* 3 Metric counters */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-200/70 text-center">
                  <div>
                    <p className="text-lg font-bold text-neutral-900">0%</p>
                    <p className="text-[10px] text-neutral-500 uppercase">Cloud Leak</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-neutral-900">100%</p>
                    <p className="text-[10px] text-neutral-500 uppercase">Air-gapped</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-neutral-900">&lt;1.2s</p>
                    <p className="text-[10px] text-neutral-500 uppercase">Query Speed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 relative z-10 flex items-center justify-between text-xs text-neutral-500">
              <span>Full Role-Based Access Controls</span>
              <Shield className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionSection;
