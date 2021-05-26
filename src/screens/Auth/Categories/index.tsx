import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { getApi } from '@services/api';
import { CategoriesCards } from './components';

import { PropsCategories } from './types';
import { Container, Tittle } from './styles';

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
      <CategoriesCards />
    </Container>
  );
};

export { Categories };
