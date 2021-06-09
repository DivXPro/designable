import React, { useMemo } from 'react'
import { ComponentTreeWidget, useTreeNode } from '@designable/react'
import { observer } from '@formily/reactive-react'
import { Fields, FieldRow, FieldSegment } from '@toy-box/toybox-lib'
import { FormItemCover } from './form/FormItemCover'
import { Form } from 'antd'
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
            <Fields.FieldString mode="edit" field={field} />
          </FormItemCover>
        )
      }),
      Text: observer((props) => {
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
            <Fields.FieldText mode="edit" field={field} />
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
      Date: observer((props) => {
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
            type: 'Date',
            format: node.props.format,
          }),
          []
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Fields.FieldDate mode="edit" field={field} />
          </FormItemCover>
        )
      }),
      Datetime: observer((props) => {
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
            type: 'Datetime',
            format: node.props.format,
          }),
          []
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Fields.FieldDate mode="edit" field={field} />
          </FormItemCover>
        )
      }),
      Boolean: observer((props) => {
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
            <Fields.FieldBoolean mode="edit" field={field} />
          </FormItemCover>
        )
      }),
      SingleOption: observer((props) => {
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
            options: node.props.enum,
          }),
          []
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Fields.FieldSelect mode="edit" field={field} />
          </FormItemCover>
        )
      }),
      FormRow: (props) => {
        const node = useTreeNode()
        return (
          <div {...props}>
            <FieldRow {...node.props}>
              {props.children ? (
                props.children
              ) : (
                <span>拖拽字段进入该区域</span>
              )}
            </FieldRow>
          </div>
        )
      },
      FormSegment: (props) => {
        const node = useTreeNode()
        return (
          <div {...props}>
            <FieldSegment {...node.props}>
              {props.children ? (
                props.children
              ) : (
                <span>拖拽字段进入该区域</span>
              )}
            </FieldSegment>
          </div>
        )
      },
    }}
  />
)
