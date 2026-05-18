import React from 'react'

const TopBar = () => {
  return (
    <div className="w-full h-7 lg:h-[40px] bg-P2-Gold flex justify-center">
      <div className="w-full max-w-[1360px] h-full px-6 lg:px-10 flex justify-between items-center gap-4 lg:gap-0">
        
        {/* Email */}
        <div className="text-white text-[10px] lg:text-[14px] font-normal font-inter leading-4 lg:leading-[150%]">
          Drift@driftfinancial.com
        </div>

        {/* Socials */}
        <div className="flex items-center gap-1.5">
          <div className="text-white text-[10px] lg:text-[14px] font-normal font-inter leading-4 lg:leading-[150%]">
            Follow On:
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src="/asstes/facebook.svg" alt="Facebook" className="w-3 h-3 lg:w-4 lg:h-4" />
            </a>
            <a href="https://www.linkedin.com/posts/drift-financial1_were-excited-to-introduce-drift-financial-activity-7455681479495327746-To69?utm_source=share&utm_medium=member_ios&rcm=ACoAAA-fGA4B6AsGyLx-7mHU_qcNx9wFuDHYaB0" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <img src="/asstes/linkdin.svg" alt="LinkedIn" className="w-3 h-3 lg:w-4 lg:h-4" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src="/asstes/x.svg" alt="X" className="w-3 h-3 lg:w-4 lg:h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopBar
