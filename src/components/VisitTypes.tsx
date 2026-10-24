import { BedDouble, Sun, UtensilsCrossed, PartyPopper, ArrowRight } from 'lucide-react';
import { VISIT_TYPES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const ICONS = { BedDouble, Sun, UtensilsCrossed, PartyPopper };

export function VisitTypes() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs tracking-widest2 uppercase text-gold-300/80">Choose your visit</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-50 leading-tight">
            Four ways to spend time at Mist Paradise
          </h2>
          <p className="mt-4 text-ink-300/70 leading-relaxed">
            Tell us which suits you and we'll reply with availability and current rates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VISIT_TYPES.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <div
                key={card.title}
                className="group relative rounded-2xl overflow-hidden bg-ink-900 border border-white/5 hover:border-gold-400/30 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 grid place-items-center w-11 h-11 rounded-full bg-gold-400/90 backdrop-blur-sm shadow-lg">
                    <Icon className="w-5 h-5 text-ink-950" strokeWidth={2} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ink-50">{card.title}</h3>
                  <p className="mt-2 text-sm text-ink-300/70 leading-relaxed">{card.description}</p>
                  <a
                    href="#enquire"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold-300 group-hover:text-gold-200 transition-colors"
                  >
                    Enquire
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
