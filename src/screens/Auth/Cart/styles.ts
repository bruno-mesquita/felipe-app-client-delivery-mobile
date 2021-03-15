import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Texts = styled.View`
  width: 25%;
  padding: 10px;
`;

export const Prices = styled.View`
  align-items: center;
  width: 25%;
  padding: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
`;

export const ViewButton = styled.View`
  justify-content: center;
  align-items: center;
`;
