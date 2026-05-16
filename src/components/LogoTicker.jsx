import React from 'react';

const LogoTicker = () => {
  const logos = [
    { src: "/brandlogo/source/PRMG.png", alt: "PRMG", className: "w-14 h-5 lg:w-32 lg:h-12" },
    { src: "/brandlogo/source/Kind-Lending.png", alt: "Kind Lending", className: "w-24 h-5 lg:w-56 lg:h-14" },
    { src: "/brandlogo/source/carington.png", alt: "Carrington", className: "w-20 h-3.5 lg:w-48 lg:h-9" },
    { src: "/brandlogo/source/Pennie-Mac1.png", alt: "PennyMac", className: "w-14 h-5 lg:w-32 lg:h-11" },
    { src: "/brandlogo/source/newrez-3.png", alt: "Newrez", className: "w-20 h-4 lg:w-48 lg:h-10" },
    { src: "/brandlogo/source/UWM.png", alt: "UWM", className: "w-9 h-4 lg:w-20 lg:h-10" },
    { src: "/brandlogo/source/Figure-Lending-4.png", alt: "Figure Lending", className: "w-12 h-3 lg:w-32 lg:h-8" },
  ];

  return (
    <section className="w-full bg-white overflow-hidden flex justify-center items-center relative z-10">
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <div className="flex justify-start items-center gap-6 lg:gap-20 animate-marquee min-w-full shrink-0 px-6 lg:px-10">
          {/* Double the logos to create an infinite scroll effect */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img key={index} className={`${logo.className} object-contain`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
