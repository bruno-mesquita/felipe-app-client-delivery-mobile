export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: {
    encoded: string;
  };
}

export interface Menu {
  id: number;
  name: string;
}
