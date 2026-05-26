import React from 'react';

const IndustryRecognition = () => {
  const years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  return (
    <section className="w-full bg-white flex justify-center pb-12 lg:pb-0">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-16">
        
        {/* Left Column - Text Content */}
        <div className="w-full lg:max-w-[655px] flex flex-col justify-start items-center lg:items-start gap-5 lg:gap-8 text-center lg:text-left">
          
          <div className="flex flex-col justify-start items-center lg:items-start gap-2.5 lg:gap-6">
            <div className="text-P2-Gold text-[10px] lg:text-2xl font-semibold font-inter capitalize leading-4 lg:leading-9">
              Industry recognition
            </div>
            <div className="w-full text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[75px]">
              Top 10% — six years <span className="text-P2-Gold font-playfair italic">running. </span> Here's what that means.
            </div>
          </div>
          
          <div className="w-full max-w-[320px] lg:max-w-none text-P1-Navy text-[10px] lg:text-base font-normal font-inter normal-case leading-4 lg:leading-relaxed">
            The mortgage industry ranks professionals annually based on closed loan volume, client satisfaction, and overall production. Breaking into the top 10% once is an achievement. Doing it six years in a row — across bull markets, rising rate environments, and economic uncertainty — is a different thing entirely.
            <br/><br className="hidden lg:block"/>
            It means our principals have consistently outperformed 90% of all mortgage professionals in the country, year after year, regardless of market conditions. That consistency is what you get when you work with Drift Financial.
          </div>
        </div>

        {/* Right Column - Navy Card (Chart) */}
        <div className="w-full max-w-[390px] lg:max-w-[690px] px-6 lg:px-16 py-8 lg:pt-16 lg:pb-20 bg-P1-Navy rounded-3xl lg:rounded-[32px] flex flex-col justify-center items-center gap-3 lg:gap-7">
          
          <div className="text-center text-P2-Gold text-[10px] lg:text-2xl font-semibold font-inter capitalize leading-4 lg:leading-9 lg:mb-4">
            National ranking — <span className="text-white">2019 to 2025</span>
          </div>
          
          {years.map((year, index) => (
            <div key={index} className="w-full flex justify-between items-center gap-4 lg:gap-6">
              <div className="text-white text-[10px] lg:text-xl font-semibold font-inter capitalize leading-4 lg:leading-8 w-8 lg:w-12 text-right">
                {year}
              </div>
              
              <div className="flex-1 h-1.5 lg:h-2.5 bg-neutral-100 rounded-full flex items-center pr-3 lg:pr-7">
                <div className="w-full h-1.5 lg:h-2.5 bg-P2-Gold rounded-full" />
              </div>
              
              <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter capitalize leading-4 lg:leading-8 w-16 lg:w-[88px]">
                Top 10%
              </div>
            </div>
          ))}
          
          <div className="w-full text-center mt-2 lg:mt-4">
            <span className="text-P2-Gold text-[10px] lg:text-2xl font-semibold font-inter capitalize leading-4 lg:leading-9">
              6 consecutive years · 
            </span>
            <span className="text-white text-[10px] lg:text-2xl font-semibold font-inter capitalize leading-4 lg:leading-9 ml-1">
              Every year, without exception
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryRecognition;
