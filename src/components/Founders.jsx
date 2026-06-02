import React from 'react';

const Founders = ({ titleStart = "Your Future. ", titleGold = "Our Commitment.", showDescription = true }) => {
  const founders = [
    {
      name: "Pete Grigoriou",
      nmls: "NMLS #999405",
      image: "/funture-commitment /Rectangle 44-2.png",
      linkedin: "https://www.linkedin.com/in/pete-grigoriou-41293173?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    {
      name: "Gassan Fatouhi",
      nmls: "NMLS #998868",
      image: "/funture-commitment /Rectangle 44-1.png",
      linkedin: "https://www.linkedin.com/in/gassan-fatouhi-148666405?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    {
      name: "Hassan Barada",
      nmls: "NMLS #1203216",
      image: "/funture-commitment /Rectangle 44.png",
      linkedin: "https://www.linkedin.com/in/hassan-barada-114a6a85?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  ];

  return (
    <section className="w-full px-6 lg:px-10">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col justify-start items-center gap-6 lg:gap-14">

        {/* Heading */}
        <div className="w-full max-w-[1060px] text-center">
          <span className="text-Secondary-Deep-Navy text-2xl lg:text-5xl font-bold font-poppins">{titleStart}</span>
          <span className="text-P2-Gold text-2xl lg:text-5xl font-bold font-playfair italic">{titleGold}</span>
        </div>

        {/* Description */}
        {showDescription && (
          <div className="w-full max-w-[954px] opacity-70 text-center text-Secondary-Deep-Navy text-[10px] lg:text-base font-medium font-inter leading-4 lg:leading-5">
            Our three founders and their team bring 40+ years of combined mortgage expertise to every client relationship. We don&apos;t hand you off to junior staff — you get direct access to seasoned principals who are personally invested in securing the best outcome for you. Ready to take the next step?
          </div>
        )}

        {/* Founders Grid */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
          {founders.map((founder, index) => (
            <a
              key={index}
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full   h-[380px] lg:h-[473px] py-6 lg:py-10 flex flex-col justify-end items-center relative cursor-pointer hover:opacity-90 transition-opacity duration-300"
            >
              <img
                className="w-full h-full rounded-3xl object-cover absolute top-0 left-0"
                src={founder.image}
                alt={founder.name}
              />
              <div className="w-[80%] lg:w-[90%] h-auto px-7 py-3 lg:py-4 bg-neutral-300 rounded-3xl flex flex-col justify-center items-center relative z-10 gap-0.5">
                <div className="text-P1-Navy text-center text-xl lg:text-3xl font-semibold font-poppins leading-tight">
                  {founder.name}
                </div>
                <div className="text-P1-Navy/70 text-center text-[10px] lg:text-sm font-medium font-inter tracking-wide">
                  {founder.nmls}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Founders;
