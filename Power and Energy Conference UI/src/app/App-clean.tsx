import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, FileText, ChevronRight, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Variation5, Variation6, Variation7, Variation8 } from './components/HeroVariations';

export default function App() {
  const [currentVariation, setCurrentVariation] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const topBarLinks = [
    'IEEE.org',
    'IEEE Xplore Digital Library',
    'IEEE Standards',
    'IEEE Spectrum'
  ];

  const navLinks = [
    'HOME',
    'ABOUT',
    'REGISTRATION',
    'SPONSORSHIP',
    'COMMITTEE',
    'CONTACT'
  ];

  const conferenceInfo = {
    title: 'iSPEC 2026',
    subtitle: 'IEEE PES Kerala Chapter',
    theme: 'Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality',
    date: 'Dec 4 – 6, 2026',
    venue: 'Hyatt Regency, Trivandrum'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Variation Selector */}
      <div className="fixed top-4 right-4 z-50 flex flex-wrap gap-2 max-w-[200px]">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentVariation(num)}
            className={`w-10 h-10 rounded-full font-semibold transition-all ${
              currentVariation === num
                ? 'bg-blue-600 text-white shadow-lg scale-110'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Render Current Variation */}
      {currentVariation === 1 && <Variation1 topBarLinks={topBarLinks} navLinks={navLinks} conferenceInfo={conferenceInfo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />}
      {currentVariation === 2 && <Variation2 topBarLinks={topBarLinks} navLinks={navLinks} conferenceInfo={conferenceInfo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />}
      {currentVariation === 3 && <Variation3 topBarLinks={topBarLinks} navLinks={navLinks} conferenceInfo={conferenceInfo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />}
      {currentVariation === 4 && <Variation4 topBarLinks={topBarLinks} navLinks={navLinks} conferenceInfo={conferenceInfo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />}
      {currentVariation === 5 && <Variation5 topBarLinks={topBarLinks} navLinks={navLinks} conferenceInfo={conferenceInfo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} TopBar={TopBar} Navigation={Navigation} />}
      {currentVariation === 6 && <Variation6 topBarLinks={topBarLinks} navLinks={navLinks} conferenceInfo={conferenceInfo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} TopBar={TopBar} Navigation={Navigation} />}
      {currentVariation === 7 && <Variation7 topBarLinks={topBarLinks} navLinks={navLinks} conferenceInfo={conferenceInfo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} TopBar={TopBar} Navigation={Navigation} />}
      {currentVariation === 8 && <Variation8 topBarLinks={topBarLinks} navLinks={navLinks} conferenceInfo={conferenceInfo} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} TopBar={TopBar} Navigation={Navigation} />}
    </div>
  );
}

// Variation 1: Classic Gradient Overlay with Parallax
function Variation1({ topBarLinks, navLinks, conferenceInfo, mobileMenuOpen, setMobileMenuOpen }: any) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646801800358-8059e6d46115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcml2YW5kcnVtJTIwS2VyYWxhJTIwbGFuZHNjYXBlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MzMzMTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Trivandrum Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-teal-600/80"></div>
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Top Bar */}
      <TopBar links={topBarLinks} />

      {/* Navigation */}
      <Navigation navLinks={navLinks} logo={conferenceInfo.title} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-teal-300 font-semibold mb-4 text-lg tracking-wide">
              {conferenceInfo.subtitle}
            </div>
          </motion.div>

          <motion.h1
            className="text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {conferenceInfo.title}
          </motion.h1>

          <motion.div
            className="text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {conferenceInfo.theme}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 text-white">
              <Calendar className="w-6 h-6 text-teal-300" />
              <span className="text-lg">{conferenceInfo.date}</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-6 h-6 text-teal-300" />
              <span className="text-lg">{conferenceInfo.venue}</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="group px-8 py-4 bg-teal-500 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-teal-400 transition-all shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Call for Papers
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Variation 2: Split Screen with Diagonal Gradient
function Variation2({ topBarLinks, navLinks, conferenceInfo, mobileMenuOpen, setMobileMenuOpen }: any) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Top Bar */}
      <TopBar links={topBarLinks} />

      {/* Navigation */}
      <Navigation navLinks={navLinks} logo={conferenceInfo.title} dark mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <div className="relative z-10 grid lg:grid-cols-2 min-h-[calc(100vh-120px)] pt-20">
        {/* Left Content */}
        <div className="flex items-center px-12 py-16 lg:py-0">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full text-sm font-semibold mb-6"
            >
              {conferenceInfo.subtitle}
            </motion.div>

            <motion.h1
              className="text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {conferenceInfo.title}
            </motion.h1>

            <motion.div
              className="text-xl text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {conferenceInfo.theme}
            </motion.div>

            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-3 text-slate-200">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-lg">{conferenceInfo.date}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <div className="p-2 bg-teal-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <span className="text-lg">{conferenceInfo.venue}</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold text-lg flex items-center gap-2 shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
                Call for Papers
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border-2 border-white/20 hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Image with Gradient */}
        <motion.div 
          className="relative h-full min-h-[500px] lg:min-h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1720445821834-1db9c765cb82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwcGFsbSUyMHRyZWVzfGVufDF8fHx8MTc3MzMzMTkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Kerala Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-transparent to-teal-600/40"></div>
          
          {/* Animated Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

// Variation 3: Minimal Modern with Floating Elements
function Variation3({ topBarLinks, navLinks, conferenceInfo, mobileMenuOpen, setMobileMenuOpen }: any) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
            backgroundSize: '400% 400%'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Floating Image Cards */}
      <motion.div
        className="absolute top-32 right-20 w-80 h-64 rounded-2xl overflow-hidden shadow-2xl z-0 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [2, -2, 2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646801800358-8059e6d46115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcml2YW5kcnVtJTIwS2VyYWxhJTIwbGFuZHNjYXBlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MzMzMTkwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Trivandrum"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-[500px] w-64 h-48 rounded-2xl overflow-hidden shadow-2xl z-0 hidden xl:block"
        animate={{
          y: [0, 20, 0],
          rotate: [-3, 3, -3]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1715322280585-9e13e0e5cb58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcml2YW5kcnVtJTIwYmVhY2glMjBjb2FzdGxpbmUlMjBhZXJpYWx8ZW58MXx8fHwxNzczMzMxOTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kerala Beach"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Top Bar */}
      <TopBar links={topBarLinks} dark />

      {/* Navigation */}
      <Navigation navLinks={navLinks} logo={conferenceInfo.title} dark mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-40 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-6 border border-white/30"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            {conferenceInfo.subtitle}
          </motion.div>

          <motion.h1
            className="text-8xl font-bold text-white mb-8 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {conferenceInfo.title}
          </motion.h1>

          <motion.div
            className="text-2xl text-white/90 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {conferenceInfo.theme}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <Calendar className="w-6 h-6 text-white" />
              <span className="text-white font-medium">{conferenceInfo.date}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <MapPin className="w-6 h-6 text-white" />
              <span className="text-white font-medium">{conferenceInfo.venue}</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg flex items-center gap-2 shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Call for Papers
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-xl font-bold text-lg border-2 border-white/40 hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Variation 4: Layered with Parallax Cards
function Variation4({ topBarLinks, navLinks, conferenceInfo, mobileMenuOpen, setMobileMenuOpen }: any) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1720445821834-1db9c765cb82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwcGFsbSUyMHRyZWVzfGVufDF8fHx8MTc3MzMzMTkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kerala Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-blue-900/95"></div>
      </div>

      {/* Animated Particle Grid */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Top Bar */}
      <TopBar links={topBarLinks} dark />

      {/* Navigation */}
      <Navigation navLinks={navLinks} logo={conferenceInfo.title} dark mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-400/30 text-blue-300 rounded-lg text-sm font-semibold backdrop-blur-sm">
                {conferenceInfo.subtitle}
              </div>
            </motion.div>

            <motion.h1
              className="text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {conferenceInfo.title}
            </motion.h1>

            <motion.div
              className="text-xl text-slate-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {conferenceInfo.theme}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold text-lg flex items-center gap-2 shadow-2xl overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <FileText className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Call for Papers</span>
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border-2 border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
              </motion.button>
            </motion.div>
          </div>

          {/* Right Info Cards */}
          <div className="space-y-6">
            <motion.div
              className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Calendar className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Conference Dates</div>
                    <div className="text-2xl font-bold text-white">{conferenceInfo.date}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-teal-500/20 rounded-xl">
                    <MapPin className="w-8 h-8 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Venue</div>
                    <div className="text-2xl font-bold text-white">{conferenceInfo.venue}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative p-8 bg-gradient-to-br from-blue-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-blue-400/20 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-xl">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Paper Submission</div>
                    <div className="text-xl font-bold text-white">Now Open</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Shared Components
function TopBar({ links, dark = false }: { links: string[], dark?: boolean }) {
  return (
    <div className={`relative z-20 border-b ${dark ? 'border-white/10 bg-black/20' : 'border-white/20 bg-white/10'} backdrop-blur-sm`}>
      <div className="container mx-auto px-6 py-2">
        <div className="flex justify-end gap-6 text-sm">
          {links.map((link, i) => (
            <a
              key={i}
              href="#"
              className={`${dark ? 'text-slate-300 hover:text-white' : 'text-white/80 hover:text-white'} transition-colors hidden md:block`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navigation({ navLinks, logo, dark = false, mobileMenuOpen, setMobileMenuOpen }: any) {
  return (
    <nav className="relative z-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {logo}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link: string, i: number) => (
              <motion.a
                key={i}
                href="#"
                className={`${dark ? 'text-slate-300 hover:text-white' : 'text-white/90 hover:text-white'} font-medium transition-colors relative group`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 py-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link: string, i: number) => (
              <a
                key={i}
                href="#"
                className={`block ${dark ? 'text-slate-300 hover:text-white' : 'text-white/90 hover:text-white'} font-medium transition-colors py-2`}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
