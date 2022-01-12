export type IAddItem = {
  itemId: number;
  amount: number;
  price: number;
  image: string;
  name: string;
  establishmentId: number;
  fee: number;
};

export type IRemoveItem = {
  itemId: number;
};

export type IUpdateItem = { itemId: number; amount: number };

export type Payment = 'Dinheiro' | 'Débito' | 'Crédito';

export interface Item {
  itemId: number;
  amount: number;
  price: number;
  total: number;
  image: string;
  name: string;
}

export interface ICart {
  establishmentId: number;
  items: Item[];
  fee: number;
  total: number;
}
