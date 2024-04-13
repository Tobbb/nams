import {Text, View} from 'react-native'

type props = {
  title: string
}

export const NameListItem = (props: props) => (
  <View>
    <Text>{props.title}</Text>
  </View>
)
