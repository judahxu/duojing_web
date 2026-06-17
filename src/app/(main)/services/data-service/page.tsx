'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { DomainIconKey } from '@/components/icons/domain-icons'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { PageHero } from '@/components/common/PageHero'
import { GlassCard } from '@/components/common/GlassCard'
import { SectionTitle } from '@/components/common/SectionTitle'
import { CTASection } from '@/components/common/CTASection'
import {
  serviceCapabilities,
  platformCapabilities,
  dataValueCreation,
} from '@/data/services-content'

const DataServicePage = () => {
  const dataProcess: { icon: DomainIconKey; title: string; description: string }[] = [
    { icon: 'collect', title: '数据采集', description: '多源异构数据获取与汇聚' },
    { icon: 'clean', title: '数据清洗', description: '智能化数据清理与处理' },
    { icon: 'label', title: '数据标注', description: '高精度智能标注服务' },
    { icon: 'tune', title: '数据微调', description: '精准的数据优化调整' },
    { icon: 'audit', title: '数据审核', description: '严格的质量把控' },
    { icon: 'archive', title: '数据入表', description: '数据资产入表及规范归档' },
  ]

  const valueCreation = dataValueCreation

  const industries: { icon: DomainIconKey; title: string; achievements: string[] }[] = [
    {
      icon: 'auto',
      title: '智能驾驶',
      achievements: ['交通场景数据采集与标注', '20+头部自动驾驶客户', '3亿+地理信息场景数据'],
    },
    {
      icon: 'llm',
      title: 'AI大模型',
      achievements: ['多模态数据集构建', '头部大模型客户全覆盖', '模型训练数据优化'],
    },
    {
      icon: 'robotics',
      title: '具身智能',
      achievements: ['机器人真机VR遥控数据', '灵巧手操作数据', '10+头部具身智能客户'],
    },
    {
      icon: 'comic',
      title: 'AI漫剧',
      achievements: ['IP版权与剧本资产', '数字可视资产库', '5+头部AI漫剧客户'],
    },
  ]

  const heroStats = [
    { value: '3亿+', label: '地理信息场景数据' },
    { value: '4+', label: '核心垂类覆盖' },
    { value: '30+', label: '顶级合作伙伴' },
  ]

  return (
    <>
      <PageHero
        title="端到端全链条数据要素服务"
        subtitle="提供从数据采集到标注、入表的全流程服务，已服务30+顶级合作伙伴"
      />

      <section className="container mx-auto px-4 pb-12">
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
                <h3 className="text-3xl font-bold text-brand mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="数据价值创造" subtitle={valueCreation.title} />
        <GlassCard hover={false} className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {valueCreation.features.map((f) => (
              <li key={f} className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-brand rounded-full mr-3 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="数据处理流程" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataProcess.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <FeatureIcon name={process.icon} size="md" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="服务能力层" />
        <GlassCard hover={false} className="p-0 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {serviceCapabilities.map((cap) => (
              <p key={cap} className="text-center text-sm text-gray-300 px-3 py-5">
                {cap}
              </p>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="平台能力层" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platformCapabilities.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className={`h-full border-l-4 ${platform.accent}`}>
                <FeatureIcon name={platform.icon} size="sm" glow={false} className="mb-3" />
                <h4 className="font-bold mb-2">{platform.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{platform.description}</p>
                <p className="text-xs text-brand-muted">
                  {platform.capabilities.join(' | ')}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 pb-20">
        <SectionTitle title="行业解决方案" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-4 mb-4">
                  <FeatureIcon name={industry.icon} size="sm" glow={false} />
                  <h3 className="text-xl font-bold">{industry.title}</h3>
                </div>
                <ul className="space-y-2">
                  {industry.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-brand rounded-full mr-3" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        title="需要专业的数据服务？"
        description="联系我们，获取更多行业解决方案"
        buttonText="立即咨询"
      />
    </>
  )
}

export default DataServicePage
