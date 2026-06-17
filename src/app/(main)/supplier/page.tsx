'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHero } from '@/components/common/PageHero'
import { GlassCard } from '@/components/common/GlassCard'
import { SupplierFileUpload } from '@/components/business/SupplierFileUpload'
import { Button } from '@/components/ui/button'
import {
  emptySupplierForm,
  toSupplierSubmitPayload,
  type SupplierFormData,
} from '@/data/supplier-content'
import { contactInfo } from '@/data/site-content'
import { submitSupplier } from '@/lib/supplier-api'
import { cn } from '@/lib/utils'

type FormErrors = Partial<Record<keyof SupplierFormData, string>>

const inputClassName =
  'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-colors'

function validateForm(form: SupplierFormData): FormErrors {
  const errors: FormErrors = {}

  if (!form.companyName.trim()) {
    errors.companyName = '请输入公司名称'
  } else if (form.companyName.trim().length < 2 || form.companyName.trim().length > 100) {
    errors.companyName = '公司名称长度在 2 到 100 个字符'
  }

  if (!form.businessContactName.trim()) {
    errors.businessContactName = '请输入商务对接人姓名'
  } else if (form.businessContactName.trim().length < 2 || form.businessContactName.trim().length > 50) {
    errors.businessContactName = '姓名长度在 2 到 50 个字符'
  }

  if (!form.businessContactPhone.trim()) {
    errors.businessContactPhone = '请输入联系电话'
  } else if (!/^1[3-9]\d{9}$/.test(form.businessContactPhone.trim())) {
    errors.businessContactPhone = '请输入正确的手机号码'
  }

  if (form.businessContactEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessContactEmail.trim())) {
    errors.businessContactEmail = '请输入正确的邮箱格式'
  }

  if (!form.baseCity.trim()) {
    errors.baseCity = '请输入基地所在城市'
  }

  if (!form.baseBusiness.trim()) {
    errors.baseBusiness = '请输入基地主营业务'
  }

  if (!form.projectType.trim()) {
    errors.projectType = '请输入项目类型'
  }

  return errors
}

function FormField({
  label,
  required,
  error,
  children,
  className,
}: {
  label: string
  required?: boolean
  error?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('space-y-2', className)}>
      <label className="block text-sm font-medium text-gray-200">
        {required && <span className="text-red-400 mr-1">*</span>}
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}

function FormSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">{title}</h2>
      {children}
    </div>
  )
}

function CharCount({ current, max }: { current: number; max: number }) {
  return <p className="text-right text-xs text-gray-500 mt-1">{current}/{max}</p>
}

