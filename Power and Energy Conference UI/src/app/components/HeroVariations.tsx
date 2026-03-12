import { motion } from 'motion/react';
import { Calendar, MapPin, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Variation 5: Glassmorphism Full-Screen with Energy Theme
export function Variation5({ topBarLinks, navLinks, conferenceInfo, mobileMenuOpen, setMobileMenuOpen, TopBar, Navigation }: any) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1714330629244-6e47157e210a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneSUyMHN1bnNldHxlbnwxfHx8fDE3NzMzMzIxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Renewable Energy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-pink-900/70"></div>
      </div>

      {/* Top Bar */}
      <TopBar links={topBarLinks} dark />

      {/* Navigation */}
      <Navigation navLinks={navLinks} logo={conferenceInfo.title} dark mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Glassmorphic Cards Grid */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Content Card */}
          <motion.div
            className="lg:col-span-7 p-10 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-300/30 text-cyan-200 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {conferenceInfo.subtitle}
            </motion.div>

            <motion.h1
              className="text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {conferenceInfo.title}
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {conferenceInfo.theme}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
                Call for Papers
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white/30"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              className="p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Calendar className="w-10 h-10 text-cyan-300 mb-4" />
              <div className="text-sm text-white/60 mb-1">Event Dates</div>
              <div className="text-2xl font-bold text-white">{conferenceInfo.date}</div>
            </motion.div>

            <motion.div
              className="p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <MapPin className="w-10 h-10 text-pink-300 mb-4" />
              <div className="text-sm text-white/60 mb-1">Location</div>
              <div className="text-2xl font-bold text-white">{conferenceInfo.venue}</div>
            </motion.div>

            <motion.div
              className="p-6 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/60 mb-1">Submissions</div>
                  <div className="text-xl font-bold text-white">Open Now</div>
                </div>
                <div className="p-3 bg-white/20 rounded-full">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Variation 6: Bento Grid Layout with Energy Focus
export function Variation6({ topBarLinks, navLinks, conferenceInfo, mobileMenuOpen, setMobileMenuOpen, TopBar, Navigation }: any) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/50 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/50 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[128px]"></div>
      </div>

      {/* Top Bar */}
      <TopBar links={topBarLinks} dark />

      {/* Navigation */}
      <Navigation navLinks={navLinks} logo={conferenceInfo.title} dark mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Bento Grid */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-[600px]">
          {/* Large Main Card */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 p-10 bg-gradient-to-br from-blue-600/20 to-green-600/20 backdrop-blur-sm rounded-3xl border border-white/10 flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 bg-green-400/20 text-green-300 rounded-full text-sm font-semibold mb-6 w-fit">
              {conferenceInfo.subtitle}
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-none">
              {conferenceInfo.title}
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-xl">
              {conferenceInfo.theme}
            </p>

            <div className="flex gap-4">
              <motion.button
                className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
                Submit Paper
              </motion.button>

              <motion.button
                className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Date Card */}
          <motion.div
            className="lg:col-span-1 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 flex flex-col justify-between min-h-[200px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <Calendar className="w-12 h-12 text-blue-400 mb-4" />
            <div>
              <div className="text-sm text-slate-400 mb-2">Conference Dates</div>
              <div className="text-2xl font-bold text-white">{conferenceInfo.date}</div>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            className="lg:col-span-1 lg:row-span-2 rounded-3xl overflow-hidden border border-white/10 relative min-h-[300px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1685677260082-dbec4b1303ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBhcmNoaXRlY3R1cmUlMjB0ZW1wbGUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzMzMzIxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Kerala Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>

          {/* Venue Card */}
          <motion.div
            className="lg:col-span-1 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 flex flex-col justify-between min-h-[200px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <MapPin className="w-12 h-12 text-green-400 mb-4" />
            <div>
              <div className="text-sm text-slate-400 mb-2">Venue</div>
              <div className="text-xl font-bold text-white">{conferenceInfo.venue}</div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="lg:col-span-2 p-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">3</div>
                <div className="text-sm text-slate-400">Days Event</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-slate-400">Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-slate-400">Attendees</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Variation 7: Radial Design with Animated Rings
export function Variation7({ topBarLinks, navLinks, conferenceInfo, mobileMenuOpen, setMobileMenuOpen, TopBar, Navigation }: any) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Radial Rings */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-blue-400/20"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Center Glow */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Top Bar */}
      <TopBar links={topBarLinks} dark />

      {/* Navigation */}
      <Navigation navLinks={navLinks} logo={conferenceInfo.title} dark mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Center Content */}
      <div className="relative z-10 container mx-auto px-6 pt-40 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold mb-8"
          >
            {conferenceInfo.subtitle}
          </motion.div>

          <motion.h1
            className="text-7xl lg:text-8xl font-bold text-white mb-8 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {conferenceInfo.title}
          </motion.h1>

          <motion.p
            className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {conferenceInfo.theme}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-10 py-5 bg-blue-500 text-white rounded-full font-bold text-lg shadow-2xl flex items-center gap-3"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-6 h-6" />
              Call for Papers
            </motion.button>

            <motion.button
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.button>
          </motion.div>

          {/* Info Circles */}
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Calendar className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">{conferenceInfo.date}</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">{conferenceInfo.venue}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Variation 8: 3D Perspective with Hovering Cards
export function Variation8({ topBarLinks, navLinks, conferenceInfo, mobileMenuOpen, setMobileMenuOpen, TopBar, Navigation }: any) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Perspective Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 z-0" style={{
        background: 'linear-gradient(to top, rgba(59,130,246,0.2) 0%, transparent 100%)',
        transform: 'perspective(1000px) rotateX(60deg)',
        transformOrigin: 'bottom'
      }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59,130,246,0.3) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(59,130,246,0.3) 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Top Bar */}
      <TopBar links={topBarLinks} dark />

      {/* Navigation */}
      <Navigation navLinks={navLinks} logo={conferenceInfo.title} dark mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-400/40 text-cyan-300 rounded-lg text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <motion.div
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {conferenceInfo.subtitle}
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                textShadow: '0 0 80px rgba(59,130,246,0.5)'
              }}
            >
              {conferenceInfo.title}
            </motion.h1>

            <motion.p
              className="text-xl text-slate-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {conferenceInfo.theme}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Call for Papers
                </span>
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border-2 border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
              </motion.button>
            </motion.div>
          </div>

          {/* Right Floating Cards */}
          <div className="relative h-[500px] hidden lg:block">
            <motion.div
              className="absolute top-0 right-0 w-80 p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/30 rounded-xl">
                  <Calendar className="w-8 h-8 text-blue-300" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Conference Dates</div>
                  <div className="text-2xl font-bold text-white">{conferenceInfo.date}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-32 right-20 w-80 p-8 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
              initial={{ opacity: 0, x: 50, y: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                y: -10,
                rotateY: -5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/30 rounded-xl">
                  <MapPin className="w-8 h-8 text-cyan-300" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Venue</div>
                  <div className="text-xl font-bold text-white">{conferenceInfo.venue}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-64 right-10 w-72 p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
              initial={{ opacity: 0, x: 50, y: 40 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400 mb-1">Paper Submission</div>
                  <div className="text-xl font-bold text-white">Open Now</div>
                </div>
                <motion.div 
                  className="p-3 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full"
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <FileText className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
