export interface Values {
  nickname: string;
  zipCode: string;
  street: string;
  neighborhood: string;
  number: string;
  city: string;
  state: string;
}

export interface Props {
  onSubmit: (values: any) => void;
  textButton: string;
  initialValues: Values;
}
