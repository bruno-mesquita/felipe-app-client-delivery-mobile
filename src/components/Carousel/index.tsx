import { useCallback } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { Flex } from 'native-base';
import ExpoFastImage from 'expo-fast-image';

import { useGetAnnouncements } from '@hooks';

export const Carousel = () => {
  const { width } = useWindowDimensions();

  const { announcements } = useGetAnnouncements();

  const _renderItem = useCallback(
    ({ item }) => (
      <Flex w={width} align="center">
        <ExpoFastImage
          style={{
            width: '90%',
            height: 200,
            borderRadius: 20,
          }}
          source={{ uri: item.photo.encoded }}
          cacheKey={item.id.toString()}
        />
      </Flex>
    ),
    []
  );

  const keyExtractor = useCallback(({ id }) => id.toString(), []);

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
