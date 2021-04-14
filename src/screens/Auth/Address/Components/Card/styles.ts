import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.15}px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  height: 80%;
  width: 90%;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  padding-bottom: 3px;
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
  padding-bottom: 5px;
`;
