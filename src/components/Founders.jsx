import React from 'react';

const Founders = () => {
  const founders = [
    {
      name: "Pete Grigoriou",
      image: "/funture-commitment /Rectangle 44.png"
    },
    {
      name: "Gassan Fatouhi",
      image: "/funture-commitment /Rectangle 44-1.png"
    },
    {
      name: "Hassan Barada",
      image: "/funture-commitment /Rectangle 44-2.png"
    }
  ];

  return (
    <section className="w-full px-6 lg:px-10">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col justify-start items-center gap-6 lg:gap-14">
        
        {/* Heading */}
        <div className="w-full max-w-[1060px] text-center">
          <span className="text-Secondary-Deep-Navy text-2xl lg:text-5xl font-bold font-poppins">Your Future. </span>
          <span className="text-P2-Gold text-2xl lg:text-5xl font-bold font-playfair italic">Our Commitment.</span>
        </div>

        {/* Description */}
        <div className="w-full max-w-[954px] opacity-70 text-center text-Secondary-Deep-Navy text-[10px] lg:text-base font-medium font-inter leading-4 lg:leading-5">
          Our three founders and their team bring 40+ years of combined mortgage expertise to every client relationship. We don&apos;t hand you off to junior staff — you get direct access to seasoned principals who are personally invested in securing the best outcome for you. Ready to take the next step?
        </div>

        {/* Founders Grid */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
          {founders.map((founder, index) => (
            <div key={index} className="w-full   h-[380px] lg:h-[473px] py-6 lg:py-10 flex flex-col justify-end items-center relative">
              <img 
                className="w-full h-full rounded-3xl object-cover absolute top-0 left-0" 
                src={founder.image} 
                alt={founder.name} 
              />
              <div className="w-[80%] lg:w-[90%] h-16 lg:h-20 px-7 bg-neutral-300 rounded-3xl flex flex-col justify-center items-start relative z-10">
                <div className="text-P1-Navy text-2xl lg:text-3xl font-semibold font-poppins leading-tight">
                  {founder.name}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Founders;
