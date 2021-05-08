import { ModalBaseProps } from '../../../../../components/ModalBase/props';

export type OrderInfoProps = ModalBaseProps;

interface Product {
  name: string;
}

interface Item {
  product: Product;
  quantity: number;
  total: number;
}

interface Establishment {
  name: string;
}

interface Address {
  nickname: string;
}

interface Order {
  id: number;
  total: number;
  establishment: Establishment;
  createdAt: string;
  address_client: Address;
}

export interface OrderInfo {
  order: Order;
  items: Item[];
}
