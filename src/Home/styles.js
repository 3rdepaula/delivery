import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  padding-top: ${StatusBar.currentHeight || 40}px;
  background-color: ${props => props.theme.background};
  padding-left: 10px;
  padding-right: 10px;
`

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
`

export const ContainerName = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Figure = styled.View`
  background-color: lightblue;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`

export const ContainerNames = styled.View`
  margin-left: 10px;
`

export const TextWelcome = styled.Text`
  font-family: 'Poppins600SemiBold';
  opacity: 0.5;
`

export const Name = styled.Text`
  font-family: 'Poppins600SemiBold';
  font-size: 16px;
`

export const Main = styled.View`
  margin-top: 30px;
`

export const ContainerCategories = styled.View`
  margin-top: 25px;
`

export const TitleBold = styled.Text`
  font-family: 'Poppins600SemiBold';
  font-size: 20px;
`

export const CardCategories = styled(RectButton)`
  height: 130px; 
  width: 115px; 
  margin-left: 10px; 
  align-items: center; 
  justify-content: center; 
  border-radius: 30px;
  margin-top: 10px;
`

export const TextCategories = styled.Text`
  font-family: 'Poppins600SemiBold';
`

export const FigureCategories = styled.Text`
  font-size: 40px;
`
