import { useEffect, useState } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-mist-400 to-mist-700 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300">
            <Mountain className="w-5 h-5 text-ink-950" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-ink-50">Mist Paradise</span>
            <span className="text-[10px] tracking-widest2 uppercase text-gold-300/80 mt-0.5">Karjat</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-200/80 hover:text-gold-300 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#enquire"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gold-400 text-ink-950 text-sm font-semibold hover:bg-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-400/40 hover:-translate-y-0.5"
        >
          Enquire
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink-100 p-1"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 mt-3' : 'max-h-0'
        }`}
      >
        <ul className="mx-4 px-6 py-4 glass rounded-2xl flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-ink-100 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="block text-center py-2.5 rounded-full bg-gold-400 text-ink-950 font-semibold"
            >
              Enquire
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
