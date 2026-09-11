'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import { problemData } from '@/data/siteContent';
import { AlertCircle, Lock, Clock, FileWarning, Layers } from 'lucide-react';

const problemIcons: Record<string, React.ReactNode> = {
  'data-privacy': <Lock className="w-5 h-5 text-amber-600" />,
  'document-deluge': <Layers className="w-5 h-5 text-red-600" />,
  'time-lost': <Clock className="w-5 h-5 text-blue-600" />,
  'compliance': <AlertCircle className="w-5 h-5 text-purple-600" />,
  'repetitive-admin': <FileWarning className="w-5 h-5 text-neutral-600" />,
};

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-white/80 backdrop-blur-2xl border-t border-white/60">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-xs font-semibold text-red-700">
            The Institutional Bottleneck
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-neutral-950 font-normal tracking-tight">
            Organizations have the data. <br className="hidden sm:inline" />
            <span className="italic font-serif">They just can&apos;t use it efficiently.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Internal reports, circulars, student files, and case notes are accumulating. Yet unlocking their value with public AI poses severe privacy and compliance liabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemData.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 rounded-3xl border border-neutral-200/80 bg-white/90 backdrop-blur-md hover:border-neutral-300 hover:shadow-md transition-all ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-amber-50/70 to-white/90' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-white border border-neutral-200/80 flex items-center justify-center shadow-2xs mb-4">
                {problemIcons[item.id] || <AlertCircle className="w-5 h-5 text-neutral-600" />}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Callout box */}
          <div className="p-6 rounded-3xl border border-blue-200/80 bg-blue-50/50 flex flex-col justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
              The Trade-off Ends Here
            </span>
            <div className="my-3">
              <p className="font-editorial text-2xl text-blue-950 font-normal leading-snug">
                You should never have to choose between AI productivity and institutional data control.
              </p>
            </div>
            <p className="text-xs text-blue-700 font-medium">
              NodiAI is engineered specifically to deliver both.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;
