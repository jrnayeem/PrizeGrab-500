import React from 'react';
import { ShieldCheck, ListChecks, FileText, AlertCircle } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Eligibility Requirements Apply',
      desc: 'Participants must satisfy defined geographic and age qualification terms.',
    },
    {
      icon: ListChecks,
      title: 'Participation Steps Required',
      desc: 'Complete all mandatory instructional steps presented on the offer page.',
    },
    {
      icon: FileText,
      title: 'Review Applicable Terms',
      desc: 'Official promotion rules and disclaimers must be carefully reviewed.',
    },
    {
      icon: AlertCircle,
      title: 'Prize Is Not Guaranteed',
      desc: 'Promotional entry provides an opportunity to qualify, not a guaranteed payout.',
    },
  ];

  return (
    <section aria-label="Trust and Transparency Information" className="w-full bg-[#f1eeea] border-b border-[#e5dfd3] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#e2dcce] shadow-2xs"
              >
                <div className="w-9 h-9 rounded-lg bg-[#e8f1ec] text-[#0d3b2e] flex items-center justify-center shrink-0 mt-0.5 border border-[#cbe0d3]">
                  <IconComponent className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d3b2e] leading-snug">
                    <span className="text-[#166534]">✓</span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[12px] text-[#4b5563] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
