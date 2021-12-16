import { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Platform } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import api from '@services/api';

import { IAnnouncement } from './props';

const { width: screenWidth } = Dimensions.get('window');

export const Announcement = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    api.get('/announcements').then(({ data }) => setAnnouncements(data.result));
  }, []);

  return (
    <Carousel
      sliderWidth={screenWidth}
      sliderHeight={10}
      itemWidth={screenWidth - 60}
      data={announcements}
      renderItem={({ item }, parallaxProps) => (
        <View key={item.id} style={styles.item}>
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
    maxWidth: '100%',
    width: screenWidth - 60,
    height: screenWidth - 200,
    marginTop: 20,
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
    maxHeight: '100%',
    maxWidth: '100%',
  },
});
