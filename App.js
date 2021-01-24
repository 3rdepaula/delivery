import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Routes from './src/routes'
import {
  Poppins_600SemiBold as Poppins600SemiBold,
  Poppins_400Regular as Poppins400Regular,
  useFonts
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins600SemiBold,
    Poppins400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <Routes />
        <StatusBar style='auto' />
      </>
    )
  }
}

export default App
