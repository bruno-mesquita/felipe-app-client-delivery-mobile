import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.8}px;
  justify-content: space-around;
  flex-direction: row;
  height: 100%;
`;

export const ImageProduct = styled.Image`
  height: 100%;
  border-radius: 9px;
`;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 20px;
  width: ${width * 0.52}px;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  align-self: flex-start;
`;

export const Description = styled.Text`
  color: #000;
`;

export const Price = styled.Text`
  color: #000;
  align-self: flex-end;
`;
