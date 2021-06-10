const InputItems = [
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
  {
    componentName: 'Percent',
    props: {
      title: '百分比',
      type: 'percent',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
  },
]

const ContainerItems = [
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
]
