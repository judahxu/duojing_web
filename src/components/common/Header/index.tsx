'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type NavSection = 'home' | 'about' | 'services' | 'partners' | 'supplier' | 'cooperation'

const navigation = [
  { name: '首页', href: '/', section: 'home' as NavSection },
  { name: '关于我们', href: '/#about', section: 'about' as NavSection },
  { name: '服务介绍', href: '/#services', section: 'services' as NavSection },
  { name: '合作伙伴', href: '/partners', section: 'partners' as NavSection },
  { name: '供应商申请', href: '/supplier', section: 'supplier' as NavSection },
  { name: '合作申请', href: '/cooperation', section: 'cooperation' as NavSection },
]

const SECTION_IDS: Record<Exclude<NavSection, 'home' | 'partners' | 'supplier' | 'cooperation'>, string> = {
  about: 'about',
  services: 'services',
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<NavSection>('home')
  const pathname = usePathname()

  const resolveSectionFromHash = useCallback((): NavSection => {
    const hash = window.location.hash.replace('#', '')
    if (hash === 'about') return 'about'
    if (hash === 'services') return 'services'
    return 'home'
  }, [])

  useEffect(() => {
    if (pathname === '/partners') {
      setActiveSection('partners')
      return
    }

    if (pathname === '/cooperation') {
      setActiveSection('cooperation')
      return
    }

    if (pathname === '/supplier') {
      setActiveSection('supplier')
      return
    }

    if (pathname !== '/') return

    setActiveSection(resolveSectionFromHash())

    const onHashChange = () => setActiveSection(resolveSectionFromHash())
    window.addEventListener('hashchange', onHashChange)

    const sectionElements = Object.entries(SECTION_IDS)
      .map(([section, id]) => ({ section: section as NavSection, el: document.getElementById(id) }))
      .filter((item): item is { section: NavSection; el: HTMLElement } => item.el !== null)

    if (sectionElements.length === 0) {
      return () => window.removeEventListener('hashchange', onHashChange)
    }

    const visibleSections = new Set<NavSection>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target.id as keyof typeof SECTION_IDS
          const navSection = section as NavSection
          if (entry.isIntersecting) {
            visibleSections.add(navSection)
          } else {
            visibleSections.delete(navSection)
          }
        })

        if (visibleSections.size === 0) {
          if (window.scrollY < 300) {
            setActiveSection('home')
          }
          return
        }

        const priority: NavSection[] = ['services', 'about']
        const matched = priority.find((s) => visibleSections.has(s))
        if (matched) {
          setActiveSection(matched)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
    )

    sectionElements.forEach(({ el }) => observer.observe(el))

    const onScroll = () => {
      if (window.scrollY < 200 && visibleSections.size === 0) {
        setActiveSection(resolveSectionFromHash() === 'home' ? 'home' : resolveSectionFromHash())
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [pathname, resolveSectionFromHash])

  const isActive = (item: (typeof navigation)[number]) => {
    if ('external' in item && item.external) return false
    if (!('section' in item)) return false
    return activeSection === item.section
  }

  const linkClass = (active: boolean) =>
    cn(
      'px-3 py-2 text-sm font-medium transition-all duration-200 relative',
      active
        ? 'text-white'
        : 'text-gray-400 hover:text-gray-200',
    )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/50 backdrop-blur-xl z-50 border-b border-white/[0.06]"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/logo-white.png"
                alt="多鲸数据"
                width={80}
                height={60}
                priority
                className="brightness-110"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-2">
            {navigation.map((item) => {
              const active = isActive(item)
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    {...('external' in item && item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={linkClass(active)}
                  >
                    {item.name}
                    <span
                      className={cn(
                        'absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300',
                        active
                          ? 'w-full bg-brand-gradient'
                          : 'w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white/30 to-transparent',
                      )}
                    />
                  </Link>
                </div>
              )
            })}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
          >
            <span className="sr-only">打开主菜单</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const active = isActive(item)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  {...('external' in item && item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-lg transition-colors',
                    active
                      ? 'text-white bg-white/[0.06] border-l-2 border-brand/60'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]',
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
