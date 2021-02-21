import React from 'react';
import { useSelector } from 'react-redux';

import Routes from './drawer.routes';
import StackNotAuth from './stack-not-auth.routes';

const Navigation = () => {
  const { logged } = useSelector(({ auth }) => auth);

  return <>{logged ? <Routes /> : <StackNotAuth />}</>;
};

export default Navigation;
