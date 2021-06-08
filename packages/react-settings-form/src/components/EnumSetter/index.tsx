import React, { useCallback } from 'react'
import update from 'immutability-helper'
import { OptionInput } from '../OptionInput'

export const EnumSetter = (props) => {
  const handleChange = useCallback((option, index) => {
    props.onChange &&
      props.onChange(update(props.value, { [index]: { $set: option } }))
  }, [])
  return <></>
}
