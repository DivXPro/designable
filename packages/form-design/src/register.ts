import { GlobalRegistry, GlobalDragSource } from '@designable/core'

const defaultModeEnum = [
  { label: '指定', value: 'custom' },
  { label: '公式', value: 'formula' },
]

const defaultValueReaction = [
  {
    dependencies: ['defaultMode'],
    when: '{{ $deps[0] === "custom" }}',
    fulfill: {
      state: {
        visible: true,
      },
    },
  },
  {
    dependencies: ['defaultMode'],
    when: '{{ $deps[0] !== "custom" }}',
    fulfill: {
      state: {
        visible: false,
      },
    },
  },
]

const formulaReaction = [
  {
    dependencies: ['defaultMode'],
    when: '{{ $deps[0] === "formula" }}',
    fulfill: {
      state: {
        visible: true,
      },
    },
  },
  {
    dependencies: ['defaultMode'],
    when: '{{ $deps[0] !== "formula" }}',
    fulfill: {
      state: {
        visible: false,
      },
    },
  },
]

GlobalRegistry.registerDesignerProps({
  Root: {
    title: 'components.Root',
  },
  String: (node) => ({
    title: `components.String`,
    draggable: true,
    inlineLayout: true,
    propsSchema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        description: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        size: {
          type: 'string',
          default: 'half',
          'x-decorator': 'FormItem',
          'x-component': 'FieldSizeSetter',
        },
        defaultMode: {
          type: 'string',
          enum: defaultModeEnum,
          default: 'custom',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        defaultValue: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-reactions': defaultValueReaction,
        },
        formula: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'FormulaSetter',
          'x-reactions': formulaReaction,
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
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        description: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        size: {
          type: 'string',
          default: 'full',
          'x-decorator': 'FormItem',
          'x-component': 'FieldSizeSetter',
        },
        defaultMode: {
          type: 'string',
          enum: defaultModeEnum,
          default: 'custom',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        defaultValue: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input.TextArea',
          'x-reactions': defaultValueReaction,
        },
        formula: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'FormulaSetter',
          'x-reactions': formulaReaction,
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
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        description: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        size: {
          type: 'string',
          default: 'half',
          'x-decorator': 'FormItem',
          'x-component': 'FieldSizeSetter',
        },
        defaultMode: {
          type: 'string',
          enum: defaultModeEnum,
          default: 'custom',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        defaultValue: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'Input.Number',
          'x-reactions': defaultValueReaction,
        },
        formula: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'FormulaSetter',
          'x-reactions': formulaReaction,
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
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        description: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        size: {
          type: 'string',
          default: 'half',
          'x-decorator': 'FormItem',
          'x-component': 'FieldSizeSetter',
        },
        defaultMode: {
          type: 'string',
          enum: defaultModeEnum,
          default: 'custom',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        defaultValue: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
          'x-component-props': {
            format: 'YYYY-MM-DD',
          },
          'x-reactions': defaultValueReaction,
        },
        formula: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'FormulaSetter',
          'x-reactions': formulaReaction,
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
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        description: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        size: {
          type: 'string',
          default: 'half',
          'x-decorator': 'FormItem',
          'x-component': 'FieldSizeSetter',
        },
        defaultMode: {
          type: 'string',
          enum: defaultModeEnum,
          default: 'custom',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        defaultValue: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
          'x-component-props': {
            format: 'YYYY-MM-DD HH:mm:ss',
            showTime: true,
          },
          'x-reactions': defaultValueReaction,
        },
        formula: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'FormulaSetter',
          'x-reactions': formulaReaction,
        },
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
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        description: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        size: {
          type: 'string',
          default: 'half',
          'x-decorator': 'FormItem',
          'x-component': 'FieldSizeSetter',
        },
        defaultMode: {
          type: 'string',
          enum: defaultModeEnum,
          default: 'custom',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-reactions': defaultValueReaction,
        },
        formula: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'FormulaSetter',
          'x-reactions': formulaReaction,
        },
      },
    },
  }),
  // SingleOption: (node) => ({
  //   title: `components.SingleOption`,
  //   draggable: true,
  //   inlineLayout: true,
  //   propsSchema: {
  //     type: 'object',
  //     properties: {
  //       title: {
  //         type: 'string',
  //         'x-decorator': 'FormItem',
  //         'x-component': 'Input',
  //       },
  //       description: {
  //         type: 'string',
  //         'x-decorator': 'FormItem',
  //         'x-component': 'Input',
  //       },
  //       size: {
  //         type: 'string',
  //         default: 'half',
  //         'x-decorator': 'FormItem',
  //         'x-component': 'FieldSizeSetter',
  //       },
  //       defaultMode: {
  //         type: 'string',
  //         enum: defaultModeEnum,
  //         default: 'custom',
  //         'x-decorator': 'FormItem',
  //         'x-component': 'Select',
  //         'x-reactions': defaultValueReaction
  //       },
  //       formula: {
  //         type: 'string',
  //         'x-decorator': 'FormItem',
  //         'x-component': 'FormulaSetter',
  //         'x-reactions': formulaReaction
  //       },
  //       enum: {
  //         type: 'array',
  //         'x-decorator': 'FormItem',
  //         'x-component': 'EnumSetter',
  //       }
  //     },
  //   },
  // }),
  FormRow: {
    title: 'components.FormRow',
    droppable: true,
    inlineChildrenLayout: true,
    allowAppend: (target, sources) =>
      sources.every((node) => node.componentName != 'FormRow'),
  },
})

