import { useCallback } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { Flex } from 'native-base';

import { useGetAnnouncements } from '@hooks';

import { FastImage } from '../FastImage';

export const Carousel = () => {
  const { width } = useWindowDimensions();

  const { announcements } = useGetAnnouncements();

  const _renderItem = useCallback(
    (
      { item } // TODO Link
    ) => (
      <Flex w={width} align="center">
        <FastImage
          w="90%"
          h="200px"
          rounded="20px"
          source={{ uri: item.photo.encoded }}
          cacheKey={item.id.toString()}
        />
      </Flex>
    ),
    []
  );

  const keyExtractor = useCallback(({ id }) => id.toString(), []);

  // TODO Animar carousel e fazer metade do card aparecer
  return (
    <FlatList
      style={{ flexGrow: 0 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={announcements}
      pagingEnabled
      renderItem={_renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
