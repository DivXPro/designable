import React, { useCallback, useContext, useState } from 'react'
import { Button, Modal } from 'antd'
import { FormulaEditor } from '@toy-box/form-formula'
import { SettingsFormContext } from '../../context'

export const FormulaSetter = (props) => {
  const [visible, setVisible] = useState(false)
  const [formula, setFormula] = useState(props.formula)
  const context = useContext(SettingsFormContext)
  const handleChange = useCallback(() => {
    props.onChange(formula)
    setVisible(false)
  }, [formula, setVisible])

  return (
    <React.Fragment>
      <Modal
        title="公式配置"
        visible={visible}
        onOk={handleChange}
        onCancel={() => setVisible(false)}
        width={900}
      >
        <FormulaEditor
          title="表单公式型字段"
          value={formula}
          schema={context.schema}
          onChange={setFormula}
        />
      </Modal>
      <Button onClick={() => setVisible(true)} block>
        公式
      </Button>
    </React.Fragment>
  )
}
