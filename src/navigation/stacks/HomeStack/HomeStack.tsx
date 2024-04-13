import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SelectName} from './screens/SelectName'
import {HomeStackScreens} from '../../types'
import {CreateName} from './screens/CreateName'

const HomeStack = createNativeStackNavigator<HomeStackScreens>()

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="selectName"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="selectName" component={SelectName} />
      <HomeStack.Screen name="createName" component={CreateName} />
    </HomeStack.Navigator>
  )
}
