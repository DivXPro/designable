import React from 'react'
import { useTreeNode } from '@designable/react'
import { FieldSegment } from '@toy-box/toybox-lib'
import { Typography } from 'antd'
import { usePrefix } from '../../hooks/usePrefix'

import './style.less'

export const FromSegmentCover = (props) => {
  const node = useTreeNode()
  const prefixCls = usePrefix('form-segment')

  return (
    <div className={prefixCls} {...props}>
      <FieldSegment title={node.props.title} {...node.props} collapsible>
        {props.children ? (
          props.children
        ) : (
          <div style={{ margin: '40px auto', textAlign: 'center' }}>
            <Typography.Text type="secondary">请添加表单组件</Typography.Text>
          </div>
        )}
      </FieldSegment>
    </div>
  )
}
