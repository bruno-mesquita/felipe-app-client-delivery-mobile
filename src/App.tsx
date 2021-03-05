import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';

import './config/reactotron';

import Store from './store';
import Styled from './styles/styled';
import Navigation from './navigation';
import StatusBar from './components/StatusBar';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });

      setIsReady(true);
    })();
  }, []);

  return (
    <>
      {isReady ? (
        <Store>
          <Styled>
            <StatusBar />
            <Navigation />
          </Styled>
        </Store>
      ) : (
        <AppLoading />
      )}
    </>
  );
};

registerRootComponent(App);
