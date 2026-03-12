import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const conferenceInfo = {
    title: 'iSPEC 2026',
    subtitle: 'IEEE PES Kerala Chapter',
    theme: 'Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality',
    date: 'Dec 4 – 6, 2026',
    venue: 'Hyatt Regency, Trivandrum'
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* ── BACKGROUND LAYER (Variation 4 Image) ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/image.png"
          alt="Kerala Landscape"
          className="w-full h-full object-cover"
        />
        {/* Solid Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-950/60"></div>
      </div>

      {/* ── VARIATION 8 BACKGROUND ELEMENTS (3D Perspective Grid - Green) ── */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Perspective Grid from Variation 8 - Emerald tint */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 z-0" style={{
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
        transform: 'perspective(1000px) rotateX(60deg)',
        transformOrigin: 'bottom'
      }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.2) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.2) 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* ── VARIATION 7 BACKGROUND ELEMENTS (Radial rings & Glow - Green) ── */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-emerald-500/10"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Center Glow - Emerald (Reduced Intensity) */}
        <motion.div
          className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      {/* ── VARIATION 7 ELEMENTS (Centered Content) ── */}
      <div className="relative z-10 container mx-auto px-6 pt-40 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle Capsule - Green */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 rounded-full text-sm font-bold mb-8 tracking-wider uppercase"
          >
            {conferenceInfo.subtitle}
          </motion.div>

          {/* Spectacular Title - Solid Color */}
          <motion.h1
            className="text-7xl lg:text-9xl font-extrabold text-white mb-8 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            iSPEC <span className="text-emerald-400">2026</span>
          </motion.h1>

          {/* Theme Text */}
          <motion.p
            className="text-2xl lg:text-3xl text-slate-100 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {conferenceInfo.theme}
          </motion.p>

          {/* CTAs - Solid Colors */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/call-for-papers">
              <motion.button
                className="px-10 py-5 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl flex items-center gap-3"
                whileHover={{ scale: 1.05, backgroundColor: '#059669' }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-6 h-6" />
                Call for Papers
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/about">
              <motion.button
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
              </motion.button>
            </Link>
          </motion.div>

          {/* Info Circles (Date & Venue) - Green */}
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-lg rounded-full border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Calendar className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-semibold text-lg">{conferenceInfo.date}</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-lg rounded-full border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <MapPin className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-semibold text-lg">{conferenceInfo.venue}</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom edge gradient blend - Darker Green/Slate */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
