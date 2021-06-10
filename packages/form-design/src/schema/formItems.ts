export const BasicInputItems = [
  {
    componentName: 'String',
    props: {
      name: '文本字段',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
  {
    componentName: 'Text',
    props: {
      name: '大段文字',
      type: 'text',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
    },
  },
  {
    componentName: 'Number',
    props: {
      name: '数字字段',
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
      name: '日期',
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
      name: '单选',
      type: 'singleOption',
      'x-decorator': 'FormItem',
      'x-component': 'FieldSelect',
    },
  },
  {
    componentName: 'MultiOption',
    props: {
      name: '多选',
      type: 'multiOption',
      'x-decorator': 'FormItem',
      'x-component': 'FieldSelect',
    },
  },
  {
    componentName: 'Rate',
    props: {
      name: '评分',
      type: 'rate',
      'x-decorator': 'FormItem',
      'x-component': 'Rate',
    },
  },
  {
    componentName: 'Boolean',
    props: {
      name: '是非字段',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'FieldBoolean',
    },
  },
  {
    componentName: 'Percent',
    props: {
      name: '百分比',
      type: 'percent',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
  },
]

export const AdvanceInputItems = [
  {
    componentName: 'RefObjectId',
    props: {
      name: '关联对象',
      type: 'objectId',
      'x-decorator': 'FormItem',
      'x-component': 'FieldSelect',
    },
  },
  {
    componentName: 'ArrayTable',
    props: {
      name: '列表表格',
      type: 'arrayTable',
      size: 'full',
      items: [],
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
    },
  },
]

export const ContainerItems = [
  {
    componentName: 'FormRow',
    props: {
      title: '行',
      type: 'formRow',
      'x-decorator': 'FormItem',
      'x-component': 'FormRow',
    },
  },
  {
    componentName: 'FormSegment',
    props: {
      title: '区块',
      type: 'formSegment',
      'x-decorator': 'FormItem',
      'x-component': 'FormSegment',
    },
  },
]
