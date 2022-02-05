import type { ImageProps } from 'react-native';
import { Factory } from 'native-base';
import ExpoFastImage from 'expo-fast-image';

export const FastImage = Factory<ImageProps & { cacheKey: string }>(
  ExpoFastImage
);
