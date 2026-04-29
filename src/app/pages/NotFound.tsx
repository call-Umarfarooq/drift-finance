import { Link } from 'react-router';

export function NotFound() {
  return (
    <section className="py-20 px-6 bg-white min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-[var(--drift-gold)] text-8xl mb-8">404</div>
        <h1 className="text-[var(--drift-navy)] mb-6">Page Not Found</h1>
        <p className="text-[var(--deep-navy)] mb-8 text-lg">
          Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-[var(--drift-gold)] text-[var(--deep-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:shadow-lg transition-all"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="border-2 border-[var(--drift-navy)] text-[var(--drift-navy)] px-8 py-3 rounded-full uppercase tracking-wider hover:bg-[var(--drift-navy)] hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
