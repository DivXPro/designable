import React from 'react'
import { useTreeNode } from '@designable/react'
import { FieldRow } from '@toy-box/toybox-lib'
import { Typography, Space } from 'antd'
import { usePrefix } from '../../hooks/usePrefix'
import './style.less'

export const FromRowCover = (props) => {
  const node = useTreeNode()
  const prefixCls = usePrefix('form-row')

  return (
    <div className={prefixCls} {...props}>
      <FieldRow {...node.props}>
        {props.children ? (
          props.children
        ) : (
          <div style={{ margin: '40px auto', textAlign: 'center' }}>
            <Typography.Text type="secondary">请添加表单组件</Typography.Text>
          </div>
        )}
      </FieldRow>
    </div>
  )
}
