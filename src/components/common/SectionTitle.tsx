interface SectionTitleProps {
  title: string
  subtitle?: string
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
    {subtitle && <p className="text-gray-400">{subtitle}</p>}
  </div>
)
