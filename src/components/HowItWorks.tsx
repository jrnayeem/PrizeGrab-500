import React from 'react';
import { BookOpen, CheckSquare, ClipboardCheck, Info } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      tag: 'REVIEW',
      desc: 'Read the available promotion information and understand the applicable requirements.',
      icon: BookOpen,
    },
    {
      num: '02',
      tag: 'PARTICIPATE',
      desc: 'Continue to the participation page and complete the required steps presented there.',
      icon: CheckSquare,
    },
    {
      num: '03',
      tag: 'ELIGIBILITY',
      desc: 'Eligibility is determined according to the applicable promotion terms and requirements.',
      icon: ClipboardCheck,
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-14 sm:py-20 bg-white border-y border-[#ede8de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b48c36] block mb-2">
            Clear Three-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0d3b2e] tracking-tight">
            How It Works
          </h2>
          <p className="text-base text-[#4b5563] mt-3 leading-relaxed">
            Understanding the progression from initial review to qualification verification.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#faf8f5] rounded-2xl p-7 border border-[#e5dfd3] flex flex-col justify-between shadow-2xs hover:border-[#c5d8ce] hover:shadow-xs transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#0d3b2e]/25 font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#e2dcce] flex items-center justify-center text-[#165a45] shadow-2xs">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-wide text-[#0d3b2e] uppercase mb-3">
                    {step.tag}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Compliance Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f4f2ea] text-xs sm:text-sm font-medium text-[#4b5563] border border-[#e5e0d3] shadow-2xs">
            <Info className="w-4 h-4 text-[#b48c36] shrink-0" aria-hidden="true" />
            <span>Completing participation steps does not guarantee a prize.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
