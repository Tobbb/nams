import {StyleSheet, View} from 'react-native'
import {
  StackHeader,
  stackHeaderProps,
} from '../components/navigation/StackHeader'
import {COLORS} from '../styles/colors'
import {ReactElement} from 'react'

type stackContainerProps = stackHeaderProps & {
  children: ReactElement | ReactElement[]
}
export const StackContainer = (props: stackContainerProps) => {
  return (
    <View style={styles.container}>
      <StackHeader rightContent={props.rightContent} label={props.label} />
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
