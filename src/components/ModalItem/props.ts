import { ModalBaseProps } from '../ModalBase/props';

export interface ModalItemProps extends ModalBaseProps {
  id: number;
  image: any;
  name: string;
  description: string;
  price: number;
  establishmentId: number;
}
