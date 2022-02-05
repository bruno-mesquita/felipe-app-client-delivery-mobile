import { useCallback } from 'react';
import { FlatList } from 'react-native';

import { useGetAnnouncements } from '@hooks';

import { FastImage } from '../FastImage';

export const Carousel = () => {
  const { announcements } = useGetAnnouncements();

  const _renderItem = useCallback(
    (
      { item } // TODO Link
    ) => (
      <FastImage
        w="280px"
        h="150px"
        rounded="20px"
        source={{ uri: item.photo.encoded }}
        cacheKey={item.id.toString()}
        mr="20px"
      />
    ),
    []
  );

  const keyExtractor = useCallback(({ id }) => id.toString(), []);

  // TODO Animar carousel e fazer metade do card aparecer
  return (
    <FlatList
      style={{ flexGrow: 0 }}
      contentContainerStyle={{ paddingLeft: 20 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={announcements}
      renderItem={_renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
