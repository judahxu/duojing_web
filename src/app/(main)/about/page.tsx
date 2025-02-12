'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Brain, Target, Award, Rocket } from 'lucide-react';

const AboutPage = () => {
  const companyFeatures = [
    {
      icon: Building2,
      title: "成立背景",
      description: "河南多鲸信息技术有限公司成立于2022年5月，是一家产教融合型的科技企业，专注于人工智能数据要素服务、AI应用落地和行业人才培养。"
    },
    {
      icon: Target,
      title: "企业使命",
      description: "打造人工智能数据服务和应用落地综合解决方案提供商，助力企业数字化转型，培养AI行业人才。"
    },
    {
      icon: Users,
      title: "人才储备",
      description: "拥有600+高校资源，10万+专家人力储备，建立了3-5人快速复制的培训体系。"
    }
  ];

  const achievements = [
    {
      icon: Brain,
      title: "技术创新",
      stats: "30+",
      description: "顶级合作伙伴",
    },
    {
      icon: Award,
      title: "服务能力",
      stats: "1亿+",
      description: "地理信息交通场景数据交付",
    },
    {
      icon: Rocket,
      title: "业务布局",
      stats: "9+",
      description: "数据服务基地",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">关于多鲸科技</h1>
            <p className="text-xl opacity-90">用科技创新驱动行业发展，以人才培养助力产业升级</p>
          </motion.div>
        </div>
      </section>

      {/* Company Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.1 }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">核心优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <achievement.icon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-4xl font-bold text-blue-900 mb-2">{achievement.stats}</h3>
                <h4 className="text-xl font-semibold text-blue-800 mb-4">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">业务领域</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-900">四大核心垂类</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    零售行业解决方案
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    教育行业解决方案
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    医疗行业解决方案
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    能源行业解决方案
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-900">技术创新方向</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    自动驾驶数据服务
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    通用大模型训练
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    具身智能数据集
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    AI应用场景落地
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;