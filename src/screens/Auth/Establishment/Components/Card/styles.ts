import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const ImageProduct = styled.Image`
  height: 100%;
  width: 30%;
  border-radius: 9px;
`;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 70%;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  align-self: center;
`;

export const Description = styled.Text`
  color: #000;
  align-self: flex-start;
`;

export const Price = styled.Text`
  color: #000;
  align-self: flex-end;
`;
