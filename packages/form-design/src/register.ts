import { GlobalRegistry, GlobalDragSource } from '@designable/core'
import { ContainerProperties, InputProperties } from './schema/formItemProps'
import locales from './locales'

GlobalRegistry.registerDesignerProps({
  ...InputProperties,
  ...ContainerProperties,
})

GlobalDragSource.setSourcesByGroup('input', InputItems)

GlobalDragSource.setSourcesByGroup('container', ContainerItems)

GlobalRegistry.registerDesignerLocales(locales)
