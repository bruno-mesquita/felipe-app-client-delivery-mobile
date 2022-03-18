import useSWR from 'swr';

export type IUser = {
  id: number;
  name: string;
  cpf: string;
  email: string;
  active: boolean;
  cellphone: string;
  avatar: string;
};

export const useUser = () =>
  useSWR<IUser>('clients/me', {
    fallbackData: {
      id: 0,
      name: '',
      cpf: '',
      email: '',
      active: false,
      cellphone: '',
      avatar: null,
    },
  });
