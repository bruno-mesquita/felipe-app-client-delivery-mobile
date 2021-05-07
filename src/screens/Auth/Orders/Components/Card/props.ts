export interface Props {
  id: number;
  establishment: {
    name: string;
  };
  total: number;
  createdAt: string;
  evaluation: null | {
    id: number;
    value: number;
  };
  order_status: string;
}
