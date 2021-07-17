import React from 'react';
import {
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';

import { Announcement } from '@components';

import { ScreenAuthProps } from '../../../utils/ScreenProps';

import { CategoryCard } from './components';
import { Container, DivContainer, Title } from './styles';

export const Categories = ({ navigation }: ScreenAuthProps<'Categories'>) => {
  const listCategory = (categoryName: string) => {
    navigation.navigate('Home', { categoryName });
  };

  const listDeliverymans = () => navigation.navigate('Deliverymans');

  const iconProps = (name: any) => ({ size: 35, color: '#fff', name })

  return (
    <Container>
      <Title>Categorias</Title>

      <DivContainer>
        <CategoryCard
          name="Comida"
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
        <CategoryCard name="Motoboys" onClick={() => listDeliverymans()}>
          <MaterialIcons {...iconProps('sports-motorsports')} />
        </CategoryCard>
      </DivContainer>

      <Announcement />
    </Container>
  );
};
