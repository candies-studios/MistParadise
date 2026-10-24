import { Leaf, Drum } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Dining() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="dining" className="relative py-24 md:py-32 bg-gradient-to-b from-ink-950 to-mist-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
            <span className="text-xs tracking-widest2 uppercase text-gold-300/80">Dining</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-50 leading-tight">
              Two kitchens, one long table
            </h2>
            <p className="mt-6 text-ink-200/70 leading-relaxed text-lg">
              Buffet meals prepared in separate vegetarian and non-vegetarian kitchens,
              so every guest eats with confidence. Tell us your plans and we'll share
              meal options along with your quote.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl glass-light hover:bg-white/10 transition-colors duration-300">
                <span className="grid place-items-center w-12 h-12 rounded-full bg-mist-500/20 ring-1 ring-mist-400/30 shrink-0">
                  <Leaf className="w-6 h-6 text-mist-200" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink-50">Vegetarian kitchen</h3>
                  <p className="mt-1 text-sm text-ink-300/70">
                    A dedicated kitchen for pure-veg meals, prepared with the same care
                    and spice that a home meal deserves.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl glass-light hover:bg-white/10 transition-colors duration-300">
                <span className="grid place-items-center w-12 h-12 rounded-full bg-gold-500/20 ring-1 ring-gold-400/30 shrink-0">
                  <Drum className="w-6 h-6 text-gold-200" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink-50">Non-vegetarian kitchen</h3>
                  <p className="mt-1 text-sm text-ink-300/70">
                    A separate kitchen for non-veg dishes — from coastal curries to
                    tandoori evenings under the stars.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden group h-full">
                <img
                  src={IMAGES.diningBuffet}
                  alt="Outdoor buffet spread"
                  className="w-full h-full object-cover min-h-[280px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden group">
                  <img
                    src={IMAGES.diningSpread}
                    alt="Lavish buffet table"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden group flex-1">
                  <img
                    src={IMAGES.bonfire}
                    alt="Evening gathering"
                    className="w-full h-full object-cover min-h-[140px] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-gold-400/10 blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
