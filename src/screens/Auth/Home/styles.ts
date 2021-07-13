import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView`
  width: 100%;
`;

export const Establishments = styled.FlatList.attrs(props => ({
  ...props,
  contentContainerStyle: { alignItems: 'center' },
}))`
  width: 100%;
`;
