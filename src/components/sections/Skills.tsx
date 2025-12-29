'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Brain, Database, Boxes, Smartphone, TrendingUp, Award, Zap, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const skillCategories = [
    {
      icon: Brain,
      title: 'AI & Automation',
      color: 'from-primary to-emerald-400',
      skills: [
        'Azure OpenAI Integration',
        'RAG Systems & Vector DBs',
        'LangChain & Semantic Kernel',
        'Domain-Restricted Chatbots',
        'AI Interview Systems',
        'Speech & Face Analysis',
        'Workflow Automation',
        'API Orchestration',
      ],
      backContent: {
        experience: '3+ Years',
        projects: '10+ Production Systems',
        highlight: 'Built enterprise RAG chatbots with zero hallucinations',
        stats: [
          { label: 'AI Projects', value: '15+' },
          { label: 'Users Served', value: '10K+' },
          { label: 'Uptime', value: '99.9%' },
        ],
      },
    },
    {
      icon: Database,
      title: 'Backend & Systems',
      color: 'from-secondary to-blue-400',
      skills: [
        'Node.js & Python',
        'ASP.NET Core',
        'PostgreSQL & MongoDB',
        'Redis & Caching',
        'REST & GraphQL APIs',
        'Microservices Architecture',
        'Azure Cloud Services',
        'Docker & Containerization',
      ],
      backContent: {
        experience: '4+ Years',
        projects: '20+ API Systems',
        highlight: 'Optimized queries reducing response time by 60%',
        stats: [
          { label: 'APIs Built', value: '50+' },
          { label: 'DB Queries/sec', value: '10K+' },
          { label: 'Services', value: '15+' },
        ],
      },
    },
    {
      icon: Boxes,
      title: 'Product & SaaS',
      color: 'from-purple-400 to-pink-400',
      skills: [
        'Full-Stack Development',
        'Product Architecture',
        'Multi-Tenant Systems',
        'Admin Dashboards',
        'Role-Based Access Control',
        'Payment Integration',
        'Analytics & Reporting',
        'SEO & Performance',
      ],
      backContent: {
        experience: '3+ Years',
        projects: '8+ SaaS Platforms',
        highlight: 'Architected multi-tenant systems serving 1000+ users',
        stats: [
          { label: 'SaaS Built', value: '8+' },
          { label: 'Active Users', value: '5K+' },
          { label: 'Revenue Gen', value: '$$$' },
        ],
      },
    },
    {
      icon: Smartphone,
      title: 'Frontend & Mobile',
      color: 'from-orange-400 to-red-400',
      skills: [
        'React & Next.js',
        'Flutter (Production Apps)',
        'TypeScript',
        'Tailwind CSS',
        'State Management',
        'Responsive Design',
        'Animation & UX',
        'Progressive Web Apps',
      ],
      backContent: {
        experience: '4+ Years',
        projects: '12+ Applications',
        highlight: 'Built Flutter apps with 50K+ downloads',
        stats: [
          { label: 'Apps Shipped', value: '12+' },
          { label: 'Downloads', value: '50K+' },
          { label: 'Platforms', value: '4' },
        ],
      },
    },
  ]

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % skillCategories.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [skillCategories.length])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % skillCategories.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length)
  }

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const category = skillCategories[currentIndex]

  return (
    <section id="skills" ref={ref} className="py-32 relative bg-gradient-to-b from-black via-white/[0.02] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-sm font-mono text-primary mb-4">CAPABILITIES</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              What I <span className="text-gradient">Build With</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Focused on outcomes, not frameworks. These are the tools I use to ship production systems.
            </p>
            <motion.div
              className="mt-6 inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
                <span className="text-sm font-bold text-primary">Auto-rotating • Use arrows to navigate</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Carousel Container */}
          <motion.div variants={itemVariants} className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all group"
              aria-label="Previous skill"
            >
              <ChevronLeft className="text-gray-400 group-hover:text-primary transition-colors" size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all group"
              aria-label="Next skill"
            >
              <ChevronRight className="text-gray-400 group-hover:text-primary transition-colors" size={24} />
            </button>

            {/* Card Container */}
            <div className="relative h-[600px] flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                  }}
                  className="absolute w-full max-w-4xl"
                >
                  <div className="relative p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 overflow-hidden">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-2xl`} />

                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="flex items-center justify-center gap-6 mb-8">
                        <motion.div
                          className={`w-20 h-20 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                            <category.icon className="text-white" size={32} />
                          </div>
                        </motion.div>
                        <h4 className="text-4xl font-bold text-white">{category.title}</h4>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left: Skills */}
                        <div>
                          <h5 className="text-lg font-semibold text-primary mb-4">Technologies</h5>
                          <div className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: skillIndex * 0.1 }}
                                className="flex items-center gap-3 text-gray-300"
                              >
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                                <span className="text-base">{skill}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Right: Stats & Experience */}
                        <div className="space-y-6">
                          <div>
                            <h5 className="text-lg font-semibold text-primary mb-4">Experience</h5>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Award className="text-primary" size={18} />
                                <span className="text-gray-300">
                                  <span className="text-white font-semibold">{category.backContent.experience}</span> of expertise
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="text-secondary" size={18} />
                                <span className="text-gray-300">
                                  <span className="text-white font-semibold">{category.backContent.projects}</span>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Highlight */}
                          <div className="p-4 rounded-lg bg-white/5 border border-primary/20">
                            <div className="flex items-start gap-2">
                              <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <p className="text-sm text-gray-300 leading-relaxed">{category.backContent.highlight}</p>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-3">
                            {category.backContent.stats.map((stat, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                                className="text-center p-3 rounded-lg bg-black/30 border border-white/10"
                              >
                                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                                <div className="text-xs text-gray-400">{stat.label}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to ${skillCategories[index].title}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              This is not a comprehensive list. I learn what's needed to solve the problem.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
