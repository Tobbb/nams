import {StyleSheet, Text, View} from 'react-native'
import {BigSelectButton} from '../../components/buttons/BigSelectButton'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

type props<T extends string | IconDefinition> = {
  label?: string
  size: number
  onPress(item: T): void
  items: T[]
  color?: string
}

export const NewProjectButtonGroup = <T extends string | IconDefinition>(
  props: props<T>,
) => {
  return (
    <View>
      <Text>{props.label}</Text>
      <View style={styles.iconContainer}>
        {props.items.map((item, index) => (
          <BigSelectButton
            key={index}
            color={typeof item === 'string' ? item : props.color}
            icon={typeof item === 'string' ? undefined : item}
            size={props.size}
            onPress={() => props.onPress(item)}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
  },
  optionsContainer: {
    paddingTop: 10,
    gap: 30,
  },
  container: {
    flex: 1,
    padding: 20,
  },
})
