'use client';
import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "I had a great experience working with Drift Financial, and the entire mortgage process was smooth from start to finish. Hassan Barada was especially outstanding—professional, responsive, and extremely knowledgeable. He took the time to explain everything clearly and made sure I felt confident at every step. His attention to detail and commitment to getting the best outcome really stood out. I highly recommend Drift Financial and Hassan to anyone looking for a stress-free and efficient mortgage experience.",
      name: "Jamal Maraachli",
      role: "4 reviews",
      image: "https://ui-avatars.com/api/?name=Jamal+Maraachli&background=5a67d8&color=fff",
      url:"https://maps.app.goo.gl/UBh73FsYp64nukid8"
    },
    {
      text: "I had a great experience with Drift Financial. The whole process was easy, smooth, and stress free from start to finish. Pete was amazing to work with, professional, helpful, and always quick to answer any questions. He made everything simple and straightforward. I would highly recommend working with Pete and this team.",
      name: "Shannon Nelson",
      role: "9 reviews • 4 photos",
      image: "https://ui-avatars.com/api/?name=Shannon+Nelson&background=2d3748&color=fff",
      url:"https://maps.app.goo.gl/Evhf3Zg1PF88oNgx6"
    },
    {
      text: "Drift Financial is hands down the best I’ve worked with. The team was professional, responsive, and made the entire process smooth from start to finish. Highly recommend to anyone looking for a reliable mortgage broker!",
      name: "Al H",
      role: "5 reviews",
      image: "https://ui-avatars.com/api/?name=Al+H&background=2b6cb0&color=fff",
      url:"https://maps.app.goo.gl/fYF16Fn4Xxa6f1Tv7"
    },
    {
      text: "Had a great experience working with Gus at Drift! Great customer service and quick process! Thanks!",
      name: "Anna Fatouhi",
      role: "Local Guide • 13 reviews",
      image: "https://ui-avatars.com/api/?name=Anna+Fatouhi&background=319795&color=fff",
      url:"https://maps.app.goo.gl/SoKqBkZdgZLBDh1Q6"
    },
    {
      text: "Great Experience all around. Quick closing, great communication.",
      name: "Mike Ajami",
      role: "3 reviews",
      image: "https://ui-avatars.com/api/?name=Mike+Ajami&background=2f855a&color=fff",
      url:"https://maps.app.goo.gl/piy99iwNz46km4XN9"
    },
    {
      text: "Great service. Great experience overall",
      name: "Sami Hammoud",
      role: "9 reviews",
      image: "https://ui-avatars.com/api/?name=Sami+Hammoud&background=744210&color=fff",
      url:"https://maps.app.goo.gl/wSxPPkHs3uHy5Y7r5"
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
              <a 
                href={testimonial.url}
                target="_blank"
                rel="noopener noreferrer"
                key={testimonial.name} 
                className="w-full px-6 py-8 bg-white rounded-2xl flex flex-col justify-between items-start overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              >
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
              </a>
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
                <a 
                  href={testimonial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={testimonial.name} 
                  className="px-6 py-8 bg-white rounded-2xl flex flex-col justify-between items-start shrink-0 overflow-hidden transition-all duration-700 ease-in-out cursor-pointer hover:shadow-lg"
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
                </a>
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
