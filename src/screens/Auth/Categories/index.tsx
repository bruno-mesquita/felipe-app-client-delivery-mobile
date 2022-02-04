import {
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
  Ionicons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';
import { Flex, IconButton, Text } from 'native-base';

import { Carousel } from '@components';

import { ScreenAuthProps } from '../../../utils/ScreenProps';

export const Categories = ({ navigation }: ScreenAuthProps<'Categories'>) => {
  const listCategory = (categoryName: string) =>
    navigation.navigate('Home', { categoryName });

  return (
    <Flex flex={1} justify="space-around">
      <Flex>
        <Flex flexDirection="row" m="20px" justify="space-between">
          <Flex align="center">
            <IconButton
              p="25px"
              rounded="15px"
              onPress={() => listCategory('Comidas')}
              bg="#9E0404"
              _icon={{
                as: Ionicons,
                name: 'restaurant',
                color: '#fff',
              }}
            />
            <Text>Comida</Text>
          </Flex>

          <Flex align="center">
            <IconButton
              p="25px"
              rounded="15px"
              onPress={() => listCategory('Mercados')}
              bg="#9E0404"
              _icon={{
                as: AntDesign,
                name: 'shoppingcart',
                color: '#fff',
              }}
            />
            <Text>Mercados</Text>
          </Flex>

          <Flex align="center">
            <IconButton
              p="25px"
              rounded="15px"
              onPress={() => listCategory('Farmácias')}
              bg="#9E0404"
              _icon={{
                as: MaterialCommunityIcons,
                name: 'medical-bag',
                color: '#fff',
              }}
            />
            <Text>Farmácias</Text>
          </Flex>
        </Flex>

        <Flex flexDirection="row" m="20px" justify="space-between">
          <Flex align="center">
            <IconButton
              p="25px"
              rounded="15px"
              onPress={() => listCategory('Lojas')}
              bg="#9E0404"
              _icon={{
                as: Fontisto,
                name: 'shopping-store',
                color: '#fff',
              }}
            />
            <Text>Lojas</Text>
          </Flex>

          <Flex align="center">
            <IconButton
              p="25px"
              rounded="15px"
              onPress={() => listCategory('Bebidas')}
              bg="#9E0404"
              _icon={{
                as: Entypo,
                name: 'drink',
                color: '#fff',
              }}
            />
            <Text>Bebidas</Text>
          </Flex>

          <Flex align="center">
            <IconButton
              p="25px"
              rounded="15px"
              onPress={() => listCategory('Pet shops')}
              bg="#9E0404"
              _icon={{
                as: MaterialIcons,
                name: 'pets',
                color: '#fff',
              }}
            />
            <Text>Pet shops</Text>
          </Flex>
        </Flex>
      </Flex>

      <Carousel />
    </Flex>
  );
};
