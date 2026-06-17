'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { DomainIconKey } from '@/components/icons/domain-icons'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { PageHero } from '@/components/common/PageHero'
import { GlassCard } from '@/components/common/GlassCard'
import { SectionTitle } from '@/components/common/SectionTitle'
import { CTASection } from '@/components/common/CTASection'
import {
  ecologicalIntro,
  platformCapabilities,
  embodiedDataAssets,
  embodiedPlatforms,
  comicDataAssets,
  clientStats,
} from '@/data/services-content'

const AIApplicationPage = () => {
  const applications: {
    icon: DomainIconKey
    title: string
    description: string
    features: string[]
  }[] = [
    {
      icon: 'robotics',
      title: '具身智能',
      description: '爆发增长赛道，覆盖机器人真机VR遥控、灵巧手操作与EGO第一视角数据',
      features: [
        '机器人真机VR遥控数据采集',
        '五指灵巧手精细操作数据',
        'EGO第一视角多模态采集',
        'DF具身采标平台与Pico VR采集平台',
      ],
    },
    {
      icon: 'llm',
      title: 'AI大模型',
      description: '持续扩张赛道，头部大模型客户全覆盖，提供高质量训练数据与应用落地服务',
      features: ['多语种数据集构建', '模型训练与优化', '垂直领域知识注入', '多模态数据处理'],
    },
    {
      icon: 'auto',
      title: '智能驾驶',
      description: '稳健基座赛道，服务20+头部自动驾驶客户，提供交通场景全链路数据服务',
      features: ['交通场景数据采集与标注', '自动驾驶算法优化', '场景测试与验证', '3亿+地理信息场景数据'],
    },
    {
      icon: 'comic',
      title: 'AI漫剧',
      description: '跨越周期赛道，覆盖IP版权、数字可视资产与用户商业流量数据全链路',
      features: [
        '源头IP文字版权资产建设',
        '工业化生产数字可视资产',
        '用户商业流量数据资产',
        '语言/文生图/图生视频模型矩阵',
      ],
    },
  ]

  const implementationProcess = [
    { title: '需求分析', description: '深入了解客户业务场景和具体需求' },
    { title: '方案设计', description: '制定个性化的AI应用落地方案' },
    { title: '数据准备', description: '收集和处理所需的训练数据' },
    { title: '模型开发', description: '进行算法开发和模型训练' },
    { title: '部署优化', description: '系统部署和持续优化' },
  ]

  return (
    <>
      <PageHero title="AI应用落地解决方案" subtitle={ecologicalIntro} />

      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {clientStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard className="text-center py-4" hover={false}>
                <p className="text-xl md:text-2xl font-bold text-brand mb-1">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="四大核心应用场景" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <FeatureIcon name={app.icon} size="lg" />
                  <div className="min-w-0 pt-1">
                    <h3 className="text-xl font-bold">{app.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{app.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <ChevronRight className="w-4 h-4 text-brand mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 具身智能数据资产 */}
      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="具身智能数据资产" subtitle="数据资产全景 · 具身智能" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {embodiedDataAssets.map((asset, index) => (
            <motion.div
              key={asset.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className={`h-full bg-gradient-to-br ${asset.accent}`}>
                <span className="text-xs text-brand font-medium">{asset.tag}</span>
                <h4 className="text-lg font-bold mt-2 mb-3">{asset.title}</h4>
                <p className="text-3xl font-bold text-brand mb-1">{asset.ratio}</p>
                <p className="text-xs text-gray-400 mb-3">{asset.status}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{asset.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {embodiedPlatforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <p className="text-xs text-brand mb-1">{platform.subtitle}</p>
                <h4 className="text-lg font-bold mb-2">{platform.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{platform.description}</p>
                <p className="text-brand font-medium text-sm">{platform.metric}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI漫剧数据资产 */}
      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="AI漫剧数据资产" subtitle="数据资产全景 · AI漫剧" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comicDataAssets.map((asset, index) => (
            <motion.div
              key={asset.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <FeatureIcon name={asset.icon} size="md" className="mb-4" />
                <h4 className="text-lg font-bold mb-4">{asset.title}</h4>
                <ul className="space-y-2">
                  {asset.items.map((item) => (
                    <li key={item} className="text-sm text-gray-300 leading-relaxed flex gap-2">
                      <span className="text-brand mt-1.5 w-1 h-1 rounded-full bg-brand shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="落地流程" />
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {implementationProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start mb-8 relative"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-subtle rounded-full flex items-center justify-center text-white font-bold mr-6">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
              </motion.div>
            ))}
            <div className="absolute left-6 top-12 bottom-4 w-0.5 bg-brand/30 -z-10" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 pb-20">
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
              <GlassCard className={`border-l-4 ${platform.accent}`}>
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

      <CTASection
        title="开启AI应用落地之旅"
        description="让我们的专家团队为您提供专业的AI解决方案"
        buttonText="获取解决方案"
      />
    </>
  )
}

export default AIApplicationPage
