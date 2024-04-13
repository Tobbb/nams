import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {useNavigation} from '@react-navigation/native'
import {Pressable, StyleSheet, Text, View} from 'react-native'

export type stackHeaderProps = {
  label?: string
}
export const StackHeader = (props: stackHeaderProps) => {
  const {goBack} = useNavigation()
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <FontAwesomeIcon size={20} icon={faChevronLeft} />
      </Pressable>
      {props.label && <Text>{props.label}</Text>}
      <View style={{width: 20}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
})
