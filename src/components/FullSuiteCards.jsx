import React from 'react';

const FullSuiteCards = () => {
  const cards = [
    {
      title: "Conventional Loans",
      description: "Perfect for buyers with strong credit and stable income. Flexible terms from 10 to 30 years with competitive market rates.",
      tag: "Purchase & Refinance",
      icon: <img src="/WebsiteDevmode_icon/Layer_1.svg" alt="Conventional Loans" className="w-16 h-16 object-contain" />
    },
    {
      title: "FHA Loans",
      description: "Low down payment options starting at 3.5%. Ideal for first-time buyers or those rebuilding credit — government-backed and lender-approved.",
      tag: "As low as 3.5% down",
      icon: <img src="/WebsiteDevmode_icon/Layer_1-1.svg" alt="FHA Loans" className="w-16 h-16 object-contain" />
    },
    {
      title: "VA Loans",
      description: "Exclusive benefits for veterans and active-duty military. Zero down payment, no PMI, and rates you won't find anywhere else.",
      tag: "From 6.25% APR",
      icon: <img src="/WebsiteDevmode_icon/Layer_1-2.svg" alt="VA Loans" className="w-16 h-16 object-contain" />
    },
    {
      title: "HELOC",
      description: "Keep your existing mortgage intact and add a second lien to unlock your equity. Flexible draw periods, competitive rates.",
      tag: "No need to refinance",
      icon: <img src="/WebsiteDevmode_icon/Layer_1-3.svg" alt="HELOC" className="w-16 h-16 object-contain" />
    },
    {
      title: "DSCR Loan",
      description: "DSCR Loans open doors to investment for commercial real estate investors, without having to tap into their personal credit.",
      tag: "Equity access",
      icon: <img src="/WebsiteDevmode_icon/Layer_1-4.svg" alt="DSCR Loan" className="w-16 h-16 object-contain" />
    },
    {
      title: "Non-QM Loans",
      description: "Self-employed or unconventional income? Our Non-QM solutions are built for borrowers who don't fit the standard mold",
      tag: "Bank statement friendly",
      icon: <img src="/WebsiteDevmode_icon/Layer_1-5.svg" alt="Non-QM Loans" className="w-16 h-16 object-contain" />
    }
  ];

  return (
    <section className="w-full px-6 lg:px-10 bg-white flex justify-center items-center">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col justify-start items-center gap-5 lg:gap-16">
        
        <div className="flex flex-col justify-start items-center gap-2.5 lg:gap-4 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-[0.1em] leading-4 lg:leading-normal">
            FULL SUITE OF
          </div>
          <div className="max-w-[900px]">
            <span className="text-P1-Navy text-2xl lg:text-[64px] font-semibold font-inter capitalize leading-7 lg:leading-tight">Find the Right Fit for </span>
            <span className="text-P2-Gold text-2xl lg:text-[64px] font-semibold font-playfair italic capitalize leading-7 lg:leading-tight">You</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="w-full px-6 py-8 lg:px-10 lg:py-12 bg-neutral-300 rounded-3xl flex flex-col justify-start items-center gap-2 lg:gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="size-16 lg:size-20 flex justify-center items-center mb-0 lg:mb-2">
                {card.icon}
              </div>
              
              <div className="text-center text-P1-Navy text-2xl lg:text-3xl font-semibold font-inter leading-9 lg:leading-10">
                {card.title}
              </div>
              
              <div className="flex flex-col items-center gap-3 lg:gap-6 flex-grow justify-between mt-2 lg:mt-0">
                <div className="text-center text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-6 opacity-80 h-auto lg:h-[72px]">
                  {card.description}
                </div>
                
                <div className="px-4 py-1.5 lg:px-6 lg:py-2 bg-slate-400/30 rounded-full inline-flex justify-center items-center mt-2 lg:mt-0">
                  <div className="text-center text-P1-Navy text-[10px] lg:text-sm font-medium font-inter">
                    {card.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FullSuiteCards;
