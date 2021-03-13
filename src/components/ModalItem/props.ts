import { ModalBaseProps } from '../ModalBase/props';

export interface ModalItemProps extends ModalBaseProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}
