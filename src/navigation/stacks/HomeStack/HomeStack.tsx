import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SelectName} from './screens/SelectName'
import {HomeStackScreens} from '../../types'
import {NameList} from './screens/NameList'

const HomeStack = createNativeStackNavigator<HomeStackScreens>()

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="selectName"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="selectName" component={SelectName} />
      <HomeStack.Screen name="NamList" component={NameList} />
    </HomeStack.Navigator>
  )
}
