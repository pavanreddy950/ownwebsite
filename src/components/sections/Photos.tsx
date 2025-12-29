'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Photos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  /*
   * INSTRUCTIONS FOR ADDING PHOTOS:
   * 1. Place your professional photos in the /public/photos/ directory
   * 2. Update the 'photos' array below with your image filenames
   * 3. Recommended: Use high-quality, professional photos
   * 4. Formats: JPG, PNG, or WebP
   * 5. Recommended sizes: 800x1000px for portrait, 1200x800px for landscape
   */

  const photos = [
    {
      src: '/my photo.png', // Replace with your actual photo path
      alt: 'K. Pavan Reddy - Professional Photo 1',
      featured: true,
    },
    {
      src: '/photos/photo2.jpg', // Replace with your actual photo path
      alt: 'K. Pavan Reddy - Professional Photo 2',
      featured: false,
    },
    {
      src: '/photos/photo3.jpg', // Replace with your actual photo path
      alt: 'K. Pavan Reddy - Professional Photo 3',
      featured: false,
    },
    {
      src: '/photos/photo4.jpg', // Replace with your actual photo path
      alt: 'K. Pavan Reddy - Professional Photo 4',
      featured: false,
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="photos" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-sm font-mono text-primary mb-4">GALLERY</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Behind the <span className="text-gradient">Code</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional photos and moments from my journey building production systems.
            </p>
          </motion.div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl ${
                  photo.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square w-full overflow-hidden bg-white/5">
                  {/* Image Container */}
                  <div className="w-full h-full relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes={photo.featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
                    />
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-sm font-medium">{photo.alt}</p>
                    </div>
                  </div>

                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note for placeholders */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Add your professional photos to /public/photos/ and update the paths in Photos.tsx
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
