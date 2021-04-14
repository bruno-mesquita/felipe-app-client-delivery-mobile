import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Alert } from 'react-native';

import FieldSearch from '../../../components/Home/FieldSearch';
import Tab from '../../../components/Tab';
import CartButton from '../../../components/CartButton';
import Card from '../../../components/Home/Card';
import { NotFound } from './Components';

import api from '../../../services/api';
import { Container, Content, Establishments, SafeArea } from './styles';
import { Category, Establishment } from './props';
import stores from './mock';

const Home = () => {
  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const getCategories = useCallback(async (): Promise<string> => {
    try {
      const { data } = await api.get('/categories');

      const values = data.result.map(item => ({ ...item, loading: false }));

      setCategories(values);

      return values[0].id;
    } catch (err) {
      Alert.alert('Erro ao buscar categorias, por favor tente novamente');
    }
  }, []);

  const getEstablishments = useCallback(async (categoryId: string) => {
    try {
      /* const { data } = await api.get('/establishments', {
        params: {
          categoryId,
        },
      }); */

      setEstablishments(stores);
    } catch (err) {
      Alert.alert('Erro ao buscar estabelecimentos, por favor tente novamente');
    }
  }, []);

  useEffect(() => {
    getCategories().then(categoryId => {
      getEstablishments(categoryId);
    });
  }, [getCategories, getEstablishments]);

  const onChangeCategory = async (id: string) => {
    try {
      setLoading(true);
      setCategorySelected(id);

      const { data } = await api.get(`/categories/${id}/establishments`);

      setEstablishments(data.result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.response);
    }
  };

  const searchResult = (values: any) => {
    setEstablishments(values);
  };

  return (
    <Container>
      <Content>
        <View style={{ alignItems: 'center', paddingTop: 25 }}>
          <FieldSearch response={searchResult} />
        </View>

        <SafeArea>
          <FlatList
            contentContainerStyle={{ paddingVertical: 30 }}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
              <Tab
                {...item}
                onPress={onChangeCategory}
                selected={categorySelected}
              />
            )}
            horizontal
          />

          {establishments.length === 0 ? (
            <NotFound loading={loading} />
          ) : (
            <Establishments
              data={establishments}
              keyExtractor={(item: any) => item.id}
              renderItem={({ item }: any) => <Card {...item} />}
            />
          )}
        </SafeArea>
      </Content>
      <CartButton />
    </Container>
  );
};

export default Home;
