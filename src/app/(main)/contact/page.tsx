'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Building2 } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Building2,
      title: '公司地址',
      content: '河南省郑州市高新区河南大学科技园西区1号孵化楼301'
    },
    {
      icon: Phone,
      title: '联系电话',
      content: '15639917377'
    },
    {
      icon: Mail,
      title: '电子邮箱',
      content: 'lilijun@iduojing.com'
    }
  ];

  const visionText = [
    {
      text: "专注人工智能数据生态",
      className: "text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-4"
    },
    {
      text: "为最前沿人工智能提供海量丰富高质的数据",
      className: "text-2xl md:text-3xl lg:text-4xl font-medium text-blue-200 mb-2"
    },
    {
      text: "赋能千行百业",
      className: "text-2xl md:text-3xl lg:text-4xl font-bold text-blue-300 mb-12"
    },
    {
      text: "聚百位将才 · 成千人团队 · 促万人就业",
      className: "text-2xl md:text-3xl lg:text-4xl font-medium text-blue-200 mb-4"
    },
    {
      text: "成为解决社会就业、高校就业、服务国企改革的",
      className: "text-xl md:text-2xl lg:text-3xl font-normal text-blue-100 mb-2"
    },
    {
      text: "社会价值创造者",
      className: "text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181822_1px,transparent_1px),linear-gradient(to_bottom,#18181822_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10">
        {/* 企业愿景部分 */}
        <div className="container mx-auto px-4 pt-32 pb-20">
          <motion.div 
            className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {visionText.map((line, index) => (
              <motion.div
                key={index}
                variants={item}
                className={line.className}
              >
                {line.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 联系信息部分 */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2 + 1.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.3 + index * 0.2 + 1.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="flex justify-center"
                >
                  <item.icon className="w-12 h-12 text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-blue-400 mt-4 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-center text-lg">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 动态粒子效果 */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          animate={{
            x: ["0%", `${Math.random() * 100}%`],
            y: ["0%", `${Math.random() * 100}%`],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            repeatType: "mirror",
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

export default ContactPage;