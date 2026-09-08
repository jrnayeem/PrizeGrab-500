import React from 'react';
import { AlertCircle, Shield } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  const statements = [
    'Participation does not guarantee a prize.',
    'Eligibility and qualification requirements apply.',
    'Prize availability and participation conditions are subject to the applicable promotion terms.',
    'Please review all terms and conditions before participating.',
  ];

  return (
    <section className="w-full py-10 sm:py-12 bg-white border-t border-[#ede8de]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#fbfaf8] border border-[#e5dfd3] p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#eeeae2]">
            <div className="w-8 h-8 rounded-lg bg-[#eef4f0] flex items-center justify-center text-[#14532d]">
              <Shield className="w-4 h-4" aria-hidden="true" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0d3b2e] tracking-tight">
              Important Information
            </h2>
          </div>

          <div className="space-y-3.5">
            {statements.map((statement, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-[#b48c36] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm sm:text-base text-[#374151] font-medium leading-snug">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
