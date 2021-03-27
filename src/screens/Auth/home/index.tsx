import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import FieldSearch from '../../../components/Home/FieldSearch';
import Tab from '../../../components/Tab';
import CartButton from '../../../components/CartButton';
import Card from '../../../components/Home/Card';
import { NotFound } from './Components';

import api from '../../../services/api';
import { Container, Content, Establishments, SafeArea } from './styles';
import { Category, Establishment } from './props';

function Home() {
  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/categories')
      .then(({ data }) => {
        setCategories(data.result.map(item => ({ ...item, loading: false })));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });

    setEstablishments([
      {
        id: '1',
        name: 'Lanchonete Raio de Luz',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: 17, close: 22 },
        fee: 5.5,
      },
      {
        id: '2',
        name: 'Pizzaria Roma',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: 17, close: 22 },
        fee: 5.5,
      },
      {
        id: '3',
        name: 'Lanchonete Raio de Luz',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: 17, close: 22 },
        fee: 5.5,
      },
      {
        id: '4',
        name: 'Lanchonete Raio de Luz',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: 17, close: 22 },
        fee: 5.5,
      },
      {
        id: '6',
        name: 'Lanchonete Raio de Luz',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: 17, close: 22 },
        fee: 5.5,
      },
    ]);
  }, []);

  const onChangeCategory = async (id: string) => {
    try {
      setLoading(true);
      setCategorySelected(id);

      const { data } = await api.get(`/establishments/${id}/category`);

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
}

export default Home;
