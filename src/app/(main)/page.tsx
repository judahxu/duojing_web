'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Scan } from 'lucide-react';

export default function HomePage() {
  const text1 = "我们要扫描整个世界，";
  const text2 = "形成一个机器可读的新世界";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center relative overflow-hidden">
      {/* 背景网格效果 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181822_1px,transparent_1px),linear-gradient(to_bottom,#18181822_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* 主要内容 */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Scan className="w-16 h-16 text-blue-400" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight leading-relaxed md:leading-loose"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {text1.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <br />
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {text2.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.h1>

        {/* 动态扫描线效果 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full"
        />
      </div>

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
}