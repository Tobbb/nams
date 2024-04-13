import {StyleSheet, View} from 'react-native'
import {
  StackHeader,
  stackHeaderProps,
} from '../components/navigation/StackHeader'
import {COLORS} from '../styles/colors'

type stackContainerProps = stackHeaderProps & {
  children: JSX.Element
}
export const StackContainer = (props: stackContainerProps) => {
  return (
    <View style={styles.container}>
      <StackHeader label={props.label} />
      {props.children}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
})
