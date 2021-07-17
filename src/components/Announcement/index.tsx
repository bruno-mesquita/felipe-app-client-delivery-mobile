import React, { useState, useCallback, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Alert, Platform, Text } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import { getApi } from '@services/api';

import { IAnnouncement } from './props';

const { width: screenWidth } = Dimensions.get('window');

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
    <Carousel
      sliderWidth={screenWidth}
      sliderHeight={screenWidth}
      itemWidth={screenWidth - 60}
      data={announcements}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}, parallaxProps) => (
        <View style={styles.item}>
          <ParallaxImage
            source={{ uri: item.photo.encoded }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
        </View>
      )}
      hasParallaxImages

      autoplay
      lockScrollWhileSnapping
      autoplayInterval={5000}
      autoplayDelay={5000}
      loop
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 70,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
