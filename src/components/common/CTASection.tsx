'use client'

import { contactInfo } from '@/data/site-content'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  href?: string
}

export const CTASection = ({
  title,
  description,
  buttonText,
  href = `mailto:${contactInfo.email}`,
}: CTASectionProps) => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-brand-muted mb-8">{description}</p>
          <a
            href={href}
            className="inline-block bg-brand/20 hover:bg-brand/30 text-brand-foreground border border-brand/30 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
