import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
`;

export const ImageProduct = styled.Image`
  height: 100%;
  border-radius: 9px;
`;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 65%;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  align-self: flex-start;
`;

export const Description = styled.Text`
  color: #000;
`;

export const Price = styled.Text`
  color: #000;
  align-self: flex-end;
`;
