'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const navigation = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '服务介绍', href: '/services' },
  { name: '合作伙伴', href: '/partners' },
  { name: '联系我们', href: '/contact' },
  { name: '供应商申请', href: 'https://ap.henanduojing.com/supplier-form', external: true },
  { name: '合作申请', href: 'https://ap.henanduojing.com/cooperation-form', external: true },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/5 backdrop-blur-lg z-50 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/logo-white.png"
                alt="多鲸科技"
                width={80}
                height={60}
                priority
                className="brightness-110"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-white group-hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors relative"
                >
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 opacity-0 group-hover:opacity-100"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/50 transition-colors"
          >
            <span className="sr-only">打开主菜单</span>
            <svg
              className={`h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-50/50 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}