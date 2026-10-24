import { Heart, Users, Camera, Briefcase, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const EVENT_TYPES = [
  { icon: Heart, label: 'Weddings' },
  { icon: Users, label: 'Birthdays' },
  { icon: Camera, label: 'Pre-wedding shoots' },
  { icon: Briefcase, label: 'Corporate meets' },
];

export function Events() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="events" className="relative py-24 md:py-32 bg-ink-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side (left on desktop) */}
          <div ref={ref} className={`relative order-2 lg:order-1 reveal ${inView ? 'in-view' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden group min-h-[400px] lg:min-h-[520px]">
              <img
                src={IMAGES.eventLawn}
                alt="Open lawn for events"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -top-4 -left-4 lg:-left-8 p-5 rounded-2xl glass max-w-[200px]">
              <p className="font-display text-3xl text-gold-300">Open sky</p>
              <p className="mt-1 text-sm text-ink-200/70">A lawn built for gatherings and starlit dinners.</p>
            </div>
            <div className="absolute -bottom-4 right-4 lg:-right-6 w-24 h-24 rounded-full bg-mist-500/20 blur-2xl pointer-events-none" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="text-xs tracking-widest2 uppercase text-gold-300/80">Celebrations & groups</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-50 leading-tight">
              Gather everyone under open sky
            </h2>
            <p className="mt-6 text-ink-200/70 leading-relaxed text-lg">
              A lawn for weddings, plus space for birthdays, pre-wedding shoots and
              corporate meetings. Share your date, guest count and the kind of event,
              and we'll send options.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {EVENT_TYPES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl glass-light hover:bg-white/10 hover:border-gold-400/20 transition-all duration-300"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-gold-400/10 ring-1 ring-gold-400/20">
                    <Icon className="w-5 h-5 text-gold-200" />
                  </span>
                  <span className="text-sm text-ink-100/90 font-medium">{label}</span>
                </div>
              ))}
            </div>

            <a
              href="#enquire"
              className="mt-10 group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-400 text-ink-950 font-semibold hover:bg-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-400/40 hover:-translate-y-1"
            >
              Plan your event
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
