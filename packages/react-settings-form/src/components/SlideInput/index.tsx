import React, { useMemo } from 'react'
import { Slider } from 'antd'

export type ISlideInputProps = {
  max?: number
  min?: number
  minimum?: number
  maximum?: number
}

export const SlideInput = ({ max, min, minimum, maximum, ...otherProps }) => {
  const innerMin = useMemo(() => min || minimum, [])
  const innerMax = useMemo(() => max || maximum, [])
  return (
    <div style={{ width: '100%' }}>
      <Slider min={innerMin} max={innerMax} {...otherProps} />
    </div>
  )
}
