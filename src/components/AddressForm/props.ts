export interface Values {
  nickname: string;
  cep: string;
  street: string;
  neighborhood: string;
  number: number;
  city: string;
  state: string;
}

export interface Props {
  onSubmit: (values: any) => void;
  textButton: string;
  initialValues: Values;
}
