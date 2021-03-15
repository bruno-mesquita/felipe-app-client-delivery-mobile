import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView`
  width: 100%;
  /* flex: 1;
  align-items: center; */
`;

export const Establishments = styled.FlatList.attrs(props => ({
  ...props,
  contentContainerStyle: { alignItems: 'center' },
}))`
  width: 100%;
`;
