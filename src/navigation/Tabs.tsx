import {HomeStackNavigator} from './stacks/HomeStack/HomeStack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {faComment, faUser} from '@fortawesome/free-solid-svg-icons'
import {
  faComment as faCommentRegular,
  faUser as faUserRegular,
} from '@fortawesome/free-regular-svg-icons'
import {COLORS} from '../styles/colors'
import {TabItem} from '../components/navigation/TabItem'
import {ProfileStackNavigator} from './stacks/ProfileStack/ProfileStack'
import {TabStacks} from './types'

const RootStack = createBottomTabNavigator<TabStacks>()
export const TabNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon = focused ? faUser : faUserRegular
          let label = 'Profil'
          if (route.name === 'homeStack') {
            icon = focused ? faComment : faCommentRegular
            label = 'Namn'
          }

          return (
            <TabItem
              color={focused ? COLORS.fontPrimary : COLORS.fontSecondary}
              icon={icon}
              label={label}
              focused={focused}></TabItem>
          )
        },
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.fontPrimary,
        headerShown: false,
        tabBarShowLabel: false,
      })}
      initialRouteName="homeStack">
      <RootStack.Screen name="homeStack" component={HomeStackNavigator} />
      <RootStack.Screen name="profileStack" component={ProfileStackNavigator} />
    </RootStack.Navigator>
  )
}
