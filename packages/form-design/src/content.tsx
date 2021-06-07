import React, { useMemo } from 'react'
import { ComponentTreeWidget, useTreeNode } from '@designable/react'
import { observer } from '@formily/reactive-react'
import { Fields } from '@toy-box/toybox-lib'
import { FormItemCover } from './form/FormItemCover'
import { Form, Input } from 'antd'
import 'antd/dist/antd.css'

const takeWidth = (width: string | number) => {
  if (typeof width === 'number') {
    return `${width}%`
  }
  switch (width) {
    case 'quarter':
      return '25%'
    case 'half':
      return '50%'
    case 'three_quarter':
      return '75%'
    case 'full':
    default:
      return '100%'
  }
}

export const Content = () => (
  <ComponentTreeWidget
    components={{
      Root: observer((props) => {
        const node = useTreeNode()
        return <Form layout="vertical">{props.children}</Form>
      }),
      String: observer((props) => {
        const node = useTreeNode()
        const style = useMemo(
          () => ({
            width: takeWidth(props.size),
          }),
          [props.size]
        )

        const field = useMemo(
          () => ({
            key: node.props.key,
            title: node.props.title,
            type: 'string',
          }),
          []
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Input />
          </FormItemCover>
        )
      }),
      Number: observer((props) => {
        const node = useTreeNode()
        const style = useMemo(
          () => ({
            width: takeWidth(props.size),
          }),
          [props.size]
        )

        const field = useMemo(
          () => ({
            key: node.props.key,
            title: node.props.title,
            type: 'number',
          }),
          []
        )
        return (
          <FormItemCover style={style} {...props}>
            <Fields.FieldNumber mode="edit" field={field} />
          </FormItemCover>
        )
      }),
      FormRow: (props) => {
        return (
          <div
            {...props}
            style={{
              background: '#eee',
              border: '1px solid #ddd',
              display: 'flex',
              padding: 8,
              height: props.children ? 'auto' : 150,
              alignItems: 'center',
            }}
          >
            {props.children ? props.children : <span>拖拽字段进入该区域</span>}
          </div>
        )
      },
    }}
  />
)
