import { ISchema } from '@formily/json-schema'
import { ITreeNode } from '@designable/core'

export const convert2Schema = (data: ITreeNode): ISchema => {
  const properties = {} as Record<string, ISchema>
  ;(data.children || []).map((child) => {
    properties[child.id] = convert2Schema(child)
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
