import { omit } from '../utils'

export const defaultModeEnum = [
  { label: '指定', value: 'custom' },
  { label: '公式', value: 'formula' },
]

const defaultValueReaction = [
  // {
  //   dependencies: ['defaultMode'],
  //   when: '{{ $deps[0] === "custom" }}',
  //   fulfill: {
  //     state: {
  //       visible: true,
  //     },
  //   },
  //   otherwise: {
  //     state: {
  //       visible: false,
  //     },
  //   }
  // },
]

const formulaReaction = [
  // {
  //   dependencies: ['defaultMode'],
  //   when: '{{ $deps[0] === "formula" }}',
  //   fulfill: {
  //     state: {
  //       visible: true,
  //     },
  //   },
  //   otherwise: {
  //     state: {
  //       visible: false,
  //     },
  //   }
  // },
]

export const commonProperties = {
  isSystem: {
    type: 'boolean',
    'x-read-pretty': true,
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
  name: {
    type: 'string',
    maxLength: 255,
    required: true,
    'x-validator': 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
  },
  description: {
    type: 'string',
    maxLength: 1024,
    'x-validator': 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input.TextArea',
  },
  size: {
    type: 'string',
    default: 'half',
    'x-decorator': 'FormItem',
    'x-component': 'FieldSizeSetter',
  },
  required: {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
}

export const defaultModeProperties = {
  defaultMode: {
    type: 'string',
    enum: defaultModeEnum,
    default: 'custom',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
  },
  formula: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'FormulaSetter',
    'x-reactions': formulaReaction,
  },
}

const enumPropertie = {
  type: 'array',
  'x-component': 'ArrayItems',
  'x-decorator': 'FormItem',
  items: {
    type: 'object',
    'x-component-props': {
      style: 'width: 100%',
    },
    properties: {
      space: {
        type: 'void',
        'x-component': 'Space',
        'x-component-props': {
          style: { width: '100%' },
        },
        properties: {
          sort: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.SortHandle',
          },
          option: {
            type: 'object',
            'x-decorator': 'FormItem',
            'x-component': 'OptionInput',
          },
          remove: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.Remove',
          },
        },
      },
    },
  },
  properties: {
    add: {
      type: 'void',
      title: '添加选项',
      'x-component': 'ArrayItems.Addition',
    },
  },
}

export const BasicInputProperties = {
  Root: {
    title: 'components.Root',
    allowAppend: (target, sources) =>
      sources.every(
        (node) =>
          node.componentName == 'FormRow' || node.componentName == 'FormSegment'
      ),
  },
  String: (node) => ({
    title: `components.String`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        ...defaultModeProperties,
        minLength: {
          type: 'number',
          minimum: 0,
          maximum: 255,
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        maxLength: {
          type: 'number',
          minimum: 0,
          maximum: 255,
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        defaultValue: {
          type: 'string',
          maxLength: 255,
          'x-validator': 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-reactions': defaultValueReaction,
        },
      },
    },
  }),
  Text: (node) => ({
    title: `components.Text`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        ...defaultModeProperties,
        minLength: {
          type: 'number',
          minimum: 0,
          maximum: 2048,
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        maxLength: {
          type: 'number',
          minimum: 0,
          maximum: 2048,
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        defaultValue: {
          type: 'string',
          maxLength: 2048,
          'x-validator': 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input.TextArea',
          'x-reactions': defaultValueReaction,
        },
      },
    },
  }),
  Number: (node) => ({
    title: `components.Number`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        ...defaultModeProperties,
        minimum: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        maximum: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        decimalScale: {
          type: 'integer',
          minimum: 0,
          maximum: 10,
          default: 2,
          'x-validator': 'integer',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        defaultValue: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
          'x-reactions': defaultValueReaction,
        },
      },
    },
  }),
  Currency: (node) => ({
    title: `components.Currency`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        ...defaultModeProperties,
        defaultValue: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
          'x-reactions': defaultValueReaction,
        },
      },
    },
  }),
  Date: (node) => ({
    title: `components.Date`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        ...defaultModeProperties,
        format: {
          type: 'string',
          default: 'YYYY-MM-DD',
          enum: [
            {
              label: '年-月-日',
              value: 'YYYY-MM-DD',
            },
            {
              label: '年-月',
              value: 'YYYY-MM',
            },
            {
              label: '年',
              value: 'YYYY',
            },
          ],
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        defaultValue: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
          'x-reactions': defaultValueReaction,
        },
      },
    },
  }),
  Datetime: (node) => ({
    title: `components.Datetime`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        ...defaultModeProperties,
        format: {
          type: 'string',
          default: 'YYYY-MM-DD HH:mm:ss',
          enum: [
            {
              label: '年-月-日 时:分:秒',
              value: 'YYYY-MM-DD HH:mm:ss',
            },
            {
              label: '年-月-日 时:分',
              value: 'YYYY-MM-DD HH:mm',
            },
          ],
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        defaultValue: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
          'x-component-props': {
            showTime: true,
          },
          'x-reactions': defaultValueReaction,
        },
      },
    },
  }),
  SingleOption: (node) => ({
    title: `components.SingleOption`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        enum: enumPropertie,
        ...defaultModeProperties,
      },
    },
  }),
  MultiOption: (node) => ({
    title: `components.MultiOption`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        enum: enumPropertie,
        ...defaultModeProperties,
      },
    },
  }),
  Rate: (node) => ({
    title: `components.Rate`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        count: {
          type: 'number',
          minimum: 1,
          maximum: 10,
          exclusiveMaximum: true,
          default: 5,
          'x-validator': 'integer',
          'x-decorator': 'FormItem',
          'x-component': 'SlideInput',
          'x-component-props': {
            min: 1,
            max: 10,
          },
        },
        ...defaultModeProperties,
      },
    },
  }),
  Boolean: (node) => ({
    title: `components.Boolean`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        ...defaultModeProperties,
        defaultValue: {
          type: 'boolean',
          'x-decorator': 'FormItem',
          'x-component': 'Switch',
          'x-reactions': defaultValueReaction,
        },
      },
    },
  }),
  Percent: (node) => ({
    title: `components.Percent`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        ...defaultModeProperties,
        minimum: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        maximum: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        defaultValue: {
          type: 'boolean',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
          'x-reactions': defaultValueReaction,
        },
      },
    },
  }),
}

export const AdvanceInputProperties = {
  RefObjectId: {
    title: 'components.RefObjectId',
    droppable: true,
    inlineChildrenLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...commonProperties,
        refObjectId: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'FieldSelect',
        },
      },
    },
  },
  ArrayTable: {
    title: 'components.ArrayTable',
    droppable: true,
    propsSchema: {
      type: 'object',
      properties: {
        ...omit(commonProperties, ['size', 'required']),
        minLength: {
          type: 'integer',
          minimum: 1,
          'x-validator': 'integer',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        maxLength: {
          type: 'integer',
          minimum: 1,
          'x-validator': 'integer',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
      },
    },
  },
}

export const ContainerProperties = {
  FormRow: {
    title: 'components.FormRow',
    droppable: true,
    inlineChildrenLayout: true,
    allowAppend: (target, sources) =>
      sources.every(
        (node) =>
          node.componentName != 'FormRow' && node.componentName != 'FormSegment'
      ),
  },
  FormSegment: {
    title: 'components.FormSegment',
    droppable: true,
    inlineChildrenLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    },
    allowAppend: (target, sources) =>
      sources.every((node) => node.componentName != 'FormSegment'),
  },
}
