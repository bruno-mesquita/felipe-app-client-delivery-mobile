import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { getApi } from '@services/api';
import { IAnnouncement } from './props';
import { Container, ContainerPhoto, PhotoEnterprise, Title } from './styles';
import { useEffect } from 'react';

export const Announcement = () => {
  const api = getApi();

  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  const getAnnouncement = useCallback(async () => {
    try {
      const { data } = await api.get('/announcement');

      setAnnouncements(data.result);
    } catch (err) {
      Alert.alert('Houve um erro ao buscar os motoboys, por favor tente novamente');
    }
  }, []);

  useEffect(() => {
    getAnnouncement();
  }, [getAnnouncement]);

  return (
    <Container>
      <Carousel
        lockScrollWhileSnapping
        autoplay
        data={announcements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ContainerPhoto>
            <PhotoEnterprise source={{ uri: item.photo.encoded }}>
             <Title>{item.name}</Title>
            </PhotoEnterprise>
          </ContainerPhoto>
        )
      }
        sliderWidth={600}
        itemWidth={350}
      />
    </Container>
  );
}
