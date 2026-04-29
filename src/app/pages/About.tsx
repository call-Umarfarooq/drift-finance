export function About() {
  const stats = [
    { number: "15+", label: "Years in Business" },
    { number: "$2B+", label: "Loans Funded" },
    { number: "50,000+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <>
      <section className="bg-[var(--drift-navy)] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl mb-6">
            Built on trust. Driven by results.
          </h1>
          <div className="h-1 w-32 bg-[var(--drift-gold)] mx-auto"></div>
          <p className="text-[var(--drift-silver)] text-lg mt-6 max-w-2xl mx-auto">
            At Drift Financial, we're committed to making your financial dreams a reality through transparent service, innovative solutions, and unwavering dedication to your success.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-[var(--drift-navy)] mb-6">Our Mission</h3>
              <p className="text-[var(--deep-navy)] mb-8">
                To empower individuals and families to achieve their financial goals through accessible, transparent, and personalized lending solutions. We believe everyone deserves a partner they can trust on their journey to financial success.
              </p>

              <h3 className="text-[var(--drift-navy)] mb-6">Our Vision</h3>
              <p className="text-[var(--deep-navy)]">
                To be the most trusted name in financial services, known for putting clients first, embracing innovation, and delivering exceptional results. We're building a future where financial services are simple, transparent, and accessible to all.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/image/about-team.jpg"
                alt="Team collaboration"
                className="w-full max-w-lg rounded-2xl shadow-xl border-b-4 border-[var(--drift-gold)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--drift-gold)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-[var(--deep-navy)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--deep-navy)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[var(--drift-navy)] text-center mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 hover:shadow-lg rounded-2xl transition-all duration-300 group">
              <div className="w-20 h-20 rounded-full bg-[var(--drift-navy)] flex items-center justify-center mx-auto mb-6 text-white text-3xl">
                🤝
              </div>
              <h4 className="text-[var(--drift-navy)] mb-4">Transparency</h4>
              <p className="text-[var(--deep-navy)] text-sm">
                We believe in honest, clear communication. No hidden fees, no fine print surprises. What you see is what you get, and we'll guide you through every detail.
              </p>
              <div className="h-1 w-0 group-hover:w-16 bg-[var(--drift-gold)] mx-auto mt-4 transition-all duration-300"></div>
            </div>

            <div className="text-center p-8 hover:shadow-lg rounded-2xl transition-all duration-300 group">
              <div className="w-20 h-20 rounded-full bg-[var(--drift-navy)] flex items-center justify-center mx-auto mb-6 text-white text-3xl">
                💡
              </div>
              <h4 className="text-[var(--drift-navy)] mb-4">Innovation</h4>
              <p className="text-[var(--deep-navy)] text-sm">
                We leverage the latest technology to make your experience faster, easier, and more convenient. From online applications to mobile account management, we're always improving.
              </p>
              <div className="h-1 w-0 group-hover:w-16 bg-[var(--drift-gold)] mx-auto mt-4 transition-all duration-300"></div>
            </div>

            <div className="text-center p-8 hover:shadow-lg rounded-2xl transition-all duration-300 group">
              <div className="w-20 h-20 rounded-full bg-[var(--drift-navy)] flex items-center justify-center mx-auto mb-6 text-white text-3xl">
                ⭐
              </div>
              <h4 className="text-[var(--drift-navy)] mb-4">Client-First</h4>
              <p className="text-[var(--deep-navy)] text-sm">
                Your goals are our goals. We take the time to understand your unique situation and tailor our solutions to fit your needs, not the other way around.
              </p>
              <div className="h-1 w-0 group-hover:w-16 bg-[var(--drift-gold)] mx-auto mt-4 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--drift-navy)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to start your journey?</h2>
          <p className="text-[var(--drift-silver)] mb-8 text-lg">
            Join thousands of satisfied clients who have achieved their financial goals with Drift Financial.
          </p>
          <a href="#apply" className="inline-block bg-[var(--drift-gold)] text-[var(--deep-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:shadow-lg transition-all">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
