import useSWR from 'swr';

type ICity = {
  id: number;
  name: string;
};

export const useGetCities = (stateId?: number) => {
  const { data, error } = useSWR<ICity[]>(
    stateId && `/states/${stateId}/cities`,
    { fallbackData: [] }
  );

  return {
    cities: data,
    isLoading: !error && !data,
    isError: error,
  };
};
