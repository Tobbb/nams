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

type props = NativeStackScreenProps<HomeStackScreens, 'NamList'>

const defaultItem: NameListItemType = {
  name: '',
  rating: [{author: undefined, stars: 0}],
  colorTag: '#D5B79F',
  id: '',
}

export const NameList = (props: props) => {
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
  return (
    <StackContainer label={name?.name}>
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
        data={data?.data}
      />
      <View style={{padding: 10}}>
        <Button onPress={handleAddNew} fullWidth label="Nytt namn" />
      </View>
    </StackContainer>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
    rowGap: 10,
  },
})
