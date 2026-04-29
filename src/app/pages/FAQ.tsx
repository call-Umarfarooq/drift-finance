import { useState } from 'react';

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('general');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'loans', label: 'Loans' },
    { id: 'rates', label: 'Rates' },
    { id: 'application', label: 'Application Process' },
    { id: 'account', label: 'Account' }
  ];

  const faqs = {
    general: [
      {
        id: 'g1',
        question: 'What is Drift Financial?',
        answer: 'Drift Financial is a licensed mortgage lender specializing in home purchase loans, home equity loans, refinancing, personal loans, and financial planning services. We are committed to providing transparent, client-focused lending solutions with competitive rates and exceptional service.'
      },
      {
        id: 'g2',
        question: 'How long has Drift Financial been in business?',
        answer: 'Drift Financial has been serving clients for over 15 years. In that time, we\'ve funded over $2 billion in loans and helped more than 50,000 clients achieve their financial goals.'
      },
      {
        id: 'g3',
        question: 'Is Drift Financial licensed?',
        answer: 'Yes, Drift Financial is a fully licensed mortgage lender. We comply with all federal and state lending regulations and are committed to ethical lending practices. Our NMLS number is available on our website and all loan documents.'
      },
      {
        id: 'g4',
        question: 'What areas do you serve?',
        answer: 'We serve clients across the United States with physical offices in New York, Los Angeles, and Chicago. Our digital platform allows us to assist clients nationwide regardless of their location.'
      }
    ],
    loans: [
      {
        id: 'l1',
        question: 'What types of loans do you offer?',
        answer: 'We offer home purchase loans, home equity loans (up to $750,000), refinancing options, personal loans, debt consolidation loans, and financial planning services. Each product is customizable to meet your unique needs.'
      },
      {
        id: 'l2',
        question: 'What is the maximum loan amount?',
        answer: 'For home equity loans, we offer up to $750,000. For home purchase and refinancing, loan amounts vary based on the property value, your creditworthiness, and other factors. Contact us to discuss your specific needs.'
      },
      {
        id: 'l3',
        question: 'Do you charge prepayment penalties?',
        answer: 'No, we do not charge prepayment penalties on our loans. You can pay off your loan early without any additional fees, potentially saving thousands in interest.'
      },
      {
        id: 'l4',
        question: 'What are the requirements to qualify?',
        answer: 'Requirements vary by loan type, but generally include: stable income, acceptable credit score (typically 620+), sufficient equity (for home equity loans), and debt-to-income ratio within acceptable limits. We\'ll work with you to find the best solution for your situation.'
      }
    ],
    rates: [
      {
        id: 'r1',
        question: 'What are your current interest rates?',
        answer: 'Interest rates vary based on loan type, loan amount, credit score, and market conditions. Home equity loan rates start as low as 5.99% APR. Contact us for a personalized rate quote based on your specific situation.'
      },
      {
        id: 'r2',
        question: 'How are interest rates determined?',
        answer: 'Rates are based on multiple factors including: credit score, loan-to-value ratio, loan amount, property type, and current market conditions. We offer competitive rates and will work to get you the best possible terms.'
      },
      {
        id: 'r3',
        question: 'Can I lock in my rate?',
        answer: 'Yes, once you\'re pre-approved, we can lock in your rate for a specified period (typically 30-60 days) to protect you from rate increases while you complete your transaction.'
      },
      {
        id: 'r4',
        question: 'Are there any hidden fees?',
        answer: 'No, we believe in complete transparency. All fees are disclosed upfront in your loan estimate. These may include origination fees, appraisal fees, and closing costs. We\'ll explain every charge before you commit.'
      }
    ],
    application: [
      {
        id: 'a1',
        question: 'How long does the application process take?',
        answer: 'Our online application takes just a few minutes to complete. Once submitted, you\'ll typically receive a pre-approval decision within 24 hours. The complete loan process from application to closing usually takes 15-30 days, depending on the loan type.'
      },
      {
        id: 'a2',
        question: 'What documents do I need to apply?',
        answer: 'Common documents include: government-issued ID, recent pay stubs, tax returns (2 years), bank statements (2 months), and information about the property. Your loan specialist will provide a complete checklist based on your specific loan type.'
      },
      {
        id: 'a3',
        question: 'Can I apply online?',
        answer: 'Yes! Our online application is secure, simple, and can be completed in minutes. You can also call us at (888) 555-DRIFT or visit one of our offices to apply in person.'
      },
      {
        id: 'a4',
        question: 'Will applying affect my credit score?',
        answer: 'Initially, we perform a soft credit inquiry which does not affect your score. Once you decide to move forward with a loan, we\'ll need to do a hard inquiry, which may have a small, temporary impact on your credit score.'
      },
      {
        id: 'a5',
        question: 'How quickly can I get funds?',
        answer: 'For home equity loans, funds can be available in as little as 15 days after approval. Personal loans may fund even faster. Home purchase and refinance timelines vary but typically close within 30 days.'
      }
    ],
    account: [
      {
        id: 'ac1',
        question: 'How do I make a payment?',
        answer: 'You can make payments through our mobile app, online portal, automatic bank transfer (ACH), by phone, or by mail. We recommend setting up automatic payments to ensure you never miss a due date.'
      },
      {
        id: 'ac2',
        question: 'Can I access my account online?',
        answer: 'Yes, our secure online portal and mobile app allow you to view your loan balance, make payments, download documents, and contact your loan specialist 24/7.'
      },
      {
        id: 'ac3',
        question: 'What if I have trouble making a payment?',
        answer: 'Contact us immediately if you\'re facing financial hardship. We have programs and options to help, including payment deferrals, loan modifications, and refinancing. The sooner you reach out, the more we can help.'
      },
      {
        id: 'ac4',
        question: 'How do I update my account information?',
        answer: 'Log into your online account to update contact information, payment methods, and preferences. For changes to loan terms or legal documents, contact your loan specialist directly.'
      }
    ]
  };

  const currentFAQs = faqs[selectedTab as keyof typeof faqs];

  const filteredFAQs = searchQuery
    ? currentFAQs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentFAQs;

  return (
    <>
      <section className="bg-[var(--drift-navy)] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl mb-6">
            Frequently Asked Questions
          </h1>
          <div className="h-1 w-32 bg-[var(--drift-gold)] mx-auto"></div>
          <p className="text-[var(--drift-silver)] text-lg mt-6 max-w-2xl mx-auto">
            Find answers to common questions about our services, loans, and processes.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 border-2 border-[var(--deep-navy)] rounded-2xl focus:border-[var(--drift-gold)] focus:ring-2 focus:ring-[var(--drift-gold)] focus:ring-opacity-50 outline-none transition-all text-lg"
            />
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--drift-silver)]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-white sticky top-[72px] z-40 border-b-2 border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedTab(tab.id);
                  setOpenFAQ(null);
                }}
                className={`px-6 py-2 transition-all ${
                  selectedTab === tab.id
                    ? 'text-[var(--drift-navy)] border-b-3 border-[var(--drift-gold)]'
                    : 'text-[var(--drift-silver)] hover:text-[var(--drift-navy)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-[var(--light-gold)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="w-full flex items-start justify-between py-6 text-left hover:bg-[var(--light-gold)]/20 transition-colors px-4 rounded-lg"
                >
                  <h4 className="text-[var(--drift-navy)] pr-4 flex-1">
                    {faq.question}
                  </h4>
                  <svg
                    className={`flex-shrink-0 text-[var(--drift-gold)] transition-transform duration-300 ${
                      openFAQ === faq.id ? 'rotate-90' : ''
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-6 text-[var(--deep-navy)] bg-[var(--light-gold)]/20 rounded-b-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--drift-silver)] text-lg">
                No questions found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--light-gold)]">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-[var(--drift-navy)] mb-6">Still have questions?</h3>
          <p className="text-[var(--deep-navy)] mb-8 text-lg">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#call" className="border-2 border-[var(--drift-navy)] text-[var(--drift-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:bg-[var(--drift-navy)] hover:text-white transition-all">
              Call Us
            </a>
            <a href="#email" className="bg-[var(--drift-gold)] text-[var(--deep-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:shadow-lg transition-all">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
