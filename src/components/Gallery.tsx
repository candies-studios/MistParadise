import { IMAGES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Gallery() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-gradient-to-b from-ink-950 to-mist-900">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs tracking-widest2 uppercase text-gold-300/80">A look around</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-50 leading-tight">
            Day, dusk and after dark
          </h2>
          <p className="mt-4 text-ink-300/70 leading-relaxed">
            Moments from across the resort — the light changes, the mist never leaves.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.gallery.map((src, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 ? 'col-span-2 row-span-2 min-h-[280px] md:min-h-[400px]' : 'min-h-[140px] md:min-h-[190px]'
              }`}
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-ink-950/10 group-hover:bg-ink-950/0 transition-colors duration-300" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl group-hover:ring-gold-400/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
