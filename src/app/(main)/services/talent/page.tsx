'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { PageHero } from '@/components/common/PageHero'
import { GlassCard } from '@/components/common/GlassCard'
import { SectionTitle } from '@/components/common/SectionTitle'
import { CTASection } from '@/components/common/CTASection'
import {
  talentPlanIntro,
  talentPlanPillars,
  talentPlanHighlights,
  clientStats,
} from '@/data/services-content'

const TalentPage = () => {
  const heroStats = [
    { icon: 'graduation' as const, value: '30+', label: '合作高校' },
    { icon: 'team' as const, value: '10万+', label: '专家人力储备' },
    { icon: 'target' as const, value: '3-5人', label: '标准团队规模' },
  ]

  return (
    <>
      <PageHero title="鲸才计划 · AI行业人才培养" subtitle={talentPlanIntro} />

      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {clientStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard className="text-center py-4" hover={false}>
                <p className="text-xl font-bold text-brand mb-1">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="text-center" hover={false}>
                <FeatureIcon name={stat.icon} size="lg" className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="鲸才计划五大支柱" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {talentPlanPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <FeatureIcon name={pillar.icon} size="md" className="mb-4" />
                <h3 className="text-base font-bold mb-2">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 pb-20">
        <SectionTitle title="产教融合生态" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {talentPlanHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <FeatureIcon name={item.icon} size="lg" className="mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        title="加入我们的人才培养计划"
        description="开启您的AI职业发展之旅"
        buttonText="立即报名"
      />
    </>
  )
}

export default TalentPage
