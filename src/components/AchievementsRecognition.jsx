import React from 'react';

const AchievementsRecognition = () => {
  const recognitionData = [
    {
      title: 'Closing at Drift speed',
      description: 'At Drift, speed is part of the service. From application to closing, we drift through the process so our clients get to the finish line faster than they ever expected.',
      badge: '',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F1C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-10 lg:h-10">
          <path d="M8 21h8m-4-7v7m4-15v4a4 4 0 0 1-8 0V4h8Z"/>
          <path d="M16 6h3a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-3"/>
          <path d="M8 6H5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h3"/>
        </svg>
      )
    },
    {
      title: 'Top mortgage professionals — Michigan',
      description: 'Recognized among the highest-performing mortgage producers in the state of Michigan across multiple years.',
      badge: 'Multiple years',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F1C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-10 lg:h-10">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      title: '$2.5B+ volume producer',
      description: 'Achieved $2.5 billion in closed loan volume in 2025.',
      badge: '2025',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F1C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-10 lg:h-10">
          <polyline points="3 17 9 11 13 15 21 7"></polyline>
          <circle cx="21" cy="7" r="2"></circle>
          <circle cx="13" cy="15" r="2"></circle>
          <circle cx="9" cy="11" r="2"></circle>
          <circle cx="3" cy="17" r="2"></circle>
        </svg>
      )
    },
    {
      title: '40+ years combined experience',
      description: 'Three founding principals who collectively bring over four decades of mortgage expertise — making Drift among the most experienced boutique teams in the country.',
      badge: 'Combined · All three principals',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F1C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-10 lg:h-10">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
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
            Recognition
          </div>
          <div className="w-full max-w-[320px] lg:max-w-[900px] text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            Recognized By The <span className="text-P2-Gold font-playfair italic">Industry.</span><br className="hidden lg:block"/>
            Trusted By Clients
          </div>
        </div>

        {/* Grid Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          
          {recognitionData.map((item, index) => (
            <div key={index} className="w-full p-6 lg:p-12 bg-neutral-200 rounded-3xl flex flex-row lg:flex-row justify-start items-center lg:items-start gap-6 lg:gap-8 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
              {/* Icon Container */}
              <div className="w-14 h-14 lg:w-24 lg:h-24 shrink-0 bg-P2-Gold rounded-2xl flex justify-center items-center">
                {item.icon}
              </div>
              
              {/* Content Container */}
              <div className="flex-1 flex flex-col justify-center items-start gap-2 lg:gap-3">
                <div className="text-P1-Navy text-base lg:text-4xl font-semibold font-inter leading-5 lg:leading-tight">
                  {item.title}
                </div>
                <div className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-relaxed">
                  {item.description}
                </div>
                {item.badge && (
                  <div className="mt-1 lg:mt-2 px-3 py-1 bg-teal-950/20 lg:bg-black/10 rounded-full text-P1-Navy text-[10px] lg:text-xs font-semibold lg:font-semibold font-inter">
                    {item.badge}
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AchievementsRecognition;
