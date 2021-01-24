import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Routes from './src/routes'
import {
  Poppins_600SemiBold as Poppins600SemiBold,
  Poppins_400Regular as Poppins400Regular,
  Poppins_500Medium as Poppins500Medium,
  useFonts
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import colors from './styles'

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins600SemiBold,
    Poppins400Regular,
    Poppins500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={colors}>
        <Routes />
        <StatusBar style='auto' />
      </ThemeProvider>
    )
  }
}

export default App
