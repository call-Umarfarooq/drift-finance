import React from 'react';

const NonQMLoanContent = () => {
  return (
    <section className="w-full py-12 lg:py-24 bg-white flex justify-center">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Mobile: Image at top | Desktop: Part of right column (hidden on mobile here) */}
        <div className="w-full lg:hidden mb-10">
          <div className="w-full relative rounded-[32px] overflow-hidden">
            <img
              src="/asstes/ba474f61bc599ba467dc585ad79658e79601976c.png"
              alt="Non-QM Loan Home"
              className="w-full h-auto object-cover rounded-[32px]"
            />
            {/* Carousel dots */}
           
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">

          {/* ── Left Column ── */}
          <div className="flex flex-col gap-6 lg:gap-12 w-full lg:max-w-[612px]">

            {/* Main Heading */}
            <div className="flex flex-col gap-4">
              <h2 className="text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[75px]">
                NON-QM Loans
              </h2>
              <div className="text-Secondary-Deep-Navy text-[10px] lg:text-base font-normal font-poppins leading-4 lg:leading-7 opacity-90 lg:opacity-100">
                NON-QM Loans, or Non-Qualified Mortgage Loans, are flexible mortgage solutions designed for borrowers who may not meet traditional lending guidelines. These loans are ideal for self-employed individuals, business owners, freelancers, real estate investors, or anyone with non-traditional income sources.
                <br /><br />
                Unlike conventional mortgage programs that require standard income documentation such as W-2s and tax returns, NON-QM loans offer alternative methods to verify a borrower's ability to repay. This may include bank statements, asset utilization, profit and loss statements, or other financial documentation.
                <br /><br />
                NON-QM loans provide opportunities for borrowers who have strong financial profiles but may be unable to qualify under strict conventional lending standards due to write-offs, inconsistent income, recent credit events, or unique financial situations.
                <br /><br />
                These programs can be used for primary residences, second homes, and investment properties depending on the loan structure and lender guidelines.
              </div>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-col gap-4 lg:gap-8">
              <h3 className="text-P1-Navy text-2xl lg:text-4xl font-semibold font-inter capitalize leading-7 lg:leading-normal">
                Key Benefits of NON-QM Loans:
              </h3>

              <div className="flex flex-col gap-3 lg:gap-4">
                {[
                  'Flexible income documentation options',
                  'Bank statement and asset-based qualification programs available',
                  'Solutions for self-employed borrowers and entrepreneurs',
                  'Options after recent credit events such as bankruptcy or foreclosure',
                  'Financing for investment properties and unique borrower situations',
                  'Expanded qualification flexibility compared to traditional loans',
                ].map((item, index) => (
                  <div key={index} className="flex justify-start items-center gap-2.5 lg:gap-4">
                    <div className="flex-shrink-0 size-4 lg:size-6 rounded-full border border-P2-Gold flex items-center justify-center p-0.5">
                      <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#BC955C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-P1-Navy text-[10px] lg:text-lg font-normal font-poppins leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For Box */}
            <div className="w-full lg:max-w-[575px] p-4 lg:p-8 bg-teal-950/20 lg:bg-teal-950/25 rounded-2xl lg:rounded-[32px]">
              <div className="text-P1-Navy text-[10px] lg:text-xl font-inter leading-4 lg:leading-8">
                <span className="font-bold block lg:inline">Ideal For:</span>
                <div className="mt-1 lg:mt-4 font-normal space-y-1 lg:space-y-2">
                  <p>• Self-employed borrowers</p>
                  <p>• Business owners and freelancers</p>
                  <p>• Real estate investors</p>
                  <p>• Borrowers with non-traditional income</p>
                  <p>• Individuals who do not fit standard mortgage guidelines</p>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right Column ── */}
          <div className="w-full lg:flex-1 flex flex-col gap-10 lg:gap-20">

            {/* Desktop Image */}
            <div className="hidden lg:block w-full relative rounded-[40px] overflow-hidden ">
              <img
                src="/asstes/ba474f61bc599ba467dc585ad79658e79601976c.png"
                alt="Non-QM Loan Home"
                className="w-full h-[640px] object-fill rounded-[40px]"
              />
              
            </div>

            {/* Contact Form */}
            <div className="w-full lg:max-w-[580px] flex flex-col gap-6 lg:gap-10">
              
              {/* Name */}
              <div className="w-full flex flex-col gap-1.5 lg:gap-10">
                <div className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Name</div>
                <div className="w-full h-[1px] bg-P1-Navy/80 lg:bg-P1-Navy" />
              </div>

              {/* Email */}
              <div className="w-full flex flex-col gap-1.5 lg:gap-10">
                <div className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Email</div>
                <div className="w-full h-[1px] bg-P1-Navy/80 lg:bg-P1-Navy" />
              </div>

              {/* Message */}
              <div className="w-full flex flex-col gap-1.5 lg:gap-10">
                <div className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-6">Message</div>
                <div className="flex flex-col gap-1.5 lg:gap-4">
                  <div className="text-neutral-400 text-[8px] lg:text-base font-light font-inter leading-6">Type your message here..</div>
                  <div className="w-full h-[1px] bg-P1-Navy/80 lg:bg-P1-Navy" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-24 lg:w-40 h-8 lg:h-12 bg-P1-Navy rounded-[100px] flex justify-center items-center gap-1.5 lg:gap-2 cursor-pointer hover:opacity-90 transition-opacity group mt-2 lg:mt-4">
                <span className="text-center text-white text-[10px] lg:text-lg font-semibold font-inter">Submit</span>
                <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path d="M1.5 16.5L16.5 1.5M16.5 1.5H5.25M16.5 1.5V12.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default NonQMLoanContent;
