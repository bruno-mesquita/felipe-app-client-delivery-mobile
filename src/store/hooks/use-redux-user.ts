import { useSelector } from 'react-redux';

const useReduxUser = () => {
  const { user } = useSelector(store => store);

  return user;
};

export default useReduxUser;
