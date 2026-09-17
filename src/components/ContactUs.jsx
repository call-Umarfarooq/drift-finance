"use client";
import React, { useState } from "react";
import Script from "next/script";
import { triggerEmail } from "@/utils/emailHelper";

const ContactUs = () => {
  return (
    <section
      id="contact-form"
      className="w-full bg-neutral-100 flex justify-center pt-14 pb-16 lg:pt-20 lg:pb-24 px-6 lg:px-10"
    >
      <div className="w-full max-w-[1360px] flex flex-col justify-between items-center lg:items-start lg:gap-10">
        {/* Contact Info */}
        <div className="w-full lg:max-w-[400px] flex flex-col justify-start items-center lg:items-start gap-6 lg:gap-9">
          <div className="flex flex-col gap-2 lg:gap-4 items-center lg:items-start">
            <h2 className="text-P1-Navy text-2xl lg:text-5xl font-semibold font-inter text-center lg:text-left">
              Let us help you!
            </h2>
            <p className="text-P1-Navy text-[10px] lg:text-base font-normal font-inter leading-4 lg:leading-6 text-center lg:text-left max-w-[280px] lg:max-w-none">
              Ready to start your mortgage journey with Drift Financial?
              <br />
              Contact us today to schedule a consultation.
            </p>
          </div>

          <div className="flex flex-col justify-start items-center lg:items-start gap-3 lg:gap-4 w-full">
            <h3 className="text-P1-Navy text-xl font-bold font-inter leading-6 text-center lg:text-left">
              Contact Us:
            </h3>
            <div className="flex flex-col justify-start items-center lg:items-start gap-3 w-full">
              <a
                href="tel:888-338-5504"
                className="text-P1-Navy text-base font-normal font-inter leading-6 hover:opacity-80 transition-opacity text-center lg:text-left"
              >
                888-338-5504
              </a>
              <a
                href="mailto:Drift@driftfinancial.com"
                onClick={triggerEmail}
                className="text-P1-Navy text-base font-normal font-inter leading-6 hover:opacity-80 transition-opacity text-center lg:text-left"
              >
                Drift@driftfinancial.com
              </a>
              <span className="text-P1-Navy text-base font-normal font-inter leading-6 text-center lg:text-left">
                NMLS #2822905 · Equal Housing Lender
              </span>
              <address className="text-P1-Navy text-base font-normal font-inter leading-6 not-italic text-center lg:text-left">
                209 W Sixth St,
                <br />
                Royal Oak MI, 48067
              </address>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1 lg:mt-2">
              <a
                href="https://www.facebook.com/DriftMortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors"
              >
                <img
                  src="/asstes/facebook.svg"
                  alt="Facebook"
                  className="w-4 h-4 brightness-0 invert"
                />
              </a>
              <a
                href="https://www.instagram.com/driftmortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/driftmortgage/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-P2-Gold flex justify-center items-center hover:bg-opacity-90 transition-colors"
              >
                <img
                  src="/asstes/linkdin.svg"
                  alt="LinkedIn"
                  className="w-4 h-4 brightness-0 invert"
                />
              </a>
            </div>
          </div>
        </div>

        {/* GHL Form Embed */}
        <div className="w-full lg:max-w-[712px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/pSIJZoYOoM2ISHNZNzAC"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "0px",
            }}
            id="inline-pSIJZoYOoM2ISHNZNzAC"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Homepage - Contact Us"
            data-height="621"
            data-layout-iframe-id="inline-pSIJZoYOoM2ISHNZNzAC"
            data-form-id="pSIJZoYOoM2ISHNZNzAC"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Homepage - Contact Us"
          />
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
