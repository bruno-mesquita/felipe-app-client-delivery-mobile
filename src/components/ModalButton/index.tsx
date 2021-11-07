import { useTheme } from 'styled-components/native';

import { Button } from '../Button';
import { ButtonProps } from '../Button/props';


export const ModalButton = ({ children, ...rest }: ButtonProps) => {
  const { colors }  = useTheme();

  return (
    <Button
    {...rest}
    style={{ borderRadius: 50, backgroundColor: colors.third }}
    textProps={{ style: { color: '#fff', fontSize: 16 } }}
  >
    {children}
  </Button>
  );

}
