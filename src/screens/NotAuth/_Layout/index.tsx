import type { FC } from 'react';

import { Container, ContainerLogo, Logo, BackGround } from './styles';

export const Layout: FC = ({ children }) => (
  <Container>
    <BackGround style={{ flex: 1 }} source={require('../../../assets/images/fundo.png')}>
      <ContainerLogo>
        <Logo source={require('../../../assets/images/logo.png')} />
      </ContainerLogo>
      {children}
    </BackGround>
  </Container>
);
