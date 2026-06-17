'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/common/GlassCard'
import type { StatItem } from '@/data/site-content'

interface StatGridProps {
  stats: StatItem[]
  columns?: 2 | 3 | 5
}

export const StatGrid = ({ stats, columns = 5 }: StatGridProps) => {
  const gridClass =
    columns === 5
      ? 'grid-cols-2 md:grid-cols-5'
      : columns === 3
        ? 'grid-cols-1 md:grid-cols-3'
        : 'grid-cols-2'

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <GlassCard className="text-center h-full flex flex-col items-center justify-center">
            <h3 className="text-brand text-3xl font-bold mb-2">{stat.value}</h3>
            <p className="text-sm text-gray-300">{stat.label}</p>
            {stat.sublabel && (
              <p className="text-xs text-gray-400 mt-1">{stat.sublabel}</p>
            )}
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}
