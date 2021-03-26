import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.15}px;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5px;
`;

export const Header = styled.View`
  width: ${width * 0.7}px;
`;

export const Body = styled.View`
  width: ${width * 0.65}px;
`;

export const Footer = styled.View`
  width: ${width * 0.65}px;
`;

export const Nickname = styled.Text`
  font-weight: bold;
  align-self: center;
  padding-bottom: 5px;
`;
