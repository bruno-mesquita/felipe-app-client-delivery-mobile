import React from 'react';

import { CategoriesCards } from './components';

import {
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
  Entypo,
  Ionicons,
} from '@expo/vector-icons';

import { Container, DivContainer } from './styles';

const Categories = ({ navigation }) => {
  const listCategory = (categoryName: string) => {
    navigation.navigate('Home', { categoryName });
  };

  return (
    <Container>
      <DivContainer>
        <CategoriesCards
          name="Restaurantes"
          onClick={() => listCategory('Restaurantes')}
          children={<Ionicons name="restaurant" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Mercados"
          onClick={() => listCategory('Mercados')}
          children={<AntDesign name="shoppingcart" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Farmácias"
          onClick={() => listCategory('Farmácias')}
          children={
            <MaterialCommunityIcons name="medical-bag" size={50} color="#fff" />
          }
        />
      </DivContainer>

      <DivContainer>
        <CategoriesCards
          name="Conveniências"
          onClick={() => listCategory('Conveniências')}
          children={<FontAwesome5 name="candy-cane" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Lojas"
          onClick={() => listCategory('Lojas')}
          children={<Fontisto name="shopping-store" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Butecos"
          onClick={() => listCategory('Butecos' || 'Bares')}
          children={<Entypo name="drink" size={50} color="#fff" />}
        />
      </DivContainer>

      <DivContainer>
        <CategoriesCards
          name="Lanchonetes"
          onClick={() => listCategory('Lanchonetes')}
          children={<FontAwesome5 name="hamburger" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Pizzarias"
          onClick={() => listCategory('Pizzarias')}
          children={<Ionicons name="pizza-outline" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Padarias"
          onClick={() => listCategory('Padarias')}
          children={
            <MaterialCommunityIcons
              name="bread-slice-outline"
              size={50}
              color="#fff"
            />
          }
        />
      </DivContainer>
    </Container>
  );
};

export { Categories };
