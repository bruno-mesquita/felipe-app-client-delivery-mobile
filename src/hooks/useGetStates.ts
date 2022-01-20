import useSWR from 'swr';

type IState = {
  id: number;
  name: string;
};

export const useGetStates = () => {
  const { data, error } = useSWR<IState[]>('/states', { fallbackData: [] });

  return {
    states: data,
    isLoading: !error && !data,
    isError: error,
  };
};
