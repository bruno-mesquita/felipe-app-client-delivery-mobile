import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
`;

export const ContainerPhoto = styled.View`
  border-radius: 20px;
`;

export const PhotoEnterprise = styled.ImageBackground.attrs(props => ({
  ...props,
  resizeMode: 'cover',
}))`
  height: 100%;
`;
