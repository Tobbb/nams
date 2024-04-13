import {Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width

export const getButtonWidth = (
  itemsInRow: number,
  padding: number,
  gap: number,
): number => {
  const iconWidth =
    (windowWidth - padding * 2 - (itemsInRow - 1) * gap) / itemsInRow
  return iconWidth
}
