import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  width: ${width * 0.7}px;
  justify-content: space-between;
`;

export const ViewTexts = styled.View`
  width: ${width * 0.5}px;
  padding-left: 10px;
  align-items: center;
`;
