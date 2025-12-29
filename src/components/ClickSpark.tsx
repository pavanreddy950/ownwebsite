'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Spark {
  id: number
  x: number
  y: number
}

export default function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSpark: Spark = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }

      setSparks((prev) => [...prev, newSpark])

      // Remove spark after animation
      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id))
      }, 1000)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {sparks.map((spark) => (
          <div key={spark.id} className="absolute" style={{ left: spark.x, top: spark.y }}>
            {/* Center burst */}
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-primary"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 0, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.8)',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Spark particles - 8 directions */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180
              const distance = 40 + Math.random() * 20
              const endX = Math.cos(angle) * distance
              const endY = Math.sin(angle) * distance

              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1
                  }}
                  animate={{
                    x: endX,
                    y: endY,
                    scale: 0,
                    opacity: 0
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6 + Math.random() * 0.2,
                    ease: 'easeOut'
                  }}
                  style={{
                    boxShadow: '0 0 10px rgba(0, 255, 136, 0.6)',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )
            })}

            {/* Small secondary particles */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180
              const distance = 20 + Math.random() * 15
              const endX = Math.cos(angle) * distance
              const endY = Math.sin(angle) * distance

              return (
                <motion.div
                  key={`small-${i}`}
                  className="absolute w-0.5 h-0.5 rounded-full"
                  style={{
                    backgroundColor: i % 3 === 0 ? '#00ff88' : i % 3 === 1 ? '#00ddff' : '#ff0088',
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 0.8
                  }}
                  animate={{
                    x: endX,
                    y: endY,
                    scale: 0,
                    opacity: 0
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.4 + Math.random() * 0.3,
                    ease: 'easeOut',
                    delay: Math.random() * 0.1,
                  }}
                  style={{
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )
            })}

            {/* Expanding ring */}
            <motion.div
              className="absolute border-2 border-primary rounded-full"
              initial={{
                width: 10,
                height: 10,
                opacity: 0.6,
                x: -5,
                y: -5,
              }}
              animate={{
                width: 80,
                height: 80,
                opacity: 0,
                x: -40,
                y: -40,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />

            {/* Second expanding ring - delayed */}
            <motion.div
              className="absolute border border-secondary rounded-full"
              initial={{
                width: 5,
                height: 5,
                opacity: 0.4,
                x: -2.5,
                y: -2.5,
              }}
              animate={{
                width: 100,
                height: 100,
                opacity: 0,
                x: -50,
                y: -50,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}
