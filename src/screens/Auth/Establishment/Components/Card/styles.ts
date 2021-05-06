import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width * 0.8}px;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const ImageProduct = styled.Image`
  height: 100%;
  width: 35%;
  border-radius: 9px;
`;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 65%;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  align-self: center;
`;

export const Description = styled.Text`
  color: #000;
`;

export const Price = styled.Text`
  color: #000;
  align-self: flex-end;
`;
