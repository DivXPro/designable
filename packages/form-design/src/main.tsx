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
import { observer } from '@formily/react'
import {
  createDesigner,
  GlobalRegistry,
  GlobalDragSource,
} from '@designable/core'
import { Content } from './content'
import { Space, Button, Radio } from 'antd'
import { Setting } from './setting'
import './register'
import 'antd/dist/antd.less'
import 'codemirror/lib/codemirror.css'
import './theme.less'

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
      </MainPanel>
    </Designer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
