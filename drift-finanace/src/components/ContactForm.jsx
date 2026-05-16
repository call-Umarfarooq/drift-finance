import React from 'react';

const ContactForm = () => {
  return (
    <section className="w-full bg-white flex justify-center ">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-8 lg:gap-16">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 lg:gap-4 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-wide leading-4">
            Send a message
          </div>
          <div className="w-full max-w-[320px] lg:max-w-[1100px] text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            We'll Respond <span className="text-P2-Gold font-playfair italic">Within</span> 24 Hours
          </div>
          <div className="text-neutral-600 text-[10px] lg:text-lg font-medium font-inter mt-1 lg:mt-2 max-w-[280px] lg:max-w-none">
            One of our principals personally replies — no hand-offs, no automated responses.
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:max-w-[1360px] flex flex-col gap-7 lg:gap-10">
          
          {/* Row 1 */}
          <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10">
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Name</label>
              <input type="text" className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg" />
            </div>
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Last name</label>
              <input type="text" className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10">
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Email address</label>
              <input type="email" className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg" />
            </div>
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Phone number</label>
              <input type="tel" className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10">
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">I'm looking to</label>
              <input type="text" placeholder="Purchase a home...." className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg placeholder:text-neutral-400 placeholder:text-[8px] lg:placeholder:text-base placeholder:font-light" />
            </div>
            <div className="flex-1 flex flex-col gap-0.5 lg:gap-2">
              <label className="text-P1-Navy text-[10px] lg:text-base font-normal lg:font-medium font-inter">Message (optional)</label>
              <input type="text" placeholder="Share your situation, timeline, or any questions..." className="w-full pb-1 lg:pb-2 border-b border-P1-Navy bg-transparent outline-none text-P1-Navy text-sm lg:text-lg placeholder:text-neutral-400 placeholder:text-[8px] lg:placeholder:text-base placeholder:font-light" />
            </div>
          </div>

          {/* How can we reach you? Section */}
          <div className="w-full flex flex-col items-center lg:items-start gap-4 lg:gap-6 mt-4 lg:mt-8">
            <div className="text-center lg:text-left text-P1-Navy text-base lg:text-2xl font-bold lg:font-semibold font-inter uppercase">
              How can we reach you?
            </div>
            
            <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-center gap-3.5 lg:gap-10">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="w-3.5 h-3.5 lg:w-5 lg:h-5 mt-0.5 bg-neutral-300 rounded-[2px] lg:rounded-[5px] shrink-0 cursor-pointer accent-P1-Navy" />
                <span className="text-P1-Navy text-[8px] lg:text-base font-semibold font-inter group-hover:text-P2-Gold transition-colors">
                  I agree to receive emails from Drift Financial.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="w-3.5 h-3.5 lg:w-5 lg:h-5 mt-0.5 bg-neutral-300 rounded-[2px] lg:rounded-[5px] shrink-0 cursor-pointer accent-P1-Navy" />
                <span className="text-P1-Navy text-[8px] lg:text-base font-semibold font-inter group-hover:text-P2-Gold transition-colors">
                  I agree to be contacted by phone call.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="w-3.5 h-3.5 lg:w-5 lg:h-5 mt-0.5 bg-neutral-300 rounded-[2px] lg:rounded-[5px] shrink-0 cursor-pointer accent-P1-Navy" />
                <span className="text-P1-Navy text-[8px] lg:text-base font-semibold font-inter group-hover:text-P2-Gold transition-colors">
                  I agree to receive text messages. Reply STOP to opt out.
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center mt-6">
            <button className="px-8 lg:px-10 py-2.5 lg:py-3 cursor-pointer bg-P1-Navy rounded-full flex justify-center items-center gap-1.5 lg:gap-2 group transition hover:bg-[#0b1421]">
              <span className="text-white text-[10px] lg:text-base font-semibold font-inter">Submit</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
