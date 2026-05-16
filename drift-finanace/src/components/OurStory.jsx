import React from 'react';

const OurStory = () => {
  return (
    <section className="w-full px-6 lg:px-10 bg-white flex justify-center items-center">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start gap-4 lg:gap-10">
          <div className="flex flex-col justify-start items-center lg:items-start gap-2.5 lg:gap-5 w-full">
            <div className="text-P2-Gold text-[10px] lg:text-2xl font-semibold font-inter text-center lg:text-left">Our story</div>
            <div className="max-w-full lg:max-w-[630px] text-center lg:text-left">
              <span className="text-P1-Navy text-2xl lg:text-[56px] font-semibold font-inter capitalize leading-7 lg:leading-[70px]">We Launched This </span>
              <span className="text-P2-Gold text-2xl lg:text-[56px] font-semibold font-playfair italic capitalize leading-7 lg:leading-[70px]">Company </span>
              <span className="text-P1-Navy text-2xl lg:text-[56px] font-semibold font-inter capitalize leading-7 lg:leading-[70px]">To Help More People</span>
            </div>
          </div>
          
          <div className="max-w-[640px] text-center lg:text-left text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-6 opacity-80">
            Our Three Founders Spent Years At The Top Of The Nation&apos;s Largest Retail Lender, Leading High-Volume Operations And Mastering Every Corner Of The Mortgage Market. They Were Good At It. But Something Was Missing — The Ability To Truly Put The Client First.
            <br/><br/>
            We Decided To Grow And Build Drift Financial. A Boutique Brokerage Where 40+ Years Of Combined Expertise Works Exclusively In Your Corner. No Bureaucracy. No Quotas. Just Honest, Strategic Mortgage Advice Tailored To Your Long-Term Financial Goals.
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <img className="w-full max-w-[384px] lg:max-w-[690px] h-[320px] lg:h-[700px] object-cover rounded-3xl" src="/asstes/about-us.png" alt="About Us Team" />
        </div>

      </div>
    </section>
  );
};

export default OurStory;
