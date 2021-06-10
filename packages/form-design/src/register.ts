import { GlobalRegistry, GlobalDragSource } from '@designable/core'

const defaultModeEnum = [
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

const commonProperties = {
  isSystem: {
    type: 'boolean',
    'x-read-pretty': true,
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
  title: {
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

const defaultModeProperties = {
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

GlobalRegistry.registerDesignerProps({
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
})

GlobalDragSource.setSourcesByGroup('input', [
  {
    componentName: 'String',
    props: {
      title: '文本字段',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
  {
    componentName: 'Text',
    props: {
      title: '大段文字',
      type: 'text',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
    },
  },
  {
    componentName: 'Number',
    props: {
      title: '数字字段',
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
  },
  {
    componentName: 'Currency',
    props: {
      title: '金额字段',
      type: 'currency',
      decimalScale: '2',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
  },
  {
    componentName: 'Date',
    props: {
      title: '日期',
      type: 'date',
      format: 'YYYY-MM-DD',
      'x-decorator': 'FormItem',
      'x-component': 'FieldDate',
    },
  },
  {
    componentName: 'Datetime',
    props: {
      title: '日期时间',
      type: 'datetime',
      format: 'YYYY-MM-DD HH:mm',
      'x-decorator': 'FormItem',
      'x-component': 'FieldDate',
    },
  },
  {
    componentName: 'SingleOption',
    props: {
      title: '单选',
      type: 'singleOption',
      'x-decorator': 'FormItem',
      'x-component': 'FieldSelect',
    },
  },
  {
    componentName: 'MultiOption',
    props: {
      title: '多选',
      type: 'multiOption',
      'x-decorator': 'FormItem',
      'x-component': 'FieldSelect',
    },
  },
  {
    componentName: 'Rate',
    props: {
      title: '评分',
      type: 'rate',
      'x-decorator': 'FormItem',
      'x-component': 'Rate',
    },
  },
  {
    componentName: 'Boolean',
    props: {
      title: '是非字段',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'FieldBoolean',
    },
  },
])

GlobalDragSource.setSourcesByGroup('display', [
  {
    componentName: 'FormRow',
    props: {
      title: '行',
      type: 'void',
      'x-decorator': 'FormItem',
      'x-component': 'FormRow',
    },
  },
  {
    componentName: 'FormSegment',
    props: {
      title: '区块',
      type: 'void',
      'x-decorator': 'FormItem',
      'x-component': 'FormSegment',
    },
  },
])

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    sources: {
      Inputs: '输入控件',
      Displays: '展示控件',
      Feedbacks: '反馈控件',
    },
    components: {
      Root: '表单',
      String: '文本字段',
      Text: '大段文字',
      Number: '数字字段',
      Currency: '金额',
      Boolean: '是非字段',
      Date: '日期',
      Datetime: '日期时间',
      SingleOption: '单选',
      MultiOption: '多选',
      Rate: '评分',
      FormRow: '行',
      FormSegment: '区块',
    },
    settings: {
      title: '标题',
      hidden: '是否隐藏',
      size: '宽度（%）',
      description: '字段描述',
      defaultMode: '默认值方式',
      defaultValue: '默认值',
      formula: '公式',
      format: '格式',
      enum: '选项',
      count: '总计',
      required: '必填项',
      isSystem: '系统字段',
      decimalScale: '小数精度',
    },
  },
  'en-US': {
    sources: {
      Inputs: 'Inputs',
      Displays: 'Displays',
      Feedbacks: 'Feedbacks',
    },
    components: {
      Root: 'Form',
      String: 'String',
      Text: 'Text',
      Number: 'Number',
      Currency: 'Currency',
      Boolean: 'Boolean',
      Date: 'Date',
      Datetime: 'Date time',
      SingleOption: 'Single option',
      MultiOption: 'Multi option',
      Rate: 'Rate',
      FormRow: 'FormRow',
      FormSegment: 'FormSegment',
    },
    settings: {
      title: 'Title',
      hidden: 'Hidden',
      size: 'Size (%)',
      defaultMode: 'Default Mode',
      defaultValue: 'Default value',
      formula: 'Formula',
      format: 'format',
      enum: 'Enum options',
      count: 'Count',
      required: 'Required',
      isSystem: 'System field',
      decimalScale: 'Float Scale',
    },
  },
})
