'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  hover?: boolean
}

export const GlassCard = ({
  className,
  hover = true,
  children,
  ...props
}: GlassCardProps) => (
  <motion.div
    className={cn(
      'bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6',
      hover && 'hover:bg-white/10 transition-all',
      className,
    )}
    {...props}
  >
    {children}
  </motion.div>
)
