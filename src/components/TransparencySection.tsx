import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  return (
    <section aria-label="Important Regulatory Information" className="w-full py-12 sm:py-16 bg-[#faf8f5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-[#e2dcce] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#f0ece1]">
            <div className="w-9 h-9 rounded-xl bg-[#eaf4ef] flex items-center justify-center text-[#0d3b2e] shrink-0 border border-[#c4e3d3]">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0d3b2e] tracking-tight">
              Important Information
            </h2>
          </div>

          <div className="flex items-start gap-3 text-sm sm:text-base text-[#374151] leading-relaxed">
            <Info className="w-5 h-5 text-[#b48c36] shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              PrizeGrab is a promotional opportunity. Eligibility restrictions and participation requirements may apply. A prize is not guaranteed. Please review the applicable terms and conditions before participating.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
