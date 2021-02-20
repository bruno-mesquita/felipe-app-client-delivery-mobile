import { useSelector } from 'react-redux';

const useReduxAuth = () => {
  const { auth } = useSelector(store => store);

  return auth;
};

export default useReduxAuth;
