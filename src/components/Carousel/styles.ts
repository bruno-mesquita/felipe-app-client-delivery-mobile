import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  max-height: 10%;
  max-width: 98%;
  margin-bottom: 35px;
`;

export const ScrollHorizontal = styled.ScrollView.attrs(props => ({
  ...props,
  showsHorizontalScrollIndicator: false,
}))`
  width: auto;
`;

export const Photo = styled.Image.attrs(props => ({
  ...props,
  resizeMode: 'cover',
}))`
  height: 100%;
  max-width: 500px;
  width: 73px;
  border-radius: 9999px;
  margin-left: 5px;
  margin-right: 5px;
`;
