import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width * 0.9}px;
  padding: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 10px;
`;
