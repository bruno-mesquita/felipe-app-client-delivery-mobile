export interface Props {
  id: number;
  name: string;
  description: string;
  photo: {
    encoded: string;
  };
  price: number;
  establishmentId: number;
  fee: number;
}
