import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons, Fontisto, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Announcement, Carousel } from '@components';
import api from '@services/api';

import { ScreenAuthProps } from '../../../utils/ScreenProps';

import { CategoryCard } from './components';
import { Container, DivContainer } from './styles';

export const Categories = ({ navigation }: ScreenAuthProps<'Categories'>) => {
  const { metrics } = useTheme();

  const [userActive, setUserActive] = useState(false);

  useFocusEffect(
    useCallback(() => {
      api
        .post('/clients/me', { selects: ['active'] })
        .then(({ data }) => setUserActive(data.result.active))
        .catch(() => setUserActive(false));
    }, [])
  );

  const listCategory = (categoryName: string) => navigation.navigate('Home', { categoryName });

  const iconProps = (name: any) => ({ size: metrics.px(50), color: '#fff', name });

  return (
    <Container>
      <DivContainer>
        <CategoryCard disabled={userActive} name="Comidas" onClick={() => listCategory('Comidas')}>
          <Ionicons {...iconProps('restaurant')} />
        </CategoryCard>

        <CategoryCard disabled={userActive} name="Mercados" onClick={() => listCategory('Mercados')}>
          <AntDesign {...iconProps('shoppingcart')} />
        </CategoryCard>

        <CategoryCard disabled={userActive} name="Farmácias" onClick={() => listCategory('Farmácias')}>
          <MaterialCommunityIcons {...iconProps('medical-bag')} />
        </CategoryCard>
      </DivContainer>

      <DivContainer>
        <CategoryCard disabled={userActive} name="Lojas" onClick={() => listCategory('Lojas')}>
          <Fontisto {...iconProps('shopping-store')} />
        </CategoryCard>
        <CategoryCard disabled={userActive} name="Bebidas" onClick={() => listCategory('Bebidas')}>
          <Entypo {...iconProps('drink')} />
        </CategoryCard>
        <CategoryCard disabled={userActive} name="Pet shops" onClick={() => listCategory('Pet shops')}>
          <MaterialIcons {...iconProps('pets')} />
        </CategoryCard>
      </DivContainer>

      <Announcement />

      <Carousel />
    </Container>
  );
};
