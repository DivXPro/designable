import { ISchema } from '@formily/json-schema'
import { ITreeNode } from '@designable/core'

export const convert2Schema = (data: ITreeNode): ISchema => {
  if (data.componentName === 'Root') {
    const properties = {} as Record<string, ISchema>
    ;(data.children || []).map((child) => {
      properties[child.id] = convert2Schema(child)
    })
    return {
      ...data.props,
      type: 'object',
      properties,
    }
  } else if (data.props.type === 'arrayTable') {
    const properties = {} as Record<string, ISchema>
    ;(data.props.items || []).map((item) => {
      properties[item.key] = convert2Schema(item)
    })
    return {
      ...data.props,
      items: {
        type: 'object',
        properties,
      },
    }
  } else if (data.props.type === 'object') {
    const properties = {} as Record<string, ISchema>
    ;(data.children || []).map((child) => {
      properties[child.id] = convert2Schema(child)
    })
    return {
      ...data.props,
      properties,
    }
  } else {
    return data.props
  }
}
