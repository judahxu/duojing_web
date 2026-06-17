import type { FC } from 'react'
import { cn } from '@/lib/utils'

export type DomainIconKey =
  | 'database'
  | 'brain'
  | 'users'
  | 'auto'
  | 'llm'
  | 'industry'
  | 'robotics'
  | 'collect'
  | 'clean'
  | 'label'
  | 'tune'
  | 'audit'
  | 'archive'
  | 'retail'
  | 'education'
  | 'medical'
  | 'energy'
  | 'graduation'
  | 'team'
  | 'target'
  | 'book'
  | 'briefcase'
  | 'building'
  | 'award'
  | 'aigc'
  | 'comic'
  | 'platform'

type SvgProps = { className?: string }

const svgBase = 'w-full h-full'

/** 数据服务 */
const DatabaseIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <ellipse cx="24" cy="14" rx="14" ry="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 14v10c0 2.8 6.3 5 14 5s14-2.2 14-5V14" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 24v10c0 2.8 6.3 5 14 5s14-2.2 14-5V24" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="14" r="2" fill="currentColor"/>
  </svg>
)

/** AI / 大模型 */
const BrainIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M16 20c-3 0-5 2-5 5.5 0 2.2 1 4 2.5 5-1.5 1.5-2 3.2-1.5 5.5 1 3.5 4.5 6 9 6h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 20c3 0 5 2 5 5.5 0 2.2-1 4-2.5 5 1.5 1.5 2 3.2 1.5 5.5-1 3.5-4.5 6-9 6h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="18" r="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 24v8M20 28h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
)

/** 人才培养 */
const UsersIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <circle cx="18" cy="16" r="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="18" r="4" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M8 38c0-6 4.5-10 10-10s10 4 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 38c0-4.5 2.5-7.5 6-8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
  </svg>
)

/** 自动驾驶 */
const AutoIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M10 28h28l-3-10H13l-3 10z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="16" cy="30" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="30" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 18h12M22 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 22h4M36 22h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
)

/** 通用大模型 */
const LlmIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <rect x="10" y="12" width="28" height="22" rx="4" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="22" r="2" fill="currentColor"/>
    <circle cx="24" cy="22" r="2" fill="currentColor"/>
    <circle cx="30" cy="22" r="2" fill="currentColor"/>
    <path d="M16 30h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M24 8v4M16 8l2 3M32 8l-2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"/>
  </svg>
)

/** 行业垂类 */
const IndustryIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <rect x="14" y="10" width="20" height="30" rx="2" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="16" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.25"/>
    <rect x="26" y="16" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.25"/>
    <rect x="18" y="26" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.25"/>
    <rect x="26" y="26" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.25"/>
    <path d="M24 40v-4" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

/** 具身智能 */
const RoboticsIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <rect x="16" y="18" width="16" height="14" rx="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="24" r="2" fill="currentColor"/>
    <circle cx="28" cy="24" r="2" fill="currentColor"/>
    <path d="M22 30h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 10v6M14 22h-4M34 22h4M18 32l-4 6M30 32l4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="8" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const CollectIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M12 20l12-8 12 8v16H12V20z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 36V26h8v10" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 22l16-6 16 6" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
  </svg>
)

const CleanIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M14 30c0-8 6-14 10-18 4 4 10 10 10 18" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="20" r="3" fill="currentColor" fillOpacity="0.3"/>
  </svg>
)

const LabelIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M10 18h12l14 14-8 8L10 26V18z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="18" cy="22" r="2.5" fill="currentColor"/>
  </svg>
)

const TuneIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <circle cx="24" cy="24" r="8" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="3" fill="currentColor" fillOpacity="0.35"/>
  </svg>
)

const AuditIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M24 8l14 6v12c0 8-6 14-14 16C16 40 10 34 10 26V14l14-6z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArchiveIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <rect x="10" y="14" width="28" height="22" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 20h28" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="8" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 28h12M18 32h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
)

const RetailIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M12 18h24l-2 20H14L12 18z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M16 18l4-8h8l4 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="20" cy="28" r="2" fill="currentColor"/>
    <circle cx="28" cy="28" r="2" fill="currentColor"/>
  </svg>
)

const EducationIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M24 10L8 18l16 8 16-8-16-8z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M14 22v8c0 3 4.5 6 10 6s10-3 10-6v-8" stroke="currentColor" strokeWidth="2"/>
    <path d="M38 20v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const MedicalIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <rect x="14" y="12" width="20" height="26" rx="4" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 18v12M18 24h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

const EnergyIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M26 8l-8 16h8l-4 16 14-20h-8l4-12z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)

const GraduationIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M24 12L8 20l16 8 16-8-16-8z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 24v6c0 4 5 8 12 8s12-4 12-8v-6" stroke="currentColor" strokeWidth="2"/>
    <path d="M36 22v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const TeamIcon = UsersIcon

const TargetIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <circle cx="24" cy="24" r="14" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="24" r="3" fill="currentColor"/>
    <path d="M24 6v4M24 38v4M6 24h4M38 24h4" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
  </svg>
)

const BookIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <path d="M12 10h12a4 4 0 014 4v26H16a4 4 0 00-4 4V10z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <path d="M28 14h8a4 4 0 014 4v22H32" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 18h8M16 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
)

const BriefcaseIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <rect x="10" y="18" width="28" height="18" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 18v-4a2 2 0 012-2h8a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 26h28" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
  </svg>
)

const BuildingIcon = IndustryIcon

const AwardIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <circle cx="24" cy="20" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 24l-4 12 8-4M32 24l4 12-8-4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 18h8M24 14v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
)

const AigcIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <rect x="8" y="10" width="32" height="24" rx="4" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 20h16M16 26h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 8l4-2v6l-4-2" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="34" cy="14" r="2" fill="currentColor"/>
  </svg>
)

const ComicIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <rect x="10" y="8" width="28" height="32" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 16h28" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="24" r="2" fill="currentColor"/>
    <circle cx="30" cy="24" r="2" fill="currentColor"/>
    <path d="M20 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const PlatformIcon = ({ className }: SvgProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={cn(svgBase, className)}>
    <rect x="6" y="14" width="36" height="22" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 22h36" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <rect x="12" y="26" width="10" height="6" rx="1" fill="currentColor" fillOpacity="0.25"/>
    <rect x="26" y="26" width="10" height="6" rx="1" fill="currentColor" fillOpacity="0.25"/>
    <path d="M24 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const ICON_MAP: Record<DomainIconKey, FC<SvgProps>> = {
  database: DatabaseIcon,
  brain: BrainIcon,
  users: UsersIcon,
  auto: AutoIcon,
  llm: LlmIcon,
  industry: IndustryIcon,
  robotics: RoboticsIcon,
  collect: CollectIcon,
  clean: CleanIcon,
  label: LabelIcon,
  tune: TuneIcon,
  audit: AuditIcon,
  archive: ArchiveIcon,
  retail: RetailIcon,
  education: EducationIcon,
  medical: MedicalIcon,
  energy: EnergyIcon,
  graduation: GraduationIcon,
  team: TeamIcon,
  target: TargetIcon,
  book: BookIcon,
  briefcase: BriefcaseIcon,
  building: BuildingIcon,
  award: AwardIcon,
  aigc: AigcIcon,
  comic: ComicIcon,
  platform: PlatformIcon,
}

export const DomainIcon = ({ name, className }: { name: DomainIconKey; className?: string }) => {
  const Icon = ICON_MAP[name]
  return <Icon className={className} />
}
