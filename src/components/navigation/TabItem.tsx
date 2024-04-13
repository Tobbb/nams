import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {StyleSheet, Text, View} from 'react-native'
import {FONTSIZE, FONTWEIGHT} from '../../styles/font'
import {COLORS} from '../../styles/colors'

type props = {
  icon: IconProp
  color: string
  label: string
  focused: boolean
}

export const TabItem = (props: props) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon color={props.color} icon={props.icon}></FontAwesomeIcon>
      <Text
        style={[
          styles.text,
          {color: props.color},
          props.focused && styles.focused,
        ]}>
        {props.label}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: {
    paddingTop: 3,
    fontWeight: FONTWEIGHT.light,
    fontSize: FONTSIZE.sm,
  },
  focused: {
    fontWeight: FONTWEIGHT.semiBold,
  },
})
