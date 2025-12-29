'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Zap, Target, Layers } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const principles = [
    {
      icon: Code2,
      title: 'Production-First',
      description: 'Every line of code is written with deployment, scaling, and real-world usage in mind.',
    },
    {
      icon: Zap,
      title: 'Ship Fast',
      description: 'Speed matters. I build MVPs that evolve into production systems without technical debt.',
    },
    {
      icon: Target,
      title: 'Outcome-Driven',
      description: 'Features exist to solve problems. If it doesn\'t add value, it doesn\'t ship.',
    },
    {
      icon: Layers,
      title: 'Systems Thinking',
      description: 'I design architectures that handle complexity, not quick fixes that create it.',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">ABOUT</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Building systems that <span className="text-gradient">actually work</span>
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a product engineer who specializes in building AI-powered systems that ship to production.
                Not prototypes. Not demos. Real products that handle real users and real complexity.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My work spans RAG-based chatbots with strict domain control, AI-powered hiring platforms,
                automation systems for SEO and business operations, and full-stack SaaS applications
                across edtech, hiring, ERP, and civic-tech domains.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I don't just write code. I architect systems, design user experiences, optimize for scale,
                and ensure every feature delivers measurable impact.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold text-white mb-4">What I Focus On:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>AI systems that are safe, controlled, and production-ready</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Automation platforms that reduce manual work and increase efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>SaaS products that solve complex business problems at scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Mobile and web applications with exceptional UX</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Principles */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-8">How I Work</h4>

              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group p-6 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <principle.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">{principle.title}</h5>
                      <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
