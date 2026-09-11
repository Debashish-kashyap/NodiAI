'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import { deploymentOptions } from '@/data/siteContent';
import { Server, Cloud, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

const deploymentIcons: Record<string, React.ReactNode> = {
  'on-premise': <Server className="w-6 h-6 text-blue-600" />,
  'private-cloud': <Cloud className="w-6 h-6 text-blue-600" />,
  'controlled-env': <ShieldCheck className="w-6 h-6 text-blue-600" />,
};

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/RevealAnimation';

export const DeploymentSection: React.FC = () => {
  return (
    <section id="deployment" className="py-20 md:py-28 bg-white/75 backdrop-blur-2xl border-t border-white/50">
      <Container>
        <Reveal className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-700">
            <Lock className="w-3.5 h-3.5" />
            Infrastructure Independence
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-neutral-950 font-normal tracking-tight">
            Private by design. <br />
            <span className="italic font-serif font-light">Deploy where you control the keys.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Whether air-gapped on campus servers or isolated inside a dedicated Virtual Private Cloud, NodiAI never exposes institutional data to public APIs.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deploymentOptions.map((opt, idx) => (
            <StaggerItem
              key={opt.id}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                idx === 0
                  ? 'border-blue-300 bg-gradient-to-b from-blue-50/70 via-white/95 to-white/90 shadow-lg relative'
                  : 'border-neutral-200/80 bg-white/90 backdrop-blur-md hover:border-blue-300/60 shadow-sm'
              }`}
            >
              {idx === 0 && (
                <div className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-semibold tracking-wide uppercase shadow-xs">
                  Most Popular For Institutions
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center mb-6">
                  {deploymentIcons[opt.id]}
                </div>

                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                  {opt.tagline}
                </span>

                <h3 className="text-xl font-bold text-neutral-950 mb-3">
                  {opt.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {opt.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-100">
                  <p className="text-xs font-semibold text-neutral-800 uppercase tracking-wider">
                    Key Guarantees:
                  </p>
                  {opt.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <a
                  href="#contact"
                  className={`w-full text-center block py-2.5 rounded-full text-sm font-medium transition-all ${
                    idx === 0
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs active:scale-98'
                      : 'bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-50 active:scale-98'
                  }`}
                >
                  Discuss Deployment
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default DeploymentSection;
