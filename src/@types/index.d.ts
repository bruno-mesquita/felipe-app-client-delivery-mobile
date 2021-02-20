// Para conseguir importar imagens na aplicação

declare module '*.png'; // Todo arquivo .png

declare module '*.png'; // Todo arquivo .svg

declare module '*.png'; // Todo arquivo .jpg

import { ReactotronReactNative } from 'reactotron-react-native';
import { Reactotron } from 'reactotron-core-client';

declare global {
  interface Console {
    tron: Reactotron<ReactotronReactNative> & ReactotronReactNative;
  }
}
