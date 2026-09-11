'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import { featuresData } from '@/data/features';
import {
  Search,
  FileText,
  MessageSquare,
  CheckSquare,
  PenTool,
  Languages,
  Workflow,
} from 'lucide-react';

const featureIconMap: Record<string, React.ReactNode> = {
  search: <Search className="w-5 h-5 text-blue-600" />,
  summaries: <FileText className="w-5 h-5 text-blue-600" />,
  qa: <MessageSquare className="w-5 h-5 text-blue-600" />,
  actions: <CheckSquare className="w-5 h-5 text-blue-600" />,
  drafting: <PenTool className="w-5 h-5 text-blue-600" />,
  translation: <Languages className="w-5 h-5 text-blue-600" />,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white/80 backdrop-blur-2xl border-t border-white/60">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold text-blue-700">
            <Workflow className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-neutral-950 font-normal tracking-tight">
            Built for the reality of institutional workflows.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            From cross-lingual document synthesis to deadline extraction, NodiAI handles the administrative weight so your team can focus on execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="p-7 rounded-3xl bg-white border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {featureIconMap[feature.id] || <FileText className="w-5 h-5 text-blue-600" />}
                  </div>
                  {feature.tag && (
                    <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100/80 px-2.5 py-0.5 rounded-full">
                      {feature.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-medium text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn how it operates</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
