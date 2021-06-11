import React, { useMemo } from 'react'
import { ComponentTreeWidget, useTreeNode } from '@designable/react'
import { observer } from '@formily/reactive-react'
import { Fields } from '@toy-box/toybox-lib'
import { FormItemCover, FromRowCover, FromSegmentCover } from './form'
import {
  Input,
  Form,
  Select,
  Switch,
  Table,
  DatePicker,
  Rate,
  InputNumber,
} from 'antd'
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
        return (
          <Form layout="vertical" style={{ padding: '8px' }} {...node.props}>
            {props.children}
          </Form>
        )
      }),
      String: observer((props) => {
        const node = useTreeNode()
        const style = useMemo(
          () => ({
            width: takeWidth(props.size),
          }),
          [props.size]
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Input />
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
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <InputNumber />
          </FormItemCover>
        )
      }),
      Currency: observer((props) => {
        const node = useTreeNode()
        const style = useMemo(
          () => ({
            width: takeWidth(props.size),
          }),
          [props.size]
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <InputNumber />
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
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <DatePicker />
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
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <DatePicker />
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
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Switch />
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
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Select />
          </FormItemCover>
        )
      }),
      MultiOption: observer((props) => {
        const node = useTreeNode()
        const style = useMemo(
          () => ({
            width: takeWidth(props.size),
          }),
          [props.size]
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Select />
          </FormItemCover>
        )
      }),
      Rate: observer((props) => {
        const node = useTreeNode()
        const style = useMemo(
          () => ({
            width: takeWidth(props.size),
          }),
          [props.size]
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Rate {...node.props} />
          </FormItemCover>
        )
      }),
      Percent: observer((props) => {
        const node = useTreeNode()
        const style = useMemo(
          () => ({
            width: takeWidth(props.size),
          }),
          [props.size]
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <InputNumber
              style={{ width: '100%' }}
              formatter={(value) => `${value}%`}
              {...node.props}
            />
          </FormItemCover>
        )
      }),
      RefObjectId: observer((props) => {
        const node = useTreeNode()
        const style = useMemo(
          () => ({
            width: takeWidth(props.size),
          }),
          [props.size]
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Select {...node.props} />
          </FormItemCover>
        )
      }),
      ArrayTable: observer((props) => {
        const node = useTreeNode()
        const columns = (node.props.items || []).map((item, index) => ({
          key: item.key,
          name: node.props.items[index].title,
        }))
        const style = useMemo(
          () => ({
            width: takeWidth(props.size),
          }),
          [props.size]
        )
        return (
          <FormItemCover style={style} label={node.props.title} {...props}>
            <Table columns={columns} />
          </FormItemCover>
        )
      }),
      FormRow: (props) => {
        return <FromRowCover {...props} />
      },
      FormSegment: (props) => {
        return <FromSegmentCover {...props} />
      },
    }}
  />
)
