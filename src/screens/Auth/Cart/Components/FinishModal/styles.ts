import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width * 0.9}px;
  padding: 20px;
`;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
  height: auto;
`;

export const Header = styled.View`
  flex-direction: row;
  width: ${width * 0.8}px;
  justify-content: flex-end;
  padding-bottom: 10px;
`;
