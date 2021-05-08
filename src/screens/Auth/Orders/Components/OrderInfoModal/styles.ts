import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.9}px;
  padding: 15px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductsView = styled.View`
  padding-top: 5px;
  padding-bottom: 5px;
`;
