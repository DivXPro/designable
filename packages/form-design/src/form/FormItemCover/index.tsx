import React from 'react'
import { Form } from 'antd'
import { useTreeNode } from '@designable/react'
import './style.less'

export const FormItemCover = (props) => {
  const node = useTreeNode()
  return (
    <div className="form-design-form-item" {...props}>
      <Form.Item label={node.props.title} tooltip={node.props.description}>
        <div className="form-item-cover" />
        {props.children}
      </Form.Item>
    </div>
  )
}
