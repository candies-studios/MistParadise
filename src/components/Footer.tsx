import { Mountain, Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-mist-400 to-mist-700 ring-1 ring-white/10">
                <Mountain className="w-5 h-5 text-ink-950" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl text-ink-50">Mist Paradise</span>
                <span className="text-[10px] tracking-widest2 uppercase text-gold-300/80 mt-0.5">Karjat</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-ink-300/60 leading-relaxed max-w-sm">
              Where the hills hold the mist. Overnight stays, slow pool afternoons and
              celebrations for family and friends — a short escape into Karjat's greenery.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center w-9 h-9 rounded-full glass-light hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-ink-200" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center w-9 h-9 rounded-full glass-light hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-ink-200" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-widest2 uppercase text-gold-300/80 mb-4">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-300/70 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest2 uppercase text-gold-300/80 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-ink-300/70">
                <MapPin className="w-4 h-4 text-mist-300 mt-0.5 shrink-0" />
                Vadavali Road · Kadav · Karjat
              </li>
              <li>
                <a
                  href="tel:+918879161429"
                  className="flex items-center gap-2.5 text-sm text-ink-300/70 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-mist-300 shrink-0" />
                  +91 88791 61429
                </a>
              </li>
            </ul>
            <a
              href="#enquire"
              className="mt-5 inline-flex items-center px-6 py-2.5 rounded-full bg-gold-400 text-ink-950 text-sm font-semibold hover:bg-gold-300 transition-colors"
            >
              Send an enquiry
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400/50">
            © {new Date().getFullYear()} Mist Paradise. All rights reserved.
          </p>
          <p className="text-xs text-ink-400/50">
            Crafted with care in the hills of Karjat.
          </p>
        </div>
      </div>
    </footer>
  );
}
