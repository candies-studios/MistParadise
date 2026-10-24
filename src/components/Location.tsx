import { MapPin, Phone, Navigation } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const ADDRESS = 'Vadavali Road · Kadav · Karjat, Maharashtra 410201';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Mist+Paradise+Karjat';
const PHONE = '+91 88791 61429';

export function Location() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="location" className="relative py-24 md:py-32 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`max-w-2xl mb-12 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs tracking-widest2 uppercase text-gold-300/80">Location</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-50 leading-tight">
            Finding us in Karjat
          </h2>
          <p className="mt-4 text-ink-300/70 leading-relaxed">
            A short drive from Mumbai and Pune — far enough to feel the hills, close
            enough for a weekend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Image */}
          <div className="lg:col-span-2 group relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[400px]">
            <img
              src={IMAGES.mistHillsAlt}
              alt="Path leading to the cottages under a cloudy sky"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-gold-400/90 shadow-lg">
                <MapPin className="w-5 h-5 text-ink-950" />
              </span>
              <div>
                <p className="font-display text-lg text-ink-50">Mist Paradise</p>
                <p className="text-sm text-ink-200/70">{ADDRESS}</p>
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="flex flex-col gap-4">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-2xl glass-light hover:bg-white/10 hover:border-gold-400/20 transition-all duration-300"
            >
              <span className="grid place-items-center w-12 h-12 rounded-full bg-mist-500/20 ring-1 ring-mist-400/30 shrink-0">
                <Navigation className="w-6 h-6 text-mist-200" />
              </span>
              <div>
                <h3 className="font-display text-lg text-ink-50">Get directions</h3>
                <p className="text-sm text-ink-300/70 mt-0.5">Open in Google Maps</p>
              </div>
            </a>

            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="group flex items-center gap-4 p-6 rounded-2xl glass-light hover:bg-white/10 hover:border-gold-400/20 transition-all duration-300"
            >
              <span className="grid place-items-center w-12 h-12 rounded-full bg-gold-500/20 ring-1 ring-gold-400/30 shrink-0">
                <Phone className="w-6 h-6 text-gold-200" />
              </span>
              <div>
                <h3 className="font-display text-lg text-ink-50">Call us</h3>
                <p className="text-sm text-ink-300/70 mt-0.5">{PHONE}</p>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-mist-800/40 to-ink-900/40 border border-mist-600/20">
              <p className="text-sm text-ink-200/80 leading-relaxed">
                We'll guide you in by phone if the last mile is tricky — just call
                when you're near.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
