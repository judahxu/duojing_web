'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHero } from '@/components/common/PageHero'
import { GlassCard } from '@/components/common/GlassCard'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  cooperationTypeOptions,
  emptyCooperationForm,
  type CooperationFormData,
} from '@/data/cooperation-content'
import { contactInfo } from '@/data/site-content'
import { submitCooperation } from '@/lib/cooperation-api'
import { cn } from '@/lib/utils'

type FormErrors = Partial<Record<keyof CooperationFormData, string>>

const inputClassName =
  'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-colors'

function validateForm(form: CooperationFormData): FormErrors {
  const errors: FormErrors = {}

  if (!form.company.trim()) {
    errors.company = '请输入公司名称'
  } else if (form.company.trim().length < 2 || form.company.trim().length > 100) {
    errors.company = '公司名称长度在 2 到 100 个字符'
  }

  if (!form.contact.trim()) {
    errors.contact = '请输入联系人姓名'
  } else if (form.contact.trim().length < 2 || form.contact.trim().length > 50) {
    errors.contact = '联系人姓名长度在 2 到 50 个字符'
  }

  if (!form.phone.trim()) {
    errors.phone = '请输入手机号'
  } else if (!/^1[3-9]\d{9}$/.test(form.phone.trim())) {
    errors.phone = '请输入正确的手机号码'
  }

  if (!form.cooperationType) {
    errors.cooperationType = '请选择合作意向'
  }

  return errors
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-200">
        {required && <span className="text-red-400 mr-1">*</span>}
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}

export default function CooperationPage() {
  const [form, setForm] = useState<CooperationFormData>(emptyCooperationForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitLoading, setSubmitLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [successVisible, setSuccessVisible] = useState(false)

  const updateField = <K extends keyof CooperationFormData>(key: K, value: CooperationFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
    if (submitError) setSubmitError('')
  }

  const resetForm = () => {
    setForm(emptyCooperationForm)
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
      await submitCooperation({
        company: form.company.trim(),
        contact: form.contact.trim(),
        phone: form.phone.trim(),
        cooperationType: form.cooperationType,
        remarks: form.remarks.trim(),
      })
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
        title="合作意向填写"
        subtitle="欢迎填写合作意向，我们将根据您的需求为您提供最适合的合作方案"
      />

      <section className="container mx-auto px-4 pb-24">
        <GlassCard hover={false} className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">
                基本信息
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="公司名称" required error={errors.company}>
                  <input
                    type="text"
                    value={form.company}
                    maxLength={100}
                    placeholder="请输入公司名称"
                    className={inputClassName}
                    onChange={(e) => updateField('company', e.target.value)}
                  />
                </FormField>

                <FormField label="联系人" required error={errors.contact}>
                  <input
                    type="text"
                    value={form.contact}
                    maxLength={50}
                    placeholder="请输入联系人姓名"
                    className={inputClassName}
                    onChange={(e) => updateField('contact', e.target.value)}
                  />
                </FormField>

                <FormField label="手机号" required error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    maxLength={11}
                    placeholder="请输入手机号"
                    className={inputClassName}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </FormField>

                <FormField label="合作意向" required error={errors.cooperationType}>
                  <Select
                    value={form.cooperationType || undefined}
                    onValueChange={(value) => updateField('cooperationType', value as CooperationFormData['cooperationType'])}
                  >
                    <SelectTrigger
                      className={cn(
                        inputClassName,
                        'h-auto data-[placeholder]:text-gray-500',
                      )}
                    >
                      <SelectValue placeholder="请选择合作意向" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/10 text-white">
                      {cooperationTypeOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="focus:bg-white/10 focus:text-white"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>
              </div>

              <div className="mt-6">
                <FormField label="备注" error={errors.remarks}>
                  <textarea
                    value={form.remarks}
                    maxLength={500}
                    rows={4}
                    placeholder="请详细描述您的合作需求或其他信息"
                    className={cn(inputClassName, 'resize-none')}
                    onChange={(e) => updateField('remarks', e.target.value)}
                  />
                  <p className="text-right text-xs text-gray-500 mt-1">{form.remarks.length}/500</p>
                </FormField>
              </div>
            </div>

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
                我们已收到您的合作意向申请，工作人员将在 3 个工作日内与您联系。
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
