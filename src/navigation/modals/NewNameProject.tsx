import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {FONTSIZE} from '../../styles/font'
import {Input} from '../../components/inputs/Input'
import {faDog} from '@fortawesome/free-solid-svg-icons/faDog'
import {faCat} from '@fortawesome/free-solid-svg-icons/faCat'
import {faBaby} from '@fortawesome/free-solid-svg-icons/faBaby'
import {faShip} from '@fortawesome/free-solid-svg-icons/faShip'
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse'
import {BigSelectButton} from '../../components/buttons/BigSelectButton'
import {useState} from 'react'
import {PASTEL_COLORS} from '../../styles/colors'
import {NewProjectButtonGroup} from '../../containers/ButtonGroups/NewProjectButtonGroup'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import {Button} from '../../components/buttons/Button'
import {useNames} from '../../utils/DataManager/DataManager'
import {useNavigation} from '@react-navigation/native'
import {getButtonWidth} from '../../utils/helpers/buttonWidth'
import uuid from 'react-native-uuid'

const ICONS = [faDog, faCat, faBaby, faShip, faHouse]
const padding = 20
const gap = 10
const iconWidth = getButtonWidth(4, padding, gap)

export const NewNameProject = () => {
  const {goBack} = useNavigation()
  const {addName} = useNames()
  const [color, setColor] = useState(
    PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)],
  )
  const [icon, setIcon] = useState(
    ICONS[Math.floor(Math.random() * ICONS.length)],
  )
  const [label, setLabel] = useState('')

  const handleAddName = () => {
    addName({
      name: label,
      icon: icon,
      color: color,
      uuid: uuid.v4() as string,
      source: 'local',
      data: [],
    })
    goBack()
  }

  return (
    <View style={styles.outerContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.h1}>Nytt projekt</Text>
        <View style={styles.optionsContainer}>
          <Input onChangeText={value => setLabel(value)} label="Projektnamn" />
          <View>
            <NewProjectButtonGroup<string>
              items={PASTEL_COLORS as unknown as string[]}
              size={iconWidth}
              label="Färg"
              onPress={v => setColor(v)}
            />
            <NewProjectButtonGroup<IconDefinition>
              items={ICONS}
              size={iconWidth}
              label="Ikon"
              color={color}
              onPress={v => setIcon(v)}
            />
          </View>
        </View>
      </ScrollView>
      <BigSelectButton
        size={120}
        onPress={() => {}}
        color={color}
        icon={icon}
        label={label}
      />
      <View style={styles.btnContainer}>
        <Button
          disabled={!label}
          fullWidth
          label="Spara"
          onPress={handleAddName}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {padding: 10},
  h1: {
    fontSize: FONTSIZE.xxl,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: gap,
    alignItems: 'center',
  },
  optionsContainer: {
    paddingTop: 10,
    gap: 30,
  },
  container: {
    flex: 1,
    padding: padding,
  },
  outerContainer: {
    flex: 1,
  },
})
