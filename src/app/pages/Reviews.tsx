import { useState } from 'react';

export function Reviews() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'home-purchase', label: 'Home Purchase' },
    { id: 'refinance', label: 'Refinancing' },
    { id: 'equity', label: 'Home Equity' },
    { id: 'personal', label: 'Personal Loans' }
  ];

  const reviews = [
    {
      name: "Sarah & Michael Chen",
      category: "home-purchase",
      rating: 5,
      date: "March 2026",
      title: "Made our dream home a reality",
      text: "Drift Financial made buying our first home so easy. The team was professional, responsive, and really cared about getting us the best rate. We closed in just 3 weeks!",
      verified: true
    },
    {
      name: "Robert Johnson",
      category: "refinance",
      rating: 5,
      date: "February 2026",
      title: "Saved us $500/month",
      text: "I've refinanced with several lenders over the years, but Drift Financial was by far the smoothest experience. They saved us over $500/month on our mortgage payment!",
      verified: true
    },
    {
      name: "Jennifer Martinez",
      category: "equity",
      rating: 5,
      date: "February 2026",
      title: "Fast and straightforward",
      text: "The home equity loan process was incredibly straightforward. We had funds in less than two weeks. Highly recommend!",
      verified: true
    },
    {
      name: "David Thompson",
      category: "home-purchase",
      rating: 5,
      date: "January 2026",
      title: "Exceptional service",
      text: "As a first-time homebuyer, I had a lot of questions. The Drift team was patient and walked me through every step. I felt supported the entire way.",
      verified: true
    },
    {
      name: "Lisa Park",
      category: "refinance",
      rating: 5,
      date: "January 2026",
      title: "Best rates in town",
      text: "After shopping around with 5 different lenders, Drift Financial offered the best rate and the best service. The process was smooth from start to finish.",
      verified: true
    },
    {
      name: "Marcus Williams",
      category: "personal",
      rating: 5,
      date: "December 2025",
      title: "Quick personal loan",
      text: "Needed funds for a family emergency and Drift came through. Fast approval, fair terms, and compassionate service. Thank you!",
      verified: true
    },
    {
      name: "Emily Rodriguez",
      category: "equity",
      rating: 5,
      date: "December 2025",
      title: "Home improvement made easy",
      text: "Used a home equity loan to renovate our kitchen. The process was simple and the loan specialist helped us understand all our options.",
      verified: true
    },
    {
      name: "James Anderson",
      category: "home-purchase",
      rating: 5,
      date: "November 2025",
      title: "Competitive rates",
      text: "Got pre-approved quickly and the rate they locked in was better than what other lenders quoted. Made the home buying process stress-free.",
      verified: true
    },
    {
      name: "Patricia Lee",
      category: "refinance",
      rating: 5,
      date: "November 2025",
      title: "Professional team",
      text: "The entire team at Drift Financial was professional, knowledgeable, and responsive. They made refinancing a breeze.",
      verified: true
    }
  ];

  const filteredReviews = selectedCategory === 'all'
    ? reviews
    : reviews.filter(review => review.category === selectedCategory);

  const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "2,500+", label: "Total Reviews" },
    { value: "98%", label: "Would Recommend" },
    { value: "15+", label: "Years of Service" }
  ];

  return (
    <>
      <section className="bg-[var(--drift-navy)] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl mb-6">
            Trusted by thousands of clients.
          </h1>
          <div className="h-1 w-32 bg-[var(--drift-gold)] mx-auto"></div>
          <p className="text-[var(--drift-silver)] text-lg mt-6 max-w-2xl mx-auto">
            See what our clients have to say about their experience with Drift Financial.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-[var(--drift-gold)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-[var(--deep-navy)] mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--deep-navy)] text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white sticky top-[72px] z-40 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[var(--drift-gold)] text-[var(--deep-navy)]'
                    : 'border-2 border-[var(--drift-silver)] text-[var(--deep-navy)] hover:bg-[var(--light-gold)]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[var(--drift-gold)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="var(--drift-gold)">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  {review.verified && (
                    <span className="text-[var(--drift-gold)] text-xs flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-1.293 14.293l-3.5-3.5 1.414-1.414L9 11.757l4.379-4.379 1.414 1.414-5.793 5.793a1 1 0 01-1.414 0z"/>
                      </svg>
                      Verified
                    </span>
                  )}
                </div>

                <h4 className="text-[var(--drift-navy)] mb-2">{review.title}</h4>
                <p className="text-[var(--deep-navy)] text-sm mb-4">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-[var(--drift-gold)] text-sm">{review.name}</div>
                    <div className="text-[var(--drift-silver)] text-xs">{review.date}</div>
                  </div>
                  <div className="text-[var(--drift-silver)] text-xs capitalize">
                    {categories.find(c => c.id === review.category)?.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--drift-navy)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to experience the Drift difference?</h2>
          <p className="text-[var(--drift-silver)] mb-8 text-lg">
            Join thousands of satisfied clients who have achieved their financial goals with us.
          </p>
          <a href="#apply" className="inline-block bg-[var(--drift-gold)] text-[var(--deep-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:shadow-lg transition-all">
            Get Started Today
          </a>
        </div>
      </section>
    </>
  );
}
