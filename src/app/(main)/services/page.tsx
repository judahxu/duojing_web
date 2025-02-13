'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Users, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { string } from 'zod';

const ServicesPage = () => {
  const coreServices = [
    {
      icon: Database,
      title: "数据集加工",
      description: "专业的数据采集、清洗、标注全流程服务",
      features: [
        "计算机视觉领域",
        "大模型多模态领域",
        "行业垂类领域",
        "具身智能领域"
      ]
    },
    {
      icon: Brain,
      title: "AI应用落地",
      description: "AI技术行业应用综合解决方案",
      link: "https://www.coijing.com",
      features: [
        "自动驾驶场景应用",
        "通用大模型应用",
        "行业垂类应用",
        "具身智能应用"
      ]
    },
    {
      icon: Users,
      title: "人才培养体系",
      description: "产教融合的人才培养解决方案",
      features: [
        "600+高校资源对接",
        "10万+专家人力储备",
        "基地快速复制培训体系",
        "培训教材+师资+实训平台+项目实战的产教融合人才培养"
      ]
    }
  ];

  const handleServiceClick = (link?:string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* 背景网格效果 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181822_1px,transparent_1px),linear-gradient(to_bottom,#18181822_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              AI数据服务解决方案
            </h1>
            <p className="text-xl text-blue-100">
              赋能AI技术落地，助力人才培养
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={service.link ? 'cursor-pointer' : ''}
                onClick={() => handleServiceClick(service.link)}
              >
                <Card className="h-full bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-800/50 transition-all">
                  <CardHeader>
                    <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-blue-400">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 group">
                          <ChevronRight className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 悬浮粒子效果 */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          animate={{
            x: ["0%", `${Math.random() * 100}%`],
            y: ["0%", `${Math.random() * 100}%`],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default ServicesPage;