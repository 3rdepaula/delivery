import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import DashboardRoutes from './dashboard'

function Routes () {
  return (
    <NavigationContainer>
      <DashboardRoutes />
    </NavigationContainer>
  )
}

export default Routes
