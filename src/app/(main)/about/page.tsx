'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Users, Award, MapPin } from 'lucide-react';

const HomePage = () => {
  const coreServices = [
    {
      icon: Database,
      title: "数据服务",
      description: "提供算力+数据+模型训练全链路服务方案，包括但不限于数据采集、数据清洗、数据标注、数据审核、数据治理等数据元件和数据集加工，推动数据要素价值流通。"
    },
    {
      icon: Brain,
      title: "AI应用场景赋能",
      description: "覆盖自动驾驶、通用大模型、行业垂类应用、具身智能等领域"
    },
    {
      icon: Users,
      title: "行业人才培养",
      description: "链接高校和行业，开展AI高技能培训，服务产业生态上下游人力供给。"
    }
  ];

  const locations = [
    { lat: "34.7466", lng: "113.6253" }, // 郑州
    { lat: "34.7970", lng: "114.3477" }, // 开封
    { lat: "36.0611", lng: "120.3826" }, // 青岛
    // Add other locations as needed
  ];

  const certifications = [
    "国家高新技术企业",
    "国家科技型企业",
    "上海数据交易所数商",
    "山东省大数据产业'三优两重'企业",
    "大学生实习实训基地",
    "见习基地"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-40 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          AI数据服务和应用综合解决方案提供商
        </motion.h1>
      </section>

      {/* Core Services */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Statistics */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center"
          >
            <h3 className="text-blue-400 text-3xl font-bold mb-2">2+</h3>
            <p className="text-sm text-gray-300">多鲸资本、北塔资本</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center"
          >
            <h3 className="text-blue-400 text-3xl font-bold mb-2">4+</h3>
            <p className="text-sm text-gray-300">合资公司</p>
            <p className="text-xs text-gray-400 mt-1">与上市公司、政府平台公司成立合资公司</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center"
          >
            <h3 className="text-blue-400 text-3xl font-bold mb-2">10+</h3>
            <p className="text-sm text-gray-300">全国数据标注基地</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center"
          >
            <h3 className="text-blue-400 text-3xl font-bold mb-2">900+</h3>
            <p className="text-sm text-gray-300">交付团队</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center flex flex-col items-center justify-center"
          >
            <div className="text-blue-400 text-lg font-bold">覆盖全国</div>
            <p className="text-sm text-gray-300 mt-2">数据服务网络</p>
          </motion.div>
  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-6">全国业务布局</h3>
            <div className="relative  bg-blue-900/30 rounded-lg overflow-hidden">
              <img src="/map.jpg" alt="" />
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-6">企业资质</h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <Award className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;