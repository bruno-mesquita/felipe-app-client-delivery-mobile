export interface Address {
  id: number;
  nickname: string;
  street: string;
  number: string;
  neighborhood: string;
  cep: string;
  city: {
    name: string;
    state: {
      name: string;
    };
  };
  active: boolean;
}
