import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {useNavigation} from '@react-navigation/native'
import {ReactElement} from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'

export type stackHeaderProps = {
  label?: string
  rightContent?: ReactElement
}
export const StackHeader = (props: stackHeaderProps) => {
  const {goBack} = useNavigation()

  return (
    <View style={styles.container}>
      <Pressable style={styles.corners} onPress={goBack}>
        <FontAwesomeIcon size={20} icon={faChevronLeft} />
      </Pressable>
      {props.label && <Text>{props.label}</Text>}
      <View style={[styles.corners, styles.right]}>
        {props.rightContent && props.rightContent}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  right: {
    alignItems: 'flex-end',
  },
  corners: {width: '20%'},
  container: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
})
