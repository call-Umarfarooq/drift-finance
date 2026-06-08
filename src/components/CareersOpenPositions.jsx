'use client';
import React from 'react';

const CareersOpenPositions = () => {
  const jobs = [
    {
      title: "Mortgage Loan Originator",
      description: "At Drift Financial, our Loan Originators aren't just salespeople — they're trusted advisors.",
      location: "100% Remote",
      type: "Full-time"
    },
    {
      title: "Loan Processor",
      description: "Keep every deal moving — you're the engine behind every clean, fast close at Drift Financial.",
      location: "100% Remote",
      type: "Full-time"
    },
    {
      title: "Executive Assistant",
      description: "Work side by side with three industry-leading principals — keeping Drift Financial running at full speed.",
      location: "100% Remote",
      type: "Full-time"
    }
  ];

  const categories = ["View All", "Development", "Design", "Marketing"];

  return (
    <section className="w-full bg-neutral-100 flex justify-center py-10 lg:py-20">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-8 lg:gap-12">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 lg:gap-4 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-wide leading-4">
            Open positions
          </div>
          <div className="w-full text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            Where <span className="text-P2-Gold font-playfair italic">You</span> Could Fit In
          </div>
        </div>

        {/* Filters */}
        <div className="w-full flex flex-row overflow-x-auto lg:overflow-visible no-scrollbar justify-start items-center gap-2.5 lg:gap-4 mb-2 lg:mb-0">
          {categories.map((cat, i) => (
            <button 
              key={cat}
              className={`whitespace-nowrap px-4 lg:px-8 py-2 lg:py-2.5 rounded-full text-[10px] lg:text-sm font-semibold font-inter transition ${
                i === 0 
                ? 'bg-teal-900 text-white' 
                : 'outline outline-1 outline-offset-[-1px] outline-P1-Navy text-P1-Navy hover:bg-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="w-full flex flex-col">
          <div className="w-full h-[1px] bg-neutral-300" />
          
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="w-full flex flex-col py-6 lg:py-10 border-b border-neutral-300 group cursor-pointer transition-colors hover:bg-neutral-200/50"
            >
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col gap-2 lg:gap-3 flex-1 pr-4">
                  <h3 className="text-base lg:text-4xl font-semibold text-teal-900 font-inter leading-tight">
                    {job.title}
                  </h3>
                  
                  <p className="text-[10px] lg:text-xl font-medium text-teal-900 font-inter leading-4 lg:leading-normal max-w-[280px] lg:max-w-[850px]">
                    {job.description}
                  </p>

                  <div className="flex flex-row items-center gap-3 mt-2 lg:mt-3">
                    <span className="inline-flex items-center gap-1.5 px-3 lg:px-5 py-1 lg:py-2 rounded-full outline outline-1 outline-teal-900 text-teal-900 text-[10px] lg:text-sm font-medium lg:font-semibold font-inter">
                      <svg width="14" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-4 lg:w-4 lg:h-4">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 lg:px-5 py-1 lg:py-2 rounded-full outline outline-1 outline-teal-900 text-teal-900 text-[10px] lg:text-sm font-medium lg:font-semibold font-inter">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 lg:w-4 lg:h-4">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                      {job.type}
                    </span>
                  </div>
                </div>

                <a 
                  href="#apply-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1 text-P1-Navy font-medium lg:font-semibold text-sm lg:text-2xl whitespace-nowrap mt-1 hover:text-P2-Gold transition-colors"
                >
                  Apply 
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareersOpenPositions;
