'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Handshake, BrainCircuit, Mail } from 'lucide-react';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: '全部' },
    // { id: 'tech', name: '技术研发' },
    { id: 'data', name: '数据服务' },
    // { id: 'product', name: '产品运营' },
    // { id: 'business', name: '商务拓展' }
  ];

  const jobPositions = [
    {
      id: 1,
      title: '数据标注/ai训练师',
      department: 'data',
      location: '郑州',
      type: '全职',
      experience: '不限',
      education: '大专',
      responsibilities: [
        '学习标注相关专业知识和规则，进行视频/图文的审核、标注',
        '工作内容易上手入职有专人带教 项目稳定。可根据能力晋升管理储备',
      ],
      requirements: [
        '专科及以上学历，计算机、大数据相关专业经验优先',
        '对人工智能大数据行业感兴趣',
        '熟悉电脑操作，对繁琐的重复性工作有耐心和恒心'
      ]
    },
    {
      id: 3,
      title: '图文标注文员',
      department: 'data',
      location: '郑州',
      type: '全职',
      experience: '不限',
      education: '大专',
      responsibilities: [
        '根据项目要求结合自己的理解对图文进行标注，用于训练人工智能学习',
        '工作内容易上手入职有专人带教 项目稳定。可根据能力晋升管理储备',
      ],
      requirements: [
        '设计、文学类专业可优先、对美学有一定认知',
        '需要熟练ps或者剪辑软件，热爱p图',
        '审美好，有一定的文案能力，热爱互联网，有玩过小红书等热门APP'
      ]
    },
    {
      id: 4,
      title: '人工智能训练师',
      department: 'data',
      location: '郑州',
      type: '全职',
      experience: '不限',
      education: '大专',
      responsibilities: [
        '2D、3D、4D项目，线条和框，可接受应届生，只需要坐在电脑前画框描线即可',
        '3D项目接受有经验的小伙伴，免费提供项目技术培训',
      ],
      requirements: [
        '喜欢电脑前稳定工作，热爱电脑办公的技术型小伙伴',
        '工作要求细心仔细，态度明确，有责任心',
      ]
    },
    {
      id: 2,
      title: '标注审核组长',
      department: 'data',
      location: '郑州',
      type: '全职',
      experience: '1-3年',
      education: '大专',
      responsibilities: [
        '主要负责带领小组成员进行数据质量把控，高效完成交付。',
        '基础操作，熟练运用项目平台，对标注员的标注结果进行质量检查',
        '项目交付，结合项目进度及标注质量，调整质量把控方案，在项目交付周期内，通过筛选、培训、答疑、质量进度管理、沟通管理等方式，提高标注准确率，完成项目交付。',
        '新人帮带，带领质检成员从0-1培养帮带，最终达到独立完成交付的能力。',
        '团队管理，结合项目情况给出组员优化的质量把控方案，达成团队目标。'
      ],
      requirements: [
        '硬性要求全日制统招本科（特别优秀者可放宽要求）',
        '1-3年数据标注质量管理经验',
        '具有良好的快速学习能力、理解能力及沟通与表达能力',
        '对数据标注工作有热情，能承受一定的压力'
      ]
    },
  
    
  ];

  const whyJoinUs = [
    {
      icon: Building2,
      title: '发展平台',
      description: '产教融合型科技企业，连接产业实践与人才培养'
    },
    {
      icon: GraduationCap,
      title: '培训体系',
      description: '完善的培训体系，助力个人成长与职业发展'
    },
    {
      icon: Handshake,
      title: '行业资源',
      description: '30+顶级合作伙伴，600+高校资源'
    },
    {
      icon: BrainCircuit,
      title: '技术创新',
      description: '深耕AI领域，持续技术创新与突破'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobPositions 
    : jobPositions.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">加入多鲸科技</h1>
            <p className="text-xl mb-8">与我们一起定义AI时代的数据价值</p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">为什么选择我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.map((item, index) => (
              <motion.div
                key={item.title}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-blue-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">当前职位</h2>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-2 rounded-full ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>
                    <p className="text-gray-600">{job.location} | {job.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{job.experience}</p>
                    <p className="text-gray-600">{job.education}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-blue-900">岗位职责：</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-2 text-blue-900">任职要求：</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  投递简历
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">联系我们</h2>
          <p className="text-gray-600 mb-4">如果您对我们的职位感兴趣，欢迎投递简历至：</p>
          <p className="text-blue-600 font-bold text-xl">liliyang@iduojing.com</p>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;