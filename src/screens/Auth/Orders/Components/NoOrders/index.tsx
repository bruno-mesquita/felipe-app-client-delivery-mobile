import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, Title } from './styles';

export const NoOrders = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <MaterialCommunityIcons
        name="calendar-text"
        size={150}
        color={colors.primary}
      />
      <Title>Sem pedidos</Title>
    </Container>
  );
};
