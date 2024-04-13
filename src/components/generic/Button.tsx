import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import type {ReactNode} from 'react'

type defaultProps = {
  onPress(): void
  style: StyleProp<ViewStyle>
  disabled?: boolean
}

type conditionalProps =
  | {label?: string; children?: never; textStyle: StyleProp<TextStyle>}
  | {label?: never; children?: ReactNode; textStyle?: never}

export type ButtonProps = defaultProps & conditionalProps

export const GenericButton = (props: ButtonProps) => {
  return (
    <Pressable disabled={props.disabled} onPress={props.onPress}>
      <View style={props.style}>
        <Text style={props.textStyle}>{props.label}</Text>
        {props.children}
      </View>
    </Pressable>
  )
}
