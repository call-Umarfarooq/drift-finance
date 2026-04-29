import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We\'ll respond within 2 business hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="bg-[var(--drift-navy)] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl mb-6">
            Let's talk about your goals.
          </h1>
          <div className="h-1 w-32 bg-[var(--drift-gold)] mx-auto"></div>
          <p className="text-[var(--drift-silver)] text-lg mt-6 max-w-2xl mx-auto">
            Ready to take the next step? Our team is here to answer your questions and help you find the perfect financial solution.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[var(--drift-navy)] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[var(--deep-navy)] rounded-xl focus:border-[var(--drift-gold)] focus:ring-2 focus:ring-[var(--drift-gold)] focus:ring-opacity-50 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-[var(--drift-navy)] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[var(--deep-navy)] rounded-xl focus:border-[var(--drift-gold)] focus:ring-2 focus:ring-[var(--drift-gold)] focus:ring-opacity-50 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[var(--drift-navy)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--deep-navy)] rounded-xl focus:border-[var(--drift-gold)] focus:ring-2 focus:ring-[var(--drift-gold)] focus:ring-opacity-50 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[var(--drift-navy)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--deep-navy)] rounded-xl focus:border-[var(--drift-gold)] focus:ring-2 focus:ring-[var(--drift-gold)] focus:ring-opacity-50 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-[var(--drift-navy)] mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--deep-navy)] rounded-xl focus:border-[var(--drift-gold)] focus:ring-2 focus:ring-[var(--drift-gold)] focus:ring-opacity-50 outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="home-purchase">Home Purchase Loan</option>
                    <option value="home-equity">Home Equity Loan</option>
                    <option value="refinance">Refinancing</option>
                    <option value="personal">Personal Loan</option>
                    <option value="consolidation">Debt Consolidation</option>
                    <option value="planning">Financial Planning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[var(--drift-navy)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[var(--deep-navy)] rounded-xl focus:border-[var(--drift-gold)] focus:ring-2 focus:ring-[var(--drift-gold)] focus:ring-opacity-50 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--drift-gold)] text-[var(--deep-navy)] py-4 rounded-full uppercase tracking-wider hover:shadow-lg transition-all"
                >
                  Send Message
                </button>

                <p className="text-[var(--drift-silver)] text-sm text-center">
                  We typically respond within 2 business hours.
                </p>
              </form>
            </div>

            <div className="md:col-span-2">
              <div className="bg-[var(--drift-navy)] rounded-2xl p-8 text-white sticky top-24">
                <h3 className="mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[var(--drift-gold)] text-xl">📞</div>
                    <div>
                      <div className="text-[var(--drift-gold)] mb-1">Phone</div>
                      <div>(888) 555-DRIFT</div>
                      <div className="text-sm text-[var(--drift-silver)]">Mon-Fri: 8am - 8pm EST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[var(--drift-gold)] text-xl">✉️</div>
                    <div>
                      <div className="text-[var(--drift-gold)] mb-1">Email</div>
                      <div>info@driftfinancial.com</div>
                      <div className="text-sm text-[var(--drift-silver)]">24-hour response time</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[var(--drift-gold)] text-xl">📍</div>
                    <div>
                      <div className="text-[var(--drift-gold)] mb-1">Address</div>
                      <div>123 Financial Plaza</div>
                      <div>Suite 500</div>
                      <div>New York, NY 10001</div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <div className="text-[var(--drift-silver)] text-sm mb-3">Follow Us</div>
                    <div className="flex gap-4">
                      <a href="#facebook" className="text-[var(--drift-silver)] hover:text-[var(--drift-gold)] transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="#twitter" className="text-[var(--drift-silver)] hover:text-[var(--drift-gold)] transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="#linkedin" className="text-[var(--drift-silver)] hover:text-[var(--drift-gold)] transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682412336413!2d-73.98823492346463!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704151200000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Drift Financial Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--light-gold)]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[var(--drift-navy)] text-center mb-8">Office Locations</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-l-4 border-[var(--drift-gold)]">
              <h4 className="text-[var(--drift-navy)] mb-2">New York (Headquarters)</h4>
              <p className="text-[var(--deep-navy)] text-sm">
                123 Financial Plaza, Suite 500<br />
                New York, NY 10001
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-4 border-[var(--drift-gold)]">
              <h4 className="text-[var(--drift-navy)] mb-2">Los Angeles</h4>
              <p className="text-[var(--deep-navy)] text-sm">
                456 Sunset Boulevard<br />
                Los Angeles, CA 90028
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-4 border-[var(--drift-gold)]">
              <h4 className="text-[var(--drift-navy)] mb-2">Chicago</h4>
              <p className="text-[var(--deep-navy)] text-sm">
                789 Michigan Avenue<br />
                Chicago, IL 60611
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
