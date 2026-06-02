import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <section className="w-full flex justify-center bg-white">
      <div 
        className="w-full h-[320px] lg:h-[631px] relative overflow-hidden flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/asstes/martgage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-teal-950/60 lg:bg-teal-950/70 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1408px] px-6 lg:px-4 flex flex-col justify-center items-center gap-5 lg:gap-7">
          
          <div className="w-full max-w-[288px] lg:max-w-[816px] text-center">
            <span className="text-white text-2xl lg:text-5xl font-bold font-inter leading-7 lg:leading-[57.60px]">Ready to Find the </span>
            <span className="text-P2-Gold text-2xl lg:text-5xl font-bold font-playfair italic leading-7 lg:leading-[57.60px]">Mortgage</span>
            <span className="text-white text-2xl lg:text-5xl font-bold font-inter leading-7 lg:leading-[57.60px]"> That&apos;s Built for You?</span>
          </div>
          
          <div className="w-full max-w-[320px] lg:max-w-[580px] text-center text-white text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-6">
            No pressure, no obligation — just an honest conversation with experts who&apos;ve closed over $2.5 billion in loans. Let&apos;s find the right solution for your situation, your goals, and your timeline.
          </div>
          
          <div className="flex flex-row justify-center items-center gap-3.5 lg:gap-4 mt-0 lg:mt-2">
            
            {/* Primary Link */}
            <Link href="/contact?scroll=form" className="h-7 lg:h-12 px-6 bg-white rounded-full flex justify-center items-center gap-[5px] lg:gap-2 hover:bg-gray-100 transition-colors cursor-pointer group overflow-hidden">
              <span className="text-P1-Navy text-[10px] lg:text-base font-semibold font-inter leading-4 lg:leading-6">Start My Application</span>
              <svg className="text-P1-Navy transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 hidden lg:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
            
            {/* Secondary Link */}
            <Link href="/conventional-loan" className="h-7 lg:h-12 px-6 bg-transparent rounded-full border border-white flex justify-center items-center gap-[5px] lg:gap-2 hover:bg-white/10 transition-colors cursor-pointer group overflow-hidden">
              <span className="text-white text-[10px] lg:text-base font-semibold font-inter leading-4 lg:leading-6">Explore Loan Options</span>
              <svg className="text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 hidden lg:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
