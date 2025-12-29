'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Download, Briefcase, Code } from 'lucide-react'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const experience = [
    {
      title: 'Product Engineer & AI Systems Builder',
      company: 'Independent / Freelance',
      period: '2021 - Present',
      achievements: [
        'Built and deployed 10+ production AI systems including RAG chatbots, hiring platforms, and automation tools',
        'Architected multi-tenant SaaS platforms serving 1000+ users across edtech, hiring, and civic-tech domains',
        'Developed AI-powered interview system processing 500+ candidates with automated speech and facial analysis',
        'Created Google Business Profile automation reducing manual SEO work by 20+ hours/week',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Various SaaS Projects',
      period: '2020 - 2021',
      achievements: [
        'Led development of Flutter mobile applications with real-time backend integration',
        'Built admin dashboards and role-based access systems for enterprise clients',
        'Implemented payment gateways and subscription management for SaaS products',
        'Optimized database queries reducing API response time by 60%',
      ],
    },
  ]

  const coreSkills = [
    { name: 'AI System Architecture', color: 'from-primary to-emerald-400' },
    { name: 'RAG & Vector Databases', color: 'from-secondary to-blue-400' },
    { name: 'Full-Stack Development', color: 'from-purple-400 to-pink-400' },
    { name: 'Cloud Infrastructure (Azure)', color: 'from-orange-400 to-red-400' },
    { name: 'API Design & Integration', color: 'from-cyan-400 to-blue-500' },
    { name: 'Database Optimization', color: 'from-green-400 to-emerald-500' },
    { name: 'Product Strategy', color: 'from-pink-400 to-purple-500' },
    { name: 'System Scalability', color: 'from-yellow-400 to-orange-500' },
  ]

  // Auto-rotate core skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % coreSkills.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [coreSkills.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const skillVariants = {
    enter: {
      y: 50,
      opacity: 0,
      scale: 0.8,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.8,
    },
  }

  return (
    <section id="resume" ref={ref} className="py-32 relative bg-gradient-to-b from-black via-white/[0.02] to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-sm font-mono text-primary mb-4">RESUME</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Professional <span className="text-gradient">Background</span>
              </h3>
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all card-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white">Experience</h4>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />

                  <div className="pb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h5 className="text-xl font-bold text-white">{job.title}</h5>
                      <span className="text-sm text-primary font-mono">{job.period}</span>
                    </div>
                    <p className="text-gray-400 mb-4 font-medium">{job.company}</p>

                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-primary mt-1.5 text-lg">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Skills - Auto-rotating */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Code className="text-secondary" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white">Core Capabilities</h4>
            </div>

            {/* Auto-rotating Skill Display */}
            <div className="relative h-[200px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSkillIndex}
                  variants={skillVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute w-full max-w-2xl"
                >
                  <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${coreSkills[currentSkillIndex].color} opacity-10 rounded-2xl`} />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mb-4 inline-block"
                      >
                        <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${coreSkills[currentSkillIndex].color} p-0.5`}>
                          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                            <Code className="text-white" size={28} />
                          </div>
                        </div>
                      </motion.div>

                      <h5 className="text-3xl font-bold text-white mb-3">
                        {coreSkills[currentSkillIndex].name}
                      </h5>

                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <span>{currentSkillIndex + 1}</span>
                        <span>/</span>
                        <span>{coreSkills.length}</span>
                        <span className="ml-2">Core Capabilities</span>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${coreSkills[currentSkillIndex].color} opacity-0 hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  key={currentSkillIndex}
                />
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {coreSkills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkillIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSkillIndex
                      ? 'bg-primary w-8'
                      : 'bg-white/20 hover:bg-white/40 w-2'
                  }`}
                  aria-label={`Go to ${coreSkills[index].name}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Note */}
          <motion.div variants={itemVariants} className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-gray-300 text-center">
              <span className="text-primary font-semibold">Note:</span> This is a summarized version.
              Download the full resume for detailed project descriptions and technical specifications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
