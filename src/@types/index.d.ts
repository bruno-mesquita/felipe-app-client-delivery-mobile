declare module '*.png';

import { ReactotronReactNative } from 'reactotron-react-native';
import { Reactotron } from 'reactotron-core-client';

declare global {
  interface Console {
    tron: Reactotron<ReactotronReactNative> & ReactotronReactNative;
  }
}
