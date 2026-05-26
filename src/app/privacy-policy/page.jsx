import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Drift Financial to understand how we collect, use, protect, and safeguard your personal and financial information.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "information-we-collect", label: "Information We Collect" },
    { id: "how-we-use", label: "How We Use Your Information" },
    { id: "information-sharing", label: "Information Sharing" },
    { id: "text-calls", label: "Text & Telephone" },
    { id: "email-communications", label: "Email Communications" },
    { id: "cookies", label: "Cookies & Tracking" },
    { id: "data-security", label: "Data Security" },
    { id: "retention", label: "Retention of Information" },
    { id: "consumer-rights", label: "Consumer Rights" },
    { id: "contact-information", label: "Contact Information" },
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
              Privacy <span className="text-P2-Gold font-playfair italic font-normal">Policy</span>
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
            
            {/* Introduction */}
            <section id="introduction" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">01.</span> Introduction
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Drift Financial (“Drift Financial,” “we,” “our,” or “us”) is committed to protecting the privacy and security of the personal information entrusted to us. This Privacy Policy explains how we collect, use, disclose, and safeguard information obtained through our website, mortgage services, communications, and related business activities.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                By using our website or providing your information to us, you consent to the practices described in this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section id="information-we-collect" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">02.</span> Information We Collect
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                We may collect the following categories of information:
              </p>
              
              <div className="flex flex-col gap-5 mt-2">
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 flex flex-col gap-3">
                  <h4 className="text-P1-Navy text-sm lg:text-base font-bold uppercase tracking-wider flex items-center gap-2">
                    👤 Personal Information
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-neutral-600 text-xs lg:text-sm pl-4 list-disc">
                    <li>Name</li>
                    <li>Address</li>
                    <li>Email address</li>
                    <li>Telephone number</li>
                    <li>Date of birth</li>
                    <li>Social Security Number</li>
                    <li>Driver’s license or government ID</li>
                    <li>Employment information</li>
                    <li>Income and asset information</li>
                    <li>Credit and financial information</li>
                    <li>Mortgage and property information</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 flex flex-col gap-3">
                  <h4 className="text-P1-Navy text-sm lg:text-base font-bold uppercase tracking-wider flex items-center gap-2">
                    💻 Technical Information
                  </h4>
                  <p className="text-neutral-600 text-xs lg:text-sm">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-neutral-600 text-xs lg:text-sm pl-4 list-disc">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Website usage data</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section id="how-we-use" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">03.</span> How We Use Your Information
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                We may use your information to:
              </p>
              <ul className="flex flex-col gap-2 text-neutral-600 text-sm lg:text-base pl-5 list-disc">
                <li>Evaluate and process mortgage applications</li>
                <li>Verify identity and prevent fraud</li>
                <li>Communicate regarding loan products and services</li>
                <li>Respond to inquiries and customer service requests</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our website and customer experience</li>
                <li>Provide updates, promotions, and marketing communications where permitted by law</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section id="information-sharing" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">04.</span> Information Sharing
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                We may share your information with:
              </p>
              <ul className="flex flex-col gap-2 text-neutral-600 text-sm lg:text-base pl-5 list-disc">
                <li>Mortgage lenders and investors</li>
                <li>Credit reporting agencies</li>
                <li>Loan processing and underwriting providers</li>
                <li>Title companies</li>
                <li>Appraisal companies</li>
                <li>Compliance and regulatory agencies</li>
                <li>Technology service providers assisting in our operations</li>
              </ul>
              <div className="bg-P2-Gold/10 border border-P2-Gold/20 rounded-2xl p-5 mt-2 flex items-start gap-4">
                <div className="text-2xl select-none">🛡️</div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-P1-Navy text-sm lg:text-base font-bold uppercase tracking-wider">
                    Our Commitment
                  </h4>
                  <p className="text-neutral-700 text-xs lg:text-sm font-semibold leading-relaxed">
                    We do not sell personal information to third parties for monetary compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* Text Messages and Telephone Communications */}
            <section id="text-calls" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">05.</span> Text Messages and Telephone Communications
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                By providing your telephone number, you expressly consent to receive calls and text messages from Drift Financial regarding your mortgage inquiry, application, loan status, account information, and related services.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                These communications may be sent using automated technology, including automatic telephone dialing systems and prerecorded messages where permitted by law.
              </p>

              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 lg:p-6 flex flex-col gap-4 mt-2">
                <h4 className="text-P1-Navy text-sm lg:text-base font-bold uppercase tracking-wider border-b border-neutral-200 pb-2">
                  📱 Text Message Opt-Out & Assistance
                </h4>
                <p className="text-neutral-600 text-xs lg:text-sm leading-relaxed">
                  You may opt out of receiving text messages at any time by replying:
                </p>
                <div className="flex items-center justify-center p-3 bg-white border border-neutral-200 rounded-xl max-w-[200px] mx-auto select-all cursor-pointer shadow-sm">
                  <span className="text-P1-Navy font-mono font-black tracking-widest text-lg lg:text-xl">STOP</span>
                </div>
                <p className="text-neutral-600 text-xs lg:text-sm leading-relaxed">
                  After opting out, you may receive a confirmation message confirming your opt-out request. Message and data rates may apply.
                </p>
                <p className="text-neutral-600 text-xs lg:text-sm leading-relaxed">
                  For assistance, reply <span className="font-mono font-bold text-neutral-800">HELP</span> or contact us directly at:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-600 text-xs lg:text-sm font-semibold mt-1">
                  <span className="flex items-center gap-2">📞 Phone: <a href="tel:888-338-2952" className="text-P2-Gold hover:underline">888-338-2952</a></span>
                  <span className="flex items-center gap-2">✉️ Email: <a href="mailto:Drift@Driftfinancial.com" className="text-P2-Gold hover:underline">Drift@Driftfinancial.com</a></span>
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 flex flex-col gap-3">
                <h4 className="text-P1-Navy text-sm lg:text-base font-bold uppercase tracking-wider">
                  📞 Call Opt-Out
                </h4>
                <p className="text-neutral-600 text-xs lg:text-sm leading-relaxed text-justify">
                  You may request that we stop non-essential telephone communications by contacting us using the information provided below.
                </p>
                <p className="text-neutral-500 text-[11px] lg:text-xs italic leading-relaxed text-justify">
                  Please note that we may continue to contact you regarding active transactions, legal notices, servicing matters, or other communications required by law.
                </p>
              </div>
            </section>

            {/* Email Communications */}
            <section id="email-communications" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">06.</span> Email Communications
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                You may opt out of marketing emails by clicking the “unsubscribe” link included in marketing communications or by contacting us directly.
              </p>
              <p className="text-neutral-500 text-[11px] lg:text-xs italic leading-relaxed text-justify">
                Operational, transactional, and legally required communications may still be sent.
              </p>
            </section>

            {/* Cookies and Tracking Technologies */}
            <section id="cookies" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">07.</span> Cookies and Tracking Technologies
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                Our website may use cookies and similar technologies to:
              </p>
              <ul className="flex flex-col gap-2 text-neutral-600 text-sm lg:text-base pl-5 list-disc">
                <li>Improve website functionality</li>
                <li>Analyze website traffic</li>
                <li>Enhance user experience</li>
                <li>Support marketing efforts</li>
              </ul>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed mt-2 text-justify">
                Most browsers allow you to manage cookie preferences through browser settings.
              </p>
            </section>

            {/* Data Security */}
            <section id="data-security" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">08.</span> Data Security
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                We maintain administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction.
              </p>
              <p className="text-neutral-500 text-[11px] lg:text-xs italic leading-relaxed text-justify">
                While we take reasonable precautions, no method of transmission over the Internet or electronic storage is completely secure.
              </p>
            </section>

            {/* Retention of Information */}
            <section id="retention" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">09.</span> Retention of Information
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                We retain personal information for as long as necessary to provide services, comply with legal obligations, resolve disputes, enforce agreements, and satisfy regulatory requirements applicable to mortgage lending activities.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
              </p>
            </section>

            {/* Consumer Rights */}
            <section id="consumer-rights" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">10.</span> Consumer Rights & Children's Privacy
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Depending on your state of residence, you may have rights regarding your personal information, including rights to access, correct, delete, or limit the use of certain information. To exercise any applicable privacy rights, please contact us using the details below.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                Our services are not intended for individuals under the age of 18, and we do not knowingly collect personal information from children.
              </p>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date.
              </p>
            </section>

            {/* Contact Information */}
            <section id="contact-information" className="flex flex-col gap-4 scroll-mt-6">
              <h2 className="text-P1-Navy text-xl lg:text-2xl font-bold font-inter border-b border-neutral-100 pb-2 flex items-center gap-3">
                <span className="text-P2-Gold font-mono text-base lg:text-lg">11.</span> Contact Information
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base leading-relaxed text-justify">
                If you have questions regarding this Privacy Policy or our privacy practices, please contact:
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

          </article>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
