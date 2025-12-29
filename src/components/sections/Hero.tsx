'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/*
        ====================================
        3D BACKGROUND PLACEHOLDER
        ====================================
        Add your React Three Fiber / particles animation here.
        Recommended libraries:
        - react-three-fiber for 3D effects
        - react-particles for particle effects
        - framer-motion 3D for advanced animations

        Example structure:
        <div className="particles-container">
          <YourParticlesComponent />
        </div>
      */}
      <div className="particles-container">
        {/* Placeholder gradient overlay for now */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="text-white">K. Pavan Reddy</span>
            </motion.h1>

            {/* Positioning Statement */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient glow-text">
                Product Engineer & AI Systems Builder
              </h2>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed"
            >
              I build AI-powered products and automation systems that ship to production.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
            >
              From RAG-based chatbots to enterprise SaaS platforms, I create systems that solve real problems at scale.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="group px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 card-glow"
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 255, 136, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-2 gap-6"
            >
              {[
                { value: '10+', label: 'Production Apps' },
                { value: '5+', label: 'AI Systems' },
                { value: '3+', label: 'Years Building' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Animated rings around photo */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-[400px] h-[400px] rounded-full border border-primary/20" />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-[450px] h-[450px] rounded-full border border-secondary/10" />
            </motion.div>

            {/* Profile Photo */}
            <div className="relative z-10">
              <motion.div
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect behind photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-3xl rounded-full" />

                {/* Photo container with gradient border */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                    <Image
                      src="/my photo.png"
                      alt="K. Pavan Reddy - Product Engineer & AI Systems Builder"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 300px, 400px"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
