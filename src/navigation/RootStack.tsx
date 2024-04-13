import {RootStackParamList, TabStacks} from './types'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {TabNavigator} from './Tabs'
import {NewNameProject} from './modals/NewNameProject'

const RootStack = createNativeStackNavigator<RootStackParamList>()
export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
      })}
      initialRouteName="TabStacks">
      <RootStack.Screen name="TabStacks" component={TabNavigator} />
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen name="NewNameProject" component={NewNameProject} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}
