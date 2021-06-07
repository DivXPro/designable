import React from 'react'
import { observer } from '@formily/reactive-react'
import { SettingsPanel, useTree } from '@designable/react'
import { SettingsForm } from '@designable/react-settings-form'
import { convert2FormilySchema } from './converts'

const useSchema = () => {
  const tree = useTree()
  const data = tree ? tree.serialize() : { componentName: 'Root' }
  return convert2FormilySchema(data)
}

export const Setting = observer((props) => {
  const tree = useTree()
  const schema = useSchema()
  return (
    <SettingsPanel title="panels.PropertySettings">
      <SettingsForm
        schema={schema}
        uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      />
    </SettingsPanel>
  )
})
