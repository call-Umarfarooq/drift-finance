import React from 'react'

const TopBar = () => {
  const tagLine = "MORE than a mortgage PARTNERS you can count on";

  return (
    <div className="w-full h-7 lg:h-[40px] bg-P2-Gold flex justify-center overflow-hidden">
      <div className="w-full max-w-[1360px] h-full px-6 lg:px-10 flex justify-between items-center gap-4">
        
        {/* Mobile View: Full Marquee scrolling */}
        <div className="w-full lg:hidden overflow-hidden relative flex items-center">
          <div className="inline-flex whitespace-nowrap animate-marquee">
            <span className="text-white text-[10px] font-semibold font-inter uppercase tracking-wider mx-4">
              {tagLine}
            </span>
            <span className="text-white text-[10px] font-semibold font-inter uppercase tracking-wider mx-4">
              •
            </span>
            <span className="text-white text-[10px] font-semibold font-inter uppercase tracking-wider mx-4">
              {tagLine}
            </span>
            <span className="text-white text-[10px] font-semibold font-inter uppercase tracking-wider mx-4">
              •
            </span>
            <span className="text-white text-[10px] font-semibold font-inter uppercase tracking-wider mx-4">
              {tagLine}
            </span>
            <span className="text-white text-[10px] font-semibold font-inter uppercase tracking-wider mx-4">
              •
            </span>
          </div>
        </div>

        {/* Desktop View: Three-Column Layout */}
        {/* Left Column: Email */}
        <div className="hidden lg:block w-1/4 text-white text-[14px] font-normal font-inter leading-[150%] shrink-0">
          <a href="mailto:Drift@driftfinancial.com" className="hover:opacity-80 transition-opacity">
            Drift@driftfinancial.com
          </a>
        </div>

        {/* Center Column: Scrolling Marquee */}
        <div className="hidden lg:flex w-2/4 overflow-hidden relative items-center justify-center">
          <div className="inline-flex whitespace-nowrap animate-marquee">
            <span className="text-white text-[12px] font-semibold font-inter uppercase tracking-wider mx-6">
              {tagLine}
            </span>
            <span className="text-white text-[12px] font-semibold font-inter uppercase tracking-wider mx-6">
              •
            </span>
            <span className="text-white text-[12px] font-semibold font-inter uppercase tracking-wider mx-6">
              {tagLine}
            </span>
            <span className="text-white text-[12px] font-semibold font-inter uppercase tracking-wider mx-6">
              •
            </span>
            <span className="text-white text-[12px] font-semibold font-inter uppercase tracking-wider mx-6">
              {tagLine}
            </span>
            <span className="text-white text-[12px] font-semibold font-inter uppercase tracking-wider mx-6">
              •
            </span>
          </div>
        </div>

        {/* Right Column: Socials */}
        <div className="hidden lg:flex w-1/4 justify-end items-center gap-1.5 shrink-0">
          <div className="text-white text-[14px] font-normal font-inter leading-[150%]">
            Follow On:
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src="/asstes/facebook.svg" alt="Facebook" className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.linkedin.com/posts/drift-financial1_were-excited-to-introduce-drift-financial-activity-7455681479495327746-To69?utm_source=share&utm_medium=member_ios&rcm=ACoAAA-fGA4B6AsGyLx-7mHU_qcNx9wFuDHYaB0" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <img src="/asstes/linkdin.svg" alt="LinkedIn" className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src="/asstes/x.svg" alt="X" className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopBar
