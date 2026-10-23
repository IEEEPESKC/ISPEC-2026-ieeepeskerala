import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, FileText, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import backgroundImage from '../assets/image.jpeg';
import mountainImage from '../assets/mountain.png';
import deanSharafiImg from '../assets/dean-sharafi.jpg';
import sushilSooneeImg from '../assets/sushil-kumar-soonee.jpg';
import rasaraSamarasingheImg from '../assets/rasara-samarasinghe.jpg';
import sudhakarKumarasamyImg from '../assets/sudhakar-kumarasamy.jpg';

/* ─────────────────────────────────────
   2 completely separate slides:
   Slide 0: Conference Details ONLY
   Slide 1: Keynote Speakers ONLY
───────────────────────────────────── */
const TOTAL_SLIDES = 2;

/* ── Keynote data ── */
const keynoteSpeakers = [
  {
    num: '01',
    name: 'Dean Sharafi',
    org: 'Executive Advisor – Energy Transition',
    image: deanSharafiImg,
    sessionTitle: 'Energy Transition Strategies for a Decarbonised Power Grid',
  },
  {
    num: '02',
    name: 'Sushil Kumar Soonee',
    org: 'Power System Operation Corporation Ltd. (POSOCO)',
    image: sushilSooneeImg,
    sessionTitle: 'National Grid Integration and Power System Operation Challenges in India',
  },
  {
    num: '03',
    name: 'Dr. Sudhakar Kumarasamy',
    org: 'Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA), Malaysia',
    image: sudhakarKumarasamyImg,
    sessionTitle: 'Sustainable Energy Transitions, Climate-Resilient Technologies and Low-Carbon Pathways',
  },
  {
    num: '04',
    name: 'Dr. Rasara Samarasinghe',
    org: 'University of Moratuwa, Sri Lanka',
    image: rasaraSamarasingheImg,
    sessionTitle: 'From Reliability to Resilience: Intelligent Asset Management for a Sustainable and Future-Ready Power Grid',
  },
];

/* ── Keynote card ── */
const KeynoteCard = ({ speaker }) => (
  <div
    style={{
      flex: '1 1 240px',
      minWidth: 'min(240px, 100%)',
      maxWidth: '300px',
      background: 'rgba(15, 23, 42, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.14)',
      borderRadius: '18px',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
      transition: 'transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(15, 23, 42, 0.96)';
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.45)';
      e.currentTarget.style.boxShadow = '0 22px 45px rgba(0, 0, 0, 0.65), 0 0 24px rgba(16, 185, 129, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgba(15, 23, 42, 0.88)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
      e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.5)';
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div
        style={{
          width: '68px',
          height: '68px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid rgba(52, 211, 153, 0.55)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.35)',
          flexShrink: 0,
        }}
      >
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.8rem' }}>👤</span>
          </div>
        )}
      </div>
      <span
        style={{
          background: '#10b981',
          color: '#fff',
          fontSize: '0.65rem',
          fontWeight: '700',
          letterSpacing: '0.08em',
          padding: '4px 9px',
          borderRadius: '6px',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        KEYNOTE {speaker.num}
      </span>
    </div>

    <div>
      <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700', margin: '0 0 5px 0', lineHeight: '1.3' }}>
        {speaker.name}
      </h3>
      <p style={{ color: '#34d399', fontSize: '0.78rem', margin: 0, lineHeight: '1.45', fontWeight: '500' }}>
        {speaker.org}
      </p>
    </div>

    <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)' }} />

    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <p
        style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.63rem',
          fontWeight: '700',
          letterSpacing: '0.08em',
          margin: 0,
          textTransform: 'uppercase',
        }}
      >
        Keynote Session:
      </p>
      <p
        style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '0.8rem',
          lineHeight: '1.5',
          margin: 0,
          fontStyle: 'italic',
        }}
      >
        "{speaker.sessionTitle}"
      </p>
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 'auto',
        paddingTop: '6px',
      }}
    >
      <Link
        to="/keynote-speakers"
        style={{
          color: '#34d399',
          fontSize: '0.8rem',
          fontWeight: '600',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#6ee7b7')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#34d399')}
      >
        Bio &amp; Abstract <ChevronRight style={{ width: '14px', height: '14px' }} />
      </Link>
    </div>
  </div>
);

/* ─────────────────────────────────────
   HERO
───────────────────────────────────── */
const Hero = () => {
  const backgrounds = [backgroundImage, mountainImage];
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const touchStartX = React.useRef(null);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const goTo = (target, dir) => {
    setDirection(dir);
    setSlide(target);
  };

  const next = () => goTo((slide + 1) % TOTAL_SLIDES, 1);
  const prev = () => goTo((slide - 1 + TOTAL_SLIDES) % TOTAL_SLIDES, -1);

  // Touch swipe support
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  // Auto-advance every 6s — resets when slide changes
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setSlide((s) => (s + 1) % TOTAL_SLIDES);
    }, 6000);
    return () => clearInterval(timer);
  }, [slide]);

  const conferenceInfo = {
    subtitle: 'IEEE PES Kerala Chapter',
    theme: '"Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality"',
    date: 'Dec 4 – 6, 2026',
    venue: 'Mar Baselios College of Engineering and Technology, Thiruvananthapuram, Keralam , India',
  };

  /* Slide animation variants — smooth horizontal crossfade */
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const slideTransition = {
    x: { type: 'tween', duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    opacity: { duration: 0.35, ease: 'easeOut' },
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-start pt-32">
      {/* ── BACKGROUND LAYER (SLIDER) — exact original structure ── */}
      <div className="absolute inset-0 z-0">
        {/* Static image behind slider to prevent black flash during initial load */}
        <img src={backgrounds[0]} className="absolute inset-0 w-full h-full object-cover" alt="Background Placeholder" />
        <AnimatePresence initial={false}>
          <motion.img
            key={slide}
            src={backgrounds[Math.min(slide, backgrounds.length - 1)]}
            initial={{ opacity: isFirstRender ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            alt="Conference Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Horizontal gradient — stronger on mobile for readability */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, rgba(2, 6, 23, 0.92) 0%, rgba(2, 6, 23, 0.75) 40%, rgba(2, 6, 23, 0.25) 80%, rgba(2, 6, 23, 0.15) 100%)'
          }}
        ></div>
      </div>

      {/* ── Slider Navigation Buttons ── */}
      <button
        onClick={prev}
        className="hero-slider-btn cursor-pointer !hidden md:!flex items-center justify-center"
        style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          pointerEvents: 'auto',
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>

      <button
        onClick={next}
        className="hero-slider-btn cursor-pointer !hidden md:!flex items-center justify-center"
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          pointerEvents: 'auto',
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>

      {/* ── SLIDE CONTENT ── */}
      <div
        className="relative w-full"
        style={{ zIndex: 10, pointerEvents: 'none' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          {slide === 0 ? (
            /* ── Slide 0: Conference Info ── */
            <motion.div
              key="hero-slide-conference"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="container mx-auto px-6 lg:px-12 pt-16 pb-32"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Column: Visionary Branding */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="hero-label text-emerald-500 mb-4 block">{conferenceInfo.subtitle}</span>
                    <motion.h1
                      className="text-white text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tighter"
                      animate={{
                        scale: [1, 1.02, 1],
                        filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      iSPEC <span className="text-emerald-500">2026</span>
                    </motion.h1>
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium max-w-2xl leading-tight mb-4">
                      {conferenceInfo.theme}
                    </p>
                  </motion.div>
                </div>

                {/* Right Column: Structured Information Box */}
                <div className="lg:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-slate-900/40 backdrop-blur-md border-l-8 border-emerald-500 p-8 md:p-12 shadow-2xl relative overflow-hidden"
                  >
                    {/* Event Details Section */}
                    <div className="space-y-8">
                      <div>
                        <span className="hero-label ">Conference Dates</span>
                        <div className="flex items-center gap-4">
                          <Calendar className="w-8 h-8 text-emerald-500 shrink-0" />
                          <span className="text-white text-2xl md:text-3xl font-bold">{conferenceInfo.date}</span>
                        </div>
                      </div>

                      <div className="hero-divider opacity-20"></div>

                      <div>
                        <span className="hero-label">Location / Venue</span>
                        <div className="flex items-center gap-4 mt-2">
                          <MapPin className="w-8 h-8 text-emerald-500 shrink-0" />

                          <span className="text-white text-2xl md:text-3xl font-bold leading-tight">  
                            {conferenceInfo.venue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Group */}
                    <div className="mt-12 flex flex-col gap-4">
                      <Link to="/call-for-papers" className="w-full">
                        <button className="hero-btn-primary w-full">
                          CALL FOR PAPERS
                        </button>
                      </Link>
                      <Link to="/about" className="w-full">
                        <button className="hero-btn-secondary w-full">
                          DISCOVER MORE
                        </button>
                      </Link>
                    </div>

                    {/* Technical Branding Detail */}
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <FileText className="w-32 h-32 -mr-8 -mt-8 rotate-12" />
                    </div>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ) : (
            /* ── Slide 1: Keynote Speakers ONLY (Separate slide) ── */
            <motion.div
              key="hero-slide-keynotes"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="container mx-auto px-6 lg:px-12 pt-16 pb-32"
              style={{ pointerEvents: 'auto' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  width: '100%',
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '0 8px',
                }}
              >
                {keynoteSpeakers.map((speaker, i) => (
                  <KeynoteCard key={i} speaker={speaker} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── DOT INDICATORS ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 30,
        }}
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: slide === i ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: slide === i ? '#10b981' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        ))}
      </div>

      {/* Decorative Technical Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500/30"></div>
    </section>
  );
};

export default Hero;
