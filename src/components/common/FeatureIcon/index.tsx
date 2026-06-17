import { cn } from '@/lib/utils'
import { DomainIcon, type DomainIconKey } from '@/components/icons/domain-icons'

const sizeMap = {
  sm: { box: 'w-11 h-11', icon: 'w-5 h-5', rounded: 'rounded-xl' },
  md: { box: 'w-14 h-14', icon: 'w-7 h-7', rounded: 'rounded-2xl' },
  lg: { box: 'w-16 h-16', icon: 'w-8 h-8', rounded: 'rounded-2xl' },
}

interface FeatureIconProps {
  name: DomainIconKey
  size?: keyof typeof sizeMap
  className?: string
  glow?: boolean
}

/** 统一业务图标展示：渐变底 + 光晕 + 领域 SVG */
export const FeatureIcon = ({ name, size = 'md', className, glow = true }: FeatureIconProps) => {
  const s = sizeMap[size]

  return (
    <div className={cn('relative shrink-0', className)}>
      {glow && (
        <div
          className={cn(
            'absolute inset-0 bg-brand/25 blur-lg scale-110 opacity-60',
            s.rounded,
          )}
        />
      )}
      <div
        className={cn(
          'relative flex items-center justify-center text-brand',
          'bg-gradient-to-br from-brand/20 via-brand/10 to-transparent',
          'ring-1 ring-brand/30 shadow-inner shadow-brand/5',
          s.box,
          s.rounded,
        )}
      >
        <DomainIcon name={name} className={s.icon} />
      </div>
    </div>
  )
}
