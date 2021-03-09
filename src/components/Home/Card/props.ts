export interface Props {
  id: string;
  name: string;
  photo: string;
  fee: number;
  rate: number;
  time: {
    open: string;
    close: string;
  };
}
