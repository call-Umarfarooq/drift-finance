'use client';
import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "I had a great experience working with Drift Financial, and the entire mortgage process was smooth from start to finish. Hassan Barada was especially outstanding—professional, responsive, and extremely knowledgeable. He took the time to explain everything clearly and made sure I felt confident at every step. His attention to detail and commitment to getting the best outcome really stood out. I highly recommend Drift Financial and Hassan to anyone looking for a stress-free and efficient mortgage experience.",
      name: "Jamal Maraachli",
      role: "First-Time Homebuyer, Royal Oak MI",
      image: "https://placehold.co/183x225"
    },
    {
      text: "Great experience working with Drift Financial. Everything was handled smoothly and professionally from start to finish. The team was responsive, transparent l, and made the entire process much less stressful than expected. I'd definitely recommend them to anyone looking for reliable and efficient mortgage support.",
      name: "Abe Yeihey",
      role: "Small Business Owner, Detroit MI",
      image: "https://placehold.co/67x82"
    },
    {
      text: "Drift Financial completely exceeded my expectations. They found me a rate that other lenders couldn't even match and closed my loan in record time. The communication was excellent.",
      name: "Sarah Jenkins",
      role: "Property Investor, Chicago IL",
      image: "https://placehold.co/100x100"
    },
    {
      text: "I was extremely nervous about refinancing, but the team at Drift Financial walked me through all my options and helped me make the best financial decision for my family. Highly recommend!",
      name: "Michael Chen",
      role: "Homeowner, Seattle WA",
      image: "https://placehold.co/100x100"
    },
    {
      text: "Professional, fast, and reliable. They truly understand the market and gave us the confidence we needed to purchase our dream home. The entire process was seamless.",
      name: "Emily Rodriguez",
      role: "First-Time Homebuyer, Austin TX",
      image: "https://placehold.co/100x100"
    }
  ];

  // Card width + gap for slide calculation
  const CARD_W = 320;
  const GAP = 24;
  const ACTIVE_EXTRA = 100; // active card is 420 - 320 = 100px wider

  const scrollLeft = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollRight = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  // Calculate translateX: slide by (CARD_W + GAP) per index, plus account for the active card being wider
  const translateX = -(activeIndex * (CARD_W + GAP));

  return (
    <section className="w-full relative bg-neutral-100 overflow-hidden">
      {/* Background glow */}
      <div className="w-48 h-48 absolute right-[350px] top-[189px] opacity-60 bg-P1-Navy rounded-full blur-[100px] pointer-events-none" />
      
      {/* Screen right fade mask — desktop only */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[150px] z-30 pointer-events-none" style={{ background: 'linear-gradient(to right, transparent, #f5f5f5)' }} />
      
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 py-14 lg:py-28 flex flex-col lg:flex-row justify-start items-start gap-5 lg:gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[460px] shrink-0 flex flex-col justify-start items-center lg:items-start gap-5 lg:gap-10">
          <div className="flex flex-col justify-start items-center lg:items-start gap-3 w-full">
            <div className="flex flex-col justify-start items-center lg:items-start gap-1 w-full">
              <div className="text-P2-Gold text-[10px] lg:text-base font-semibold font-inter leading-4 lg:leading-6 text-center lg:text-left">
                TESTIMONIAL
              </div>
              <div className="max-w-full lg:max-w-[384px] text-center lg:text-left">
                <span className="text-P1-Navy text-2xl lg:text-4xl font-semibold lg:font-bold font-inter leading-7 lg:leading-[48px]">Real Clients. Real Results. Real </span>
                <span className="text-P2-Gold text-2xl lg:text-4xl font-semibold font-playfair italic leading-7 lg:leading-[48px]">Trust.</span>
              </div>
            </div>
            <div className="max-w-[240px] lg:max-w-[461px] text-center lg:text-left text-Secondary-Deep-Navy text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-6">
              We let our track record speak for itself — straight from the people we've served.
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-start items-center gap-3">
            <button 
              onClick={scrollLeft}
              className="p-2 lg:p-4 rounded-full border border-neutral-300 flex justify-center items-center transition-colors cursor-pointer hover:bg-neutral-200"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#08111c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 lg:p-4 bg-P1-Navy rounded-full flex justify-center items-center transition-colors cursor-pointer hover:bg-opacity-90"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile: single active card stacked */}
        <div className="w-full lg:hidden flex flex-col gap-4">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            if (!isActive) return null;
            return (
              <div key={testimonial.name} className="w-full px-6 py-8 bg-white rounded-2xl flex flex-col justify-between items-start overflow-hidden">
                <div className="flex flex-col justify-start items-start gap-4 flex-1">
                  <div className="flex justify-start items-center gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <div className="text-Secondary-Deep-Navy text-[8px] font-normal font-inter leading-3">
                    {testimonial.text}
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2 shrink-0 mt-5">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <div className="text-P1-Navy text-sm font-semibold font-inter leading-4">{testimonial.name}</div>
                    <div className="text-Secondary-Deep-Navy text-[10px] font-normal font-inter leading-4">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: sliding cards */}
        <div className="hidden lg:block flex-1 relative h-[400px] w-full">
          <div className="absolute top-0 left-0 w-[100vw] h-full overflow-hidden">
            <div 
              className="flex items-start gap-6 absolute top-0 left-0 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              
              return (
                <div 
                  key={testimonial.name} 
                  className="px-6 py-8 bg-white rounded-2xl flex flex-col justify-between items-start shrink-0 overflow-hidden transition-all duration-700 ease-in-out"
                  style={{
                    width: isActive ? '420px' : '320px',
                    height: isActive ? '380px' : '280px',
                    opacity: isActive ? 1 : 0.7,
                  }}
                >
                  <div className="flex flex-col justify-start items-start gap-4 flex-1 overflow-hidden">
                    <div className="flex justify-start items-center gap-0.5 shrink-0">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                    </div>
                    <div className={`text-Secondary-Deep-Navy font-normal font-inter overflow-hidden transition-all duration-700 ${isActive ? 'text-xs leading-[18px]' : 'text-xs leading-4 line-clamp-6'}`}>
                      {testimonial.text}
                    </div>
                  </div>
                  
                  <div className="flex justify-start items-center gap-2 shrink-0 mt-4">
                    <div className={`bg-neutral-100 rounded-full overflow-hidden shrink-0 transition-all duration-700 ${isActive ? 'w-12 h-12' : 'w-10 h-10'}`}>
                      <img className="w-full h-full object-cover" src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <div className={`text-P1-Navy font-semibold font-inter leading-5 transition-all duration-700 ${isActive ? 'text-lg' : 'text-sm'}`}>
                        {testimonial.name}
                      </div>
                      <div className={`text-Secondary-Deep-Navy font-normal font-inter transition-all duration-700 ${isActive ? 'text-sm leading-5' : 'text-xs leading-4'}`}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
