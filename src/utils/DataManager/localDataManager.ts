import AsyncStorage from '@react-native-async-storage/async-storage'
import {nameDataItem} from './DataManager'

export const saveData = async (value: nameDataItem[]) => {
  try {
    const json = JSON.stringify(value)
    await AsyncStorage.setItem('localNames', json)
  } catch (e) {
    // saving error
  }
}

export const loadData = async () => {
  try {
    const value = await AsyncStorage.getItem('localNames')
    if (value !== null) {
      return JSON.parse(value) as {names: nameDataItem[]}
    }
    return undefined
  } catch (e) {
    // error reading value
  }
}

export const clearData = async () => {
  AsyncStorage.clear()
}
