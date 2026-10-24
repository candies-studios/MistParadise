import { IMAGES } from '@/data/content';
import { EXPERIENCES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Experiences() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="experiences" className="relative py-24 md:py-32 bg-ink-950 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-mist-700/10 blur-[120px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 reveal ${inView ? 'in-view' : ''}`}>
          <span className="text-xs tracking-widest2 uppercase text-gold-300/80">Experiences</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-50 leading-tight">
            Splash, play, sing, unwind
          </h2>
          <p className="mt-4 text-ink-300/70 leading-relaxed">
            Something for every age in the group. Ask us about timings when you enquire.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.title}
              className="group relative rounded-2xl overflow-hidden min-h-[320px] cursor-default"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl group-hover:ring-gold-400/20 transition-all duration-500" />

              {/* Ember effect for bonfire cards */}
              {(exp.title.includes('Bonfire') || exp.title.includes('Karaoke')) && (
                <div className="absolute bottom-24 right-6 w-2 h-2 rounded-full bg-ember-500/60 blur-md animate-ember-flicker" />
              )}

              <div className="relative h-full flex flex-col justify-end p-6">
                <span className="text-xs text-gold-300/60 tracking-wider mb-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl text-ink-50">{exp.title}</h3>
                <p className="mt-2 text-sm text-ink-200/70 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
