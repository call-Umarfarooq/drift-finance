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
            Our three founders spent years at the top of the nation's largest retail lender, leading high-volume operations and mastering every corner of the mortgage market. They were good at it, but something was missing — the ability to truly put the client first.
            <br/><br/>
            We decided to grow and build Drift Financial. A boutique brokerage where 40+ years of combined expertise works exclusively in your corner. No bureaucracy. No quotas. Just honest, strategic mortgage advice tailored to your long-term financial goals.
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
