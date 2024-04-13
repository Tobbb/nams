import {useState} from 'react'
import {StyleSheet, TextInput, TextInputProps, View, Text} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {FONTSIZE, FONTWEIGHT} from '../../styles/font'
import {COLORS} from '../../styles/colors'

type props = TextInputProps & {
  label: string
}

export const Input = (props: props) => {
  const [value, setValue] = useState(props.value ?? '')
  const animatedValue = useSharedValue(props.value ? 0 : 1)
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(animatedValue.value ? FONTSIZE.sm : 0),
      },
      {scale: withTiming(animatedValue.value ? 1 : 0.8)},
    ],
  }))

  const handleFocus = () => {
    animatedValue.value = 0
  }
  const handleBlur = () => {
    if (value) {
      return
    }
    animatedValue.value = 1
  }
  const handleValueChange = (value: string) => {
    setValue(value)
    props.onChangeText && props.onChangeText(value)
  }

  return (
    <View>
      <Animated.View style={[, styles.labelContainer, animatedStyles]}>
        <Text style={styles.label}>{props.label}</Text>
      </Animated.View>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input}
        value={value}
        onChangeText={handleValueChange}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.fontPrimary,
  },
  label: {
    color: COLORS.fontPrimary,
    fontSize: FONTSIZE.md,
    fontWeight: FONTWEIGHT.light,
  },
  labelContainer: {
    transformOrigin: 'left',
    alignSelf: 'flex-start',
  },
})
