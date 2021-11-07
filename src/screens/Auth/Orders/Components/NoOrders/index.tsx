import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { lighten } from 'polished';

import { Container, Title } from './styles';

export const NoOrders = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <MaterialCommunityIcons
        name="calendar-text"
        size={150}
        color={lighten(0.4, colors.primary)}
      />
      <Title>Sem pedidos</Title>
    </Container>
  );
};
