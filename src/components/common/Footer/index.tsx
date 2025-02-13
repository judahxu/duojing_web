'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/logo-white.png"
                alt="多鲸科技"
                width={120}
                height={40}
                className="brightness-110"
              />
            </motion.div>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
              河南多鲸信息技术有限公司专注于人工智能数据要素服务、AI应用落地和行业人才培养。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              快速链接
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {['关于我们', '服务介绍', '合作伙伴', '联系我们'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link 
                    href={`/${item === '关于我们' ? 'about' : 
                           item === '联系我们' ? 'contact' :
                           item === '合作伙伴' ? 'partners' : 'careers'}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              联系我们
            </h3>
            <div className="space-y-4 text-sm">
              <p className="text-gray-400">电话：15639917377</p>
              <p className="text-gray-400">邮箱：lilijun@iduojing.com</p>
              <p className="text-gray-400">地址：河南省郑州市高新区河南大学科技园西区1号孵化楼301</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} 河南多鲸信息技术有限公司. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  )
}