import { ITreeNode } from '@designable/core'
import { ISchema } from '@formily/json-schema'
import { IFormSchema } from '../types'

export const convert2Schema = (data: ITreeNode): IFormSchema => {
  if (data == null) {
    return {
      type: 'object',
    }
  }
  const properties = {} as Record<string, IFormSchema>
  ;(data.children || []).map((child) => {
    properties[child.id] = convert2Schema(child)
  })
  if (data.componentName === 'Root') {
    return {
      type: 'object',
      properties,
    }
  } else {
    const { title: name, ...other } = data.props
    return {
      ...other,
      name,
      properties,
    }
  }
}

export const formSchema2FormilySchema = (schema: IFormSchema) => {
  const { name: title, properties, ...other } = schema
  if (properties) {
    const formilyProperties: Record<string, ISchema> = {}
    Object.keys(properties).forEach((key) => {
      formilyProperties[key] = formSchema2FormilySchema(properties[key])
    })
    return {
      ...other,
      title,
      properties: formilyProperties,
    }
  }
  return {
    ...other,
    title,
  }
}

export const convert2FormilySchema = (data: ITreeNode) => {
  const schema = convert2Schema(data)
  return formSchema2FormilySchema(schema)
}
