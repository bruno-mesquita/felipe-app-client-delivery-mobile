import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Content = styled.View`
  align-items: center;
  padding: 10px 20px 20px 20px;
`;

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

export const Title = styled.Text`
  font-weight: bold;
`;

export const Description = styled.Text``;

export const PlusOrMin = styled.View`
  width: ${width * 0.23}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Prices = styled.View`
  padding: 10px 0px 20px 0px;
  flex-direction: row;
  justify-content: space-between;
  width: ${width * 0.7}px;
`;
