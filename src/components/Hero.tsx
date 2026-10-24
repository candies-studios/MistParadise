import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const HERO_VIDEO = `${import.meta.env.BASE_URL}video/hero-landscape.mp4`;
const HERO_POSTER = `${import.meta.env.BASE_URL}video/hero-poster.jpg`;

export function Hero() {
  const scrollY = useScrollPosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setMouse({
        x: (e.clientX / w - 0.5) * 2,
        y: (e.clientY / h - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Parallax helpers
  const px = (depth: number) => `translate3d(${mouse.x * depth}px, ${mouse.y * depth}px, 0)`;
  const scrollParallax = (factor: number) => `translateY(${scrollY * factor}px)`;

  return (
    <section id="top" ref={containerRef} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink-950">
      {/* Base sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mist-900 via-mist-800 to-ink-950" />

      {/* Far misty hills layer (deepest) */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `${px(-8)} ${scrollParallax(0.05)}` }}
      >
        <img
          src={IMAGES.mistHills}
          alt="Misty hills at dawn"
          className="w-full h-full object-cover opacity-40 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        />
      </div>

      {/* Mist veil 1 — slow drifting */}
      <div
        className="absolute inset-x-0 top-1/4 h-1/2 animate-mist-drift pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.18) 0%, transparent 60%)',
          filter: 'blur(40px)',
          transform: `${px(-4)} ${scrollParallax(0.1)}`,
        }}
      />

      {/* Pool / resort layer (mid depth) */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `${px(6)} ${scrollParallax(0.15)}` }}
      >
        {/* Landscape resort film; visitors who prefer reduced motion get the still photo instead */}
        <video
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Walkthrough of Mist Paradise: garden paths, gazebo, rooms and the cottages at night"
          className="w-full h-full object-cover opacity-80 animate-fade-in motion-reduce:hidden"
          style={{ animationDelay: '0.3s' }}
        />
        <img
          src={IMAGES.heroPool}
          alt="Resort pool at Mist Paradise"
          className="hidden motion-reduce:block w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-ink-950/40" />
      </div>

      {/* Mist veil 2 — counter drift */}
      <div
        className="absolute inset-x-0 bottom-1/4 h-2/3 animate-mist-drift-slow pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 60%, rgba(255,255,255,0.12) 0%, transparent 65%)',
          filter: 'blur(60px)',
          transform: `${px(-2)} ${scrollParallax(0.2)}`,
        }}
      />

      {/* Foreground fog */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(20,26,24,0.95) 0%, rgba(20,26,24,0.6) 50%, transparent 100%)',
        }}
      />

      {/* Floating light orbs */}
      <div
        className="absolute top-[20%] left-[12%] w-3 h-3 rounded-full bg-gold-300/60 blur-sm animate-float-y"
        style={{ transform: px(-12), animationDelay: '0s' }}
      />
      <div
        className="absolute top-[35%] right-[18%] w-2 h-2 rounded-full bg-gold-200/50 blur-sm animate-float-y"
        style={{ transform: px(10), animationDelay: '2s' }}
      />
      <div
        className="absolute top-[55%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/40 blur-sm animate-float-y"
        style={{ transform: px(-6), animationDelay: '4s' }}
      />

      {/* Text content */}
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ transform: `${px(2)} ${scrollParallax(0.08)}` }}
      >
        <div className="animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs tracking-widest2 uppercase text-gold-200">
            <MapPin className="w-3.5 h-3.5" />
            Vadavali Road · Kadav · Karjat
          </span>
        </div>

        <h1
          className="mt-8 font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.95] text-balance max-w-5xl animate-fade-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <span className="block text-ink-50">Where the hills</span>
          <span className="block">
            <span className="italic font-light text-ink-100/90">hold the</span>{' '}
            <span className="shimmer-text animate-shimmer font-semibold">mist</span>
          </span>
        </h1>

        <p
          className="mt-8 max-w-xl text-base sm:text-lg text-ink-200/80 leading-relaxed animate-fade-up text-balance"
          style={{ animationDelay: '1s', opacity: 0 }}
        >
          Overnight stays, slow pool afternoons and celebrations for family and
          friends — a short escape into Karjat's greenery.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: '1.2s', opacity: 0 }}
        >
          <a
            href="#enquire"
            className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold-400 text-ink-950 font-semibold hover:bg-gold-300 transition-all duration-300 shadow-xl shadow-gold-500/20 hover:shadow-gold-400/40 hover:-translate-y-1"
          >
            Plan your visit
          </a>
          <a
            href="#experiences"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full glass text-ink-50 font-medium hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            Explore experiences
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float-y">
        <div className="flex flex-col items-center gap-2 text-ink-300/60">
          <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
