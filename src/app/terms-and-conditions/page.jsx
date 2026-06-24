import React from 'react';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
  title: "Terms & Conditions · Drift Financial",
  description: "Read the Terms & Conditions and TCPA & Text Messaging Consent Disclosure of Drift Financial.",
};

export default function TermsAndConditionsPage() {
  const sections = [
    { id: "consent", label: "Consent to Contact" },
    { id: "sms-consent", label: "SMS Consent Communication" },
    { id: "types-sms", label: "Types of SMS Communications" },
    { id: "opt-in", label: "Opt-In Method" },
    { id: "no-condition", label: "No Condition of Purchase" },
    { id: "frequency", label: "Message Frequency" },
    { id: "rates", label: "Message & Data Rates" },
    { id: "opt-out", label: "Opting Out" },
    { id: "assistance", label: "Assistance & Help" },
    { id: "disclosures", label: "Standard Messaging Disclosures" },
    { id: "revocation", label: "Consent Revocation" },
    { id: "disclaimer", label: "Carrier Disclaimer" },
    { id: "record", label: "Record of Consent" },
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
              Effective Date: May 1, 2026
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
                TCPA & Text Messaging Consent Disclosure
              </h2>
              <p className="text-neutral-500 text-sm mt-2 font-medium">
                Drift Financial Policy and Disclosures
              </p>
            </div>

            {/* Consent to Contact */}
            <section id="consent" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">01.</span> Consent to Contact
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                By providing your phone number to Drift Financial through our website, online forms, loan applications, advertisements, social media platforms, or any other communication channel, you expressly consent to receive communications from Drift Financial, its employees, agents, and service providers.
              </p>

              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 flex flex-col gap-3 mt-2">
                <h4 className="text-P1-Navy text-sm lg:text-base font-bold uppercase tracking-wider">
                  📢 Communication Formats
                </h4>
                <p className="text-neutral-600 text-xs lg:text-sm">
                  These communications may include:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-neutral-600 text-xs lg:text-sm pl-4 list-disc">
                  <li>Phone calls</li>
                  <li>Text messages (SMS and MMS)</li>
                  <li>Artificial or prerecorded voice messages</li>
                  <li>Emails</li>
                  <li>Other electronic communications</li>
                </ul>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 flex flex-col gap-3">
                <h4 className="text-P1-Navy text-sm lg:text-base font-bold uppercase tracking-wider">
                  📝 Topics Covered
                </h4>
                <p className="text-neutral-600 text-xs lg:text-sm">
                  Communications may relate to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-neutral-600 text-xs lg:text-sm pl-4 list-disc">
                  <li>Mortgage loan inquiries</li>
                  <li>Loan applications</li>
                  <li>Loan status updates</li>
                  <li>Mortgage products and services</li>
                  <li>Appointment scheduling</li>
                  <li>Customer service</li>
                  <li>Promotional and marketing offers</li>
                </ul>
              </div>

              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Communications may be made using automated technology, including an automatic telephone dialing system (ATDS), where permitted by applicable law.
              </p>
            </section>

            {/* SMS Consent Communication */}
            <section id="sms-consent" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">02.</span> SMS Consent Communication
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.
              </p>
            </section>

            {/* Types of SMS Communications */}
            <section id="types-sms" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">03.</span> Types of SMS Communications
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                If you have consented to receive text messages from Drift Financial, you may receive messages related to the following specific examples:
              </p>
              <ul className="flex flex-col gap-2 text-neutral-600 text-sm lg:text-base pl-5 list-disc">
                <li>Appointment reminders</li>
                <li>Follow-up messages</li>
                <li>Conversations (external)</li>
              </ul>
            </section>

            {/* Opt-In Method */}
            <section id="opt-in" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">04.</span> Opt-In Method
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                You may opt in to receive SMS messages from Drift Financial in the following ways:
              </p>
              <ul className="flex flex-col gap-2 text-neutral-600 text-sm lg:text-base pl-5 list-disc">
                <li>By submitting an online form</li>
              </ul>
            </section>

            {/* No Condition of Purchase */}
            <section id="no-condition" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">05.</span> No Condition of Purchase
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Your consent to receive calls or text messages is not required as a condition of obtaining any product or service from Drift Financial.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                You may obtain information about our services without providing consent to receive automated communications by contacting us directly.
              </p>
            </section>

            {/* Message Frequency */}
            <section id="frequency" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">06.</span> Message Frequency
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Message frequency may vary depending on your interaction with Drift Financial, the status of your loan transaction, and your communication preferences.
              </p>
            </section>

            {/* Message and Data Rates */}
            <section id="rates" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">07.</span> Message and Data Rates
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Message and data rates may apply according to your wireless carrier’s terms and conditions.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Drift Financial is not responsible for any charges imposed by your mobile carrier.
              </p>
            </section>

            {/* Opting Out of Text Messages */}
            <section id="opt-out" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">08.</span> Opting Out of Text Messages
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                You may opt out of receiving text messages at any time by replying:
              </p>
              <div className="flex items-center justify-center p-3 bg-neutral-50 border border-neutral-200 rounded-xl max-w-[200px] mx-auto select-all cursor-pointer shadow-sm">
                <span className="text-P1-Navy font-mono font-black tracking-widest text-lg lg:text-xl">STOP</span>
              </div>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                to any text message received from Drift Financial.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Upon receipt of your opt-out request, we will make reasonable efforts to discontinue future text messages, except where required for legal, compliance, or active transaction purposes.
              </p>
              <p className="text-neutral-500 text-xs italic leading-relaxed text-justify">
                You may receive a final confirmation message confirming your opt-out request.
              </p>
            </section>

            {/* Assistance */}
            <section id="assistance" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">09.</span> Assistance & Help
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                For help regarding our text messaging program, reply:
              </p>
              <div className="flex items-center justify-center p-3 bg-neutral-50 border border-neutral-200 rounded-xl max-w-[200px] mx-auto select-all cursor-pointer shadow-sm">
                <span className="text-P1-Navy font-mono font-black tracking-widest text-lg lg:text-xl">HELP</span>
              </div>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                or contact us directly:
              </p>

              <div className="bg-gradient-to-br from-P1-Navy to-neutral-900 text-white rounded-2xl p-6 lg:p-8 flex flex-col gap-4 shadow-md relative overflow-hidden select-none mt-2">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                <h4 className="text-P2-Gold text-base lg:text-lg font-bold tracking-wider uppercase">
                  Drift Financial
                </h4>
                <div className="flex flex-col gap-3 text-neutral-300 text-xs lg:text-sm">
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

            {/* Standard Messaging Disclosures */}
            <section id="disclosures" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">10.</span> Standard Messaging Disclosures
              </h2>
              <ul className="flex flex-col gap-2 text-neutral-600 text-sm lg:text-base pl-5 list-disc">
                <li>Message and data rates may apply.</li>
                <li>You can opt out at any time by texting &quot;STOP.&quot;</li>
                <li>For assistance, text &quot;HELP&quot; or visit our <Link href="/privacy-policy" className="underline hover:text-P2-Gold transition-colors">Privacy Policy</Link> and <Link href="/terms-and-conditions" className="underline hover:text-P2-Gold transition-colors">Terms of Service</Link>.</li>
                <li>Message frequency may vary.</li>
              </ul>
            </section>

            {/* Consent Revocation */}
            <section id="revocation" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">11.</span> Consent Revocation
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                You may revoke your consent to receive automated communications at any time by:
              </p>
              <ul className="flex flex-col gap-2 text-neutral-600 text-sm lg:text-base pl-5 list-disc">
                <li>Replying STOP to a text message</li>
                <li>Contacting Drift Financial directly</li>
                <li>Submitting a written request using our contact information</li>
              </ul>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Revoking consent does not affect communications that are legally required or necessary to service an active loan transaction.
              </p>
            </section>

            {/* Wireless Carrier Disclaimer */}
            <section id="disclaimer" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">12.</span> Wireless Carrier Disclaimer
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Wireless carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            {/* Record of Consent */}
            <section id="record" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">13.</span> Record of Consent
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Drift Financial may maintain records of consent, including the date, time, source, and method by which consent was provided, for compliance and regulatory purposes.
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
