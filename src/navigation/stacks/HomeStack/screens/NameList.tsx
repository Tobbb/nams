import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {StackContainer} from '../../../../containers/StackContainer'
import {useNames} from '../../../../utils/DataManager/DataManager'
import {HomeStackScreens} from '../../../types'
import {FlatList} from 'react-native'
import {PASTEL_COLORS} from '../../../../styles/colors'
import {NameListItem} from './NameList/NameListItem'

type props = NativeStackScreenProps<HomeStackScreens, 'NamList'>

type nameRating = {
  author: string | undefined
  stars: number
}

type NameListItem = {
  name: string
  id: string
  colorTag: (typeof PASTEL_COLORS)[number]
  rating: nameRating[]
}

const DATA: NameListItem[] = [
  {
    name: 'Hasse',
    colorTag: '#D5E3F0',
    id: 'asd',
    rating: [
      {
        author: undefined,
        stars: 3,
      },
    ],
  },
]
export const NameList = (props: props) => {
  const name = useNames(state =>
    state.names.find(item => item.uuid === props.route.params.uuid),
  )

  return (
    <StackContainer label={name?.name}>
      <FlatList
        keyExtractor={item => item.id}
        renderItem={({item}) => <NameListItem title={item.name} />}
        data={DATA}
      />
    </StackContainer>
  )
}
