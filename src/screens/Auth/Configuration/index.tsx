import React from 'react';

import { Item } from './Components';

import { Container, Divider } from './styles';

export const Configuration = () => (
  <Container>
    <Item to="Account">Minha conta</Item>
    <Divider />
    <Item to="TermsUse">Termos de uso</Item>
    <Divider />
    <Item to="AboutApp">Sobre o aplicativo</Item>
    <Divider />
  </Container>
);
