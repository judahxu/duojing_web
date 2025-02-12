'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Database, Brain, Users, MapPin } from 'lucide-react';
// import LocationMap from '@/components/visualization/LocationMap';
import PartnersSection from '@/components/business/PartnersSection';

const HomePage = () => {
  // 业务数据
  const businessStats = [
    { 
      label: '全球AI大模型市场规模', 
      value: '1000亿美元',
      icon: Brain
    },
    { 
      label: '中国AI基础数据市场规模', 
      value: '600亿',
      icon: Database
    },
    { 
      label: '高质量数据潜在价值', 
      value: '10万亿美元',
      icon: Brain
    },
    { 
      label: '行业人才缺口', 
      value: '3000万',
      icon: Users
    }
  ];

  const capabilities = [
    {
      title: '数据服务能力',
      description: '提供数据采集、清洗、标注等全流程服务，已服务30+顶级合作伙伴',
      icon: Database
    },
    {
      title: 'AI应用场景',
      description: '覆盖自动驾驶、通用大模型、行业垂类应用、具身智能等领域',
      icon: Brain
    },
    {
      title: '人才培养体系',
      description: '600+高校资源对接，10万+专家人力储备，3-5人快速复制的培训体系',
      icon: Users
    }
  ];

  const handleChatClick = () => {
    // 检查 voiceflow 对象是否已加载
      window?.voiceflow?.chat?.open()
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              人工智能数据服务和应用落地综合解决方案提供商
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              专注于人工智能数据要素服务、AI应用落地和行业人才培养
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center"
              onClick={handleChatClick}
            >
              了解更多 <ChevronRight className="ml-2" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">核心业务能力</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <capability.icon className="w-16 h-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">数据处理流程</h2>
          <div className="relative">
            <div className="flex justify-between items-center">
              {['采集', '清洗', '标注', '微调', '审核', '入表'].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center relative z-10"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                    {index + 1}
                  </div>
                  <p className="text-blue-900 font-semibold">{step}</p>
                </motion.div>
              ))}
            </div>
            <div className="absolute top-8 left-0 w-full h-1 bg-blue-200" />
          </div>
        </div>
      </section>

      {/* Location Distribution */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">全国业务分布</h2>
          <div className="max-w-6xl mx-auto">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LocationMap />
            </motion.div> */}
            <img src="/map.jpg" alt="全国业务分布" className="w-full" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold text-blue-900">9+</h3>
                <p className="text-gray-600">数据服务基地</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold text-blue-900">1亿+</h3>
                <p className="text-gray-600">地理信息场景数据</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold text-blue-900">4+</h3>
                <p className="text-gray-600">核心垂类覆盖</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PartnersSection />
      {/* Partners Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">合作伙伴</h2>
          <div className="relative overflow-hidden">
            <div className="flex items-center space-x-8 animate-scroll">
              {[...Array(26)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[200px] h-24 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center p-4"
                >
                  <img 
                    src={`/partner/${index+1}.png`} 
                    alt={`Partner ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

// 添加滚动动画
const scrollKeyframes = `
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-200px * 5));
  }
}
`;

// const styleSheet = document.createElement("style");
// styleSheet.textContent = scrollKeyframes;
// document.head.appendChild(styleSheet);

export default HomePage;