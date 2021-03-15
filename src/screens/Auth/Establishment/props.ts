interface Image {
  id: string;
  encoded: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: Image;
}

export interface Menu {
  id: string;
  name: string;
  products: Product[];
}

export interface Establishment {
  id: string;
  name: string;
  rate: number;
  fee: number;
  image: Image;
  menus: Menu[];
}
