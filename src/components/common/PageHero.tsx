'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  gradient?: boolean
}

export const PageHero = ({ title, subtitle, gradient = true }: PageHeroProps) => (
  <section className="relative z-10 pt-40 pb-12">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1
          className={
            gradient
              ? 'text-4xl md:text-5xl font-bold mb-6 heading-brand-gradient'
              : 'text-3xl md:text-4xl font-bold mb-6 text-white'
          }
        >
          {title}
        </h1>
        {subtitle && <p className="text-xl text-brand-muted">{subtitle}</p>}
      </motion.div>
    </div>
  </section>
)
