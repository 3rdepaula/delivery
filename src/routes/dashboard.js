import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../Home'

const { Navigator, Screen } = createStackNavigator()

const DashboardRoutes = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Screen name='Home' component={Home} />
    </Navigator>
  )
}

export default DashboardRoutes
