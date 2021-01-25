import React, { useState } from 'react'
import { Text, FlatList, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { SearchBar } from 'react-native-elements'

import {
  Container,
  ContainerScroll,
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
  FigureCategories,
  CardOffer,
  ContentCardText,
  CardOfferTitle,
  CardOfferSubTitle,
  ContainerPopular,
  CardPopular,
  PopularTitle,
  PopularSubTitle,
  PopulaCalories,
  PopularPrice
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

const POPULAR_BURGER = [
  {
    id: '1',
    emoji: '🍔',
    title: 'Big Sam\'s Burger Bar',
    subtitle: 'Double Humble',
    price: '$14.99',
    calories: '264'
  },
  {
    id: '2',
    emoji: '🍔',
    title: 'Burger Bar',
    subtitle: 'Roasted Beef',
    price: '$18.99',
    calories: '186'
  },
  {
    id: '3',
    emoji: '🍔',
    title: 'Burger Bar X',
    subtitle: 'Fried Chicken',
    price: '$18.99',
    calories: '186'
  }
]

const Home = () => {
  const [selectCategorie, setSelectCategorie] = useState('')

  const renderItemCategories = ({ item }) => (
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
      <ContainerScroll
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ContainerHeader>
          <ContainerName>
            <Figure>
              <Text>😎</Text>
            </Figure>
            <ContainerNames>
              <TextWelcome>Bem-vindo</TextWelcome>
              <Name>Ramon</Name>
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
              renderItem={renderItemCategories}
              keyExtractor={item => item.id}
            />
          </ContainerCategories>
          <CardOffer>
            <ContentCardText>
              <CardOfferTitle>Only Today 30% OFF On Each Order!</CardOfferTitle>
              <CardOfferSubTitle>Dude everything's on sale what are you waiting for?</CardOfferSubTitle>
            </ContentCardText>
          </CardOffer>
          <ContainerPopular>
            <TitleBold>
              Popular
            </TitleBold>
            {POPULAR_BURGER.map((item) => {
              return (
                <CardPopular key={item.id}>
                  <View>
                    <PopularTitle>{item.title}</PopularTitle>
                    <PopularSubTitle>{item.subtitle}</PopularSubTitle>
                    <PopulaCalories>🔥 {item.calories} Calories</PopulaCalories>
                    <PopularPrice>{item.price}</PopularPrice>
                  </View>
                  <Text style={{ fontSize: 90 }}>{item.emoji}</Text>
                </CardPopular>
              )
            })}
          </ContainerPopular>
        </Main>
      </ContainerScroll>
    </Container>
  )
}

export default Home
