'use client';
import React from 'react';
import Link from 'next/link';
import { triggerEmail } from '@/utils/emailHelper';

const Footer = () => {
  return (
    <footer className="w-full bg-P1-Navy px-6 lg:px-32 pt-10 lg:pt-20 pb-6 lg:pb-8 flex justify-center">
      <div className="w-full max-w-[1360px] flex flex-col gap-10 lg:gap-16">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-8">
          
          {/* Logo & Disclaimer */}
          <div className="w-full lg:max-w-[340px] flex flex-col gap-4 lg:gap-6">
            <Link href="/">
              <img src="/asstes/footer-icon.svg" alt="Drift Financial" className="w-20 lg:w-48 cursor-pointer" />
            </Link>
            <p className="text-white text-[8px] lg:text-[10px] font-normal font-inter leading-3 lg:leading-4 opacity-80 text-justify">
              Drift Financial LLC is an Equal Housing Lender. As prohibited by federal law, we do not engage in business practices that discriminate based on race, color, religion, national origin, sex, marital status, age (provided you have the capacity to enter into a binding contract), because all or part of your income may be derived from any public assistance program, or because you have, in good faith, exercised any right under the Consumer Credit Protection Act. The federal agency that administers our compliance with these federal laws is the Federal Trade Commission, Equal Credit Opportunity, Washington, DC 20580.
            </p>
          </div>
          
          {/* Links Columns */}
          <div className="w-full flex-1 grid grid-cols-3 lg:flex lg:flex-wrap lg:justify-between gap-6 lg:gap-10 lg:pl-10">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <div className="h-0 lg:h-6 hidden lg:block"></div>
              <div className="flex flex-col gap-3">
                <Link href="/about-us" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">About Us</Link>
                <Link href="/finance-services" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Services</Link>
                <Link href="/finanace-education" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Educational</Link>
                <Link href="/testimonials" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Testimonials</Link>
                <Link href="/achievements" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Achievements</Link>
                <Link href="/mortgage-calculator" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Mortgage Calculator</Link>
                <Link href="/carears" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Careers</Link>
                <Link href="/privacy-policy" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Privacy Policy</Link>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <h4 className="text-white text-sm font-bold font-inter leading-4 lg:text-lg lg:leading-6">Loan Programs</h4>
              <div className="flex flex-col gap-3">
                <Link href="/conventional-loan" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Conventional Loans</Link>
                <Link href="/fha-loans" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">FHA Loans</Link>
                <Link href="/va-loans" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">VA Loans</Link>
                <Link href="/heloc" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">HELOC</Link>
                <Link href="/dscr-loans" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">DSCR Loans</Link>
                <Link href="/non-qm-loans" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Non-QM Loans</Link>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <h4 className="text-white text-sm font-bold font-inter leading-4 lg:text-lg lg:leading-6">Contact Us:</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:888-338-5504" className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">888-338-5504</a>
                <a href="mailto:Drift@driftfinancial.com" onClick={triggerEmail} className="text-white text-[10px] lg:text-sm font-normal font-inter hover:opacity-80 transition-opacity leading-4">Drift@driftfinancial.com</a>
                <address className="text-white text-[10px] lg:text-sm font-normal font-inter not-italic max-w-[120px] lg:max-w-[200px] leading-4">
                  209 W Sixth St, Royal Oak MI, 48067
                </address>
              </div>
              {/* Social Icons */}
              <div className="flex items-center gap-2 lg:gap-3 mt-1 lg:mt-2">
                <a href="https://www.facebook.com/share/1DukVEsF6V/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 lg:w-8 lg:h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors">
                  <img src="/asstes/facebook.svg" alt="Facebook" className="w-2 h-2 lg:w-4 lg:h-4 brightness-0 invert" />
                </a>
                <a href="https://www.instagram.com/drift.financial1/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 lg:w-8 lg:h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors">
                  <svg width="8" height="8" className="lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.linkedin.com/posts/drift-financial1_were-excited-to-introduce-drift-financial-activity-7455681479495327746-To69?utm_source=share&utm_medium=member_ios&rcm=ACoAAA-fGA4B6AsGyLx-7mHU_qcNx9wFuDHYaB0" target="_blank" rel="noopener noreferrer" className="w-4 h-4 lg:w-8 lg:h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors">
                  <img src="/asstes/linkdin.svg" alt="LinkedIn" className="w-2 h-2 lg:w-4 lg:h-4 brightness-0 invert" />
                </a>
                <a href="https://x.com/DriftFinancial0" target="_blank" rel="noopener noreferrer" className="w-4 h-4 lg:w-8 lg:h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors">
                  <img src="/asstes/x.svg" alt="X" className="w-1.5 h-1.5 lg:w-3.5 lg:h-3.5 brightness-0 invert" />
                </a>
              </div>
            </div>

            {/* Column 4 — hidden on mobile per Figma */}
            <div className="hidden lg:flex flex-col gap-4">
              <h4 className="text-white text-lg font-bold font-inter leading-6">Other pages</h4>
              <div className="flex flex-col gap-3">
                <Link href="/privacy-policy" className="text-white text-sm font-normal font-inter hover:opacity-80 transition-opacity">Privacy policy</Link>
                <Link href="/terms-and-conditions" className="text-white text-sm font-normal font-inter hover:opacity-80 transition-opacity">Terms & conditions</Link>
                <a href="/#faq" className="text-white text-sm font-normal font-inter hover:opacity-80 transition-opacity">FAQ</a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-3 lg:gap-8">
          <div className="w-full h-px bg-white/20"></div>
          <div className="flex flex-row justify-between items-center gap-2 lg:gap-4">
            <div className="text-white text-[8px] lg:text-sm font-normal font-outfit leading-3 lg:leading-normal">
              NMLS #2822905 · Equal Housing Lender
            </div>
            <div className="text-white text-[8px] lg:text-sm font-normal font-outfit leading-3 lg:leading-normal">
              ©2026 Drift Financial. All rights reserved.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
