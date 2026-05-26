'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How soon will the funds be made available after approval?",
      answer: "Funds are typically made available within 5 working days after approval. However, the exact timing may vary depending on processing requirements and banking procedures. You will be notified once the funds have been successfully transferred."
    },
    { 
      question: "What will my monthly payment be?", 
      answer: "Your monthly payment depends on your loan amount, interest rate, and term length. We can provide a detailed estimate during your consultation." 
    },
    { 
      question: "How much do I need for a down payment?", 
      answer: "Down payment requirements vary by loan program. Some programs allow as little as 3% down, while others may require 20%." 
    },
    { 
      question: "What happens if rates change while I’m under contract?", 
      answer: "We offer rate lock options to protect you from rate increases while your loan is being processed." 
    },
    { 
      question: "Do I need to have my taxes and insurance escrowed?", 
      answer: "Escrow requirements depend on your loan type and down payment amount. We will discuss your specific situation and options." 
    },
    { 
      question: "Can I buy a second home or investment property?", 
      answer: "Yes, we offer specialized mortgage products for second homes and investment properties." 
    },
    { 
      question: "What happens if I pay off my mortgage early?", 
      answer: "Most of our mortgage products do not have prepayment penalties, meaning you can pay off your loan early without extra fees." 
    },
    { 
      question: "How do I choose between fixed and adjustable rates?", 
      answer: "A fixed-rate offers stability with consistent payments, while an adjustable-rate might offer lower initial rates. We'll help you choose based on your financial goals." 
    }
  ];

  return (
    <section className="w-full bg-white px-6 lg:px-10 flex justify-center">
      <div className="w-full max-w-[1360px] flex flex-col justify-start items-center gap-5 lg:gap-10">
        
        {/* Header Section */}
        <div className="w-full max-w-[1060px] flex flex-col justify-start items-center gap-3 lg:gap-5">
          <div className="text-center">
            <span className="text-Secondary-Deep-Navy text-2xl lg:text-5xl font-bold font-poppins capitalize leading-8 lg:leading-[63px]">You have questions and we have </span>
            <span className="text-P2-Gold text-2xl lg:text-5xl font-bold font-playfair italic capitalize leading-8 lg:leading-[63px]">answers.</span>
          </div>
          <div className="w-full text-center text-Secondary-Deep-Navy text-[10px] lg:text-base font-normal font-poppins leading-4 lg:leading-relaxed">
            Navigating the dynamic mortgage landscape can feel daunting. We've compiled a list of commonly asked questions by Residential and Commercial borrowers. For deeper insight, schedule your consultation with one of our Mortgage experts today.
          </div>
          <Link href={"/contact"} className="px-6 py-2 lg:py-3 bg-P2-Gold lg:bg-P1-Navy rounded-full flex justify-center items-center gap-[5px] lg:gap-2 hover:bg-opacity-90 transition-colors mt-1 lg:mt-2 cursor-pointer group overflow-hidden">
            <span className="text-white text-[10px] lg:text-base font-semibold font-inter leading-4 lg:leading-6">Contact Our Experts</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 hidden lg:block">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col gap-3 lg:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div 
                key={index} 
                className={`w-full bg-P1-Navy rounded-2xl lg:rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${isOpen ? 'p-6 lg:p-8' : 'px-6 lg:px-8 py-4 lg:py-6 hover:bg-[#0a1829]'}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="w-full flex justify-between items-center gap-5 lg:gap-9">
                  <div className="flex-1 text-white text-base lg:text-xl font-medium font-poppins leading-5 lg:leading-normal">
                    {faq.question}
                  </div>
                  <div className="w-6 h-6 lg:w-8 lg:h-8 flex justify-center items-center shrink-0 text-P2-Gold">
                    {isOpen ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Answer Content - Animated */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-3 lg:mt-3.5 opacity-80' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="w-full max-w-[1157px] text-white text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
