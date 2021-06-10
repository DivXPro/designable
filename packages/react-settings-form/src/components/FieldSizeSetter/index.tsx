import React from 'react'
import { useField, Field, observer } from '@formily/react'
import { FormItem } from '@formily/antd'
import { Radio } from 'antd'
import { usePrefix, IconWidget } from '@designable/react'
import { FlexStyleSetter } from '../FlexStyleSetter'
import cls from 'classnames'

export interface IFieldSizeSetterProps {
  className?: string
  style?: React.CSSProperties
  value?: string
  onChange?: (value: string) => void
}

export const FieldSizeSetter: React.FC<IFieldSizeSetterProps> = observer(
  (props) => {
    return (
      <Radio.Group
        className={props.className}
        options={[
          {
            label: '25',
            value: 'quarter',
          },
          {
            label: '50',
            value: 'half',
          },
          {
            label: '75',
            value: 'three_quarter',
          },
          {
            label: '100',
            value: 'full',
          },
        ]}
        value={props.value}
        onChange={(e) => {
          props.onChange?.(e.target.value)
        }}
        optionType="button"
        buttonStyle="solid"
      />
    )
  }
)
