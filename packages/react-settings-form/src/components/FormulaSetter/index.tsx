import React, { FC, useCallback, useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'antd'
import { FormulaEditor } from '@toy-box/form-formula'
import { SettingsFormContext } from '../../context'

export interface IFormulaSetterProps {
  style?: React.CSSProperties
  className?: string
  value: string
  onChange: (value: string) => void
}

export const FormulaSetter: FC<IFormulaSetterProps> = ({
  style,
  className,
  value,
  onChange,
}) => {
  const [visible, setVisible] = useState(false)
  const [formula, setFormula] = useState<string>()
  const context = useContext(SettingsFormContext)
  useEffect(() => setFormula(value), [value])

  const handleChange = useCallback(() => {
    onChange(formula)
    setVisible(false)
  }, [formula, onChange, setVisible])

  const handleCancel = useCallback(() => {
    setFormula(value)
    setVisible(false)
  }, [value, setFormula, setVisible])

  return (
    <React.Fragment>
      <Modal
        title="公式配置"
        visible={visible}
        onOk={handleChange}
        onCancel={handleCancel}
        width={900}
      >
        <FormulaEditor
          title="表单公式型字段"
          value={formula}
          schema={context.schema}
          onChange={setFormula}
        />
      </Modal>
      <Button
        type={value ? 'primary' : 'dashed'}
        style={style}
        className={className}
        onClick={() => setVisible(true)}
        block
      >
        设置公式
      </Button>
    </React.Fragment>
  )
}
