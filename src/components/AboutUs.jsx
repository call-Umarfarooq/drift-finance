import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
  return (
    <section className="w-full px-6 lg:px-10 bg-white flex justify-center items-center">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start gap-4 lg:gap-10">
          <div className="flex flex-col justify-start items-center lg:items-start gap-2.5 lg:gap-5 w-full">
            <div className="text-P2-Gold text-[10px] lg:text-2xl font-semibold font-inter text-center lg:text-left">About Us</div>
            <div className="max-w-full lg:max-w-[630px] text-center lg:text-left">
              <span className="text-P1-Navy text-2xl lg:text-[56px] font-semibold font-inter capitalize leading-7 lg:leading-[70px]">Built On </span>
              <span className="text-P2-Gold text-2xl lg:text-[56px] font-semibold font-playfair italic capitalize leading-7 lg:leading-[70px]">Experience.<br className="hidden lg:block"/> </span>
              <span className="text-P1-Navy text-2xl lg:text-[56px] font-semibold font-inter capitalize leading-7 lg:leading-[70px]">Driven By Your Goals.</span>
            </div>
          </div>
          
          <div className="max-w-[600px] text-center lg:text-left text-P1-Navy text-sm lg:text-[22px] font-medium lg:font-normal font-inter capitalize lg:normal-case leading-5 lg:leading-8">
            From The Nation's Largest Retail Lender To Your Dedicated Mortgage Partner.
          </div>
          
          <div className="max-w-[640px] text-center lg:text-left text-P1-Navy text-[10px] lg:text-base font-normal font-inter normal-case leading-4 lg:leading-6 opacity-80">
            Our three founders spent years as senior sales leaders at the country's biggest retail lender — managing high-volume operations and mastering every corner of the mortgage market. With over 40 years of combined experience, they made a deliberate choice: leave the corporate machine behind and build something better. A boutique brokerage where that same big-bank expertise works exclusively for you — not the institution.
            <br/><br/>
            We've seen every market cycle, every rate environment, every loan scenario. That depth of knowledge means our clients don't just get a mortgage — they get a strategy built around their long-term financial future.
          </div>
          
          <Link href="/contact" className="w-auto px-6 py-2 lg:px-8 lg:py-3.5 bg-P2-Gold hover:bg-opacity-90 transition-colors rounded-full flex justify-center items-center gap-[5px] lg:gap-2 mt-2 cursor-pointer group overflow-hidden">
            <span className="text-white text-[10px] lg:text-base font-semibold font-inter leading-4 lg:leading-none">Meet Our Team</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 hidden lg:block">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <img className="w-full max-w-[384px] lg:max-w-[690px] h-[320px] lg:h-[700px] object-cover rounded-3xl" src="/asstes/about-us.png" alt="About Us Team" />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
