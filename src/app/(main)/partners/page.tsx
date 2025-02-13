'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

interface Partner {
  id: string;
  logo: string;
  ring: number;
  angle: number;
  radius: number;
}

interface CoreScenario {
  id: string;
  name: string;
  icon: string;
  angle: number;
}

interface RingConfig {
  radius: number;
  count: number;
}


const PartnerNetwork = () => {
  const [rotation, setRotation] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // 核心场景数据
  const coreScenarios: CoreScenario[] = [
    { id: 'auto', name: '自动驾驶', icon: '🚗', angle: 0 },
    { id: 'llm', name: '通用大模型', icon: '🤖', angle: 90 },
    { id: 'industry', name: '行业垂类应用', icon: '🏢', angle: 180 },
    { id: 'embodied', name: '具身智能', icon: '🦾', angle: 270 }
  ];

  // 修改合作伙伴数据的生成方式，确保与轨道对齐
  const generatePartners = (): Partner[] => {
    const ringConfigs: RingConfig[] = [
      { radius: 25, count: 8 },
      { radius: 35, count: 8 },
      { radius: 45, count: 9 }
    ];
    
    const partners: Partner[] = [];
    let id = 1;
    
    ringConfigs.forEach((ring, ringIndex) => {
      const angleStep = 360 / ring.count;
      for (let i = 0; i < ring.count; i++) {
        partners.push({
          id: `p${id}`,
          logo: `/partner/${id}.png`,
          ring: ringIndex + 1,
          angle: i * angleStep,
          radius: ring.radius
        });
        id++;
      }
    });
    
    return partners;
  };

  const partners = generatePartners();

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 0.1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // 统一的椭圆位置计算函数
  const getEllipsePosition = (angle: number, radiusX: number, radiusY: number, tilt = 15) => {
    const radian = (angle - 90) * (Math.PI / 180);
    const tiltRadian = tilt * (Math.PI / 180);
    
    const x = radiusX * Math.cos(radian);
    const y = radiusY * Math.sin(radian);
    
    // 应用透视变换
    const transformedX = x;
    const transformedY = y * Math.cos(tiltRadian);
    const transformedZ = y * Math.sin(tiltRadian);

    return {
      x: 50 + transformedX,
      y: 50 + transformedY,
      z: transformedZ,
      scale: 1 - (transformedZ / 200)
    };
  };

  // 移动端渲染逻辑保持不变...
  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#001B3D] px-4 py-8">
        {/* 移动端布局代码... */}
        {/* 头部标题区域 */}
        <div className="text-center mb-12 mt-20">
          <div className="bg-blue-500/10 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Globe className="w-12 h-12 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">30+</h2>
          <p className="text-blue-300 text-sm">国内外各场景顶级合作伙伴</p>
        </div>

        {/* 核心场景展示 */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {coreScenarios.map((scenario) => (
            <div 
              key={scenario.id}
              className="bg-blue-500/10 rounded-lg p-4 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{scenario.icon}</span>
                <span className="text-blue-300 text-sm">{scenario.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 合作伙伴网格 */}
        <div className="space-y-6">
          <h3 className="text-white text-lg font-semibold mb-4">合作伙伴</h3>
          <div className="grid grid-cols-3 gap-4">
            {partners.slice(0, 26).map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg p-2 flex items-center justify-center aspect-square"
              >
                <img
                  src={partner.logo}
                  alt={`Partner ${partner.id}`}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            ))}
          </div>
      
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-[#001B3D] overflow-hidden">
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        {/* 背景网格 */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#0066CC11_1px,transparent_1px),linear-gradient(to_bottom,#0066CC11_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            transform: 'rotateX(15deg)',
            transformOrigin: 'center center'
          }}
        />

        {/* 轨道和连接线 SVG */}
        <svg 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: 'rotateX(15deg)',  // 与 getEllipsePosition 的 tilt 参数保持一致
            transformOrigin: 'center center'
          }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#fff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
            </linearGradient>
          </defs>

           {/* 核心场景轨道 */}
           <ellipse
            cx="50%"
            cy="50%"
            rx="15%"
            ry="12%"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* 绘制与合作伙伴数据匹配的轨道 */}
          {[25, 35, 45].map((radius, index) => (
            <g key={`orbit-${radius}`}>
              <ellipse
                cx="50%"
                cy="50%"
                rx={`${radius}%`}
                ry={`${radius * 0.8}%`}  // 扁平化系数与 getEllipsePosition 中的计算保持一致
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeOpacity="1"
              />
            </g>
          ))}
        </svg>

        {/* 核心场景图标 */}
        {coreScenarios.map((scenario) => {
          const pos = getEllipsePosition(
            scenario.angle + rotation,
            15,  // 固定在最内圈轨道
            12   // 保持与轨道的椭圆比例一致
          );
          
          return (
            <motion.div
              key={scenario.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                zIndex: Math.round(pos.z) + 10, // 确保显示在轨道上层
                scale: pos.scale,
              }}
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl">{scenario.icon}</span>
              </div>
              <div className="text-blue-300 text-sm mt-2 whitespace-nowrap text-center">
                {scenario.name}
              </div>
            </motion.div>
          );
        })}

        {/* 中心地球图标 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-80 h-80"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse">
                <img src="/earth1.png" alt="" className="w-full h-full object-contain" />
              </div>
              <img src="/earth.png" alt="" className="w-full h-full object-contain" />
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 rounded-full">
              <div className="text-8xl font-bold text-white mb-2">30+</div>
              <div className="text-xl text-blue-300 text-center">
                国内外各场景<br />
                顶级合作伙伴
              </div>
            </div>
          </motion.div>
        </div>

        {/* 合作伙伴 Logo */}
        {partners.map((partner) => {
          const pos = getEllipsePosition(
            partner.angle + rotation * partner.ring,
            partner.radius,
            partner.radius * 0.8  // 保持与 SVG 轨道的扁平比例一致
          );
          
          return (
            <motion.div
              key={partner.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                zIndex: Math.round(pos.z),
                scale: pos.scale,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: partner.ring * 0.2 }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={partner.logo}
                  alt={partner.id}
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>
            </motion.div>
          );
        })}

        {/* 动态光效粒子 */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              x: ["0%", `${Math.random() * 100}%`],
              y: ["0%", `${Math.random() * 100}%`],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * 100}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerNetwork;