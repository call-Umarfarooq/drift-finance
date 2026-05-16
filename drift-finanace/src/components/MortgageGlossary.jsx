import React from 'react';

const terms = [
  {
    badge: 'APR',
    title: 'Annual Percentage Rate',
    text: "The true cost of your loan as a yearly rate — includes your interest rate plus lender fees, so it's always higher than the base rate. Use APR to compare loans apples-to-apples."
  },
  {
    badge: 'LTV',
    title: 'Loan-to-value ratio',
    text: "Your loan amount divided by the home's appraised value. A $350K loan on a $400K home = 87.5% LTV. The lower your LTV, the better your rate — and the less likely you'll need PMI."
  },
  {
    badge: 'PMI',
    title: 'Private Mortgage Insurance',
    text: "Required when your down payment is less than 20%. It protects the lender, not you — and adds to your monthly payment until your LTV drops below 80%."
  },
  {
    badge: 'DTI',
    title: 'Debt-to-Income Ratio',
    text: "The percentage of your gross monthly income that goes toward debt payments. Most lenders cap this at 43–50%. A lower DTI signals you can comfortably carry a new mortgage payment."
  },
  {
    badge: 'Escrow',
    title: 'Escrow Account',
    text: "A separate account your lender manages to collect and pay your property taxes and homeowner's insurance. A portion of every mortgage payment goes in — bills handled automatically."
  },
  {
    badge: 'Points',
    title: 'Discount Points',
    text: "Fees paid upfront to lower your interest rate. One point = 1% of the loan amount. Paying points makes sense if you'll stay in the home long enough for monthly savings to outweigh upfront cost."
  }
];

const MortgageGlossary = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-neutral-100 flex justify-center">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-10 lg:gap-16">
        
        {/* Header */}
        <div className="w-full max-w-[1164px] flex flex-col justify-start items-center gap-2 lg:gap-4">
          <div className="text-center text-P2-Gold text-[10px] lg:text-2xl font-semibold font-inter uppercase tracking-wide">
            Mortgage glossary
          </div>
          <div className="text-center w-full max-w-[800px]">
            <span className="text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-tight lg:leading-[75.52px]">Words you&apos;ll hear — and what they actually </span>
            <span className="text-P2-Gold text-2xl lg:text-6xl font-semibold font-playfair italic capitalize leading-tight lg:leading-[75.52px]">mean</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
          {terms.map((term, index) => (
            <div 
              key={index} 
              className="px-6 lg:px-8 py-10 lg:py-16 bg-neutral-300 rounded-3xl flex flex-col justify-center items-center gap-3 lg:gap-4 text-center h-full hover:shadow-md transition-shadow"
            >
              {/* Badge */}
              <div className="px-5 py-1 bg-P1-Navy rounded-[50px] inline-flex justify-center items-center">
                <span className="text-white text-[10px] lg:text-base font-normal font-inter leading-tight">{term.badge}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-P1-Navy text-2xl lg:text-[30px] font-semibold font-inter leading-tight lg:leading-10 capitalize">
                {term.title}
              </h3>
              
              {/* Text */}
              <p className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-relaxed lg:leading-6 max-w-[280px] lg:max-w-none">
                {term.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MortgageGlossary;
