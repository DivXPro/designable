import React, { Fragment, useRef } from 'react'
import { Button, InputNumber } from 'antd'
import { observer } from '@formily/reactive-react'
import { CursorType, ScreenType } from '@designable/core'
import { useCursor, useHistory, useScreen, usePrefix } from '../../hooks'
import { IconWidget } from '../IconWidget'
import './styles.less'
export type IToolbarWidgetProps = React.HTMLAttributes<HTMLDivElement>

export const ToolbarWidget: React.FC<IToolbarWidgetProps> = observer(
  (props: IToolbarWidgetProps) => {
    const screen = useScreen()
    const cursor = useCursor()
    const history = useHistory()
    const sizeRef = useRef<{ width?: any; height?: any }>({})
    const prefix = usePrefix('toolbar')
    const renderHistoryController = () => {
      return (
        <Button.Group size="small" style={{ marginRight: 20 }}>
          <Button
            size="small"
            disabled={!history?.allowUndo}
            onClick={() => {
              history.undo()
            }}
          >
            <IconWidget infer="Undo" />
          </Button>
          <Button
            size="small"
            disabled={!history?.allowRedo}
            onClick={() => {
              history.redo()
            }}
          >
            <IconWidget infer="Redo" />
          </Button>
        </Button.Group>
      )
    }

    const renderCursorController = () => {
      return (
        <Button.Group size="small" style={{ marginRight: 20 }}>
          <Button
            size="small"
            disabled={cursor.type === CursorType.Move}
            onClick={() => {
              cursor.setType(CursorType.Move)
            }}
          >
            <IconWidget infer="Move" />
          </Button>
          <Button
            size="small"
            disabled={cursor.type === CursorType.Selection}
            onClick={() => {
              cursor.setType(CursorType.Selection)
            }}
          >
            <IconWidget infer="Selection" />
          </Button>
        </Button.Group>
      )
    }

    const renderResponsiveController = () => {
      if (screen.type !== ScreenType.Responsive) return
      return (
        <Fragment>
          <InputNumber
            size="small"
            value={screen.width}
            style={{ width: 70, textAlign: 'center' }}
            onChange={(value) => {
              sizeRef.current.width = value
            }}
            onPressEnter={() => {
              screen.setSize(sizeRef.current.width, screen.height)
            }}
          />
          <IconWidget
            size={10}
            infer="Close"
            style={{ padding: '0 3px', color: '#999' }}
          />
          <InputNumber
            value={screen.height}
            size="small"
            style={{
              width: 70,
              textAlign: 'center',
              marginRight: 10,
            }}
            onChange={(value) => {
              sizeRef.current.height = value
            }}
            onPressEnter={() => {
              screen.setSize(screen.width, sizeRef.current.height)
            }}
          />
          {(screen.width !== '100%' || screen.height !== '100%') && (
            <Button
              size="small"
              style={{ marginRight: 20 }}
              onClick={() => {
                screen.resetSize()
              }}
            >
              <IconWidget infer="Recover" />
            </Button>
          )}
        </Fragment>
      )
    }

    const renderScreenTypeController = () => {
      return (
        <Button.Group size="small" style={{ marginRight: 20 }}>
          <Button
            size="small"
            disabled={screen.type === ScreenType.PC}
            onClick={() => {
              screen.setType(ScreenType.PC)
            }}
          >
            <IconWidget infer="ComputerLine" />
          </Button>
          <Button
            size="small"
            disabled={screen.type === ScreenType.Mobile}
            onClick={() => {
              screen.setType(ScreenType.Mobile)
            }}
          >
            <IconWidget infer="SmartphoneLine" />
          </Button>
        </Button.Group>
      )
    }

    const renderMobileController = () => {
      if (screen.type !== ScreenType.Mobile) return
      return (
        <Button
          size="small"
          style={{ marginRight: 20 }}
          onClick={() => {
            screen.setFlip(!screen.flip)
          }}
        >
          <IconWidget
            infer="Flip"
            style={{
              transition: 'all .15s ease-in',
              transform: screen.flip ? 'rotate(-90deg)' : '',
            }}
          />
        </Button>
      )
    }

    return (
      <div
        {...props}
        className={prefix}
        style={{
          ...props.style,
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {renderHistoryController()}
        {renderCursorController()}
        {renderScreenTypeController()}
        {renderMobileController()}
        {renderResponsiveController()}
      </div>
    )
  }
)
