'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Users, ChevronRight, Building2, Layers, TreePine } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const ServicesPage = () => {
  const coreServices = [
    {
      icon: Database,
      title: "数据服务能力",
      description: "专业的数据采集、清洗、标注全流程服务",
      features: [
        "超1亿帧地理信息交通场景数据交付",
        "四大核心垂类（零售、教育、医疗、能源）数据集加工",
        "具身智能数据集业务布局"
      ]
    },
    {
      icon: Brain,
      title: "AI应用落地",
      description: "全方位的AI技术落地解决方案",
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
        "3-5人快速复制的培训体系"
      ]
    }
  ];

  const dataProcess = [
    { icon: Layers, title: "数据采集", description: "多源数据获取与处理" },
    { icon: Building2, title: "数据清洗", description: "专业数据整理与净化" },
    { icon: TreePine, title: "数据标注", description: "高质量数据标注服务" },
  ];

  const handleChatClick = () => {
    // 检查 voiceflow 对象是否已加载
      window?.voiceflow?.chat?.open()
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">数据服务和AI应用落地解决方案</h1>
            <p className="text-xl text-blue-100 mb-8">
              为企业提供全方位的数据服务、AI应用落地和人才培养解决方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">核心服务能力</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                // initial={{ opacity: 0, y: 0 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle className="text-2xl font-bold text-blue-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                          {feature}
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

      {/* Data Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">数据处理流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {dataProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-50 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <process.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">开启您的AI数据服务之旅</h2>
          <p className="text-xl mb-8 text-blue-100">
            联系我们，获取专业的解决方案
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={handleChatClick}
          >
            立即咨询
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;