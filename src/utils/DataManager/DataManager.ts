import {create} from 'zustand'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import {createJSONStorage, persist} from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type nameDataItem = {
  name: string
  icon: IconDefinition
  color: string
  uuid: string
  source: 'local' | 'remote'
}

interface nameState {
  names: nameDataItem[]
  addNames(namesObjs: nameDataItem[]): void
  addName(nameObj: nameDataItem): void
}

export const useNames = create<nameState>()(
  persist(
    set => ({
      names: [],
      addNames: (newNames: nameDataItem[]) =>
        set(state => {
          return {names: [...state.names, ...newNames]}
        }),
      addName: (newName: nameDataItem) =>
        set(state => ({names: [...state.names, newName]})),
    }),
    {
      name: 'localNames',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
