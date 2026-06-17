'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Scan } from 'lucide-react'
import { DomainIcon } from '@/components/icons/domain-icons'
import { PageBackground } from '@/components/common/PageBackground'
import { GlassCard } from '@/components/common/GlassCard'
import { StatGrid } from '@/components/common/StatGrid'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ServicesSection } from '@/components/business/ServicesSection'
import {
  companyStats,
  certifications,
  companyTagline,
  companyVision,
} from '@/data/site-content'

export default function HomePage() {
  const text1 = '我们要扫描整个世界，'
  const text2 = '形成一个机器可读的新世界'

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    hidden: { opacity: 0, x: 20 },
  }

  const visionContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const visionItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <PageBackground showParticles particleCount={12} />

        <div className="relative z-10 text-center space-y-8 max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Scan className="w-16 h-16 text-brand" />
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-relaxed md:leading-loose">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {text1.split('').map((char, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <br />
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {text2.split('').map((char, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg md:text-xl text-brand-muted/80"
          >
            {companyTagline}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="h-px bg-brand-gradient w-full"
          />
        </div>
      </section>

      {/* 关于我们 / 企业愿景 */}
      <section id="about" className="container mx-auto px-4 py-20 scroll-mt-24">
        <SectionTitle title="关于我们" />
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12"
          variants={visionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companyVision.map((group, gi) => (
            <div key={gi} className="space-y-1">
              {group.lines.map((line, li) => (
                <motion.div key={li} variants={visionItem} className={line.className}>
                  {line.text}
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      <ServicesSection />

      {/* 实力数据 */}
      <section id="stats" className="container mx-auto px-4 py-20 scroll-mt-24">
        <SectionTitle title="实力数据" subtitle="深耕AI数据生态，服务产业数字化" />
        <StatGrid stats={companyStats} />
      </section>

      {/* 全国布局 + 企业资质 */}
      <section id="company" className="container mx-auto px-4 py-20 pb-32 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard hover={false}>
              <h3 className="text-xl font-bold mb-6">全国业务布局</h3>
              <div className="relative bg-brand-dim/50 rounded-lg overflow-hidden">
                <img src="/map.png" alt="全国业务布局地图" />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard hover={false}>
              <h3 className="text-xl font-bold mb-6">企业资质</h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <DomainIcon name="award" className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  )
}
