import {Button} from '../../../../../../components/buttons/Button'
import {View, StyleSheet} from 'react-native'
import {COLORS} from '../../../../../../styles/colors'

type props = {
  selectedColor: string
  onSave(): void
  onDelete(): void
  isNew: boolean
}
export const BtnGroup = (props: props) => {
  return (
    <View style={styles.btnContainer}>
      <Button
        onPress={props.onSave}
        color={props.selectedColor}
        label="Spara"
        fullWidth
      />
      {!props.isNew && (
        <Button
          onPress={props.onDelete}
          color={COLORS.danger}
          label="Ta bort"
          fullWidth
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {paddingTop: 20, gap: 10},
})
