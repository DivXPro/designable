export type AuthorityType = 0 | 1 | 2

export declare type SchemaEnum = Array<
  | string
  | number
  | {
      label: string
      value: string | number
      [key: string]: any
    }
>

export declare type DefaultMode = 'value' | 'formula' | 'ajax'

export interface IFieldItemClassic {
  fieldId: string
  fieldName: string
  description?: string
  type: string
  authority?: AuthorityType
  authorityScope?: AuthorityType[]
  isSystem?: boolean
  required?: boolean
  defaultValue?: any
  options?: SchemaEnum
  children?: Omit<IFieldItemClassic, 'children'>[]
  defaultMode?: DefaultMode
  formula?: string
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: number
  minimum?: number
  exclusiveMinimum?: number
  maxLength?: number
  minLength?: number
  pattern?: string | RegExp
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  maxProperties?: number
  minProperties?: number
}

export declare type FormLayoutItemType =
  | 'form'
  | 'sheet'
  | 'segment'
  | 'row'
  | 'field'

export declare type LayoutSize = 'full' | 'half' | 'quarter' | 'three_quarter'

export interface IFormLayoutItemBase<
  ItemType = FormLayoutItemType,
  ChildType = any
> {
  id: string
  fieldId: string
  type: ItemType
  items?: ChildType[]
  size?: LayoutSize
}

export declare type IFormLayoutSegment = IFormLayoutItemBase<
  'segment',
  IFormLayoutRow
>

export declare type IFormLayoutRow = IFormLayoutItemBase<
  'row',
  IFormLayoutField
>

export declare type IFormLayoutField = Omit<
  IFormLayoutItemBase<'field'>,
  'items'
>

export interface IFormLayout {
  items: (IFormLayoutSegment | IFormLayoutRow)[]
}

export interface IFormSchemaClassic {
  version?: number | string
  fields: IFieldItemClassic[]
  layout: IFormLayout
}

export interface IFormSchema {
  type: string
  name?: string
  description?: string
  index?: number
  authority?: AuthorityType
  authorityScope?: AuthorityType[]
  isSystem?: boolean
  defaultMode?: DefaultMode
  defaultValue?: any
  formula?: string
  enum?: SchemaEnum
  refObjectId?: string
  unique?: boolean
  required?: boolean
  maximum?: number
  minimum?: number
  exclusiveMaximum?: number
  exclusiveMinimum?: number
  maxLength?: number
  minLength?: number
  decimalScale?: number
  multipleOf?: number
  minProperties?: number
  maxProperties?: number
  pattern?: string
  format?: string
  idKey?: string
  titleKey?: string
  properties?: Record<string, IFormSchema>
  size?: LayoutSize | number
}

export interface IFormDesignContext {
  prefixCls: string
}
