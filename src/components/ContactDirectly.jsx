import React from 'react';

const ContactDirectly = () => {
  const contactInfo = [
    {
      label: 'Phone',
      value: '888-338-5504',
      link: 'tel:888-338-5504',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0F1C2E" className="w-5 h-5 lg:w-8 lg:h-8 shrink-0">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      ),
      isUnderline: true
    },
    {
      label: 'Email',
      value: 'Drift@driftfinancial.com',
      link: 'mailto:Drift@driftfinancial.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0F1C2E" className="w-6 h-4 lg:w-8 lg:h-5 shrink-0">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      isUnderline: true
    },
    {
      label: 'Office',
      value: '209 West Sixth Street, Royal Oak MI 48067',
      link: '#',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0F1C2E" className="w-4 h-5 lg:w-6 lg:h-8 shrink-0">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      isUnderline: false,
      isAddress: true
    },
    {
      label: 'Chat With Us',
      value: '248-955-2432',
      link: 'sms:2489552432',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0F1C2E" className="w-5 h-5 lg:w-8 lg:h-8 shrink-0">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      isUnderline: true
    }
  ];

  return (
    <section className="w-full bg-white flex justify-center  lg:py-0">
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-8 lg:gap-16">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 lg:gap-4 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-wide leading-4">
            Reach us directly
          </div>
          <div className="w-full max-w-[320px] lg:max-w-[1100px] text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            Always <span className="text-P2-Gold font-playfair italic">Reachable</span>
          </div>
          <div className="text-neutral-600 opacity-70 text-[10px] lg:text-lg font-medium font-inter mt-1 lg:mt-2 max-w-[280px] lg:max-w-none">
            Our principals pick up — no gatekeepers, no call centers.
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="w-full h-28 lg:h-auto p-7 lg:p-12 bg-neutral-300 lg:bg-neutral-200 rounded-3xl flex flex-col justify-center items-start gap-1 lg:gap-3 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
              <div className="flex justify-start items-center gap-4 w-full">
                {item.icon}
                <div className="text-P1-Navy text-2xl lg:text-3xl font-semibold font-inter leading-9">
                  {item.label}
                </div>
              </div>
              
              {item.isHours ? (
                item.value
              ) : (
                <div className={`text-P1-Navy ${item.isAddress ? 'text-base lg:text-[28px]' : 'text-2xl lg:text-4xl'} font-semibold lg:font-bold font-inter leading-6 lg:leading-tight mt-0 lg:mt-2 ${item.isUnderline ? 'underline underline-offset-4 decoration-2 decoration-P1-Navy' : ''} break-all lg:break-normal`}>
                  {item.link !== '#' ? (
                    <a href={item.link} className="hover:text-P2-Gold hover:decoration-P2-Gold transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactDirectly;
