import {ScrollView, StyleSheet} from 'react-native'
import {COLORS} from '../../../../styles/colors'
import {BigSelectButton} from '../../../../components/buttons/BigSelectButton'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {useNames} from '../../../../utils/DataManager/DataManager'
import {useNavigation} from '@react-navigation/native'
import {getButtonWidth} from '../../../../utils/helpers/buttonWidth'

const padding = 40
const gap = 10
const iconWidth = getButtonWidth(2, padding, gap)

export const SelectName = () => {
  const {navigate} = useNavigation()
  const {names} = useNames()
  const handleAdd = () => {
    navigate('NewNameProject')
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {names.map(item => (
        <BigSelectButton
          key={item.uuid}
          onPress={() => {}}
          onDelete={() => {}}
          icon={item.icon}
          color={item.color}
          label={item.name}
          size={iconWidth}></BigSelectButton>
      ))}
      <BigSelectButton
        onPress={handleAdd}
        onDelete={() => {}}
        icon={faPlus}
        size={iconWidth}></BigSelectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: padding,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
    rowGap: gap,
  },
})
