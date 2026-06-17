'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface PageBackgroundProps {
  showParticles?: boolean
  particleCount?: number
}

export const PageBackground = ({
  showParticles = false,
  particleCount = 10,
}: PageBackgroundProps) => {
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: `${((i * 17 + 13) % 100)}%`,
        top: `${((i * 23 + 7) % 100)}%`,
        duration: 10 + (i % 5) * 2,
        xEnd: `${((i * 31 + 19) % 100)}%`,
        yEnd: `${((i * 37 + 11) % 100)}%`,
      })),
    [particleCount],
  )

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181822_1px,transparent_1px),linear-gradient(to_bottom,#18181822_1px,transparent_1px)] bg-[size:24px_24px]" />
      {showParticles &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 bg-brand/20 rounded-full pointer-events-none"
            animate={{
              x: ['0%', p.xEnd],
              y: ['0%', p.yEnd],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            style={{ left: p.left, top: p.top }}
          />
        ))}
    </>
  )
}
