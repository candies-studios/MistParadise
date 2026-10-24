import { Check } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const ROOM_FEATURES = [
  'Air-conditioned comfort',
  'Private sit-out veranda',
  'Attached marble bathroom',
  'Wood-panelled ceilings',
  'Morning tea with a view',
  'Sound of rain on the roof',
];

export function Rooms() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="rooms" className="relative py-24 md:py-32 bg-gradient-to-b from-ink-950 to-mist-900">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`max-w-2xl mb-16 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs tracking-widest2 uppercase text-gold-300/80">Stay</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-50 leading-tight">
            Rooms that open onto the green
          </h2>
          <p className="mt-4 text-ink-300/70 leading-relaxed text-lg">
            Each air-conditioned room has its own sit-out — a quiet spot for morning
            tea and evening rain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large feature image */}
          <div className="lg:col-span-2 lg:row-span-2 group relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[560px]">
            <img
              src={IMAGES.roomBed}
              alt="Cozy bedroom with canopy bed"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display text-2xl text-ink-50">The Canopy Room</h3>
              <p className="mt-1 text-sm text-ink-200/70">Wake up wrapped in greenery and birdsong.</p>
            </div>
          </div>

          {/* Interior image */}
          <div className="group relative rounded-2xl overflow-hidden min-h-[200px] lg:min-h-[270px]">
            <img
              src={IMAGES.roomInterior}
              alt="Room interior with wood-panelled ceiling"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
          </div>

          {/* Bathroom image */}
          <div className="group relative rounded-2xl overflow-hidden min-h-[200px] lg:min-h-[270px]">
            <img
              src={IMAGES.roomBath}
              alt="Attached bathroom"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Features list */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {ROOM_FEATURES.map((feat) => (
            <div
              key={feat}
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl glass-light"
            >
              <span className="grid place-items-center w-7 h-7 rounded-full bg-mist-500/30 ring-1 ring-mist-400/30">
                <Check className="w-3.5 h-3.5 text-mist-200" strokeWidth={3} />
              </span>
              <span className="text-sm text-ink-200/90">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
