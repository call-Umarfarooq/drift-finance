"use client";
import React from "react";
import Script from "next/script";

const CareersApplyForm = () => {
  return (
    <section
      id="apply-form"
      className="w-full bg-white flex justify-center scroll-mt-24"
    >
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-8 lg:gap-16">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 lg:gap-4 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-wide leading-4">
            Apply now
          </div>
          <div className="w-full max-w-[320px] lg:max-w-[1100px] text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            Fill Out The Form Below And We'll Be{" "}
            <br className="hidden lg:block" />
            In Touch Within 3{" "}
            <span className="text-P2-Gold font-playfair italic">
              Business
            </span>{" "}
            Days.
          </div>
        </div>

        {/* GHL Form Embed */}
        <div className="w-full lg:max-w-[1360px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/RYWoLiuiGR3A8bhutxJF"
            style={{
              width: "100%",
              height: "1040px",
              border: "none",
              borderRadius: "0px",
            }}
            id="inline-RYWoLiuiGR3A8bhutxJF"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Apply Now"
            data-height="1035"
            data-layout-iframe-id="inline-RYWoLiuiGR3A8bhutxJF"
            data-form-id="RYWoLiuiGR3A8bhutxJF"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Apply Now"
          />
        </div>
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
};

export default CareersApplyForm;
