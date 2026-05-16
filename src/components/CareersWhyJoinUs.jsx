import React from 'react';

const CareersWhyJoinUs = () => {
  const benefits = [
    {
      title: 'Competitive compensation',
      description: 'Base salary plus performance-based bonuses. Top producers here genuinely earn top-of-market pay — no cap on what you can make.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 lg:w-11 lg:h-11 shrink-0">
          <circle cx="22" cy="22" r="22" fill="#0F1C2E"/>
          <path d="M22 14v16m-3-12h4a2 2 0 0 1 0 4h-2a2 2 0 0 0 0 4h5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Direct access to leadership',
      description: 'Work side by side with three principals who have 40+ years of combined experience. You\'ll learn more here in one year than most learn in five.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 lg:w-11 lg:h-11 shrink-0">
          <circle cx="22" cy="22" r="22" fill="#0F1C2E"/>
          <path d="M14 22L19 27L30 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Flexible work arrangements',
      description: 'Remote-friendly setup with results-focused culture. We care about what you produce, not where you sit.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 lg:w-11 lg:h-11 shrink-0">
          <circle cx="22" cy="22" r="22" fill="#0F1C2E"/>
          <rect x="12" y="14" width="20" height="16" rx="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12v4m8-4v4m-12 4h20m-14 4h2v2h-2v-2zm6 0h2v2h-2v-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Health & wellness benefits',
      description: 'Comprehensive health coverage, paid time off, and a team culture that genuinely respects work-life balance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 lg:w-11 lg:h-11 shrink-0">
          <circle cx="22" cy="22" r="22" fill="#0F1C2E"/>
          <path d="M22 17c-2.5-3-7-2.5-9 0-2.5 3-1 7 9 13 10-6 11.5-10 9-13-2-2.5-6.5-3-9 0z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white flex justify-center py-4 lg:py-0">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-7 lg:gap-16">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 lg:gap-4 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-wide leading-4">
            Why join us
          </div>
          <div className="w-full max-w-[320px] lg:max-w-[900px] text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            What You Get When You<br className="hidden lg:block"/>
            Join <span className="text-P2-Gold font-playfair italic">Drift</span>
          </div>
        </div>

        {/* Benefits Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3.5 lg:gap-8">
          
          {benefits.map((benefit, index) => (
            <div key={index} className="w-full p-7 lg:p-10 bg-neutral-300 lg:bg-neutral-200 rounded-3xl flex flex-col justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-4 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 min-h-[128px] lg:min-h-[300px]">
              <div className="flex flex-row lg:flex-row justify-start items-center gap-2.5 lg:gap-4 w-full">
                {benefit.icon}
                <div className="text-P1-Navy text-base lg:text-3xl font-semibold font-inter leading-tight">
                  {benefit.title}
                </div>
              </div>
              <div className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-relaxed lg:mt-2 text-center lg:text-left w-full lg:w-auto">
                {benefit.description}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CareersWhyJoinUs;
