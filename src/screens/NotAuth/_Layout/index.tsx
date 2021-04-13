import React from 'react';
import { ImageBackground } from 'react-native';

import { Container, ContainerLogo, Logo } from './styles';
import { LayoutProps } from './props';

export const Layout = ({ children }: LayoutProps) => (
  <Container>
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../../../assets/images/fundo.png')}
    >
      <ContainerLogo>
        <Logo source={require('../../../assets/images/logo.png')} />
      </ContainerLogo>
      {children}
    </ImageBackground>
  </Container>
);
