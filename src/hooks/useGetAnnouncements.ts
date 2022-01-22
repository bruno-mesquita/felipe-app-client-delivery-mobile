import useSWR from 'swr';

type IAnnouncement = Readonly<{
  id: number;
  photo: {
    encoded: string;
  };
}>;

export const useGetAnnouncements = () => {
  const { data, error } = useSWR<IAnnouncement[]>('/announcements', {
    fallbackData: [],
  });

  return {
    announcements: data,
    isLoading: !error && !data,
    isError: error,
  };
};
