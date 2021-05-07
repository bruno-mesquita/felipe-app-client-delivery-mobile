import { ModalBaseProps } from '../../../../../components/ModalBase/props';

export interface EvaluationProps extends ModalBaseProps {
  id?: number | undefined;
  orderId: number;
}
