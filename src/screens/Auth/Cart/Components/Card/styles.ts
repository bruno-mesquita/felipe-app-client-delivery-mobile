import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  padding: 10px;
  margin: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 11px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Info = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 75%;
  padding: 5px;
`;

export const Image = styled.Image`
  height: 100%;
  width: ${width * 0.25}px;
  border-radius: 11px;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const Prices = styled.View`
  width: 50%;
  justify-content: space-around;
`;

export const ViewValues = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`;

export const ViewButton = styled.View`
  align-items: flex-end;
  width: 100%;
`;
