import React, { useCallback } from 'react'
import { usePrefix } from '@designable/react'
import cls from 'classnames'
import { Typography } from 'antd'
import { FormDialog, FormItem, FormLayout, Input } from '@formily/antd'
import { createSchemaField } from '@formily/react'
import './styles.less'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

const schema = {
  type: 'object',
  properties: {
    label: {
      type: 'string',
      title: '选项名称',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    value: {
      type: 'string',
      title: '选项值',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}

export const OptionInput = (props) => {
  const prefix = usePrefix('option-input')
  const handleEdit = useCallback(() => {
    FormDialog(
      {
        title: '选项',
        okText: '确定',
        cancelText: '取消',
      },
      () => {
        return (
          <FormLayout labelCol={6} wrapperCol={10}>
            <SchemaField schema={schema} />
            <FormDialog.Footer />
          </FormLayout>
        )
      }
    )
      .open({
        values: {
          label: props.value?.label,
          value: props.value?.value,
        },
      })
      .then((data) => props.onChange(data))
  }, [props.value])

  return (
    <div
      className={cls(prefix, props.className)}
      style={props.style}
      onClick={handleEdit}
    >
      {
        <Typography.Text
          type={props.value?.label ? null : 'secondary'}
          style={{ width: '100%' }}
          ellipsis={props.value.label ? { tooltip: props.value.label } : null}
        >
          {props.value?.label || '点击设置选项值'}
        </Typography.Text>
      }
    </div>
  )
}