GlobalDragSource.setSourcesByGroup('input', [
  {
    componentName: 'String',
    props: {
      title: '文本字段',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'FieldString',
    },
  },
  {
    componentName: 'Text',
    props: {
      title: '大段文字',
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'FieldText',
    },
  },
  {
    componentName: 'Number',
    props: {
      title: '数字字段',
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'FieldNumber',
    },
  },
  {
    componentName: 'Date',
    props: {
      title: '日期',
      type: 'number',
      format: 'YYYY-MM-DD',
      'x-decorator': 'FormItem',
      'x-component': 'FieldDate',
    },
  },
  {
    componentName: 'Datetime',
    props: {
      title: '日期时间',
      type: 'number',
      format: 'YYYY-MM-DD HH:mm',
      'x-decorator': 'FormItem',
      'x-component': 'FieldDate',
    },
  },
  {
    componentName: 'Boolean',
    props: {
      title: '是非字段',
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'FieldBoolean',
    },
  },
  // {
  //   componentName: 'SingleOption',
  //   props: {
  //     title: '单选',
  //     type: 'string',
  //     'x-decorator': 'FormItem',
  //     'x-component': 'FieldSelect',
  //   },
  // },
])

GlobalDragSource.setSourcesByGroup('display', [
  {
    componentName: 'FormRow',
    props: {
      title: '行容器',
      type: 'void',
      'x-decorator': 'FormItem',
      'x-component': 'FormRow',
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
      Boolean: '是非字段',
      Date: '日期',
      Datetime: '日期时间',
      FormRow: '行容器',
      SingleOption: '单选',
    },
    settings: {
      title: '标题',
      hidden: '是否隐藏',
      size: '宽度',
      description: '字段描述',
      defaultMode: '默认值方式',
      defaultValue: '默认值',
      formula: '公式',
      enum: '选项',
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
      Boolean: 'Boolean',
      Date: 'Date',
      Datetime: 'Date time',
      FormRow: 'FormRow',
      SingleOption: 'Single option',
    },
    settings: {
      title: 'Title',
      hidden: 'Hidden',
      size: 'Size',
      defaultMode: 'Default Mode',
      defaultValue: 'Default value',
      formula: 'Formula',
      enum: 'Enum options',
    },
  },
})
