import React from 'react';
import {
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
  Ionicons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';

import { Announcement, Carousel } from '@components';

import { ScreenAuthProps } from '../../../utils/ScreenProps';

import { CategoryCard } from './components';
import { Container, DivContainer } from './styles';

export const Categories = ({ navigation }: ScreenAuthProps<'Categories'>) => {
  const listCategory = (categoryName: string) => {
    navigation.navigate('Home', { categoryName });
  };

  const listDeliverymans = () => navigation.navigate('Deliverymans');

  const iconProps = (name: any) => ({ size: 35, color: '#fff', name })

  return (
    <Container>
      <DivContainer>
        <CategoryCard
          name="Comidas"
          onClick={() => listCategory('Restaurantes')}
        >
          <Ionicons {...iconProps('restaurant')} />
        </CategoryCard>

        <CategoryCard
          name="Mercados"
          onClick={() => listCategory('Mercados')}
        >
          <AntDesign {...iconProps('shoppingcart')} />
        </CategoryCard>

        <CategoryCard
          name="Farmácias"
          onClick={() => listCategory('Farmácias')}
        >
          <MaterialCommunityIcons {...iconProps('medical-bag')} />
        </CategoryCard>
      </DivContainer>

      <DivContainer>
        <CategoryCard name="Lojas" onClick={() => listCategory('Lojas')}>
          <Fontisto {...iconProps('shopping-store')} />
        </CategoryCard>
        <CategoryCard name="Bebidas" onClick={() => listCategory('Lojas')}>
          <Entypo {...iconProps('drink')} />
        </CategoryCard>
        <CategoryCard name="Motoboys" onClick={() => listDeliverymans()}>
          <MaterialIcons {...iconProps('sports-motorsports')} />
        </CategoryCard>
      </DivContainer>


      <Announcement />

      <Carousel />

    </Container>
  );
};
