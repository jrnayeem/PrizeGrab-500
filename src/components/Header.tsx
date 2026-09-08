import React from 'react';
import { ShoppingBag, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#0d3b2e] text-white border-b border-[#1b4d3e] sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#185340] border border-[#2d735b] flex items-center justify-center text-[#e8c56c] shadow-xs">
            <ShoppingBag className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              PRIZEGRAB
            </span>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-[#a8cdb5] font-medium ml-2 pl-2 border-l border-[#245847]">
              Grocery Stimulus Promotion
            </span>
          </div>
        </div>

        {/* Verification / Transparency Indicator */}
        <div className="flex items-center gap-1.5 text-xs text-[#d1e8db] bg-[#144838] px-3 py-1.5 rounded-full border border-[#21614c]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#e8c56c]" aria-hidden="true" />
          <span className="font-medium">Promotional Opportunity</span>
        </div>
      </div>
    </header>
  );
};
