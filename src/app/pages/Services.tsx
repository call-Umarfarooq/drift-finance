export function Services() {
  const services = [
    {
      id: "purchase",
      icon: "🏠",
      title: "Home Purchase Loans",
      description: "Competitive rates for your dream home.",
      details: "Whether you're a first-time homebuyer or looking to upgrade, we offer flexible loan options with competitive rates and personalized service to make your homeownership dreams come true.",
      image: "/image/service-1.jpg"
    },
    {
      id: "equity",
      icon: "💰",
      title: "Home Equity Loans",
      description: "Tap into your home's value.",
      details: "Access up to $750,000 with our home equity loans. Perfect for home improvements, debt consolidation, or major purchases. Fast approval, no hidden fees, and flexible terms.",
      image: "/image/service-2.jpg"
    },
    {
      id: "refinance",
      icon: "📊",
      title: "Refinancing",
      description: "Lower your rate or shorten your term.",
      details: "Save thousands by refinancing your existing mortgage. We'll help you find the best rates and terms to reduce your monthly payment or pay off your loan faster.",
      image: "/image/service-3.jpg"
    },
    {
      id: "personal",
      icon: "💳",
      title: "Personal Loans",
      description: "Flexible funding for life's moments.",
      details: "Quick and easy personal loans for any need. Whether it's a wedding, vacation, or unexpected expense, we provide fast funding with transparent terms.",
      image: "/image/service-4.jpg"
    },
    {
      id: "consolidation",
      icon: "🔄",
      title: "Debt Consolidation",
      description: "Simplify your payments.",
      details: "Combine multiple debts into one manageable payment with a lower interest rate. Reduce stress and save money with our debt consolidation solutions.",
      image: "/image/service-5.jpg"
    },
    {
      id: "planning",
      icon: "📈",
      title: "Financial Planning",
      description: "Expert guidance for your future.",
      details: "Work with our experienced advisors to create a comprehensive financial plan. From retirement to education savings, we'll help you achieve your long-term goals.",
      image: "/image/service-6.jpg"
    }
  ];

  const steps = [
    { number: "1", title: "Apply Online", description: "Complete our simple application in minutes" },
    { number: "2", title: "Get Matched", description: "We'll pair you with the right loan specialist" },
    { number: "3", title: "Review Options", description: "Compare rates and choose your best fit" },
    { number: "4", title: "Close & Fund", description: "Finalize paperwork and receive your funds" }
  ];

  return (
    <>
      <section className="bg-[var(--drift-navy)] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl mb-6">
            Financial solutions tailored to you.
          </h1>
          <div className="h-1 w-32 bg-[var(--drift-gold)] mx-auto"></div>
          <p className="text-[var(--drift-silver)] text-lg mt-6 max-w-2xl mx-auto">
            From home purchases to personal loans, we offer comprehensive financial solutions designed to help you achieve your goals.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[var(--drift-gold)] flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[var(--drift-navy)] mb-2">{service.title}</h4>
                  <p className="text-[var(--drift-silver)] text-sm mb-4">{service.description}</p>
                  <p className="text-[var(--deep-navy)] text-sm mb-4">{service.details}</p>
                  <a
                    href={`#${service.id}`}
                    className="text-[var(--drift-gold)] group-hover:underline inline-flex items-center gap-2"
                  >
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
                <div className="h-1 w-0 group-hover:w-full bg-[var(--drift-gold)] transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--light-gold)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[var(--drift-navy)] text-center mb-12">How It Works</h2>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-[var(--drift-gold)]"></div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-[var(--drift-gold)] flex items-center justify-center mx-auto mb-4 text-white text-3xl relative z-10">
                    {step.number}
                  </div>
                  <h4 className="text-[var(--drift-navy)] mb-2">{step.title}</h4>
                  <p className="text-[var(--deep-navy)] text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--drift-navy)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white mb-6">Not sure which product is right for you?</h2>
          <p className="text-[var(--drift-silver)] mb-8 text-lg">
            Our expert advisors are here to help. Call us at <span className="text-[var(--drift-gold)]">(888) 555-DRIFT</span> or schedule a consultation.
          </p>
          <a href="#advisor" className="inline-block bg-[var(--drift-gold)] text-[var(--deep-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:shadow-lg transition-all">
            Talk to an Advisor
          </a>
        </div>
      </section>
    </>
  );
}
