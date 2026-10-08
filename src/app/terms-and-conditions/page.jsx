import React from 'react';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
  title: "SMS Terms & Conditions · Drift Financial",
  description: "Drift Financial SMS Terms & Conditions for the Drift Financial Customer Care Texts program.",
};

export default function TermsAndConditionsPage() {
  const sections = [
    { id: "program", label: "Program Description" },
    { id: "opt-in", label: "How to Opt In" },
    { id: "types-sms", label: "Types of Messages" },
    { id: "frequency", label: "Message Frequency" },
    { id: "rates", label: "Message & Data Rates" },
    { id: "opt-out", label: "Opting Out" },
    { id: "assistance", label: "Help" },
    { id: "privacy", label: "Privacy" },
    { id: "disclaimer", label: "Carrier Disclaimer" },
    { id: "record", label: "Record of Consent" },
    { id: "changes", label: "Changes" },
  ];

  return (
    <main className="w-full min-h-screen bg-neutral-50 font-inter">
      <TopBar />

      {/* Hero Section */}
      <section className="w-full bg-P1-Navy rounded-b-3xl lg:rounded-b-[40px] pb-16 lg:pb-24 flex justify-center">
        <div className="w-full max-w-[1360px] mx-auto">
          <div className="w-full mt-2 lg:mt-4">
            <Header darkMode />
          </div>

          <div className="w-full flex flex-col items-center gap-6 lg:gap-8 px-6 lg:px-10 mt-10 lg:mt-16 text-center">
            {/* Badge */}
            <div className="px-4 py-1.5 lg:px-6 lg:py-2.5 rounded-[80px] outline outline-1 outline-offset-[-1px] outline-P2-Gold inline-flex justify-center items-center">
              <span className="text-center text-white text-[10px] lg:text-sm font-semibold tracking-wider uppercase font-inter leading-none">
                Drift Financial · Legal
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white text-3xl lg:text-6xl font-semibold font-inter capitalize leading-tight">
              Terms & <span className="text-P2-Gold font-playfair italic font-normal">Conditions</span>
            </h1>

            {/* Effective Date */}
            <p className="text-P2-Gold text-xs lg:text-base font-semibold font-inter uppercase tracking-widest mt-2">
              Effective Date: May 1, 2026 · Last Updated: October 8, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 lg:py-20 flex justify-center px-6 lg:px-10">
        <div className="w-full max-w-[1360px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Sticky Sidebar Navigation (lg:col-span-4) */}
          <aside className="lg:col-span-4 sticky top-6 bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm hidden lg:flex flex-col gap-6">
            <h3 className="text-P1-Navy text-base font-bold uppercase tracking-wider border-b border-neutral-100 pb-3">
              Document Sections
            </h3>
            <nav className="flex flex-col gap-2.5">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-neutral-500 hover:text-P2-Gold text-sm font-semibold transition-all duration-200 pl-3 border-l-2 border-transparent hover:border-P2-Gold hover:pl-4 flex items-center gap-2"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy Document (lg:col-span-8) */}
          <article className="lg:col-span-8 bg-white border border-neutral-200 rounded-3xl p-6 lg:p-12 shadow-sm flex flex-col gap-10">

            <div className="text-center lg:text-left border-b border-neutral-100 pb-6">
              <h2 className="text-P1-Navy text-xl lg:text-3xl font-bold font-inter leading-tight">
                Drift Financial SMS Terms &amp; Conditions
              </h2>
              <p className="text-neutral-500 text-sm mt-2 font-medium">
                Drift Financial Customer Care Texts
              </p>
            </div>

            <div className="bg-P2-Gold/10 border border-P2-Gold/20 rounded-2xl p-5 flex flex-col gap-2">
              <h4 className="text-P1-Navy text-sm lg:text-base font-bold uppercase tracking-wider">
                Summary
              </h4>
              <p className="text-neutral-700 text-xs lg:text-sm leading-relaxed">
                By opting in to Drift Financial Customer Care Texts, you agree to receive recurring conversational text messages from Drift Financial about your inquiry. Message frequency varies. Message and data rates may apply. Reply <strong className="text-neutral-900">STOP</strong> to cancel or <strong className="text-neutral-900">HELP</strong> for help. Support: <a href="tel:888-338-2952" className="text-P2-Gold font-semibold hover:underline">888-338-2952</a> or <a href="mailto:Drift@Driftfinancial.com" className="text-P2-Gold font-semibold hover:underline">Drift@Driftfinancial.com</a>. Carriers are not liable for delayed or undelivered messages. See our <Link href="/privacy-policy" className="text-P2-Gold font-semibold hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            <section id="program" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">01.</span> Program Description
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                <strong className="text-neutral-800">Program name:</strong> Drift Financial Customer Care Texts.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Drift Financial sends text messages only in connection with an inquiry you have made. We do not send loan offers, rate promotions, or marketing by text.
              </p>
            </section>

            <section id="opt-in" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">02.</span> How to Opt In
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Check the optional SMS consent box (unchecked by default) on our contact form at <Link href="/contact" className="text-P2-Gold font-semibold hover:underline">https://www.driftfinancial.com/contact</Link> and submit the form. The SMS box is separate from email and phone-call consent.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Entering a phone number does not, by itself, create SMS consent. SMS consent is not a condition of any purchase or service.
              </p>
            </section>

            <section id="types-sms" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">03.</span> Types of Messages
              </h2>
              <ul className="flex flex-col gap-2 text-neutral-600 text-sm lg:text-base pl-5 list-disc">
                <li>Replies to questions you send us</li>
                <li>Appointment scheduling and reminders</li>
                <li>Follow-ups on an inquiry you submitted</li>
                <li>Updates on a request or application you have already submitted, including document requests</li>
              </ul>
            </section>

            <section id="frequency" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">04.</span> Message Frequency
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Message frequency varies based on your inquiry and appointments.
              </p>
            </section>

            <section id="rates" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">05.</span> Message and Data Rates
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Message and data rates may apply according to your wireless carrier&rsquo;s plan. Drift Financial is not responsible for charges imposed by your mobile carrier.
              </p>
            </section>

            <section id="opt-out" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">06.</span> Opting Out
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Reply <strong className="text-neutral-800">STOP</strong>, END, CANCEL, UNSUBSCRIBE, or QUIT to any message to opt out:
              </p>
              <div className="flex items-center justify-center p-3 bg-neutral-50 border border-neutral-200 rounded-xl max-w-[200px] mx-auto select-all cursor-pointer shadow-sm">
                <span className="text-P1-Navy font-mono font-black tracking-widest text-lg lg:text-xl">STOP</span>
              </div>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                You will receive one final message confirming your opt-out, and no further text messages will be sent. You may also revoke consent by any reasonable means, including calling or emailing us. To re-subscribe, reply <strong className="text-neutral-800">START</strong>.
              </p>
            </section>

            <section id="assistance" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">07.</span> Help
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Reply <strong className="text-neutral-800">HELP</strong> to any message for help, or contact Drift Financial support:
              </p>
              <div className="bg-gradient-to-br from-P1-Navy to-neutral-900 text-white rounded-2xl p-6 lg:p-8 flex flex-col gap-4 shadow-md relative overflow-hidden select-none mt-2">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                <h4 className="text-P2-Gold text-base lg:text-lg font-bold tracking-wider uppercase">
                  Drift Financial
                </h4>
                <div className="flex flex-col gap-3 text-neutral-300 text-xs lg:text-sm">
                  <div className="flex items-start gap-2.5">
                    <span className="text-base">📍</span>
                    <span>209 W Sixth St, Royal Oak MI 48067</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📞</span>
                    <a href="tel:888-338-2952" className="hover:text-white hover:underline text-white font-semibold">888-338-2952</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">✉️</span>
                    <a href="mailto:Drift@Driftfinancial.com" className="hover:text-white hover:underline text-white font-semibold">Drift@Driftfinancial.com</a>
                  </div>
                </div>
              </div>
            </section>

            <section id="privacy" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">08.</span> Privacy
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties. Subcontractors that deliver our messages are the only exception, and they use it only to provide the service.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                See our <Link href="/privacy-policy" className="text-P2-Gold font-semibold hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section id="disclaimer" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">09.</span> Carrier Disclaimer
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Carriers (including T-Mobile, AT&amp;T, and Verizon) are not liable for delayed or undelivered messages.
              </p>
            </section>

            <section id="record" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">10.</span> Record of Consent
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Drift Financial may keep records of consent, including the date, time, source, and method by which consent was given, for compliance and regulatory purposes.
              </p>
            </section>

            <section id="changes" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">11.</span> Changes
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                We may update these terms. Changes will be posted on this page with an updated effective date.
              </p>
            </section>

          </article>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
