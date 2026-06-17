import type { DomainIconKey } from '@/components/icons/domain-icons'

/** 首页核心业务三列展示 */
export interface CoreBusinessLine {
  title: string
  subtitle: string
  features: string[]
}

export interface CoreBusinessPillar {
  icon: DomainIconKey
  title: string
  features: string[]
}

export interface ApplicationScenario {
  icon: DomainIconKey
  name: string
  tag: string
  accent: string
}

export interface PlatformCapability {
  icon: DomainIconKey
  title: string
  description: string
  capabilities: string[]
  accent: string
}

export interface TalentPillar {
  icon: DomainIconKey
  title: string
  description: string
}

export const ecologicalIntro =
  '多鲸以自研数据处理平台为核心，构建了覆盖数据采集、数据标注、数据管理全生命周期的产品矩阵，深度布局智能驾驶、AI大模型、具身智能、AI漫剧四大核心应用场景，形成技术与业务双轮驱动的发展格局。'

/** 首页服务介绍：数据集加工 / AI应用落地 / 人才培养 */
export const coreBusinessLines: CoreBusinessLine[] = [
  {
    title: '数据服务',
    subtitle: '专业的采集、清洗、标注全流程服务，覆盖数据要素全链条与数据资产化',
    features: [
      '智能驾驶',
      '多模态',
      '医疗等垂类行业',
      '具身智能',
    ],
  },
  {
    title: 'AI场景应用',
    subtitle: 'AI技术行业应用综合解决方案，深度布局四大核心应用场景',
    features: [
      '智能驾驶场景',
      '通用大模型',
      'AI漫剧',
      '具身智能',
    ],
  },
  {
    title: '人才培养体系',
    subtitle: '产教融合的人才培养解决方案，打通教材-课程-实训-就业全链路',
    features: [
      '600+高校资源对接',
      '10万+专家人力储备',
      '基地快速复制培训体系',
      '培训教材+师资+实训平台+项目实战的产教融合人才培养',
    ],
  },
]

/** 数据服务子页 · 数据价值创造 */
export const dataValueCreation: CoreBusinessPillar = {
  icon: 'archive',
  title: '数据价值创造',
  features: ['高质量数据集建设', '数据资产入表及交易', 'AI应用产品研发'],
}

export const applicationScenarios: ApplicationScenario[] = [
  { icon: 'robotics', name: '具身智能', tag: '爆发增长', accent: 'border-amber-400/60' },
  { icon: 'llm', name: 'AI大模型', tag: '持续扩张', accent: 'border-brand/60' },
  { icon: 'auto', name: '智能驾驶', tag: '稳健基座', accent: 'border-blue-400/60' },
  { icon: 'comic', name: 'AI漫剧', tag: '跨越周期', accent: 'border-violet-400/60' },
]

export const serviceCapabilities = [
  '多模态数据采集',
  '高精度智能标注',
  '优质内容生产',
  '全生命周期数据管理',
  '模型训练与优化',
]

export const platformCapabilities: PlatformCapability[] = [
  {
    icon: 'database',
    title: '多源异构数据采集平台',
    description:
      '多源异构数据资产统一管理，打破格式与来源壁垒，实现标准化接入、存储与检索。',
    capabilities: ['多格式兼容', '分布式存储', '全文检索', '细粒度权限管控'],
    accent: 'border-l-brand',
  },
  {
    icon: 'platform',
    title: '人工智能数据处理平台',
    description:
      '集成自研预标注与智能质检算法，自动化完成标注、清洗与审核，大幅提升生产效率。',
    capabilities: ['AI预标注', '智能质检', '多模态处理', '自动化闭环流程'],
    accent: 'border-l-emerald-400',
  },
  {
    icon: 'robotics',
    title: 'Pico VR数据采集平台',
    description:
      '原生适配Pico全系硬件，还原真实第一视角交互体验，为具身智能提供高保真数据。',
    capabilities: ['原生硬件适配', '全流程可视化', '多传感器同步', '专属隔离'],
    accent: 'border-l-pink-400',
  },
  {
    icon: 'platform',
    title: '调度运营管理平台',
    description:
      '集成任务分发、人员管理、进度监控与质量管控，保障全流程高效可控。',
    capabilities: ['智能任务调度', '生态实时管理', '绩效统计', '全流程数据溯源'],
    accent: 'border-l-orange-400',
  },
]

export const clientStats = [
  { label: '头部自动驾驶客户', value: '20+' },
  { label: '头部大模型客户', value: '全覆盖' },
  { label: '头部具身智能客户', value: '10+' },
  { label: '头部AI漫剧客户', value: '5+' },
  { label: '合作高校', value: '30+' },
]

