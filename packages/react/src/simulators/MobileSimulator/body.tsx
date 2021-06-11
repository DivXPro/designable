import { observer } from '@formily/reactive-react'
import React from 'react'
import { useScreen, usePrefix } from '../../hooks'

export interface IMobileBodyProps {}

export const MobileBody: React.FC<IMobileBodyProps> = observer((props) => {
  const screen = useScreen()
  const prefix = usePrefix('mobile-simulator-body')
  const getContentStyles = (): React.CSSProperties => {
    if (screen.flip) {
      return {
        position: 'absolute',
        height: 375,
        width: 64,
        top: 43.3333,
        left: 106.667,
        overflow: 'hidden',
      }
    }
    return {
      position: 'absolute',
      width: 375,
      height: 620,
      overflow: 'hidden',
    }
  }
  return (
    <div
      className={prefix}
      style={{
        alignItems: screen.flip ? 'center' : '',
        minWidth: screen.flip ? 1000 : 0,
      }}
    >
      <div
        className={prefix + '-wrapper'}
        style={{
          position: 'relative',
          minHeight: screen.flip ? 0 : 1000,
        }}
      >
        <div
          // src={
          //   screen.flip
          //     ? '//img.alicdn.com/tfs/TB1gj1O1eL2gK0jSZPhXXahvXXa-1420-690.png'
          //     : '//img01.yzcdn.cn/public_files/2019/02/11/14417a76b49dac2851efaf744f87cdb4.png'
          // }
          style={{
            backgroundImage: `url(${
              screen.flip
                ? '//img.alicdn.com/tfs/TB1gj1O1eL2gK0jSZPhXXahvXXa-1420-690.png'
                : '//img01.yzcdn.cn/public_files/2019/02/11/14417a76b49dac2851efaf744f87cdb4.png'
            })`,
            height: 64,
            width: 375,
            margin: '0 auto',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '50%',
            display: 'block',
            marginTop: 20,

            // margin: '20px 0',
            // width: screen.flip ? 946.667 : 460,
            // // height: screen.flip ? 460 : 946.667,
            // boxShadow: '0 0 20px #0000004d',
            // backfaceVisibility: 'hidden',
          }}
        ></div>
        <div className={prefix + '-content'} style={getContentStyles()}>
          {props.children}
        </div>
      </div>
    </div>
  )
})

MobileBody.defaultProps = {}
