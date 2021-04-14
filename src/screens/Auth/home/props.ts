export interface Category {
  id: string;
  name: string;
}

export interface Establishment {
  id: string;
  name: string;
  rate: number;
  photo: string;
  fee: number;
  time: {
    open: number;
    close: number;
  };
}
