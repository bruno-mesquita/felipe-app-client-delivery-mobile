import * as React from 'react';
import { Animated } from 'react-native';

import { Container, TabsContainer } from './styles';

interface ITranslatey {
  translateY: Animated.Value;
  children: React.ReactNode;
}

export const Tabs = ({ translateY, children }: ITranslatey) => (
  <Container
    style={{
      transform: [
        {
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        },
      ],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}
  >
    <TabsContainer>{children}</TabsContainer>
  </Container>
);
