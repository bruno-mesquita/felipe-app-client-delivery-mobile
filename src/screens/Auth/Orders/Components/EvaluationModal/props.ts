import { ModalBaseProps } from '../../../../../components/ModalBase/props';

export interface EvaluationProps extends ModalBaseProps {
  orderId: number;
  rate?: number;
}
