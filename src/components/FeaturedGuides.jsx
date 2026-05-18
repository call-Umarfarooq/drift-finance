import React from 'react';
import Link from 'next/link';
const guides = [
  {
    icon: '/asstes/essentials/Vector-3.svg',
    title: 'What is a mortgage — really?',
    description: "A mortgage has moving parts that affect your budget for decades. Here's what every borrower should understand before applying.",
    bullets: [
      'Principal vs. interest',
      'How amortization works',
      'What escrow actually does',
      'Fixed vs. adjustable rates',
    ],
  },
  {
    icon: '/asstes/essentials/Vector-1.svg',
    title: 'First-time buyer? Start here.',
    description: 'The homebuying process has more steps than most expect — and more room for costly mistakes. This guide walks you through it all.',
    bullets: [
      'Pre-approval vs. pre-qualified',
      'Making a competitive offer',
      'What happens in underwriting',
      'Closing costs explained',
    ],
  },
  {
    icon: '/asstes/essentials/Vector.svg',
    title: "Should you refinance? Here's how to know.",
    description: 'Refinancing can save you thousands — or cost more than you expect if the timing is wrong. Learn how to calculate your break-even point.',
    bullets: [
      'Rate & term vs. cash-out refi',
      'How to find your break-even',
      'When NOT to refinance',
      'Real cost of closing on a refi',
    ],
  },
];

const BulletIcon = () => (
  <img src="/asstes/essentials/checkmark-circle-02.svg" alt="bullet" className="w-2 lg:w-4 h-2 lg:h-4 flex-shrink-0" />
);

const FeaturedGuides = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-8 lg:gap-14">

        {/* Section Header */}
        <div className="w-full max-w-[1164px] flex flex-col items-center gap-2 lg:gap-4">
          <div className="text-center text-P2-Gold text-[10px] lg:text-2xl font-semibold font-inter uppercase tracking-wide">
            Featured guides
          </div>
          <div className="w-full text-center">
            <span className="text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-normal lg:leading-[75.52px]">Start with the </span>
            <span className="text-P2-Gold text-2xl lg:text-6xl font-semibold font-playfair italic capitalize leading-normal lg:leading-[75.52px]">essentials</span>
          </div>
        </div>

        {/* Cards Row */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="w-full lg:flex-1 h-auto lg:h-[522px] px-6 py-8 lg:py-6 bg-P1-Navy rounded-3xl flex flex-col justify-center items-start gap-4 lg:gap-5 group hover:translate-y-[-4px] transition-all duration-300 shadow-xl"
            >
              {/* Icon */}
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-P2-Gold/20 rounded-lg flex items-center justify-center">
                 <img src={guide.icon} alt={guide.title} className="w-5 lg:w-6 h-5 lg:h-6 object-contain brightness-0 invert" />
              </div>

              {/* Title */}
              <div className="self-stretch text-white text-2xl lg:text-3xl font-semibold font-inter leading-tight lg:leading-[48px]">
                {guide.title}
              </div>

              {/* Description */}
              <div className="self-stretch text-white text-xs lg:text-base font-normal font-inter leading-relaxed lg:leading-6 opacity-80 lg:opacity-100">
                {guide.description}
              </div>

              {/* Bullet List */}
              <div className="inline-flex justify-start items-start lg:items-center gap-2.5 lg:gap-3">
                {/* Bullet icons column */}
                <div className="flex flex-col justify-start items-start gap-2.5 lg:gap-3 mt-1 lg:mt-0">
                  {guide.bullets.map((_, i) => (
                    <BulletIcon key={i} />
                  ))}
                </div>
                {/* Bullet text */}
                <div className="text-white text-[10px] lg:text-base font-normal font-inter leading-[18px] lg:leading-6">
                  {guide.bullets.map((bullet, i) => (
                    <React.Fragment key={i}>
                      {bullet}
                      {i < guide.bullets.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/contact" className="w-auto lg:w-56 h-7 lg:h-12 px-6 lg:px-8 py-2 bg-P2-Gold rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-opacity-90 transition-all mt-2 lg:mt-0 group-hover:scale-[1.02] group/btn">
                <div className="text-center text-P1-Navy text-[10px] lg:text-base font-semibold font-inter leading-none">Talk to a guide</div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                  <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#042538" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedGuides;
