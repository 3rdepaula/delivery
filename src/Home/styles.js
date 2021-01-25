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

export const ContainerScroll = styled.ScrollView``

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
  flex: 1;
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

export const CardOffer = styled.View`
  background-color: #fec602;
  border-radius: 20px;
  padding: 20px 0 20px 30px;
  margin-top: 30px;
`

export const ContentCardText = styled.View`
  max-width: 55%;
`

export const CardOfferTitle = styled.Text`
  font-family: 'Poppins600SemiBold';
  font-size: 17px;
`

export const CardOfferSubTitle = styled.Text`
  font-family: 'Poppins400Regular';
`

export const ContainerPopular = styled.View`
  margin-top: 25px;
  padding-bottom: 10px;
  flex: 1;
`

export const CardPopular = styled(RectButton)`
  border-radius: 20px;
  background-color: #f3f5f7;
  margin-top: 10px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PopularTitle = styled.Text`
  font-family: 'Poppins400Regular';
  font-size: 15px;
`

export const PopularSubTitle = styled.Text`
  font-family: 'Poppins600SemiBold';
  font-size: 20px;
`

export const PopulaCalories = styled.Text`
  font-family: 'Poppins400Regular';
  opacity: 0.6;
  margin-top: 5px;
`

export const PopularPrice = styled.Text`
  font-family: 'Poppins600SemiBold';
  font-size: 20px;
  margin-top: 10px;
`
