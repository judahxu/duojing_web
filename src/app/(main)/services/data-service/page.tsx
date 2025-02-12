'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, Tags, GitMerge, CheckCircle, Table2, Building2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const DataServicePage = () => {
  const dataProcess = [
    {
      icon: Database,
      title: "数据采集",
      description: "多源数据获取与汇聚"
    },
    {
      icon: Filter,
      title: "数据清洗",
      description: "智能化数据清理与处理"
    },
    {
      icon: Tags,
      title: "数据标注",
      description: "高质量数据标注服务"
    },
    {
      icon: GitMerge,
      title: "数据微调",
      description: "精准的数据优化调整"
    },
    {
      icon: CheckCircle,
      title: "数据审核",
      description: "严格的质量把控"
    },
    {
      icon: Table2,
      title: "数据入表",
      description: "规范的数据整理归档"
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: "零售行业",
      achievements: [
        "商品识别数据集",
        "用户行为分析",
        "智能货架管理"
      ]
    },
    {
      icon: Building2,
      title: "教育行业",
      achievements: [
        "教育资源标注",
        "学习行为分析",
        "个性化推荐"
      ]
    },
    {
      icon: Building2,
      title: "医疗行业",
      achievements: [
        "医疗影像标注",
        "病历数据处理",
        "智能诊断支持"
      ]
    },
    {
      icon: Building2,
      title: "能源行业",
      achievements: [
        "设备监控数据",
        "能耗预测分析",
        "故障诊断模型"
      ]
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
            <h1 className="text-5xl font-bold mb-6">专业的数据服务能力</h1>
            <p className="text-xl text-blue-100 mb-8">
              提供从数据采集到标注的全流程服务，已服务30+顶级合作伙伴
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-3xl font-bold mb-2">1亿+</h3>
                <p>地理信息场景数据</p>
              </div>
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-3xl font-bold mb-2">4+</h3>
                <p>核心垂类覆盖</p>
              </div>
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-3xl font-bold mb-2">30+</h3>
                <p>顶级合作伙伴</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">数据处理流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataProcess.map((process, index) => (
              <motion.div
                key={process.title}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <process.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle>{process.title}</CardTitle>
                    <CardDescription>{process.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">行业解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <industry.icon className="w-8 h-8 text-blue-600" />
                      <CardTitle>{industry.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                          {achievement}
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

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">需要专业的数据服务？</h2>
          <p className="text-xl mb-8 text-blue-100">
            联系我们，获取更多行业解决方案
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

export default DataServicePage;