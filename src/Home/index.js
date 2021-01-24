import React from 'react'
import { Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { SearchBar } from 'react-native-elements'

import {
  Container,
  ContainerHeader,
  ContainerName,
  Figure,
  ContainerNames,
  TextWelcome,
  Name,
  Main,
  ContainerCategories
} from './styles'

const Home = () => {
  return (
    <Container>
      <ContainerHeader>
        <ContainerName>
          <Figure>
            <Text>😎</Text>
          </Figure>
          <ContainerNames>
            <TextWelcome>Welcome back</TextWelcome>
            <Name>Nikusha</Name>
          </ContainerNames>
        </ContainerName>
        <Feather name='align-right' size={28} />
      </ContainerHeader>
      <Main>
        <SearchBar
          platform='android'
          placeholder='Search'
          placeholderTextColor='#979899'
          onChangeText={(value) => null}
          keyboardAppearance='light'
          value={null}
          inputStyle={{
            color: '#000',
            fontSize: 15,
            fontFamily: 'Poppins500Medium'
          }}
          containerStyle={{
            borderRadius: 15,
            height: 50,
            backgroundColor: '#f3f5f7',
            marginHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
        <ContainerCategories />
      </Main>
    </Container>
  )
}

export default Home
