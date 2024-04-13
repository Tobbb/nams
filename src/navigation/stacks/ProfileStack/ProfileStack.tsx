import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Login} from './screens/Login'
import {Register} from './screens/Register'
import {ProfileStackScreens} from '../../types'

const HomeStack = createNativeStackNavigator<ProfileStackScreens>()

export const ProfileStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="login"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="login" component={Login} />
      <HomeStack.Screen name="register" component={Register} />
    </HomeStack.Navigator>
  )
}
