import { ISchema, SchemaItems, SchemaProperties } from '@formily/json-schema'
import { ITreeNode } from '@designable/core'

export const convert2Schema = (data: ITreeNode): ISchema => {
  const properties = {} as Record<string, ISchema>
  ;(data.children || []).map((child) => {
    properties[getKey(child)] = convert2Schema(child)
  })
  if (data.componentName === 'Root') {
    return {
      type: 'object',
      properties,
    }
  } else {
    return {
      ...data.props,
      properties,
    }
  }
}

const getKey = (data: ITreeNode) => {
  return data.props?.key || data.id
}
