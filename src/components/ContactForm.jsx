"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const ContactForm = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("scroll") === "form") {
      const scrollToForm = () => {
        const el = document.getElementById("contact-form");
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 20;
          window.scrollTo({ top, behavior: "smooth" });
          return true;
        }
        return false;
      };
      if (!scrollToForm()) {
        const interval = setInterval(() => {
          if (scrollToForm()) clearInterval(interval);
        }, 100);
        setTimeout(() => clearInterval(interval), 3000);
      }
    }
  }, []);

  return (
    <section
      id="contact-form"
      className="w-full bg-white flex justify-center scroll-mt-24"
    >
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-8 lg:gap-16">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 lg:gap-4 text-center">
          <div className="text-P2-Gold text-[10px] lg:text-xl font-semibold font-inter uppercase tracking-wide leading-4">
            Send a message
          </div>

          <div className="w-full max-w-[320px] lg:max-w-[1100px] text-P1-Navy text-2xl lg:text-6xl font-semibold font-inter capitalize leading-7 lg:leading-[1.2]">
            <span className="text-P2-Gold font-playfair "> Real </span>People.{" "}
            <span className="text-P2-Gold font-playfair "> Real </span> Time
          </div>
          <div className="text-neutral-600 text-[10px] lg:text-lg font-medium font-inter mt-1 lg:mt-2 max-w-[280px] lg:max-w-none">
            One of our principals personally replies — no hand-offs, no
            automated responses.
          </div>
        </div>

        {/* GHL Form Embed */}
        <div className="w-full lg:max-w-[1360px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/QBR4eXu3ZuqnHm4rE3Io"
            style={{
              width: "100%",
              height: "948px",
              border: "none",
              borderRadius: "0px",
            }}
            id="inline-QBR4eXu3ZuqnHm4rE3Io"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Us- Send a Message"
            data-height="948"
            data-layout-iframe-id="inline-QBR4eXu3ZuqnHm4rE3Io"
            data-form-id="QBR4eXu3ZuqnHm4rE3Io"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Contact Us- Send a Message"
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

export default ContactForm;
