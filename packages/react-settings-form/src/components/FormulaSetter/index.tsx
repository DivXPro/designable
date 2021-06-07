import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { FormulaEditor } from '@toy-box/form-formula'

export const FormulaSetter = (props) => {
  const [visible, setVisible] = useState(false)
  const [formula, setFormula] = useState(props.formula)
  return (
    <React.Fragment>
      <Modal
        title="公式配置"
        visible={visible}
        onOk={props.onChange}
        onCancel={() => setVisible(false)}
        width={900}
      >
        <FormulaEditor
          title="表单公式型字段"
          value={formula}
          onChange={setFormula}
        />
      </Modal>
      <Button onClick={() => setVisible(true)} block>
        公式
      </Button>
    </React.Fragment>
  )
}
