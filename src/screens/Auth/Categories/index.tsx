import { AntDesign, MaterialCommunityIcons, Fontisto, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Announcement, Carousel } from '@components';

import { ScreenAuthProps } from '../../../utils/ScreenProps';

import { CategoryCard } from './components';
import { Container, DivContainer } from './styles';

export const Categories = ({ navigation }: ScreenAuthProps<'Categories'>) => {
  const { metrics } = useTheme();

  const listCategory = (categoryName: string) => navigation.navigate('Home', { categoryName });

  const iconProps = (name: any) => ({ size: metrics.px(50), color: '#fff', name });

  return (
    <Container>
      <DivContainer>
        <CategoryCard name="Comidas" onClick={() => listCategory('Comidas')}>
          <Ionicons {...iconProps('restaurant')} />
        </CategoryCard>

        <CategoryCard name="Mercados" onClick={() => listCategory('Mercados')}>
          <AntDesign {...iconProps('shoppingcart')} />
        </CategoryCard>

        <CategoryCard name="Farmácias" onClick={() => listCategory('Farmácias')}>
          <MaterialCommunityIcons {...iconProps('medical-bag')} />
        </CategoryCard>
      </DivContainer>

      <DivContainer>
        <CategoryCard name="Lojas" onClick={() => listCategory('Lojas')}>
          <Fontisto {...iconProps('shopping-store')} />
        </CategoryCard>
        <CategoryCard name="Bebidas" onClick={() => listCategory('Bebidas')}>
          <Entypo {...iconProps('drink')} />
        </CategoryCard>
        <CategoryCard name="Pet shops" onClick={() => listCategory('Pet shops')}>
          <MaterialIcons {...iconProps('pets')} />
        </CategoryCard>
      </DivContainer>

      <Announcement />

      <Carousel />
    </Container>
  );
};
