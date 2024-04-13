import {StyleSheet, Text} from 'react-native'
import {GenericButton} from '../generic/Button'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import {COLORS} from '../../styles/colors'

type props = {
  onDelete?(): void
  icon?: IconDefinition
  label?: string
  onPress(): void
  size: number
  color?: string
}
export const BigSelectButton = (props: props) => {
  return (
    <GenericButton
      style={[
        styles.container,
        !!props.size && {width: props.size, height: props.size},
        !!props.color && {backgroundColor: props.color},
      ]}
      onPress={props.onPress}>
      {props.icon && (
        <FontAwesomeIcon
          size={props.label ? props.size * 0.5 : props.size * 0.75}
          color={COLORS.fontSecondary}
          icon={props.icon}
        />
      )}
      <Text>{props.label}</Text>
    </GenericButton>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    gap: 5,
  },
})
