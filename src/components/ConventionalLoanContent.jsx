import React from 'react';

const ConventionalLoanContent = () => {
  return (
    <section className="w-full py-12 lg:py-24 bg-white flex justify-center">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10">
        
        {/* Mobile: Image at top | Desktop: Part of right column (hidden on mobile here) */}
        <div className="w-full lg:hidden mb-10">
          <div className="w-full relative rounded-[32px] overflow-hidden">
            <img
              src="/asstes/conventainal-image .png"
              alt="Conventional Loan Home"
              className="w-full h-auto object-cover rounded-[32px]"
            />
            {/* Carousel dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-1.5">
              <div className="w-12 h-1 bg-white/40 rounded-full" />
              <div className="w-12 h-1 bg-white/40 rounded-full" />
              <div className="w-12 h-1 bg-P2-Gold rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">

          {/* ── Left Column ── */}
          <div className="flex flex-col gap-6 lg:gap-12 w-full lg:max-w-[612px]">

            {/* Main Heading */}
            <div className="flex flex-col gap-4">
              <h2 className="text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[75px]">
                Conventional Loans
              </h2>
              <div className="text-Secondary-Deep-Navy text-[10px] lg:text-base font-normal font-poppins leading-4 lg:leading-7 opacity-90 lg:opacity-100">
                A Conventional Loan is one of the most popular mortgage options for homebuyers and homeowners because it offers flexibility, competitive interest rates, and a wide range of loan terms. Conventional loans are not backed by a government agency and are typically funded through private lenders and investors. These loans are ideal for borrowers with stable income, good credit, and the ability to meet standard lending guidelines.
                <br /><br />
                Conventional loans can be used to purchase a primary residence, second home, or investment property. They are available with fixed-rate and adjustable-rate options, giving borrowers flexibility based on their financial goals. Many buyers choose conventional financing because it often provides lower long-term costs compared to government-backed loans when the borrower has strong credit and a solid financial profile.
                <br /><br />
                One major advantage of a conventional loan is that private mortgage insurance (PMI) can eventually be removed once sufficient home equity is reached, typically after reaching 20% equity in the property. This can significantly lower monthly mortgage payments over time.
              </div>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-col gap-4 lg:gap-8">
              <h3 className="text-P1-Navy text-2xl lg:text-4xl font-semibold font-inter capitalize leading-7 lg:leading-normal">
                Key Benefits of Conventional Loans:
              </h3>

              <div className="flex flex-col gap-3 lg:gap-4">
                {[
                  'Competitive interest rates',
                  'Flexible loan terms and property types',
                  'Lower overall borrowing costs for qualified borrowers',
                  'PMI can be removed after building equity',
                  'Suitable for primary homes, vacation homes, and investment properties',
                  'Down payment options may start as low as 3% for qualified buyers',
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
                  <p>• Borrowers with good to excellent credit</p>
                  <p>• Buyers with stable employment and income</p>
                  <p>• Homeowners looking to refinance for better terms</p>
                  <p>• Individuals purchasing investment or second homes</p>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right Column ── */}
          <div className="w-full lg:flex-1 flex flex-col gap-10 lg:gap-20">

            {/* Desktop Image */}
            <div className="hidden lg:block w-full relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="/asstes/conventainal-image .png"
                alt="Conventional Loan Home"
                className="w-full h-[640px] object-cover rounded-[40px]"
              />
              <div className="absolute bottom-9 left-0 right-0 flex justify-center items-center gap-3">
                <div className="w-20 h-2 bg-white/40 rounded-full" />
                <div className="w-20 h-2 bg-white/40 rounded-full" />
                <div className="w-20 h-2 bg-P2-Gold rounded-full" />
              </div>
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

export default ConventionalLoanContent;
