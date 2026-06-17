export interface SupplierFormData {
  companyName: string
  companyFullName: string
  humanResourceScale: string
  establishmentDate: string
  registeredCapital: string
  registeredCities: string
  businessLicenseUrl: string
  companyIntroductionUrls: string
  businessContactName: string
  businessContactPosition: string
  businessContactPhone: string
  businessContactWechat: string
  businessContactEmail: string
  baseCity: string
  baseBusiness: string
  basePersonnelScale: string
  mainPersonnelType: string
  baseNetworkInfo: string
  baseOfficeEnvironmentUrls: string
  projectType: string
  projectExperienceUrls: string
  mainCustomers: string
  advantages: string
  requirementsAndSuggestions: string
}

export const emptySupplierForm: SupplierFormData = {
  companyName: '',
  companyFullName: '',
  humanResourceScale: '',
  establishmentDate: '',
  registeredCapital: '',
  registeredCities: '',
  businessLicenseUrl: '',
  companyIntroductionUrls: '',
  businessContactName: '',
  businessContactPosition: '',
  businessContactPhone: '',
  businessContactWechat: '',
  businessContactEmail: '',
  baseCity: '',
  baseBusiness: '',
  basePersonnelScale: '',
  mainPersonnelType: '',
  baseNetworkInfo: '',
  baseOfficeEnvironmentUrls: '',
  projectType: '',
  projectExperienceUrls: '',
  mainCustomers: '',
  advantages: '',
  requirementsAndSuggestions: '',
}

export type SupplierSubmitPayload = Omit<
  SupplierFormData,
  'registeredCapital' | 'basePersonnelScale'
> & {
  registeredCapital: number | null
  basePersonnelScale: number | null
}

export function toSupplierSubmitPayload(form: SupplierFormData): SupplierSubmitPayload {
  return {
    ...form,
    companyName: form.companyName.trim(),
    companyFullName: form.companyFullName.trim(),
    humanResourceScale: form.humanResourceScale.trim(),
    establishmentDate: form.establishmentDate || '',
    registeredCapital: form.registeredCapital ? Number(form.registeredCapital) : null,
    registeredCities: form.registeredCities.trim(),
    businessLicenseUrl: form.businessLicenseUrl.trim(),
    companyIntroductionUrls: form.companyIntroductionUrls.trim(),
    businessContactName: form.businessContactName.trim(),
    businessContactPosition: form.businessContactPosition.trim(),
    businessContactPhone: form.businessContactPhone.trim(),
    businessContactWechat: form.businessContactWechat.trim(),
    businessContactEmail: form.businessContactEmail.trim(),
    baseCity: form.baseCity.trim(),
    baseBusiness: form.baseBusiness.trim(),
    basePersonnelScale: form.basePersonnelScale ? Number(form.basePersonnelScale) : null,
    mainPersonnelType: form.mainPersonnelType.trim(),
    baseNetworkInfo: form.baseNetworkInfo.trim(),
    baseOfficeEnvironmentUrls: form.baseOfficeEnvironmentUrls.trim(),
    projectType: form.projectType.trim(),
    projectExperienceUrls: form.projectExperienceUrls.trim(),
    mainCustomers: form.mainCustomers.trim(),
    advantages: form.advantages.trim(),
    requirementsAndSuggestions: form.requirementsAndSuggestions.trim(),
  }
}