export const embodiedDataAssets = [
  {
    title: '机器人真机VR遥控数据',
    tag: '核心资产',
    ratio: '75%',
    status: '已标注',
    description: '覆盖家庭、办公、商超、餐饮、住宿、科研、工业、药房等场景',
    accent: 'from-brand/20 to-brand/5 border-brand/30',
  },
  {
    title: '机器人+五指灵巧手',
    tag: '灵巧操作',
    ratio: '20%',
    status: '预标注定制',
    description: '外骨骼手套力控采集 | 物流分拣全场景 | 精细手部动作',
    accent: 'from-emerald-500/20 to-emerald-500/5 border-emerald-400/30',
  },
  {
    title: 'EGO数据',
    tag: '第一视角',
    ratio: '5%',
    status: '全量原始',
    description: '第一视角多模态采集 | 桌面级任务场景 | 感知决策训练',
    accent: 'from-amber-500/20 to-amber-500/5 border-amber-400/30',
  },
]

export const embodiedPlatforms = [
  {
    title: 'DF具身采标平台',
    subtitle: '多源异构数据采集平台 · 全链路打通',
    description: '机器人本体数据一体化平台，打破数据孤岛，实现海量数据标准化接入。',
    metric: '数据生产效率提升 30%',
  },
  {
    title: 'Pico VR采集平台',
    subtitle: '沉浸式数据采集平台 · 原生硬件适配',
    description: '原生适配Pico硬件，高保真还原第一视角交互数据，支撑模型训练。',
    metric: '标注准确率达 95.5%+',
  },
]

export const comicDataAssets = [
  {
    title: '源头IP文字版权资产',
    icon: 'archive' as DomainIconKey,
    items: [
      '原创网文/小说IP库：含人物设定、世界观、情节点标签等',
      '剧本衍生资产：含AI改写剧本库、多版本剧情分支、对话语料库等',
    ],
  },
  {
    title: '工业化生产数字可视资产',
    icon: 'aigc' as DomainIconKey,
    items: ['角色本体、场景环境、道具特效、分镜与机位等资产库'],
  },
  {
    title: '用户商业流量数据资产',
    icon: 'comic' as DomainIconKey,
    items: [
      '用户行为数据集：完播率、停留时长、追更节点、付费转化、评论情感标签',
      '广告运营资产：爆款题材标签、投流素材、海外多区域偏好画像',
    ],
  },
]

export const talentPlanIntro =
  '打造「鲸才计划」人才培养体系，与高校深度合作，将数据标注、具身智能、AI漫剧产业需求前置到校园教学。依托自研平台搭建实训环境，打通「教材-课程-实训-就业」全链路，为产业输送具备扎实理论与丰富实操能力的复合型专业数据人才。'

export const talentPlanPillars: TalentPillar[] = [
  {
    icon: 'book',
    title: '专业教材',
    description:
      '联合行业专家编写，紧贴前沿技术与产业真实场景需求，让教材内容与产业发展同频共振。',
  },
  {
    icon: 'graduation',
    title: '系统课程',
    description:
      '构建「理论+实践」一体化课程体系，覆盖从基础理论到高阶应用全阶段，夯实人才知识底座。',
  },
  {
    icon: 'briefcase',
    title: '真实订单',
    description:
      '引入行业真实订单，让学生在校即积累真实项目实战经验，实现就业无缝衔接。',
  },
  {
    icon: 'award',
    title: '行业认证',
    description:
      '深度参与人社部、工信部等人工智能训练师及AIGC技能（专业级）岗位能力评测标准与培训课程。',
  },
  {
    icon: 'target',
    title: '高质量就业',
    description:
      '打通「在校实训—企业实习—对口就业」全链路闭环，精准匹配产业岗位需求，实现毕业生高质量稳定就业。',
  },
]

export const talentPlanHighlights: TalentPillar[] = [
  {
    icon: 'building',
    title: '产教融合实训基地',
    description:
      '共建高标准校内/校外实训基地，整合软硬件资源，打造沉浸式、场景化的教学与科研实践平台。',
  },
  {
    icon: 'platform',
    title: '自研平台赋能教学',
    description:
      '开放两大核心自研平台接口，支持师生开展算法验证、二次开发与创新实践，提升技术落地能力。',
  },
  {
    icon: 'team',
    title: '深度校企合作生态',
    description:
      '与全国多所高校建立人才联合培养机制，共建课程、共享资源，实现人才供给与产业需求无缝对接。',
  },
]
