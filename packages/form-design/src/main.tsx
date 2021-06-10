import React, { useCallback, useMemo, useState } from 'react'
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
} from '@designable/react'
import { observer } from '@formily/react'
import { createDesigner, GlobalRegistry } from '@designable/core'
import { Content } from './content'
import { Space, Button, Radio } from 'antd'
import { Setting } from './setting'
import { FormDesignContext } from './context'
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
    <Button
      type="primary"
      onClick={() => {
        props.publish()
      }}
    >
      发布
    </Button>
  </Space>
))

const App = () => {
  const [view, setView] = useState('design')
  const engine = useMemo(() => createDesigner(), [])
  const publish = useCallback(() => {
    // console.log('Ischema', engine.getCurrentTree().serialize())
  }, [engine])

  return (
    <FormDesignContext.Provider value={{ prefixCls: 'form-design-' }}>
      <Designer engine={engine}>
        <MainPanel logo={<Logo />} actions={<Actions publish={publish} />}>
          <CompositePanel>
            <CompositePanel.Item
              title="panels.Component"
              icon={<IconWidget infer="Component" />}
            >
              <DragSourceWidget title="sources.Basic" name="basic" />
              <DragSourceWidget title="sources.Advance" name="advance" />
              <DragSourceWidget title="sources.Container" name="container" />
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
    </FormDesignContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
