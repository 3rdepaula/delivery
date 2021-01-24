import React, { useState } from 'react'
import { Text, FlatList } from 'react-native'
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
  ContainerCategories,
  TitleBold,
  CardCategories,
  TextCategories,
  FigureCategories
} from './styles'

const FOODS = [
  {
    id: '1',
    emoji: '🍔',
    title: 'Burger'
  },
  {
    id: '2',
    emoji: '🍕',
    title: 'Pizza'
  },
  {
    id: '3',
    emoji: '🌭',
    title: 'Hot-Dog'
  },
  {
    id: '4',
    emoji: '🍣',
    title: 'Sushi'
  }
]

const Home = () => {
  const [selectCategorie, setSelectCategorie] = useState('')

  const renderItem = ({ item }) => (
    <CardCategories
      onPress={() => setSelectCategorie(item.id)}
      style={{
        backgroundColor: item.id === selectCategorie ? '#5332cf' : '#f3f5f7'
      }}
    >
      <FigureCategories>{item.emoji}</FigureCategories>
      <TextCategories style={{ color: item.id === selectCategorie ? '#fff' : '#000' }}>{item.title}</TextCategories>
    </CardCategories>
  )
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
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
        <ContainerCategories>
          <TitleBold>
            Categories
          </TitleBold>
          <FlatList
            data={FOODS}
            horizontal
            removeClippedSubviews
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ContainerCategories>
      </Main>
    </Container>
  )
}

export default Home
