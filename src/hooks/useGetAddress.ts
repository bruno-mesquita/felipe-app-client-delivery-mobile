import useSWR from 'swr';

export interface IAddress {
  id: number;
  nickname: string;
  cep: string;
  street: string;
  neighborhood: string;
  number: number;
  city: number;
  state: number;
}

export const useGetAddress = (addressId?: number) => {
  const { data, error } = useSWR<IAddress>(
    addressId && `/adresses-client/${addressId}`,
    {
      fallbackData: {
        id: 0,
        street: '',
        cep: '',
        city: 0,
        neighborhood: '',
        nickname: '',
        number: 0,
        state: 0,
      },
    }
  );

  return {
    address: data,
    isLoading: !error && !data,
    isError: error,
  };
};
