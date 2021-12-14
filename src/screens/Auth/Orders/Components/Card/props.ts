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
  client_order_status: string;
  modalRateRef: any;
  modalInfoRef: any;
}
