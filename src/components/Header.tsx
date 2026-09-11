import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';

interface HeaderProps {
  onNavClick?: (targetId: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Grocery Tips', href: '#grocery-tips' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d3b2e] text-white border-b border-[#1a513f] shadow-xs backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#e8c56c] rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-[#16503e] border border-[#276e56] flex items-center justify-center text-[#e8c56c] shadow-xs group-hover:scale-105 transition-transform duration-200">
            <ShoppingBag className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white leading-none">
              PRIZEGRAB
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#9ec7b2] font-semibold mt-1">
              Consumer Savings &amp; Promotion
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#d5e7dd]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-white transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-[#e8c56c]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#a9cebb]">
            <ShieldCheck className="w-4 h-4 text-[#e8c56c]" aria-hidden="true" />
            <span>Official Information</span>
          </div>

          <button
            id="header-check-eligibility-btn"
            type="button"
            onClick={() => handleEligibilityCtaClick('header_nav')}
            className="px-5 py-2.5 bg-[#e8c56c] hover:bg-[#deb656] active:bg-[#cf9e3c] text-[#0d3b2e] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-150 flex items-center gap-2 cursor-pointer"
          >
            <span>CHECK ELIGIBILITY</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="header-mobile-cta-btn"
            type="button"
            onClick={() => handleEligibilityCtaClick('header_mobile_top')}
            className="px-3 py-2 bg-[#e8c56c] text-[#0d3b2e] font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-1 cursor-pointer"
          >
            <span>CHECK</span>
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-[#d5e7dd] hover:text-white hover:bg-[#16503e] focus:outline-none focus:ring-2 focus:ring-[#e8c56c]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a2f24] border-t border-[#1a513f] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-white hover:bg-[#144838] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#18493a]">
            <button
              id="header-mobile-drawer-cta-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleEligibilityCtaClick('header_mobile_drawer');
              }}
              className="w-full py-3.5 px-4 bg-[#e8c56c] hover:bg-[#deb656] text-[#0d3b2e] font-bold text-sm uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>CHECK ELIGIBILITY</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <p className="text-[11px] text-[#9ec7b2] text-center mt-2 leading-tight">
              Prize is not guaranteed. Eligibility restrictions apply.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
