import { useEffect, useState } from 'react';

import api from '@services/api';
import { IAnnouncement } from '../Announcement/props';
import { ScrollHorizontal, Photo } from './styles';

export const Carousel = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    api.get('/announcements').then(({ data }) => setAnnouncements(data.result));
  }, []);

  return (
    <ScrollHorizontal horizontal>
      {announcements.map(image => (
        <Photo key={image.id} source={{ uri: image.photo.encoded }} />
      ))}
    </ScrollHorizontal>
  );
};
