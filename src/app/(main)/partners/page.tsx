'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ChevronRight, Award, Users, BarChart } from 'lucide-react';

const PartnersPage = () => {
  const partnerCategories = [
    {
      title: 'AI企业',
      description: '为领先AI企业提供高质量数据服务支持',
      icon: Building2,
      partners: ['AI企业A', 'AI企业B', 'AI企业C']
    },
    {
      title: '自动驾驶',
      description: '助力自动驾驶企业突破数据瓶颈',
      icon: BarChart,
      partners: ['自动驾驶A', '自动驾驶B', '自动驾驶C']
    },
    {
      title: '大模型公司',
      description: '为大模型训练提供多样化数据支持',
      icon: Users,
      partners: ['大模型A', '大模型B', '大模型C']
    }
  ];

  const caseStudies = [
    {
      title: '地理信息场景数据项目',
      description: '完成超1亿帧地理信息交通场景数据交付，支持自动驾驶算法优化',
      metrics: ['1亿+场景数据', '99.9%准确率', '30天交付周期'],
      image: '/23d.gif'
    },
    {
      title: '零售行业数据集项目',
      description: '构建零售场景综合数据集，支持商品识别、货架管理等AI应用',
      metrics: ['1000万+商品数据', '98%识别准确率', '多场景覆盖'],
      image: '/lingshou.png'
    },
    {
      title: '医疗影像数据处理',
      description: '医疗影像数据标注与处理，支持AI辅助诊断系统开发',
      metrics: ['50万+医疗影像', '专业团队审核', '隐私数据保护'],
      image: '/yiliao.gif'
    }
  ];

  const handleChatClick = () => {
    // 检查 voiceflow 对象是否已加载
      window?.voiceflow?.chat?.open()
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">合作伙伴</h1>
            <p className="text-xl mb-8">携手30+顶级合作伙伴，共创AI产业新未来</p>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">合作伙伴类别</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <category.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                {/* <ul className="space-y-2">
                  {category.partners.map(partner => (
                    <li key={partner} className="flex items-center text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                      {partner}
                    </li>
                  ))}
                </ul> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">成功案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map(metric => (
                      <div key={metric} className="flex items-center">
                        <Award className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">成为我们的合作伙伴</h2>
            <p className="text-lg mb-8">加入我们的合作生态，共同探索AI产业的无限可能</p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={handleChatClick}>
              联系我们
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;