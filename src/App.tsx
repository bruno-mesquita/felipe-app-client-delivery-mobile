import 'react-native-gesture-handler';

import React, { useEffect, useState, useCallback } from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';

import './config/reactotron';

import Store from './store';
import Styled from './styles/styled';
import Navigation from './navigation';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loading = useCallback(async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    setIsReady(true);
  }, []);

  useEffect(() => {
    loading();
  }, [loading]);

  return (
    <>
      {isReady ? (
        <Store>
          <Styled>
            <StatusBar style="light" backgroundColor="#770202" />
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
