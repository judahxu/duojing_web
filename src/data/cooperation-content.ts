export type CooperationType =
  | 'dataset_purchase'
  | 'data_collection'
  | 'data_annotation'
  | 'supplier_cooperation'
  | 'industry_academic_cooperation'

export interface CooperationTypeOption {
  value: CooperationType
  label: string
}

export const cooperationTypeOptions: CooperationTypeOption[] = [
  { value: 'dataset_purchase', label: '数据集购买' },
  { value: 'data_collection', label: '数据采集' },
  { value: 'data_annotation', label: '数据标注' },
  { value: 'supplier_cooperation', label: '供应商合作' },
  { value: 'industry_academic_cooperation', label: '产学研与人才培养' },
]

export interface CooperationFormData {
  company: string
  contact: string
  phone: string
  cooperationType: CooperationType | ''
  remarks: string
}

export const emptyCooperationForm: CooperationFormData = {
  company: '',
  contact: '',
  phone: '',
  cooperationType: '',
  remarks: '',
}
