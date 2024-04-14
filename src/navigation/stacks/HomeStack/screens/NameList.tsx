import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {StackContainer} from '../../../../containers/StackContainer'
import {useNames} from '../../../../utils/DataManager/DataManager'
import {HomeStackScreens} from '../../../types'
import {FlatList, StyleSheet, View} from 'react-native'
import {NameListItem} from './NameList/NameListItem'
import {NameListItemType} from '../../../../utils/DataManager/types'
import {NameItemModal} from './NameList/NameItemModal'
import {useState} from 'react'
import {Button} from '../../../../components/buttons/Button'
import {BigSelectButton} from '../../../../components/buttons/BigSelectButton'
import {COLORS} from '../../../../styles/colors'
import {iconsAndSorting, sortList} from './NameList/functions'

type props = NativeStackScreenProps<HomeStackScreens, 'NamList'>

const defaultItem: NameListItemType = {
  name: '',
  rating: [{author: undefined, stars: 0}],
  colorTag: '#D5B79F',
  id: '',
}

export const NameList = (props: props) => {
  const [iconIndex, setIconIndex] = useState(0)
  const data = useNames(state =>
    state.names.find(name => name.uuid === props.route.params.uuid),
  )
  const [modalShowing, setModalShowing] = useState(false)
  const [isNew, setIsNew] = useState(true)
  const [updateItem, setUpdateItem] = useState<NameListItemType>(defaultItem)

  const name = useNames(state =>
    state.names.find(item => item.uuid === props.route.params.uuid),
  )
  const handleAddNew = () => {
    setIsNew(true)
    setUpdateItem(defaultItem)
    setModalShowing(true)
  }
  const handleEdit = (item: NameListItemType) => {
    setIsNew(false)
    setUpdateItem(item)
    setModalShowing(true)
  }
  const handleChangeIndex = () => {
    setIconIndex(iconIndex < iconsAndSorting.length - 1 ? iconIndex + 1 : 0)
  }
  return (
    <StackContainer
      rightContent={
        <BigSelectButton
          color={COLORS.accent}
          onPress={handleChangeIndex}
          icon={iconsAndSorting[iconIndex].icon}
          size={30}
        />
      }
      label={name?.name}>
      <NameItemModal
        project={props.route.params.uuid}
        showing={modalShowing}
        onRequestClose={() => {
          setModalShowing(false)
        }}
        new={isNew}
        item={updateItem}
      />
      <FlatList
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <NameListItem onPress={i => handleEdit(i)} item={item} />
        )}
        contentContainerStyle={styles.contentContainer}
        data={sortList(data?.data || [], iconsAndSorting[iconIndex].sorting)}
      />
      <View style={styles.btnContainer}>
        <Button onPress={handleAddNew} fullWidth label="Nytt namn" />
      </View>
    </StackContainer>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    padding: 10,
  },
  contentContainer: {
    paddingHorizontal: 10,
    rowGap: 10,
  },
})
