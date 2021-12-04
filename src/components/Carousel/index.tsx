import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import api from '@services/api';
import { IAnnouncement } from '../Announcement/props';
import { ScrollHorizontal, Photo } from './styles';

export const Carousel = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    api
      .get('/announcement')
      .then(({ data }) => setAnnouncements(data.result))
      .catch(() => Alert.alert('Houve um erro ao carregar, por favor tente novamente'));
  }, []);

  return (
    <ScrollHorizontal horizontal>
      {announcements.map(image => (
        <Photo key={image.id} source={{ uri: image.photo.encoded }} />
      ))}
    </ScrollHorizontal>
  );
};
