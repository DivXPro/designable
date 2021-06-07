import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Designer,
  IconWidget,
  ToolbarWidget,
  Workspace,
  Viewport,
  OutlineTreeWidget,
  DragSourceWidget,
  MainPanel,
  CompositePanel,
  WorkspacePanel,
  ToolbarPanel,
  ViewportPanel,
  SettingsPanel,
} from '@designable/react'
import { SettingsForm } from '@designable/react-settings-form'
import { observer } from '@formily/react'
import {
  createDesigner,
  GlobalRegistry,
  GlobalDragSource,
} from '@designable/core'
import { Content } from './content'
import { Space, Button, Radio } from 'antd'
import { Setting } from './setting'
import 'antd/dist/antd.less'
import 'codemirror/lib/codemirror.css'
import './theme.less'

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
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'FieldSizeSetter',
        },
        defaultType: {
          type: 'string',
          enum: [
            { label: '指定', value: 'value' },
            { label: '公式', value: 'formula' },
          ],
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        formula: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'FormulaSetter',
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
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'FieldSizeSetter',
        },
        defaultType: {
          type: 'string',
          enum: [
            { label: '指定', value: 'value' },
            { label: '公式', value: 'formula' },
          ],
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
        formula: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'FormulaSetter',
        },
      },
    },
  }),
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
      'x-component': 'Input',
    },
  },
  {
    componentName: 'Number',
    props: {
      title: '数字字段',
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
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
      Number: '数字字段',
      FormRow: '行容器',
    },
    settings: {
      title: '标题',
      hidden: '是否隐藏',
      default: '默认值',
      size: '宽度',
      description: '字段描述',
      defaultType: '默认值方式',
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
      Input: 'Input',
      Card: 'Card',
    },
    settings: {
      title: 'Title',
      hidden: 'Hidden',
      default: 'Default Value',
      style: {
        width: 'Width',
        height: 'Height',
        display: 'Display',
        background: 'Background',
        boxShadow: 'Box Shadow',
        font: 'Font',
        margin: 'Margin',
        padding: 'Padding',
        borderRadius: 'Border Radius',
        border: 'Border',
      },
    },
  },
})

const Logo: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', fontSize: 14 }}>
    <IconWidget
      infer="Logo"
      style={{ margin: 10, height: 24, width: 'auto' }}
    />
  </div>
)

const Actions = observer((props) => (
  <Space style={{ marginRight: 10 }}>
    <Radio.Group
      value={GlobalRegistry.getDesignerLanguage()}
      optionType="button"
      options={[
        { label: 'Engligh', value: 'en-US' },
        { label: '简体中文', value: 'zh-CN' },
      ]}
      onChange={(e) => {
        GlobalRegistry.setDesignerLanguage(e.target.value)
      }}
    />
    <Button>保存</Button>
    <Button type="primary">发布</Button>
  </Space>
))

const App = () => {
  const [view, setView] = useState('design')
  const engine = useMemo(() => createDesigner(), [])

  return (
    <Designer engine={engine}>
      <MainPanel logo={<Logo />} actions={<Actions />}>
        <CompositePanel>
          <CompositePanel.Item
            title="panels.Component"
            icon={<IconWidget infer="Component" />}
          >
            <DragSourceWidget title="sources.Inputs" name="input" />
            <DragSourceWidget title="sources.Displays" name="display" />
          </CompositePanel.Item>
          <CompositePanel.Item
            title="panels.OutlinedTree"
            icon={<IconWidget infer="Outline" />}
          >
            <OutlineTreeWidget />
          </CompositePanel.Item>
        </CompositePanel>
        <Workspace id="form">
          <WorkspacePanel>
            <ToolbarPanel>
              <ToolbarWidget />
              <Button.Group>
                <Button
                  disabled={view === 'design'}
                  onClick={() => {
                    setView('design')
                  }}
                  size="small"
                >
                  <IconWidget infer="Design" />
                </Button>
                <Button
                  disabled={view === 'json'}
                  onClick={() => {
                    setView('json')
                  }}
                  size="small"
                >
                  <IconWidget infer="JSON" />
                </Button>
                <Button
                  disabled={view === 'code'}
                  onClick={() => {
                    setView('code')
                  }}
                  size="small"
                >
                  <IconWidget infer="Code" />
                </Button>
              </Button.Group>
            </ToolbarPanel>
            <ViewportPanel>
              {view === 'json' && <div>JSON 输入</div>}
              {view === 'design' && (
                <Viewport>
                  {/* <Sandbox
                    jsAssets={['./runtime.bundle.js', './sandbox.bundle.js']}
                  /> */}
                  <Content />
                </Viewport>
              )}
            </ViewportPanel>
          </WorkspacePanel>
        </Workspace>
        <Setting />
        {/* <SettingsPanel title="panels.PropertySettings">
          <SettingsForm schema={schema} uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
        </SettingsPanel> */}
      </MainPanel>
    </Designer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
