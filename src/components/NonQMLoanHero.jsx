import Link from 'next/link';
import React from 'react';
import Header from './Header';

const NonQMLoanHero = () => {
  return (
    <section className="w-full bg-P1-Navy rounded-bl-3xl rounded-br-3xl lg:rounded-b-[48px] pb-16 lg:pb-24 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1360px]">
        {/* Header flush with top */}
        <Header darkMode />
      </div>

      <div className="w-full flex flex-col items-center gap-7 lg:gap-6 px-6 lg:px-10 mt-6 lg:mt-12">
        
        {/* Badge */}
        <div className="px-4 lg:px-1.5 py-2 lg:py-3 rounded-[80px] outline outline-1 outline-offset-[-1px] outline-P2-Gold inline-flex justify-center items-center lg:w-56">
          <span className="text-center text-white text-[10px] lg:text-2xl font-semibold font-inter uppercase lg:capitalize tracking-wide lg:leading-9">
            Loan programs
          </span>
        </div>

        {/* Heading Section */}
        <div className="w-full max-w-[942px] flex flex-col items-center text-center">
          <h1 className="flex flex-col items-center">
            {/* Desktop: 2 lines | Mobile: 4 lines */}
            <span className="hidden lg:block">
              <span className="text-white text-6xl font-semibold font-inter capitalize leading-[75px]">
                Non-QM loans with real
              </span>
            </span>
            <span className="hidden lg:block">
              <span className="text-P2-Gold text-6xl font-semibold font-playfair italic capitalize leading-[75px]">
                expertise
              </span>
              <span className="text-white text-6xl font-semibold font-inter capitalize leading-[75px]">
                {' '}behind them.
              </span>
            </span>

            {/* Mobile View Heading */}
            <span className="lg:hidden flex flex-col items-center">
              <span className="text-white text-2xl font-semibold font-inter capitalize leading-8">
                Non-QM Loans
              </span>
              <span className="text-white text-2xl font-semibold font-inter capitalize leading-8">
                With Real
              </span>
              <span className="text-P2-Gold text-3xl font-medium font-playfair italic capitalize leading-9 mt-1">
                Expertise
              </span>
              <span className="text-white text-2xl font-semibold font-inter capitalize leading-8">
                Behind Them.
              </span>
            </span>
          </h1>

          {/* Underline - Desktop */}
          <div className="mt-1 hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="490" height="12" viewBox="0 0 490 12" fill="none">
              <path d="M330.072 2.85301C330.256 3.14457 330.105 3.39126 329.585 3.44359C328.283 3.57442 326.967 3.69404 325.645 3.7202C322.771 3.77253 319.89 3.76133 317.246 3.77628C316.542 4.07158 316.621 4.26222 317.272 4.33324C317.923 4.40426 318.594 4.41921 319.259 4.41921C343.944 4.4678 368.637 4.49771 393.322 4.56873C395.98 4.57621 398.637 4.76686 401.281 4.95002C404.386 5.16308 407.471 5.27896 410.582 4.95376C411.885 4.81919 413.246 4.67339 414.548 4.74441C426.303 5.38734 438.083 5.25279 449.857 5.27148C451.166 5.27522 452.475 5.42472 453.777 5.53312C453.876 5.5406 454.001 5.73874 453.994 5.8434C453.988 5.95181 453.883 6.12 453.738 6.1499C452.929 6.32558 452.087 6.62465 451.278 6.59849C448.838 6.51999 446.43 6.38538 444.029 6.84142C443.227 6.99468 442.266 6.88257 441.378 6.87884C434.709 6.87136 428.039 6.85265 421.369 6.85639C411.582 6.86012 401.801 6.8788 392.014 6.88627C388.679 6.89001 385.357 6.94238 382.035 7.20404C379.621 7.39468 377.161 7.41335 374.721 7.42457C357.376 7.50307 340.024 7.5442 322.679 7.62643C317.351 7.6526 312.03 7.68249 306.695 7.98153C301.407 8.28057 296.046 8.20581 290.718 8.22076C265.361 8.27683 240.005 8.28804 214.655 8.35158C203.979 8.37775 193.304 8.52728 182.628 8.54597C171.506 8.56092 160.389 8.46373 149.267 8.45252C133.698 8.43757 118.128 8.44128 102.559 8.47492C99.6781 8.4824 96.797 8.65809 93.9095 8.76275C91.6928 8.84125 89.4762 8.97583 87.2596 9.00573C82.1488 9.07676 77.0313 9.08797 71.914 9.14778C69.4671 9.17768 66.994 9.13657 64.5866 9.33842C58.8443 9.82436 53.0626 9.84679 47.2874 9.95146C44.6235 10.0001 41.9726 10.172 39.3087 10.2916C32.4417 10.6056 25.647 11.2934 18.7537 11.4803C16.9843 11.5289 15.2282 11.7719 13.4588 11.8242C10.1371 11.9251 6.80214 12.0036 3.47387 11.9999C1.55978 11.9999 0.277157 11.1439 0.191648 10.0038C0.106139 8.87492 0.0534921 7.74228 0.000871201 6.61341C-0.0254392 6.04523 0.546852 5.61911 1.3559 5.40604C2.55302 5.09579 3.81589 4.80425 5.10511 4.68838C6.85475 4.53138 8.6505 4.565 10.4265 4.47903C13.5245 4.33324 16.6225 4.16876 19.7205 3.99681C20.8256 3.937 21.9241 3.80991 23.0291 3.76506C31.455 3.4249 39.8547 2.92777 48.2411 2.38576C51.326 2.18764 54.4569 2.225 57.5682 2.17267C63.3433 2.07922 69.1316 2.13531 74.8673 1.58956C76.6104 1.42509 78.4127 1.46993 80.1952 1.43629C87.5227 1.3092 94.8501 1.29426 102.178 0.890559C108.361 0.550401 114.622 0.595242 120.845 0.595242C143.978 0.591504 167.105 0.651332 190.239 0.662546C218.259 0.677498 246.286 0.681202 274.307 0.673726C283.424 0.669988 292.547 0.632646 301.663 0.572838C304.327 0.554148 306.985 0.404612 309.649 0.322376C310.754 0.288734 311.865 0.225172 312.97 0.258814C315.851 0.34105 318.732 0.550392 321.607 0.55413C324.251 0.557868 326.895 0.35226 329.539 0.255072C329.697 0.247596 330.033 0.415831 330.006 0.468163C329.921 0.673753 329.809 0.991494 329.566 1.04009C328.743 1.20456 327.862 1.34286 326.994 1.36155C324.33 1.4251 321.659 1.41385 318.989 1.46992C318.121 1.48861 317.233 1.58208 316.404 1.72787C316.16 1.76898 316.035 2.10539 315.963 2.32219C315.937 2.39695 316.206 2.57263 316.377 2.59506C317.233 2.69972 318.167 2.92026 318.963 2.82307C322.705 2.37451 326.395 2.59135 330.072 2.85301ZM306.899 2.52032C306.735 2.45304 306.57 2.32967 306.406 2.32594C302.65 2.28482 298.894 2.25118 295.132 2.23997C294.29 2.23623 293.441 2.32594 292.52 2.37827C293.073 3.11092 294.086 2.93895 294.875 2.96138C296.684 3.00623 298.375 3.06232 299.539 4.05663C299.789 4.2697 300.848 4.36315 301.354 4.25101C303.203 3.84731 304.979 3.33895 306.761 2.85301C306.873 2.81936 306.853 2.63246 306.899 2.52032ZM270.433 2.4119C269.907 2.4119 269.473 2.39696 269.038 2.41939C268.841 2.4306 268.539 2.47919 268.479 2.55769C268.302 2.79318 268.578 2.92776 269.157 2.98383C269.802 3.04364 270.433 3.15204 271.071 3.21558C271.623 3.27165 271.959 3.1371 271.946 2.85675C271.939 2.75956 271.755 2.62126 271.597 2.58388C271.189 2.49791 270.762 2.45676 270.433 2.4119Z" fill="#BC955C"/>
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row justify-center items-center gap-3 lg:gap-4 mt-4 lg:mt-8 w-full">
          <Link href="/contact" className="flex-1 lg:flex-none lg:w-56 px-4 lg:px-6 py-2.5 lg:py-3 bg-white rounded-[100px] flex justify-center items-center gap-1.5 lg:gap-1.5 hover:opacity-90 transition-opacity group h-10 lg:h-12 overflow-hidden">
            <span className="text-P1-Navy text-[11px] lg:text-base font-semibold font-inter whitespace-nowrap">Start My Application</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <path d="M1.5 16.5L16.5 1.5M16.5 1.5H5.25M16.5 1.5V12.75" stroke="#042538" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <Link href="/contact" className="flex-1 lg:flex-none lg:w-60 px-4 lg:px-6 py-2.5 lg:py-3 bg-transparent rounded-[100px] outline outline-1 outline-white flex justify-center items-center gap-1.5 lg:gap-1.5 hover:bg-white/10 transition-colors group h-10 lg:h-12 overflow-hidden">
            <span className="text-white text-[11px] lg:text-base font-semibold font-inter whitespace-nowrap">Talk To Our Experts</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <path d="M1.5 16.5L16.5 1.5M16.5 1.5H5.25M16.5 1.5V12.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NonQMLoanHero;
