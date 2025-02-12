'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Car, Bot, Building2, Workflow, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const AIApplicationPage = () => {
  const applications = [
    {
      icon: Car,
      title: "自动驾驶场景",
      description: "提供高质量的自动驾驶训练数据和算法优化服务",
      features: [
        "交通场景数据采集与标注",
        "自动驾驶算法优化",
        "场景测试与验证"
      ]
    },
    {
      icon: Brain,
      title: "通用大模型",
      description: "为大模型提供高质量的训练数据和应用落地服务",
      features: [
        "多语种数据集构建",
        "模型训练与优化",
        "垂直领域知识注入"
      ]
    },
    {
      icon: Building2,
      title: "行业垂类应用",
      description: "面向零售、教育、医疗、能源等领域的AI解决方案",
      features: [
        "行业知识图谱构建",
        "场景化应用开发",
        "业务流程优化"
      ]
    },
    {
      icon: Bot,
      title: "具身智能应用",
      description: "机器人与智能硬件的数据服务与应用开发",
      features: [
        "机器人训练数据集",
        "动作控制算法优化",
        "环境感知能力提升"
      ]
    }
  ];

  const implementationProcess = [
    {
      title: "需求分析",
      description: "深入了解客户业务场景和具体需求"
    },
    {
      title: "方案设计",
      description: "制定个性化的AI应用落地方案"
    },
    {
      title: "数据准备",
      description: "收集和处理所需的训练数据"
    },
    {
      title: "模型开发",
      description: "进行算法开发和模型训练"
    },
    {
      title: "部署优化",
      description: "系统部署和持续优化"
    }
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
            // initial={{ opacity: 0, y: 0 }}
            // animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">AI应用落地解决方案</h1>
            <p className="text-xl text-blue-100 mb-8">
              从数据到应用，助力企业AI转型升级
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">应用场景</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <app.icon className="w-12 h-12 text-blue-600" />
                      <div>
                        <CardTitle className="text-xl">{app.title}</CardTitle>
                        <CardDescription>{app.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {app.features.map((feature, idx) => (
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

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">落地流程</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {implementationProcess.map((process, index) => (
                <motion.div
                  key={process.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start mb-8 relative"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </motion.div>
              ))}
              <div className="absolute left-6 top-12 bottom-4 w-0.5 bg-blue-200 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">成功案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">1亿+</div>
              <p className="text-gray-600">地理信息交通场景数据交付</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">4+</div>
              <p className="text-gray-600">核心垂类数据集加工实践</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">30+</div>
              <p className="text-gray-600">顶级合作伙伴</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">开启AI应用落地之旅</h2>
          <p className="text-xl mb-8 text-blue-100">
            让我们的专家团队为您提供专业的AI解决方案
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
           onClick={handleChatClick}>
            获取解决方案
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIApplicationPage;