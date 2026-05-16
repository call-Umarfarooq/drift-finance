'use client';
import React, { useEffect, useState } from 'react';

const TestimonialsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const images = [
    "/asstes/resuilt/image.png",
    "/asstes/resuilt/image-1.png",
    "/asstes/resuilt/image-2.png",
    "/asstes/resuilt/image-3.png",
    "/asstes/resuilt/image-4.png",
    "/asstes/resuilt/image-5.png",
    "/asstes/resuilt/image-6.png",
    "/asstes/resuilt/image-7.png",
    "/asstes/resuilt/image-8.png",
    "/asstes/resuilt/image-9.png",
    "/asstes/resuilt/image-10.png",
    "/asstes/resuilt/image-11.png",
    "/asstes/resuilt/image-12.png"
  ];

  let imgIdx = 0;

  const columnsData = [
    { items: ['empty', 'image', 'image'], emptyHeight: 'h-[64px] sm:h-[120px] md:h-[180px] lg:h-[240px]' }, // Col 1
    { items: ['empty', 'image', 'image'], emptyHeight: 'h-[36px] sm:h-[70px] md:h-[100px] lg:h-[140px]' }, // Col 2
    { items: ['empty', 'image'], emptyHeight: 'h-[48px] sm:h-[95px] md:h-[140px] lg:h-[190px]' }, // Col 3
    { items: ['empty', 'image'], emptyHeight: 'h-[16px] sm:h-[30px] md:h-[45px] lg:h-[60px]' },  // Col 4
    { items: ['empty', 'image'], emptyHeight: 'h-[56px] sm:h-[110px] md:h-[160px] lg:h-[220px]' }, // Col 5
    { items: ['empty', 'image'], emptyHeight: 'h-[36px] sm:h-[70px] md:h-[100px] lg:h-[140px]' }, // Col 6
    { items: ['empty', 'image'], emptyHeight: 'h-[48px] sm:h-[95px] md:h-[140px] lg:h-[190px]' }, // Col 7
    { items: ['empty', 'image', 'image'], emptyHeight: 'h-[16px] sm:h-[30px] md:h-[45px] lg:h-[60px]' },  // Col 8
    { items: ['empty', 'image', 'image'], emptyHeight: 'h-[66px] sm:h-[130px] md:h-[190px] lg:h-[260px]' }  // Col 9
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center overflow-hidden relative ">
      {/* Top blurry fade effect */}
      <div className="absolute top-0 left-0 w-full h-16 sm:h-24 lg:h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      {/* Grid container - Shrinks proportionally for mobile to fit all 9 columns */}
      <div className="w-full max-w-[1360px] mx-auto px-2 sm:px-4 lg:px-5 flex justify-center items-start gap-1 sm:gap-2 md:gap-3 lg:gap-4  lg:mt-0">
        {columnsData.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 w-9 sm:w-16 md:w-24 lg:w-[138px] shrink-0">
            {col.items.map((item, itemIdx) => {
              const delay = (colIdx * 0.1) + (itemIdx * 0.15);
              const isImage = item === 'image';
              const src = isImage ? images[imgIdx++] : '';
              const floatDelay = (colIdx % 3) * -2; // varied float offset

              if (!isImage) {
                // Render the empty box with responsive height
                return (
                  <div
                    key={itemIdx}
                    className={`w-full ${col.emptyHeight} bg-neutral-700/5 rounded-md lg:rounded-2xl`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      animation: isVisible ? `fadeInUp 0.8s ease-out ${delay}s forwards` : 'none',
                    }}
                  />
                );
              }

              // Render the image
              return (
                <div
                  key={itemIdx}
                  className="w-full h-12 sm:h-20 md:h-32 lg:h-44 rounded-md lg:rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible
                      ? `fadeInUp 0.8s ease-out ${delay}s forwards, float 6s ease-in-out ${floatDelay}s infinite`
                      : 'none',
                    willChange: 'transform, opacity'
                  }}
                >
                  <img src={src} className="w-full h-full object-cover" alt="Client" />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Testimonials Header (Below the grid as per screenshot) */}
      <div
        className="w-full max-w-[800px] mt-8 sm:mt-16 lg:mt-24 flex flex-col justify-start items-center gap-4 lg:gap-6 z-10 px-4"
        style={{
          opacity: isVisible ? 1 : 0,
          animation: isVisible ? `fadeInUp 0.8s ease-out 1s forwards` : 'none',
        }}
      >
        <div className="inline-flex justify-center items-center gap-3 sm:gap-4 lg:-mt-32 -mt-12">
          
          {/* Left lines */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div className="w-[2px] sm:w-[3px] h-2 sm:h-3 bg-slate-200 rounded-sm" />
            <div className="w-[2px] sm:w-[3px] h-3 sm:h-5 bg-slate-200 rounded-sm" />
            <div className="w-[2px] sm:w-[3px] h-5 sm:h-8 bg-slate-200 rounded-sm" />
            <div className="w-[2px] sm:w-[3px] h-2.5 sm:h-4 bg-slate-200 rounded-sm" />
          </div>

          {/* Badge */}
          <div className="px-4 py-1.5 sm:px-6 sm:py-2 bg-P2-Gold rounded-[100px] flex justify-center items-center gap-1.5 sm:gap-2 shadow-sm">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.66663 12.5C6.66663 12.5 7.91663 14.1667 9.99996 14.1667C12.0833 14.1667 13.3333 12.5 13.3333 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 7.5H7.50833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.5 7.5H12.5083" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-center text-white text-sm sm:text-lg font-medium font-inter leading-tight">Testimonials</div>
          </div>

          {/* Right lines */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div className="w-[2px] sm:w-[3px] h-2.5 sm:h-4 bg-slate-200 rounded-sm" />
            <div className="w-[2px] sm:w-[3px] h-5 sm:h-8 bg-slate-200 rounded-sm" />
            <div className="w-[2px] sm:w-[3px] h-3 sm:h-5 bg-slate-200 rounded-sm" />
            <div className="w-[2px] sm:w-[3px] h-2 sm:h-3 bg-slate-200 rounded-sm" />
          </div>

        </div>

        <div className="flex flex-col justify-start items-center gap-2 sm:gap-4">
          <h2 className="text-center text-[#042538] text-[32px] sm:text-5xl md:text-6xl font-bold font-inter leading-tight">
            What Our <span className="text-[#BC955C] font-playfair italic">Clients</span> Say
          </h2>
          <p className="text-center text-slate-600 text-[10px] sm:text-lg font-medium font-inter leading-relaxed sm:leading-7 max-w-[600px]">
            Read how Drift Financial has transformed productivity for our clients<br className="hidden md:block" />and hear their success stories.
          </p>
        </div>
      </div>

    </section>
  );
};

export default TestimonialsGrid;
