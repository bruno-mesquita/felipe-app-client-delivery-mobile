import type { FC } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import {
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

export const MyAppLoading: FC = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return <>{!fontsLoaded ? <AppLoading /> : <>{children}</>}</>;
};
