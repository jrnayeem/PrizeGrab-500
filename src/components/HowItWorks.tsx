import React from 'react';
import { FileText, CheckSquare, ClipboardCheck, Info } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: 'STEP 01',
      title: 'Review the Requirements',
      desc: 'Read the applicable eligibility and participation requirements before continuing.',
      icon: FileText,
    },
    {
      num: 'STEP 02',
      title: 'Complete the Required Steps',
      desc: 'Follow the instructions presented on the participation page.',
      icon: CheckSquare,
    },
    {
      num: 'STEP 03',
      title: 'Eligibility Review',
      desc: 'Participants who meet the applicable requirements may be eligible for the promotional opportunity.',
      icon: ClipboardCheck,
    },
  ];

  return (
    <section className="w-full py-10 sm:py-14 bg-white border-y border-[#ede8de]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b48c36] block mb-2">
            Clear Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b2e] tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#4b5563] mt-2">
            A simple 3-step overview of the qualification flow.
          </p>
        </div>

        {/* 3-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#faf8f5] rounded-xl p-6 border border-[#e5dfd3] flex flex-col justify-between relative hover:border-[#cbd5cf] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0d3b2e] bg-[#e4ede7] px-2.5 py-1 rounded-md border border-[#c3d9cc]">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#e2dcce] flex items-center justify-center text-[#165a45] shadow-2xs">
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Note */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f4f2ea] text-xs text-[#4b5563] border border-[#e5e0d3]">
            <Info className="w-3.5 h-3.5 text-[#b48c36] shrink-0" aria-hidden="true" />
            <span>Completing the steps does not guarantee a prize.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
