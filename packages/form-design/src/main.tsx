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
import { Space, Button as AntButton, Radio } from 'antd'
import { Button } from '@toy-box/toybox-lib'
import { Setting } from './setting'
import { FormDesignContext } from './context'
import './register'

import 'antd/dist/antd.less'
import 'codemirror/lib/codemirror.css'
import './theme.less'
import { convert2FormilySchema } from './converts'

const Logo: React.FC = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      fontSize: 16,
      color: '#333',
    }}
  >
    <IconWidget infer="Home3Line" />
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
    // console.log('Ischema', convert2FormilySchema(engine.getCurrentTree().serialize()))
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
              icon={<IconWidget infer="NodeTree" />}
            >
              <OutlineTreeWidget />
            </CompositePanel.Item>
          </CompositePanel>
          <Workspace id="form">
            <WorkspacePanel>
              <ToolbarPanel>
                <ToolbarWidget />
                <Space>
                  <AntButton.Group>
                    <Button
                      disabled={view === 'design'}
                      onClick={() => {
                        setView('design')
                      }}
                      size="small"
                      icon={<IconWidget infer="Brush2Line" />}
                    />
                    <Button
                      disabled={view === 'json'}
                      onClick={() => {
                        setView('json')
                      }}
                      size="small"
                      icon={<IconWidget infer="CodeView" />}
                    />
                  </AntButton.Group>
                </Space>
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
