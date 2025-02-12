import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  // 定义合作伙伴数量
  const partnerCount = 26;
  
  // 创建两组相同的合作伙伴列表，用于无缝滚动
  // const partners = [...Array(partnerCount)];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">合作伙伴</h2>
        <div className="relative w-full">
          {/* 使用两个滚动容器实现无限滚动 */}
          <div className="flex whitespace-nowrap">
            <div className="flex animate-scroll-infinite">
              {Array.from({ length: partnerCount }).map((_, index) => (
                <motion.div
                  key={`partner-1-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[200px] h-24 mx-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center p-4"
                >
                  <img 
                    src={`/partner/${index+1}.png`}
                    alt={`Partner ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex animate-scroll-infinite" aria-hidden={true}>
              {Array.from({ length: partnerCount }).map((_, index) => (
                <motion.div
                  key={`partner-2-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[200px] h-24 mx-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center p-4"
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
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll 60s linear infinite;
        }

        /* 鼠标悬停时暂停动画 */
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;