'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - you can integrate with a service like Formspree, EmailJS, or your own backend
    console.log('Form submitted:', formData)
    alert('Form submitted! (Note: Configure email service in production)')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com', // REPLACE WITH YOUR EMAIL
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX', // REPLACE WITH YOUR PHONE
      href: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile', // REPLACE WITH YOUR LINKEDIN
      href: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourprofile', // REPLACE WITH YOUR GITHUB
      href: 'https://github.com/yourprofile',
    },
  ]

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

  return (
    <section id="contact" ref={ref} className="py-32 relative bg-gradient-to-b from-black via-white/[0.02] to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-sm font-mono text-primary mb-4">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build <span className="text-gradient">Something</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Need an AI system built? Let's talk about how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
                <p className="text-gray-400 mb-8">
                  Reach out directly or use the contact form. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <p className="text-primary font-semibold">Currently Available</p>
                </div>
                <p className="text-gray-400 text-sm">
                  Open to new projects and opportunities. Let's discuss your requirements.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-500 transition-all"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 card-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  Note: Configure email service (Formspree, EmailJS, etc.) for production use
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
