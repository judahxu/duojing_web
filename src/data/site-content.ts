import type { DomainIconKey } from '@/components/icons/domain-icons'

export interface CoreService {
  icon: DomainIconKey
  title: string
  description: string
  href: string
  features: string[]
}

export interface StatItem {
  value: string
  label: string
  sublabel?: string
}

export const contactInfo = {
  phone: '15639917377',
  email: 'lilijun@iduojing.com',
  address: '河南省郑州市高新区河南大学科技园西区1号孵化楼301',
}

export const companyTagline = '人工智能数据服务商'

export const companyVision = [
  {
    lines: [
      { text: '专注人工智能数据生态', className: 'text-2xl md:text-3xl font-bold text-brand' },
      {
        text: '为最前沿人工智能提供海量丰富高质的数据',
        className: 'text-lg md:text-xl text-brand-muted mt-3',
      },
      { text: '赋能千行百业', className: 'text-xl md:text-2xl font-bold text-brand-foreground/90 mt-2' },
    ],
  },
  {
    lines: [
      {
        text: '聚百位将才 · 成千人团队 · 促万人就业',
        className: 'text-xl md:text-2xl font-medium text-brand-muted',
      },
      {
        text: '成为解决社会就业、高校就业、服务国企改革的',
        className: 'text-base md:text-lg text-brand-foreground/70 mt-3',
      },
      { text: '社会价值创造者', className: 'text-xl md:text-2xl font-bold text-brand mt-2' },
    ],
  },
]

export const coreServices: CoreService[] = [
  {
    icon: 'database',
    title: '数据服务',
    description:
      '提供算力+数据+模型训练全链路服务方案，包括但不限于数据采集、数据清洗、数据标注、数据审核、数据治理等数据元件和数据集加工，推动数据要素价值流通。',
    href: '/services/data-service',
    features: [
      '计算机视觉领域',
      '大模型多模态领域',
      '行业垂类领域',
      '具身智能领域',
    ],
  },
  {
    icon: 'brain',
    title: 'AI应用场景赋能',
    description: '覆盖自动驾驶、通用大模型、行业垂类应用、具身智能等领域',
    href: '/services/ai-application',
    features: [
      '自动驾驶场景应用',
      '通用大模型应用',
      '行业垂类应用',
      '具身智能应用',
    ],
  },
  {
    icon: 'users',
    title: '行业人才培养',
    description: '链接高校和行业，开展AI高技能培训，服务产业生态上下游人力供给。',
    href: '/services/talent',
    features: [
      '600+高校资源对接',
      '10万+专家人力储备',
      '基地快速复制培训体系',
      '培训教材+师资+实训平台+项目实战的产教融合人才培养',
    ],
  },
]

export const companyStats: StatItem[] = [
  { value: '2+', label: '多鲸资本、产业资本' },
  {
    value: '5+',
    label: '合资公司',
    sublabel: '与上市公司、政府平台公司成立合资公司',
  },
  { value: '10+', label: '全国数据标注基地' },
  { value: '1000+', label: '交付团队' },
  { value: '全国', label: '数据服务网络' },
]

export const certifications = [
  '国家高新技术企业',
  '国家科技型企业',
  '上海数据交易所数商',
  "山东省大数据产业'三优两重'企业",
  '大学生实习实训基地',
  '见习基地',
  '国家数据标注优秀案例企业',
  '国家数据局调研关注重点企业',
  '国家数据服务平台数据集产品收录单位'
]
