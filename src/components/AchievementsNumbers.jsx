import React from 'react';

const AchievementsNumbers = () => {
  const cards = [
    {
      title: 'Every loan type covered',
      description: 'From conventional purchases and FHA loans to complex Non-QM structures and jumbo transactions — no scenario too simple or too complex.',
      icon: (
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 lg:w-8 lg:h-10">
          <rect x="0" y="0" width="24" height="30" rx="4" fill="#BC955C"/>
          <rect x="5" y="10" width="14" height="2" fill="#0F1C2E"/>
          <rect x="5" y="16" width="8" height="2" fill="#0F1C2E"/>
        </svg>
      )
    },
    {
      title: 'Clients across Michigan and beyond',
      description: 'First-time buyers in Royal Oak to investors scaling multi-property portfolios — every client received the same principal-level attention.',
      icon: (
        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-7 lg:w-6 lg:h-8">
          <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0ZM12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5Z" fill="#BC955C"/>
        </svg>
      )
    },
    {
      title: 'Speed that sets us apart',
      description: 'Average close time well below the national average — because our principals manage every deal personally, eliminating hand-offs that slow everyone else down.',
      icon: (
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-8 lg:w-5 lg:h-8">
          <path d="M0 18L10.5 0V12H19.5L9 32V20H0V18Z" fill="#BC955C"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white flex justify-center py-4 lg:py-0">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-7 lg:gap-16">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 lg:gap-6 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-wide leading-4">
            2025 in numbers
          </div>
          <div className="w-full max-w-[300px] lg:max-w-[900px] text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            What $2.5 <span className="text-P2-Gold font-playfair italic">billion</span> in closed loans looks like
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-3.5 lg:gap-8">
          
          {cards.map((card, index) => (
            <div key={index} className="flex-1 bg-P1-Navy rounded-3xl p-6 lg:p-10 flex flex-col justify-center items-center gap-5 lg:gap-6 min-h-[176px] lg:min-h-[300px]">
              <div className="mb-0 lg:mb-2">
                {card.icon}
              </div>
              <div className="text-center text-white text-base lg:text-3xl font-semibold font-inter leading-6 lg:leading-snug">
                {card.title}
              </div>
              <div className="text-center text-white lg:text-neutral-300 text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-relaxed max-w-[280px] lg:max-w-none">
                {card.description}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AchievementsNumbers;
