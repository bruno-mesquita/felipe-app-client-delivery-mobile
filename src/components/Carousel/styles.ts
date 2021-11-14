import styled from 'styled-components/native';

export const ScrollHorizontal = styled.ScrollView.attrs(props => ({
  ...props,
  showsHorizontalScrollIndicator: false,
}))`
  width: auto;
  margin-top: 35px;
`;

export const Photo = styled.Image.attrs(props => ({
  ...props,
  resizeMode: 'cover',
}))`
  height: 70px;
  width: 70px;
  border-radius: 100px;
  margin-left: 5px;
  margin-right: 5px;
`;
