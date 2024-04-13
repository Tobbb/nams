import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'

import {StyleSheet} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {RootNavigator} from './src/navigation/RootStack'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
