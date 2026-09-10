'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import { ContactFormData } from '@/types';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    organizationName: '',
    email: '',
    phone: '',
    industry: 'Educational Institution',
    useCase: 'Knowledge Search & Q&A',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend demo simulation
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-[#e9e6e0]">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading & Trust Statements */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold text-blue-700">
                Direct Consultation
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl text-neutral-950 font-normal tracking-tight">
                Request a private demonstration.
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Connect with our engineering specialists to discuss your document volume, security architecture, and pilot eligibility.
              </p>

              <div className="space-y-4 pt-4 border-t border-neutral-100">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-semibold">Strict Confidentiality</strong>
                    <span>Your inquiries and requirements are protected under non-disclosure.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-semibold">Rapid Evaluation</strong>
                    <span>Test on sample anonymized circulars before any on-premise installation.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-xs text-neutral-500">
                <span>Direct inquiries: </span>
                <strong className="text-neutral-800">team@nodiai.com</strong>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-[#fcfbf9] rounded-3xl border border-neutral-200/90 p-8 sm:p-10 shadow-xs">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Demo Request Received
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. An engineer will follow up with <strong>{formData.organizationName}</strong> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-blue-600 underline hover:text-blue-800 pt-2 block mx-auto cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. Anupam Sarma"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organizationName}
                        onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                        placeholder="Pragjyotish College / Apex Clinic"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="registrar@institution.edu.in"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Industry / Sector
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-hidden"
                      >
                        <option>Educational Institution</option>
                        <option>Healthcare & Clinics</option>
                        <option>SME / Enterprise</option>
                        <option>Legal & Consulting</option>
                        <option>Government / Research</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Primary Use Case
                      </label>
                      <select
                        value={formData.useCase}
                        onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-hidden"
                      >
                        <option>Knowledge Search & Q&A</option>
                        <option>Policy & Report Summaries</option>
                        <option>Action Extraction & Notices</option>
                        <option>Assamese ↔ English Translation</option>
                        <option>Full Private Deployment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Tell us about your document workflows (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We have ~5,000 scanned circulars and want faculty to search them locally..."
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm active:scale-98 transition-all cursor-pointer"
                  >
                    <span>Submit Demo Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-neutral-500 pt-1">
                    No spam. Zero data transfer to public third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
