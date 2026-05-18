"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Header = ({ darkMode = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const textColor = darkMode ? 'text-white' : 'text-P1-Navy';
  const strokeColor = darkMode ? '#ffffff' : '#0F1C2E';

  return (
    <header className="w-full px-6 lg:px-10 py-5 flex justify-between items-center bg-transparent relative z-50">
      <Link className="cursor-pointer" href="/">
        {/* Mobile Logo */}
        <img src={darkMode ? "/logo-at-mobile/Layer_1.svg" : "/mobilelogo/logo.svg"} alt="Drift Financial Logo" className="h-9 lg:hidden" />
        {/* Desktop Logo */}
        <img src={darkMode ? "/asstes/footer-icon.svg" : "/asstes/logo.svg"} alt="Drift Financial Logo" className="h-12 hidden lg:block" />
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <img src={darkMode ? "/logo-at-mobile/Vector.svg" : "/mobilelogo/Vector.svg"} alt="Menu" className="w-7 h-7" />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-end items-center gap-8">
        <nav className="flex justify-start items-center gap-9">
          <Link href={"/about-us"} className={`cursor-pointer ${textColor} text-base font-normal font-inter hover:text-P2-Gold transition-colors`}>About Us</Link>
          <div className="relative flex justify-start items-center gap-1 group py-2">
            <Link href="/finance-services" className={`flex items-center gap-1 cursor-pointer ${textColor} text-base font-normal font-inter group-hover:text-P2-Gold transition-colors`}>
              Services
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                <path d="M1 1L6 6L11 1" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-P2-Gold transition-colors"/>
              </svg>
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50 border border-neutral-100">
              <Link href="/conventional-loan" className="px-4 py-2 text-P1-Navy hover:bg-neutral-100 hover:text-P2-Gold text-sm font-medium transition-colors">Conventional Loan</Link>
              <Link href="/fha-loans" className="px-4 py-2 text-P1-Navy hover:bg-neutral-100 hover:text-P2-Gold text-sm font-medium transition-colors">FHA Loans</Link>
              <Link href="/va-loans" className="px-4 py-2 text-P1-Navy hover:bg-neutral-100 hover:text-P2-Gold text-sm font-medium transition-colors">VA Loans</Link>
              <Link href="/heloc" className="px-4 py-2 text-P1-Navy hover:bg-neutral-100 hover:text-P2-Gold text-sm font-medium transition-colors">HELOC</Link>
              <Link href="/dscr-loans" className="px-4 py-2 text-P1-Navy hover:bg-neutral-100 hover:text-P2-Gold text-sm font-medium transition-colors">DSCR Loans</Link>
              <Link href="/non-qm-loans" className="px-4 py-2 text-P1-Navy hover:bg-neutral-100 hover:text-P2-Gold text-sm font-medium transition-colors">Non-QM Loans</Link>
            </div>
          </div>
          <Link href={"/finanace-education"} className={`cursor-pointer ${textColor} text-base font-normal font-inter hover:text-P2-Gold transition-colors`}>Educational</Link>
          <Link href={"/testimonials"} className={`cursor-pointer ${textColor} text-base font-normal font-inter hover:text-P2-Gold transition-colors`}>Testimonials</Link>
          <Link href={"/achievements"} className={`cursor-pointer ${textColor} text-base font-normal font-inter hover:text-P2-Gold transition-colors`}>Achievements</Link>
          <Link href={"/carears"} className={`cursor-pointer ${textColor} text-base font-normal font-inter hover:text-P2-Gold transition-colors`}>Careers</Link>
        </nav>
        <Link href={"/contact"} className="px-6 py-2.5 bg-P2-Gold rounded-[100px] flex justify-center items-center gap-2 hover:opacity-90 transition-opacity group">
          <span className="text-white text-base font-semibold font-inter leading-6">Contact Us</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden flex flex-col p-6 gap-4 border-t border-neutral-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link href={"/about-us"} onClick={() => setIsMobileMenuOpen(false)} className="text-P1-Navy text-base font-semibold font-inter py-2 border-b border-neutral-100">About Us</Link>
          
          <div className="flex flex-col gap-2 py-2 border-b border-neutral-100">
            <Link href="/finance-services" onClick={() => setIsMobileMenuOpen(false)} className="text-P1-Navy text-base font-semibold font-inter">Services</Link>
            <Link href="/conventional-loan" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-P1-Navy text-sm font-normal font-inter py-1">Conventional Loan</Link>
            <Link href="/fha-loans" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-P1-Navy text-sm font-normal font-inter py-1">FHA Loans</Link>
            <Link href="/va-loans" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-P1-Navy text-sm font-normal font-inter py-1">VA Loans</Link>
            <Link href="/heloc" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-P1-Navy text-sm font-normal font-inter py-1">HELOC</Link>
            <Link href="/dscr-loans" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-P1-Navy text-sm font-normal font-inter py-1">DSCR Loans</Link>
            <Link href="/non-qm-loans" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-P1-Navy text-sm font-normal font-inter py-1">Non-QM Loans</Link>
          </div>
          
          <Link href={"/finanace-education"} onClick={() => setIsMobileMenuOpen(false)} className="text-P1-Navy text-base font-semibold font-inter py-2 border-b border-neutral-100">Educational</Link>
          <Link href={"/testimonials"} onClick={() => setIsMobileMenuOpen(false)} className="text-P1-Navy text-base font-semibold font-inter py-2 border-b border-neutral-100">Testimonials</Link>
          <Link href={"/achievements"} onClick={() => setIsMobileMenuOpen(false)} className="text-P1-Navy text-base font-semibold font-inter py-2 border-b border-neutral-100">Achievements</Link>
          <Link href={"/carears"} onClick={() => setIsMobileMenuOpen(false)} className="text-P1-Navy text-base font-semibold font-inter py-2 border-b border-neutral-100">Careers</Link>
          
          <Link href={"/contact"} onClick={() => setIsMobileMenuOpen(false)} className="w-full mt-4 px-6 py-3 bg-P2-Gold rounded-[100px] flex justify-center items-center gap-2 group">
            <span className="text-white text-base font-semibold font-inter leading-6">Contact Us</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
