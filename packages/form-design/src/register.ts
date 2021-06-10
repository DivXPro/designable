import { GlobalRegistry, GlobalDragSource } from '@designable/core'
import {
  AdvanceInputProperties,
  BasicInputProperties,
  ContainerProperties,
} from './schema/formItemProps'
import {
  AdvanceInputItems,
  BasicInputItems,
  ContainerItems,
} from './schema/formItems'
import locales from './locales'

GlobalRegistry.registerDesignerProps({
  ...BasicInputProperties,
  ...AdvanceInputProperties,
  ...ContainerProperties,
})

GlobalDragSource.setSourcesByGroup('basic', BasicInputItems)

GlobalDragSource.setSourcesByGroup('advance', AdvanceInputItems)

GlobalDragSource.setSourcesByGroup('container', ContainerItems)

GlobalRegistry.registerDesignerLocales(locales)
