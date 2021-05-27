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

import { ScreenAuthProps } from '../../../utils/ScreenProps';
import { Container, DivContainer } from './styles';

const Categories = ({ navigation }: ScreenAuthProps<'Categories'>) => {
  const listCategory = (categoryName: string) => {
    navigation.navigate('Home', { categoryName });
  };

  return (
    <Container>
      <DivContainer>
        <CategoriesCards
          name="Restaurantes"
          onClick={() => listCategory('Restaurantes')}
        >
          <Ionicons name="restaurant" size={35} color="#fff" />
        </CategoriesCards>

        <CategoriesCards
          name="Mercados"
          onClick={() => listCategory('Mercados')}
        >
          <AntDesign name="shoppingcart" size={35} color="#fff" />
        </CategoriesCards>

        <CategoriesCards
          name="Farmácias"
          onClick={() => listCategory('Farmácias')}
        >
          <MaterialCommunityIcons name="medical-bag" size={35} color="#fff" />
        </CategoriesCards>
      </DivContainer>

      <DivContainer>
        <CategoriesCards
          name="Conveniências"
          onClick={() => listCategory('Conveniências')}
        >
          <FontAwesome5 name="candy-cane" size={35} color="#fff" />
        </CategoriesCards>

        <CategoriesCards name="Lojas" onClick={() => listCategory('Lojas')}>
          <Fontisto name="shopping-store" size={35} color="#fff" />
        </CategoriesCards>

        <CategoriesCards
          name="Bares"
          onClick={() => listCategory('Bares' || 'Butecos')}
        >
          <Entypo name="drink" size={35} color="#fff" />
        </CategoriesCards>
      </DivContainer>

      <DivContainer>
        <CategoriesCards
          name="Lanchonetes"
          onClick={() => listCategory('Lanchonetes')}
        >
          <FontAwesome5 name="hamburger" size={35} color="#fff" />
        </CategoriesCards>

        <CategoriesCards
          name="Pizzarias"
          onClick={() => listCategory('Pizzarias')}
        >
          <Ionicons name="pizza-outline" size={35} color="#fff" />
        </CategoriesCards>

        <CategoriesCards
          name="Padarias"
          onClick={() => listCategory('Padarias')}
        >
          <MaterialCommunityIcons
            name="bread-slice-outline"
            size={35}
            color="#fff"
          />
        </CategoriesCards>
      </DivContainer>
    </Container>
  );
};

export { Categories };
