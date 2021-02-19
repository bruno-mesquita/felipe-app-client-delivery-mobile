import React from 'react';

import {
  Container,
  Content,
  ContainerLogo,
  LogoTestText,
  Item,
  Input,
  LoginBotton,
  LoginBottonText,
} from './styles';

function login(): JSX.Element {
  return (
    <Container>
      <ContainerLogo>
        <LogoTestText>FLIPP</LogoTestText>
        <LogoTestText>Delivery</LogoTestText>
      </ContainerLogo>

      <Content>
        <Input />
        <Input />

        <Item>
          <LoginBotton>
            <LoginBottonText>Login</LoginBottonText>
          </LoginBotton>

          <LoginBotton>
            <LoginBottonText>Criar conta</LoginBottonText>
          </LoginBotton>
        </Item>
      </Content>
    </Container>
  );
}

export default login;
