import React, { useState, useEffect } from 'react';
import { Animated, SafeAreaView, View } from 'react-native';

import FieldSearch from '../../../components/Home/FieldSearch';
import Tab from '../../../components/Tab';
import Tabs from '../../../components/Tabs';
import CartButton from '../../../components/CartButton';
import Card from '../../../components/Home/Card';

import api from '../../../services/api';
import { Container, Content, Establishments } from './styles';

interface Category {
  id: string;
  name: string;
  loading: boolean;
}

interface Establishment {
  id: string;
  name: string;
  rate: number;
  photo: string;
  fee: number;
  time: {
    open: string;
    close: string;
  };
}

function Home() {
  const translateY = new Animated.Value(0);
  const [text, setText] = useState('');
  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: '', loading: true },
    { id: '2', name: '', loading: true },
    { id: '3', name: '', loading: true },
    { id: '4', name: '', loading: true },
    { id: '5', name: '', loading: true },
  ]);

  useEffect(() => {
    api.get('/establishments-categories').then(({ data }) => {
      setCategories(data.result.map(item => ({ ...item, loading: false })));
    });

    setEstablishments([
      {
        id: '1',
        name: 'Lanchonete Raio de Luz',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: '', close: '' },
        fee: 5.5,
      },
      {
        id: '2',
        name: 'Pizzaria Roma',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: '', close: '' },
        fee: 5.5,
      },
      {
        id: '3',
        name: 'Lanchonete Raio de Luz',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: '', close: '' },
        fee: 5.5,
      },
      {
        id: '4',
        name: 'Lanchonete Raio de Luz',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: '', close: '' },
        fee: 5.5,
      },
      {
        id: '6',
        name: 'Lanchonete Raio de Luz',
        rate: 6,
        photo: require('../../../assets/images/mocks/raio_de_luz.jpg'),
        time: { open: '', close: '' },
        fee: 5.5,
      },
    ]);
  }, []);

  const searchForEstablishment = async () => {
    try {
      /* const { data } = await api.get(`/establishment?${text}`);

      setEstablishments(data); */
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeTextSearch = (value: string) => {
    setText(value);
  };

  const onChangeCategory = (id: string) => {
    setCategorySelected(id);
  };

  return (
    <Container>
      <Content>
        <View style={{ alignItems: 'center', paddingTop: 25 }}>
          <FieldSearch onChangeText={onChangeTextSearch} text={text} />
        </View>
        <Tabs translateY={translateY}>
          <Tab
            {...categories[0]}
            selected={categorySelected}
            onPress={onChangeCategory}
          />
          <Tab
            {...categories[1]}
            selected={categorySelected}
            onPress={onChangeCategory}
          />
          <Tab
            {...categories[2]}
            selected={categorySelected}
            onPress={onChangeCategory}
          />
          <Tab
            {...categories[3]}
            selected={categorySelected}
            onPress={onChangeCategory}
          />
          <Tab
            {...categories[4]}
            selected={categorySelected}
            onPress={onChangeCategory}
          />
        </Tabs>
        <SafeAreaView
          style={{
            flex: 1,
            width: '100%',
          }}
        >
          <Establishments
            data={establishments}
            keyExtractor={item => item.id}
            renderItem={({ item }: any) => <Card {...item} />}
          />
        </SafeAreaView>
      </Content>
      <CartButton />
    </Container>
  );
}

export default Home;
