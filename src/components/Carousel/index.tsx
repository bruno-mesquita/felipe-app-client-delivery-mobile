import React, { useCallback, useEffect, useState } from 'react';
import {  Alert } from 'react-native';
import { getApi } from '@services/api';

import { IAnnouncement } from '../Announcement/props';
import { Container, ScrollHorizontal, Photo } from './styles';


export const Carousel = () => {
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
      <ScrollHorizontal
        horizontal
      >
        {
          announcements.map((image, index) => {

            return (
              <Photo
                key={index}
                source={{ uri: image.photo.encoded }}
              />
            )
          })
        }
      </ScrollHorizontal>
    </Container>
  );
};
