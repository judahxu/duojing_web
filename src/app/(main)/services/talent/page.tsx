'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, BookOpen, Target, Briefcase, Building, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const TalentPage = () => {
  const advantages = [
    {
      icon: GraduationCap,
      title: "600+高校资源",
      description: "与全国范围内的高校建立深度合作关系，打造产教融合新模式"
    },
    {
      icon: Users,
      title: "10万+专家人力储备",
      description: "强大的人才库支持，确保项目高质量交付"
    },
    {
      icon: Target,
      title: "快速复制的培训体系",
      description: "标准化的3-5人团队培养模式，实现人才快速成长"
    }
  ];

  const trainingSystem = [
    {
      icon: BookOpen,
      title: "理论培训",
      items: [
        "AI基础知识",
        "数据处理方法",
        "行业应用案例"
      ]
    },
    {
      icon: Briefcase,
      title: "实践训练",
      items: [
        "真实项目实践",
        "技能认证考核",
        "导师一对一指导"
      ]
    },
    {
      icon: Building,
      title: "企业对接",
      items: [
        "企业实习机会",
        "就业岗位推荐",
        "职业发展规划"
      ]
    }
  ];

  const highlights = [
    {
      title: "产教融合",
      description: "深度对接高校教育资源，培养符合企业需求的AI人才"
    },
    {
      title: "专业培训",
      description: "系统化的培训体系，确保人才培养质量"
    },
    {
      title: "实践导向",
      description: "注重实际项目经验，提升实战能力"
    },
    {
      title: "就业保障",
      description: "与多家企业建立合作，提供优质就业机会"
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
            <h1 className="text-5xl font-bold mb-6">产教融合的人才培养体系</h1>
            <p className="text-xl text-blue-100 mb-8">
              培养AI时代的数字人才，助力产业数字化转型
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-800 p-6 rounded-lg">
                <Award className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">600+</h3>
                <p>合作高校</p>
              </div>
              <div className="bg-blue-800 p-6 rounded-lg">
                <Users className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">10万+</h3>
                <p>专家人力储备</p>
              </div>
              <div className="bg-blue-800 p-6 rounded-lg">
                <Target className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">3-5人</h3>
                <p>标准团队规模</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">核心优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <advantage.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                    <CardDescription>{advantage.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training System */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">培训体系</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingSystem.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <system.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle className="text-xl">{system.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {system.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                          {item}
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

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">培养特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">加入我们的人才培养计划</h2>
          <p className="text-xl mb-8 text-blue-100">
            开启您的AI职业发展之旅
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          onClick={handleChatClick}>
            立即报名
          </button>
        </div>
      </section>
    </div>
  );
};

export default TalentPage;