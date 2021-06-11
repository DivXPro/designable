import { ITreeNode } from '@designable/core'
import { ISchema } from '@formily/json-schema'
import { IFormSchemaBase } from '../types'

export const convert2Schema = (data: ITreeNode): IFormSchemaBase => {
  if (data.componentName === 'Root') {
    const properties = {} as Record<string, IFormSchemaBase>
    ;(data.children || []).map((child) => {
      properties[child.id] = convert2Schema(child)
    })
    return {
      ...data.props,
      type: 'object',
      properties,
    }
  } else if (data.props.type === 'arrayTable') {
    const properties = {} as Record<string, IFormSchemaBase>
    ;(data.props.items || []).map((item) => {
      properties[item.key] = convert2Schema(item)
    })
    return {
      ...data.props,
      type: 'array',
      properties,
    }
  } else if (data.children && data.children.length > 0) {
    const properties = {} as Record<string, IFormSchemaBase>
    ;(data.children || []).map((child) => {
      properties[child.id] = convert2Schema(child)
    })
    return {
      ...data.props,
      type: data.props.type,
      properties,
    }
  } else {
    return {
      ...data.props,
      type: data.props.type,
    }
  }
}

export const converFormilyType = (type: string) => {
  switch (type) {
    case 'integer':
      return 'integer'
    case 'number':
      return 'number'
    case 'arrayTable':
      return 'array'
    case 'boolean':
      return 'boolean'
    case 'string':
    case 'text':
      return 'string'
    case 'object':
      return 'object'
    case 'objectId':
      return 'string'
    case 'singleOption':
      return 'string'
    case 'multiOption':
      return 'array'
    case 'date':
    case 'datetime':
      return 'string'
    case 'formRow':
    case 'formSegment':
      return 'void'
    default:
      return 'string'
  }
}

export const convertFormilyProperties = (
  type: string,
  props: Record<string, any>
) => {
  switch (type) {
    case 'integer':
      return {
        'x-component': 'NumberPicker',
      }
    case 'number':
      return {
        'x-component': 'NumberPicker',
      }
    case 'arrayTable':
      return {
        'x-component': 'ArrayTable',
      }
    case 'boolean':
      return {
        'x-component': 'Switch',
      }
    case 'string':
    case 'text':
      return {
        'x-component': 'Input',
      }
    case 'objectId':
      return {
        'x-component': 'FieldSelect',
      }
    case 'singleOption':
      return {
        'x-component': 'Select',
      }
    case 'multiOption':
      return {
        'x-component': 'Select',
        'x-componet-props': {
          mode: 'multiple',
        },
      }
    case 'date':
      return {
        'x-component': 'DatePicker',
        'x-componet-props': {
          format: props.format,
        },
      }
    case 'datetime':
      return {
        'x-component': 'DatePicker',
        'x-componet-props': {
          format: props.format,
        },
      }
    case 'formRow':
      return {
        'x-component': 'FieldRow',
      }
    case 'formSegment':
      return {
        'x-component': 'FieldSegment',
        'x-component-props': {
          title: props.title,
        },
      }
    default:
      return {
        'x-component': 'string',
      }
  }
}

export const formSchema2FormilySchema = (schema: IFormSchemaBase) => {
  const { title, type, properties, ...other } = schema
  if (type === 'arrayTable') {
    const formilyProperties: Record<string, ISchema> = {}
    Object.keys(properties).forEach((key) => {
      formilyProperties[key] = formSchema2FormilySchema(properties[key])
    })
    return {
      ...other,
      title,
      type: converFormilyType(type),
      items: {
        type: 'object',
        properties,
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'ArrayTable.Addition',
          title: '添加条目',
        },
      },
      ...convertFormilyProperties(type, schema),
    }
  } else if (type === 'multiOption') {
    return {
      ...other,
      title,
      type: converFormilyType(type),
      ...convertFormilyProperties(type, schema),
    }
  } else if (properties) {
    const formilyProperties: Record<string, ISchema> = {}
    Object.keys(properties).forEach((key) => {
      formilyProperties[key] = formSchema2FormilySchema(properties[key])
    })
    return {
      ...other,
      title,
      type: converFormilyType(type),
      ...convertFormilyProperties(type, schema),
      properties: formilyProperties,
    }
  }
  return {
    ...other,
    title,
    type: converFormilyType(type),
    ...convertFormilyProperties(type, schema),
  }
}

export const convert2FormilySchema = (data: ITreeNode) => {
  const schema = convert2Schema(data)
  return formSchema2FormilySchema(schema)
}
