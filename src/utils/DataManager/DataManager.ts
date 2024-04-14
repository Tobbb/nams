import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {NameListItemType, nameDataItem} from './types'

type nameState = {
  names: nameDataItem[]
  addNames(namesObjs: nameDataItem[]): void
  addName(nameObj: nameDataItem): void
  updateNameInProject(projectUUID: string, item: NameListItemType): void
  deleteNameInProject(projectUUID: string, item: NameListItemType): void
  addNameToProject(projectUUID: string, item: NameListItemType): void
}
export const useNames = create<nameState>()(
  persist(
    set => ({
      names: [],
      addNames: namesObjs =>
        set(state => ({names: [...state.names, ...namesObjs]})),
      addName: nameObj => set(state => ({names: [...state.names, nameObj]})),
      addNameToProject: (projectUUID, item) =>
        set(state => {
          const project = state.names.find(name => name.uuid === projectUUID)
          if (project) {
            project.data = [...project.data, item]
          }
          return state
        }),
      updateNameInProject: (projectUUID, item) =>
        set(state => {
          const project = state.names.find(name => name.uuid === projectUUID)
          if (project) {
            const newData = project.data.map(dataItem => {
              if (dataItem.id === item.id) {
                return item
              }
              return dataItem
            })
            project.data = [...newData]
          }
          return state
        }),
      deleteNameInProject: (projectUUID, item) =>
        set(state => {
          const project = state.names.find(name => name.uuid === projectUUID)
          if (project) {
            const newData = project.data.filter(dataItem => {
              if (dataItem.id !== item.id) {
                return dataItem
              }
            })
            project.data = [...newData]
          }
          return state
        }),
    }),

    {
      name: 'localNames',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
