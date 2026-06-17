'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { SectionTitle } from '@/components/common/SectionTitle'
import { coreBusinessLines, clientStats } from '@/data/services-content'

export const ServicesSection = () => (
  <section id="services" className="container mx-auto px-4 py-20 scroll-mt-24">
    <SectionTitle title="服务介绍" />

    {/* 核心业务（含原生态服务场景与能力，三列展示） */}
    <div className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {coreBusinessLines.map((line, index) => (
          <motion.div
            key={line.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-brand mb-3">{line.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{line.subtitle}</p>
            <ul className="space-y-3">
              {line.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                  <ChevronRight className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>

    {/* 头部客户 */}
    <div>
      <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-6 bg-brand rounded-full" />
        头部客户服务
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {clientStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <GlassCard hover={false} className="text-center py-5">
              <p className="text-2xl md:text-3xl font-bold text-brand mb-2">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-400 leading-snug">{stat.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
