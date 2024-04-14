import AsyncStorage from '@react-native-async-storage/async-storage'

export const clearData = async () => {
  AsyncStorage.clear()
}
