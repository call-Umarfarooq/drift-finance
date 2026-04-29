import { useState } from 'react';
import { Link } from 'react-router';
import { Logo } from './Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--drift-navy)] shadow-[0_2px_20px_rgba(0,0,0,0.15)] transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="h-10" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-[var(--drift-gold)] hover:underline underline-offset-4 transition-all duration-200">Home</Link>
            <Link to="/about" className="text-white hover:text-[var(--drift-gold)] hover:underline underline-offset-4 transition-all duration-200">About</Link>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/services" className="text-white hover:text-[var(--drift-gold)] hover:underline underline-offset-4 transition-all duration-200">Services</Link>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-[var(--deep-navy)] rounded-xl p-6 shadow-xl w-80 animate-fadeIn">
                  <div className="grid gap-4">
                    <Link to="/services#home-loans" className="flex items-start gap-3 hover:bg-[var(--drift-navy)] p-3 rounded-lg transition-colors">
                      <div className="text-[var(--drift-gold)] text-xl">🏠</div>
                      <div>
                        <div className="text-white font-semibold">Home Purchase Loans</div>
                        <div className="text-[var(--drift-silver)] text-sm">Competitive rates for your dream home</div>
                      </div>
                    </Link>
                    <Link to="/services#equity" className="flex items-start gap-3 hover:bg-[var(--drift-navy)] p-3 rounded-lg transition-colors">
                      <div className="text-[var(--drift-gold)] text-xl">💰</div>
                      <div>
                        <div className="text-white font-semibold">Home Equity Loans</div>
                        <div className="text-[var(--drift-silver)] text-sm">Tap into your home's value</div>
                      </div>
                    </Link>
                    <Link to="/services#refinance" className="flex items-start gap-3 hover:bg-[var(--drift-navy)] p-3 rounded-lg transition-colors">
                      <div className="text-[var(--drift-gold)] text-xl">📊</div>
                      <div>
                        <div className="text-white font-semibold">Refinancing</div>
                        <div className="text-[var(--drift-silver)] text-sm">Lower your rate or shorten your term</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/team" className="text-white hover:text-[var(--drift-gold)] hover:underline underline-offset-4 transition-all duration-200">Team</Link>
            <Link to="/reviews" className="text-white hover:text-[var(--drift-gold)] hover:underline underline-offset-4 transition-all duration-200">Reviews</Link>
            <Link to="/faq" className="text-white hover:text-[var(--drift-gold)] hover:underline underline-offset-4 transition-all duration-200">FAQ</Link>
            <Link to="/contact" className="text-white hover:text-[var(--drift-gold)] hover:underline underline-offset-4 transition-all duration-200">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-[var(--drift-silver)] hover:text-[var(--drift-gold)] transition-colors">Client Login</a>
            <a href="#apply" className="bg-[var(--drift-gold)] text-[var(--deep-navy)] px-6 py-2 rounded-full uppercase tracking-wider hover:shadow-lg transition-all duration-300">Apply Now</a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link to="/" className="text-white hover:text-[var(--drift-gold)] transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-white hover:text-[var(--drift-gold)] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" className="text-white hover:text-[var(--drift-gold)] transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/team" className="text-white hover:text-[var(--drift-gold)] transition-colors" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <Link to="/reviews" className="text-white hover:text-[var(--drift-gold)] transition-colors" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
            <Link to="/faq" className="text-white hover:text-[var(--drift-gold)] transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/contact" className="text-white hover:text-[var(--drift-gold)] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="#login" className="text-[var(--drift-silver)] hover:text-[var(--drift-gold)] transition-colors">Client Login</a>
            <a href="#apply" className="bg-[var(--drift-gold)] text-[var(--deep-navy)] px-6 py-2 rounded-full uppercase tracking-wider text-center">Apply Now</a>
          </div>
        )}
      </div>
    </nav>
  );
}
