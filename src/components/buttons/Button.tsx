import {StyleSheet} from 'react-native'
import {GenericButton} from '../generic/Button'
import {FONTSIZE} from '../../styles/font'
import {COLORS} from '../../styles/colors'

type props = {
  label: string
  onPress(): void
  fullWidth: boolean
  disabled?: boolean
  color?: string
}
export const Button = (props: props) => {
  return (
    <GenericButton
      disabled={props.disabled}
      textStyle={[styles.text, props.disabled && styles.disabledText]}
      style={[
        styles.btn,
        !!props.color && {backgroundColor: props.color},
        !props.fullWidth && styles.defaultWidth,
        props.disabled && styles.disabled,
      ]}
      onPress={props.onPress}
      label={props.label}
    />
  )
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: FONTSIZE.lg,
    color: 'white',
  },
  defaultWidth: {
    alignSelf: 'flex-start',
  },
  disabled: {
    backgroundColor: COLORS.disabled,
  },
  disabledText: {
    color: COLORS.disabledText,
  },
})
