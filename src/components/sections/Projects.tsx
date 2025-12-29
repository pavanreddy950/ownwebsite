'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Briefcase, MessageSquare, TrendingUp, Phone } from 'lucide-react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      icon: Briefcase,
      title: 'JobSpring',
      subtitle: 'AI-Powered Hiring & Interview Platform',
      problem: 'Traditional hiring is slow, manual, and doesn\'t scale. Companies waste hours screening candidates who aren\'t a good fit.',
      solution: 'Built an end-to-end AI hiring platform that automates interviews, analyzes speech and facial patterns, includes coding panels, and processes bulk candidates. Integrated with colleges and companies for seamless recruitment pipelines.',
      tech: ['Azure OpenAI', 'Face Analysis API', 'Speech Recognition', 'Node.js', 'React', 'PostgreSQL'],
      impact: 'Reduced hiring time by 70%. Processed 1000+ candidates with automated scoring.',
      gradient: 'from-primary to-emerald-500',
    },
    {
      icon: MessageSquare,
      title: 'RAG-Based Chatbot',
      subtitle: 'Enterprise IPTV Support System',
      problem: 'Customer support teams need accurate, domain-specific answers without AI hallucination risks.',
      solution: 'Designed and deployed a RAG chatbot using Azure OpenAI embeddings with strict domain restriction. Built an admin dashboard for content control, ensuring production-safe responses with zero hallucinations.',
      tech: ['Azure OpenAI', 'Vector Database', 'Embeddings', 'Admin Dashboard', 'Domain Control'],
      impact: 'Handles 80% of support queries autonomously. 95% accuracy rate with zero hallucinations.',
      gradient: 'from-secondary to-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'Google Business Profile SEO Automation',
      subtitle: 'Multi-Location SEO Management System',
      problem: 'Managing Google Business Profiles for multiple locations is time-consuming. Manual posts, review replies, and SEO audits don\'t scale.',
      solution: 'Built an automation platform that schedules posts, auto-replies to reviews, runs SEO audits, and generates QR codes for review requests. Centralized dashboard for multi-location management.',
      tech: ['Google Business API', 'Automation Engine', 'QR Generation', 'Analytics Dashboard'],
      impact: 'Automated 100% of routine SEO tasks. 3x increase in review volume. Saved 20+ hours/week.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'AI Voice Bot / Call Center System',
      subtitle: 'Multilingual Automated Complaint Handling',
      problem: 'Civic complaint centers are overwhelmed with repetitive calls. Manual logging is error-prone and slow.',
      solution: 'Developed an AI voice bot supporting English, Hindi, and Gujarati. Automatically detects addresses, ward numbers, and issue types. Routes complaints intelligently and maintains accurate logs.',
      tech: ['Speech-to-Text', 'NLP', 'Multi-language Support', 'Call Routing', 'Database Integration'],
      impact: 'Handles 500+ calls/day. Reduced manual workload by 85%. Improved complaint resolution time.',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

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

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">FEATURED WORK</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Systems Built for <span className="text-gradient">Production</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl">
              Real products. Real users. Real impact. These aren't side projects—they're production systems
              handling complexity at scale.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative p-8 lg:p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                      {/* Left: Icon & Title */}
                      <div className="lg:w-1/3">
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5 mb-4`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                            <project.icon className="text-white" size={28} />
                          </div>
                        </motion.div>

                        <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                        <p className="text-primary font-medium mb-4">{project.subtitle}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Details */}
                      <div className="lg:w-2/3 space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold text-primary mb-2">Problem</h5>
                          <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                        </div>

                        <div>
                          <h5 className="text-sm font-semibold text-primary mb-2">Solution</h5>
                          <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                        </div>

                        <div className="pt-2">
                          <h5 className="text-sm font-semibold text-primary mb-2">Impact</h5>
                          <p className="text-white font-medium">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Interested in working together?</p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
