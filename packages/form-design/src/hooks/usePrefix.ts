import { useContext } from 'react'
import { FormDesignContext } from '../context'

export const usePrefix = (after = '') => {
  return useContext(FormDesignContext)?.prefixCls + after
}
