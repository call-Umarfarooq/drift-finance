import Link from 'next/link';
import React from 'react';

const ServicesCards = ({ className }) => {
  const cards = [
    {
      title: "Buy a Home",
      link: "Https://driftfinancial.my1003app.com/998868/register",
      description: "Turn your dream of homeownership into reality with flexible mortgage options, competitive rates, and guidance every step of the way.",
      icon: <img src="/asstes/serveice-icon1.svg" alt="Buy a Home" className="w-16 h-16 lg:w-24 lg:h-24 object-contain" />
    },
    {
      title: "Refinance Your Loan",
      link: "Https://driftfinancial.my1003app.com/998868/register",
      description: "Reduce your monthly payments, secure a better interest rate, or adjust your loan terms to fit your current financial goals.",
      icon: <img src="/asstes/servise-icon2.svg" alt="Refinance Your Loan" className="w-16 h-16 lg:w-24 lg:h-24 object-contain" />
    },
    {
      title: "Access Your Home Equity",
      link: "Https://driftfinancial.my1003app.com/998868/register",
      description: "Unlock the value of your property to fund renovations, investments, or major expenses, without selling your home.",
      icon: <img src="/asstes/service-icon3.svg" alt="Access Your Home Equity" className="w-16 h-16 lg:w-24 lg:h-24 object-contain" />
    }
  ];

  return (
    <section className={`w-full max-w-[1360px] mx-auto px-6 lg:px-0  flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-[29px] relative z-20 ${className !== undefined ? className : '-mt-[90px] lg:-mt-[96px]'}`}>
      {cards.map((card, index) => (
        <Link href={card.link} key={index} className="w-full h-auto lg:h-[390px] px-8 py-10 lg:px-10 lg:py-12 bg-neutral-300 rounded-3xl flex flex-col justify-center items-center gap-2 lg:gap-3.5 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 lg:w-24 lg:h-24 relative flex justify-center items-center">
            {card.icon}
          </div>
          <div className="self-stretch text-center text-P2-Gold text-2xl lg:text-3xl font-semibold font-inter leading-9 lg:leading-[48px]">
            {card.title}
          </div>
          <div className="w-full max-w-[320px] lg:max-w-none text-center text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-6 opacity-80">
            {card.description}
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ServicesCards;
