import { useSelector } from 'react-redux';

const useReduxCart = () => {
  const { cart } = useSelector(store => store);

  return cart;
};

export default useReduxCart;
