import {StyleSheet, Text, View} from 'react-native'
import {Input} from '../../../../../../components/inputs/Input'
import {FONTSIZE, FONTWEIGHT} from '../../../../../../styles/font'

type props = {
  new: boolean
  updateValue: (updateObject: object) => void
  name: string
}
export const ModalHeader = (props: props) => {
  return props.new ? (
    <View style={styles.container}>
      <Text style={styles.h1}>Nytt namn</Text>
      <Input
        onChangeText={value => {
          props.updateValue({name: value})
        }}
        label="Namn"
      />
    </View>
  ) : (
    <Text style={styles.h1}>{props.name}</Text>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: FONTSIZE.xl,
    fontWeight: FONTWEIGHT.semiBold,
    textAlign: 'center',
  },
  container: {width: '100%'},
})
