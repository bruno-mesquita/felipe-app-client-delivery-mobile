import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { getApi } from '@services/api';
import { CategoriesCards } from './components';

import {
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
  Entypo,
} from '@expo/vector-icons';

import { PropsCategories } from './types';
import { Container, DivContainer } from './styles';

const Categories = () => {
  const api = getApi();

  const [categorySelected, setCategorySelected] = useState<number | null>(null);
  const [categories, setCategories] = useState<PropsCategories[]>([]);

  const getCategories = useCallback(async (): Promise<number> => {
    try {
      const { data } = await api.get('/categories');

      const values = data.result.map(item => ({ ...item, loading: false }));

      setCategories(values);
      setCategorySelected(values[0].id);
      return values[0].id;
    } catch (err) {
      Alert.alert(
        'Erro',
        'Houve um erro ao buscar categorias, por favor tente novamente',
      );
    }
  }, []);

  return (
    <Container>
      <DivContainer>
        <CategoriesCards
          name="Restaurantes"
          onClick={getCategories}
          children={<FontAwesome5 name="hamburger" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Mercados"
          onClick={getCategories}
          children={<AntDesign name="shoppingcart" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Farmácias"
          onClick={getCategories}
          children={
            <MaterialCommunityIcons name="medical-bag" size={50} color="#fff" />
          }
        />
      </DivContainer>

      <DivContainer>
        <CategoriesCards
          name="Conveniências"
          onClick={getCategories}
          children={<FontAwesome5 name="candy-cane" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Lojas"
          onClick={getCategories}
          children={<Fontisto name="shopping-store" size={50} color="#fff" />}
        />
        <CategoriesCards
          name="Butecos"
          onClick={getCategories}
          children={<Entypo name="drink" size={50} color="#fff" />}
        />
      </DivContainer>
    </Container>
  );
};

export { Categories };
