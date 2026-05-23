import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="w-full px-6 lg:px-10 bg-white flex justify-center items-center">
      <div className="w-full max-w-[1360px] min-h-[auto] lg:min-h-[575px] px-6 py-10 lg:px-10 lg:py-24 md:px-36 bg-P1-Navy rounded-3xl flex flex-col justify-center items-center gap-5 lg:gap-10">
        
        <div className="text-center">
          <span className="text-P2-Gold text-[10px] lg:text-2xl font-semibold font-inter leading-4 lg:leading-9">Why Choose </span>
          <span className="text-white text-[10px] lg:text-2xl font-semibold font-inter leading-4 lg:leading-9">Drift Financial</span>
        </div>
        
        <div className="max-w-[1165px] text-center">
          <span className="text-white text-2xl lg:text-[64px] font-semibold font-inter capitalize leading-7 lg:leading-[75px]">We Don't Just Close Loans. We Protect Your Biggest </span>
          <span className="text-P2-Gold text-2xl lg:text-[64px] font-semibold font-playfair italic capitalize leading-7 lg:leading-[75px]">Investment</span>
          <span className="text-white text-2xl lg:text-[64px] font-semibold font-inter capitalize leading-7 lg:leading-[75px]">.</span>
        </div>
        
        <div className="max-w-[1100px] text-center text-white text-[10px] lg:text-[18px] font-normal font-inter leading-4 lg:leading-8 opacity-90 mt-0 lg:mt-4">
          Most lenders hand you a rate and move on. We don't. At Drift Financial, every client gets direct access to three principals with 40+ years of combined experience — people who have navigated every market shift and know exactly how to position you for the best possible outcome. No junior processors, no call centers. Just seasoned experts who treat your mortgage like it's their own.
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
