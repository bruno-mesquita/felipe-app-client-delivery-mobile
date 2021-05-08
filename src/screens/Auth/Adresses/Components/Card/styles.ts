import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.8}px;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Content = styled.View`
  height: 100%;
  width: 90%;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Body = styled.View`
  width: 100%;
`;

export const Footer = styled.View`
  width: 100%;
`;

export const Nickname = styled.Text`
  font-weight: bold;
  align-self: center;
`;