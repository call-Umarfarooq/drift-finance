import React from 'react';

const ClientReviews = () => {
  const smallCards = [
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

  return (
    <section className="w-full bg-white flex flex-col items-center overflow-hidden ">

      {/* Featured Review Container */}
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center px-2 sm:px-4 mb-5 lg:mb-10 pt-10 lg:pt-12">

        {/* Featured Review - Exact Mobile snippet from User */}
        <div className="w-96 lg:w-full lg:max-w-[962px] inline-flex lg:flex flex-row justify-start lg:justify-start items-start lg:items-center gap-3.5 lg:gap-5">

          {/* Image / Video thumbnail */}
          <div className="w-36 h-44 lg:w-[480px] lg:h-[480px] relative rounded-[20px] overflow-hidden shrink-0">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop"
              alt="Client Video"
              className="w-full h-full object-cover"
            />
            <div className="size-7 lg:w-14 lg:h-14 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[100px] flex justify-center items-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
              {/* Play Icon */}
              <div className="w-2.5 h-3 lg:w-4 lg:h-5 bg-P2-Gold rounded-[1px] ml-[2px] lg:ml-1" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
            </div>
          </div>

          {/* Wrapper for Text Card to allow exact relative positioning of Quote Icon without clipping */}
          <div className="relative w-52 h-60 lg:w-auto lg:h-auto lg:flex-1 shrink-0 lg:shrink">

            {/* Flawless SVG Quote Icon: perfectly aligned to overlap the card's border */}
            <div className="absolute right-4 -top-5 lg:right-10 lg:-top-6 text-P2-Gold pointer-events-none z-10">
              <svg viewBox="0 0 40 30" fill="currentColor" className="w-10 h-8 lg:w-[60px] lg:h-[45px]">
                <path d="M15.5 0C11.35 0 8 3.35 8 7.5C8 11.65 11.35 15 15.5 15H17.2L11 25.5H19L24.5 15V7.5C24.5 3.35 20.47 0 15.5 0ZM31.5 0C27.35 0 24 3.35 24 7.5C24 11.65 27.35 15 31.5 15H33.2L27 25.5H35L40.5 15V7.5C40.5 3.35 36.47 0 31.5 0Z" />
              </svg>
            </div>

            {/* Review Content */}
            <div className="w-full h-full px-3 py-10 lg:p-10 bg-neutral-100 lg:bg-slate-50 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-neutral-300 lg:outline-slate-200 flex flex-col justify-center items-start gap-1.5 lg:gap-6">

              <div className="w-44 lg:w-full flex flex-col justify-start items-start gap-2 lg:gap-5">
                {/* Stars */}
                <div className="inline-flex lg:flex justify-start items-center gap-0.5 lg:gap-1 text-[#F2C94C]">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 lg:w-5 lg:h-5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="self-stretch justify-start text-Secondary-Deep-Navy text-[10px] lg:text-base font-normal lg:font-semibold font-inter leading-4 lg:leading-6">
                  I had a great experience with Drift Financial. The whole process was easy, smooth, and stress free from start to finish. Pete was amazing to work with, professional, helpful, and always quick to answer any questions. He made everything simple and straightforward. I would highly recommend working with Pete and this team.
                </div>
              </div>

              <div className="w-36 lg:w-full h-0 lg:h-px outline outline-1 outline-offset-[-0.50px] outline-slate-200 lg:bg-slate-200 lg:my-2 shrink-0"></div>

              <div className="w-80 lg:w-full inline-flex lg:flex justify-start items-center gap-5">
                <div className="w-20 lg:w-auto inline-flex flex-col justify-start items-start gap-[3px] lg:gap-0.5">
                  <div className="self-stretch h-3 lg:h-auto justify-start text-P1-Navy text-[10px] lg:text-xl font-medium font-inter leading-4 lg:leading-8">Shannon Nelson</div>
                  <div className="self-stretch justify-start text-stone-500 lg:text-slate-500 text-[8px] lg:text-base font-medium font-inter leading-3 lg:leading-6">Founder & CEO</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Mobile Stack & Desktop Marquee Row */}
      <div className="w-full relative flex flex-col lg:flex-row justify-center items-center h-auto py-4 overflow-hidden group">

        {/* CSS for auto scroll marquee (Desktop Only) */}
        <style>
          {`
            @media (min-width: 1024px) {
              @keyframes marqueeReviews {
                0% { transform: translateX(0); }
                100% { transform: translateX(-25%); } /* Shift exactly 1 set out of the 4 sets */
              }
              .animate-marquee-reviews {
                animation: marqueeReviews 15s linear infinite reverse;
                will-change: transform;
              }
              .group:hover .animate-marquee-reviews {
                animation-play-state: paused;
              }
            }
            /* Enable marquee on smaller screens too */
            @media (max-width: 1023px) {
              @keyframes marqueeReviewsMobile {
                0% { transform: translateX(0); }
                100% { transform: translateX(-25%); }
              }
              .animate-marquee-reviews {
                animation: marqueeReviewsMobile 15s linear infinite reverse;
                will-change: transform;
              }
            }
          `}
        </style>

        {/* Scrollable Container - Now horizontal marquee on all screen sizes to ensure 'rotation' */}
        <div className="flex flex-row justify-start items-stretch gap-4 sm:gap-5 animate-marquee-reviews w-max px-4 lg:px-0">
          {/* Map cards (4x for marquee loop on desktop, just 1x on mobile) */}
          {[...smallCards, ...smallCards, ...smallCards, ...smallCards].map((card, idx) => {
            // Hide duplicates on mobile to avoid endless scrolling
            const isDuplicate = idx >= smallCards.length;
            const textLimit = 160;
            const isLongText = card.text.length > textLimit;
            const displayText = isLongText ? card.text.slice(0, textLimit).trim() + "..." : card.text;
            return (
              <a href={card.url} target="_blank" rel="noopener noreferrer" key={idx} className={`w-full max-w-[340px] sm:max-w-[384px] lg:max-w-none lg:w-80 shrink-0 p-6 lg:p-7 bg-[#F9F9F9] lg:bg-slate-50 rounded-2xl lg:rounded-3xl border border-slate-200 lg:border-none lg:outline lg:outline-1 lg:outline-offset-[-1px] lg:outline-slate-200 flex flex-col justify-start items-start gap-4 lg:gap-5 transition-colors duration-300 hover:bg-white hover:shadow-lg cursor-pointer ${isDuplicate ? 'hidden lg:flex' : 'flex'}`}>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 lg:gap-5 flex-1">
                  <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    {/* Stars */}
                    <div className="inline-flex justify-start items-center gap-0.5 text-[#F2C94C]">
                      {[1, 2, 3, 4, 5].map(i => (
                        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <div className="self-stretch justify-start text-P1-Navy text-xs lg:text-xs font-medium font-['Inter'] leading-5">
                      {displayText}
                      {isLongText && (
                        <span className="text-P2-Gold font-semibold ml-1 hover:underline cursor-pointer">
                          See more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-auto self-stretch h-px lg:h-0 border-b border-slate-200 lg:border-0 lg:outline lg:outline-1 lg:outline-offset-[-0.50px] lg:outline-slate-200"></div>
                </div>

                <div className="self-stretch inline-flex justify-start items-center gap-3">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="size-8 lg:size-10 rounded-[100px] object-cover shrink-0"
                  />
                  <div className="flex flex-col flex-1 justify-center items-start">
                    <div className="justify-start text-P1-Navy text-[13px] lg:text-base font-medium font-['Bricolage_Grotesque'] leading-tight">
                      {card.name}
                    </div>
                    <div className="text-slate-500 text-[10px] font-normal leading-3 mt-0.5">
                      {card.role}
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Fade gradients to hide marquee edges on desktop matching exact Figma styling */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-64 h-80 origin-top-left rotate-180 bg-gradient-to-l from-white to-white/0 pointer-events-none z-10" />
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 h-80 bg-gradient-to-l from-white to-white/0 pointer-events-none z-10" />
      </div>

    </section>
  );
};

export default ClientReviews;
