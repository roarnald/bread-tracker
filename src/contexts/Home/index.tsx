import React from 'react';

import { HomeContext } from './HomeContext';
import { HomeProvider } from './HomeProvider';

const useHome = () => {
  const context = React.useContext(HomeContext);
  return context;
};

export { HomeContext, HomeProvider, useHome };
