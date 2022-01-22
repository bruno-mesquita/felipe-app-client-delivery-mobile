import { FlatList } from 'react-native';
import { ScrollView, Image } from 'native-base';
import { useGetAnnouncements } from '@hooks';

export const Carousel = () => {
  const { announcements } = useGetAnnouncements();

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={announcements}
      renderItem={({ item }) => (
        <Image
          size="70px"
          rounded="20px"
          mx="5px"
          key={item.id}
          source={{ uri: item.photo.encoded }}
          alt={item.id.toString()}
        />
      )}
    />
  );
};