export default function SupplierPage() {
  const [form, setForm] = useState<SupplierFormData>(emptySupplierForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitLoading, setSubmitLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [successVisible, setSuccessVisible] = useState(false)

  const updateField = <K extends keyof SupplierFormData>(key: K, value: SupplierFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
    if (submitError) setSubmitError('')
  }

  const resetForm = () => {
    setForm(emptySupplierForm)
    setErrors({})
    setSubmitError('')
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const validationErrors = validateForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitLoading(true)
    setSubmitError('')

    try {
      await submitSupplier(toSupplierSubmitPayload(form))
      setSuccessVisible(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : '提交失败，请重试')
    } finally {
      setSubmitLoading(false)
    }
  }

  const handleSuccessConfirm = () => {
    setSuccessVisible(false)
    resetForm()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <PageHero
        title="供应商合作准入登记"
        subtitle="欢迎申请成为我们的合作供应商，请如实填写以下信息，我们将在收到您的申请后尽快与您联系"
      />

      <section className="container mx-auto px-4 pb-24">
        <GlassCard hover={false} className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-10">
            <FormSection title="基本信息">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="公司名称" required error={errors.companyName}>
                  <input
                    type="text"
                    value={form.companyName}
                    maxLength={100}
                    placeholder="请输入公司名称"
                    className={inputClassName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                  />
                </FormField>

                <FormField label="公司全称" error={errors.companyFullName}>
                  <input
                    type="text"
                    value={form.companyFullName}
                    maxLength={200}
                    placeholder="请输入公司全称"
                    className={inputClassName}
                    onChange={(e) => updateField('companyFullName', e.target.value)}
                  />
                </FormField>

                <FormField label="成立时间" error={errors.establishmentDate}>
                  <input
                    type="date"
                    value={form.establishmentDate}
                    className={cn(inputClassName, '[color-scheme:dark]')}
                    onChange={(e) => updateField('establishmentDate', e.target.value)}
                  />
                </FormField>

                <FormField label="注册资本（万元）" error={errors.registeredCapital}>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.registeredCapital}
                    placeholder="请输入注册资本"
                    className={inputClassName}
                    onChange={(e) => updateField('registeredCapital', e.target.value)}
                  />
                </FormField>
              </div>

              <div className="mt-6 space-y-6">
                <FormField label="人力规模及合作模式占比" error={errors.humanResourceScale}>
                  <textarea
                    value={form.humanResourceScale}
                    maxLength={500}
                    rows={3}
                    placeholder="请描述公司总人力规模及合作模式占比，例如：总规模500人，BPO占比70%/HRO占比20%/RPO占比10%"
                    className={cn(inputClassName, 'resize-none')}
                    onChange={(e) => updateField('humanResourceScale', e.target.value)}
                  />
                  <CharCount current={form.humanResourceScale.length} max={500} />
                </FormField>

                <FormField label="注册城市" error={errors.registeredCities}>
                  <input
                    type="text"
                    value={form.registeredCities}
                    maxLength={200}
                    placeholder="请输入在哪些城市已有注册公司主体，多个城市用逗号分隔"
                    className={inputClassName}
                    onChange={(e) => updateField('registeredCities', e.target.value)}
                  />
                </FormField>

                <FormField label="营业执照" error={errors.businessLicenseUrl}>
                  <SupplierFileUpload
                    value={form.businessLicenseUrl}
                    onChange={(value) => updateField('businessLicenseUrl', value)}
                    fileType="businessLicense"
                    accept=".jpg,.jpeg,.png,.pdf"
                    tip="支持 jpg、png、pdf 格式，文件大小不超过 10MB"
                  />
                </FormField>

                <FormField label="公司介绍材料" error={errors.companyIntroductionUrls}>
                  <SupplierFileUpload
                    value={form.companyIntroductionUrls}
                    onChange={(value) => updateField('companyIntroductionUrls', value)}
                    fileType="companyIntroduction"
                    multiple
                    limit={5}
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4,.avi"
                    tip="支持 pdf、doc、ppt、mp4 等格式，最多 5 个文件"
                  />
                </FormField>
              </div>
            </FormSection>

            <FormSection title="商务对接信息">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="商务对接人姓名" required error={errors.businessContactName}>
                  <input
                    type="text"
                    value={form.businessContactName}
                    maxLength={50}
                    placeholder="请输入商务对接人姓名"
                    className={inputClassName}
                    onChange={(e) => updateField('businessContactName', e.target.value)}
                  />
                </FormField>

                <FormField label="职位" error={errors.businessContactPosition}>
                  <input
                    type="text"
                    value={form.businessContactPosition}
                    maxLength={50}
                    placeholder="请输入职位"
                    className={inputClassName}
                    onChange={(e) => updateField('businessContactPosition', e.target.value)}
                  />
                </FormField>

                <FormField label="联系电话" required error={errors.businessContactPhone}>
                  <input
                    type="tel"
                    value={form.businessContactPhone}
                    maxLength={20}
                    placeholder="请输入联系电话"
                    className={inputClassName}
                    onChange={(e) => updateField('businessContactPhone', e.target.value)}
                  />
                </FormField>

                <FormField label="微信号" error={errors.businessContactWechat}>
                  <input
                    type="text"
                    value={form.businessContactWechat}
                    maxLength={50}
                    placeholder="请输入微信号"
                    className={inputClassName}
                    onChange={(e) => updateField('businessContactWechat', e.target.value)}
                  />
                </FormField>
              </div>

              <div className="mt-6">
                <FormField label="邮箱" error={errors.businessContactEmail}>
                  <input
                    type="email"
                    value={form.businessContactEmail}
                    maxLength={100}
                    placeholder="请输入邮箱"
                    className={inputClassName}
                    onChange={(e) => updateField('businessContactEmail', e.target.value)}
                  />
                </FormField>
              </div>
            </FormSection>

            <FormSection title="基地信息">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="基地所在城市" required error={errors.baseCity}>
                  <input
                    type="text"
                    value={form.baseCity}
                    maxLength={100}
                    placeholder="请输入基地所在城市（省/市/区）"
                    className={inputClassName}
                    onChange={(e) => updateField('baseCity', e.target.value)}
                  />
                </FormField>

                <FormField label="基地现有人员规模（人）" error={errors.basePersonnelScale}>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={form.basePersonnelScale}
                    placeholder="请输入人员规模"
                    className={inputClassName}
                    onChange={(e) => updateField('basePersonnelScale', e.target.value)}
                  />
                </FormField>
              </div>

              <div className="mt-6 space-y-6">
                <FormField label="基地主营业务" required error={errors.baseBusiness}>
                  <input
                    type="text"
                    value={form.baseBusiness}
                    maxLength={200}
                    placeholder="请输入基地主营业务"
                    className={inputClassName}
                    onChange={(e) => updateField('baseBusiness', e.target.value)}
                  />
                </FormField>

                <FormField label="主要人力类型" error={errors.mainPersonnelType}>
                  <input
                    type="text"
                    value={form.mainPersonnelType}
                    maxLength={200}
                    placeholder="请输入主要人力类型，如：社招全职、校企学生、兼职等"
                    className={inputClassName}
                    onChange={(e) => updateField('mainPersonnelType', e.target.value)}
                  />
                </FormField>

                <FormField label="基地网络情况" error={errors.baseNetworkInfo}>
                  <input
                    type="text"
                    value={form.baseNetworkInfo}
                    maxLength={200}
                    placeholder="请输入基地网络情况，如：带宽、是否有固定 IP 等"
                    className={inputClassName}
                    onChange={(e) => updateField('baseNetworkInfo', e.target.value)}
                  />
                </FormField>

                <FormField label="基地办公环境" error={errors.baseOfficeEnvironmentUrls}>
                  <SupplierFileUpload
                    value={form.baseOfficeEnvironmentUrls}
                    onChange={(value) => updateField('baseOfficeEnvironmentUrls', value)}
                    fileType="officeEnvironment"
                    multiple
                    limit={10}
                    accept=".jpg,.jpeg,.png"
                    tip="支持 jpg、png 格式，最多 10 张图片"
                  />
                </FormField>
              </div>
            </FormSection>

            <FormSection title="项目信息">
              <div className="space-y-6">
                <FormField label="项目类型" required error={errors.projectType}>
                  <input
                    type="text"
                    value={form.projectType}
                    maxLength={200}
                    placeholder="请输入项目类型，如：审核、标注、大模型等"
                    className={inputClassName}
                    onChange={(e) => updateField('projectType', e.target.value)}
                  />
                </FormField>

                <FormField label="主要客户" error={errors.mainCustomers}>
                  <input
                    type="text"
                    value={form.mainCustomers}
                    maxLength={200}
                    placeholder="请输入主要客户"
                    className={inputClassName}
                    onChange={(e) => updateField('mainCustomers', e.target.value)}
                  />
                </FormField>

                <FormField label="项目经验文件" error={errors.projectExperienceUrls}>
                  <SupplierFileUpload
                    value={form.projectExperienceUrls}
                    onChange={(value) => updateField('projectExperienceUrls', value)}
                    fileType="projectExperience"
                    multiple
                    limit={5}
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    tip="支持 pdf、doc、ppt 格式，最多 5 个文件"
                  />
                </FormField>

                <FormField label="优势补充" error={errors.advantages}>
                  <textarea
                    value={form.advantages}
                    maxLength={1000}
                    rows={4}
                    placeholder="请详细描述贵公司的优势和特色"
                    className={cn(inputClassName, 'resize-none')}
                    onChange={(e) => updateField('advantages', e.target.value)}
                  />
                  <CharCount current={form.advantages.length} max={1000} />
                </FormField>

                <FormField label="主要需求及建议" error={errors.requirementsAndSuggestions}>
                  <textarea
                    value={form.requirementsAndSuggestions}
                    maxLength={1000}
                    rows={4}
                    placeholder="请描述贵公司的主要需求及对合作的建议"
                    className={cn(inputClassName, 'resize-none')}
                    onChange={(e) => updateField('requirementsAndSuggestions', e.target.value)}
                  />
                  <CharCount current={form.requirementsAndSuggestions.length} max={1000} />
                </FormField>
              </div>
            </FormSection>

            {submitError && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {submitError}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-white/10">
              <Button
                type="submit"
                disabled={submitLoading}
                className="sm:min-w-[140px] h-11 bg-brand/20 hover:bg-brand/30 text-brand-foreground border border-brand/30"
              >
                {submitLoading ? '提交中...' : '提交申请'}
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={submitLoading}
                onClick={resetForm}
                className="sm:min-w-[140px] h-11 border-white/20 bg-transparent text-gray-300 hover:bg-white/5 hover:text-white"
              >
                重置表单
              </Button>
            </div>
          </form>
        </GlassCard>
      </section>

      <AnimatePresence>
        {successVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-gray-900 p-8 text-center shadow-2xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">感谢您的申请！</h3>
              <p className="text-brand-muted leading-relaxed mb-2">
                我们已收到您的供应商合作申请，工作人员将在 3 个工作日内与您联系。
              </p>
              <p className="text-brand-muted leading-relaxed mb-8">
                如有紧急事项，请联系李女士：{contactInfo.phone}
              </p>
              <Button
                onClick={handleSuccessConfirm}
                className="min-w-[120px] bg-brand/20 hover:bg-brand/30 text-brand-foreground border border-brand/30"
              >
                确定
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
