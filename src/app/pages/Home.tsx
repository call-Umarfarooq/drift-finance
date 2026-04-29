import { useState } from 'react';
import { Link } from 'react-router';

export function Home() {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Drift Financial made buying our first home so easy. The team was professional, responsive, and really cared about getting us the best rate.",
      name: "Sarah & Michael Chen",
      rating: 5
    },
    {
      quote: "I've refinanced with several lenders over the years, but Drift Financial was by far the smoothest experience. They saved us over $500/month!",
      name: "Robert Johnson",
      rating: 5
    },
    {
      quote: "The home equity loan process was incredibly straightforward. We had funds in less than two weeks. Highly recommend!",
      name: "Jennifer Martinez",
      rating: 5
    }
  ];

  return (
    <>
      {isAnnouncementVisible && (
        <div className="bg-[var(--drift-gold)] text-[var(--deep-navy)] py-3 px-6 flex items-center justify-between">
          <div className="flex-1 text-center">
            <span className="font-medium">New: Home equity loans up to $750K — Apply in minutes.</span>
            <a href="#apply" className="ml-4 inline-block bg-[var(--deep-navy)] text-white px-4 py-1 rounded-full text-sm uppercase tracking-wider hover:shadow-lg transition-shadow">
              Get Started
            </a>
          </div>
          <button
            onClick={() => setIsAnnouncementVisible(false)}
            className="text-[var(--deep-navy)] hover:opacity-70 transition-opacity text-2xl"
          >
            ×
          </button>
        </div>
      )}

      <section className="bg-[var(--drift-navy)] py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[var(--drift-gold)] to-transparent mx-auto mb-8"></div>
          <h1 className="text-white text-4xl md:text-6xl mb-6">
            Your partner through every step of your financial journey.
          </h1>
          <p className="text-[var(--drift-silver)] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            From purchasing your dream home to accessing your home's equity, we're here to help you achieve your financial goals with competitive rates and expert guidance.
          </p>
          <div className="text-[var(--drift-gold)]">
            Prefer to talk? Call <span className="font-bold">(888) 555-DRIFT</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[var(--light-gold)] flex items-center justify-center text-3xl mb-4">
                💰
              </div>
              <h4 className="text-[var(--drift-navy)] mb-3">Access Cash</h4>
              <p className="text-[var(--deep-navy)] mb-4 text-sm">
                Unlock the equity in your home with competitive rates and flexible terms. Get up to $750,000 for home improvements, debt consolidation, or any financial need.
              </p>
              <Link to="/services#equity" className="inline-block bg-[var(--drift-gold)] text-[var(--deep-navy)] px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:shadow-lg transition-all">
                Learn More
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[var(--light-gold)] flex items-center justify-center text-3xl mb-4">
                🏠
              </div>
              <h4 className="text-[var(--drift-navy)] mb-3">Buy a Home</h4>
              <p className="text-[var(--deep-navy)] mb-4 text-sm">
                Make your homeownership dreams a reality with our comprehensive purchase loan options. We offer competitive rates and personalized service every step of the way.
              </p>
              <Link to="/services#purchase" className="inline-block bg-[var(--drift-gold)] text-[var(--deep-navy)] px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:shadow-lg transition-all">
                Learn More
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[var(--light-gold)] flex items-center justify-center text-3xl mb-4">
                📊
              </div>
              <h4 className="text-[var(--drift-navy)] mb-3">Lower Payments</h4>
              <p className="text-[var(--deep-navy)] mb-4 text-sm">
                Refinance your existing mortgage to take advantage of lower rates or shorten your loan term. Save thousands over the life of your loan.
              </p>
              <Link to="/services#refinance" className="inline-block bg-[var(--drift-gold)] text-[var(--deep-navy)] px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:shadow-lg transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-[var(--drift-navy)] mb-4">Home Equity Loans</h3>
              <p className="text-[var(--deep-navy)] mb-2 text-lg">Up to $750,000</p>
              <p className="text-[var(--deep-navy)] mb-6">
                Access the cash you need with our competitive home equity loans. No hidden fees, fast approval, and flexible terms that work for you.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--drift-gold)]">✓</span>
                  <span className="text-[var(--deep-navy)]">Rates starting at 5.99% APR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--drift-gold)]">✓</span>
                  <span className="text-[var(--deep-navy)]">Close in as little as 15 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--drift-gold)]">✓</span>
                  <span className="text-[var(--deep-navy)]">No prepayment penalties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--drift-gold)]">✓</span>
                  <span className="text-[var(--deep-navy)]">Dedicated loan specialist</span>
                </li>
              </ul>
              <Link to="/services#equity" className="inline-block bg-[var(--deep-navy)] text-white px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:shadow-lg transition-all">
                Learn More
              </Link>
            </div>

            <div className="flex justify-center">
              <img
                src="/image/home-exterior.jpg"
                alt="Modern home exterior"
                className="w-full max-w-md rounded-2xl border-4 border-[var(--drift-gold)] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-[var(--drift-gold)]"></div>
              <h2 className="text-[var(--drift-navy)]">Tools & Resources</h2>
              <div className="h-px w-16 bg-[var(--drift-gold)]"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative">
                <img
                  src="/image/learning-center.jpg"
                  alt="Learning center"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-[var(--deep-navy)]/50 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white mb-2">Learning Center</h4>
                  <a href="#learning" className="text-[var(--drift-gold)] text-sm group-hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative">
                <img
                  src="/image/mortgage-calc.jpg"
                  alt="Mortgage calculator"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-[var(--deep-navy)]/50 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white mb-2">Mortgage Calculator</h4>
                  <a href="#calculator" className="text-[var(--drift-gold)] text-sm group-hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative">
                <img
                  src="/image/service-6.jpg"
                  alt="Rate watch"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-[var(--deep-navy)]/50 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white mb-2">Rate Watch</h4>
                  <a href="#rates" className="text-[var(--drift-gold)] text-sm group-hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--drift-navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-8">See what our clients have to say.</h2>
            </div>

            <div className="bg-white p-8 rounded-2xl border-l-4 border-[var(--drift-gold)] shadow-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="var(--drift-gold)">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[var(--deep-navy)] mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="text-[var(--drift-gold)]">
                — {testimonials[currentTestimonial].name}
              </p>

              <div className="flex gap-2 mt-6 justify-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-[var(--drift-gold)] w-8'
                        : 'bg-[var(--drift-silver)]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--deep-navy)] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--drift-gold)] opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <img
                src="/image/mobile-app.jpg"
                alt="Mobile app on phone"
                className="w-80 rounded-2xl drop-shadow-2xl"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-white mb-6">Manage your finances anywhere.</h2>
              <p className="text-[var(--drift-silver)] mb-8 text-lg">
                Track your loan status, make payments, and access important documents right from your phone. Download our app today.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#app-store" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[var(--deep-navy)] transition-all flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </a>
                <a href="#play-store" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[var(--deep-navy)] transition-all flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[var(--drift-navy)] mb-12">Ready to get started?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/services#equity" className="border-2 border-[var(--drift-navy)] text-[var(--drift-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:bg-[var(--drift-gold)] hover:border-[var(--drift-gold)] transition-all">
              Access Cash
            </Link>
            <Link to="/services#purchase" className="border-2 border-[var(--drift-navy)] text-[var(--drift-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:bg-[var(--drift-gold)] hover:border-[var(--drift-gold)] transition-all">
              Buy a Home
            </Link>
            <Link to="/services#refinance" className="border-2 border-[var(--drift-navy)] text-[var(--drift-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:bg-[var(--drift-gold)] hover:border-[var(--drift-gold)] transition-all">
              Lower Payments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}