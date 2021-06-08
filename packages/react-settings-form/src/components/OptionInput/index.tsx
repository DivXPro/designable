import React, { useCallback } from 'react'
import { Button, Modal } from 'antd'
import { usePrefix, IconWidget } from '@designable/react'

export const OptionInput = (props) => {
  const prefixCls = usePrefix('option-item-input')
  const handleEdit = useCallback(() => {}, [])

  return (
    <>
      <div className={prefixCls}>
        {props.value.title || props.value.label}
        <Button type="text" onClick={handleEdit}>
          <IconWidget infer="setup" />
        </Button>
        <Button type="text">
          <IconWidget infer="delete" />
        </Button>
      </div>
      <Modal></Modal>
    </>
  )
}
