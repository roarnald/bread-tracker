import React from 'react';

export interface IHomeContext {
  isFetching: boolean;

  /* Actions */
  fetchData: () => void;
}

export const initValue: IHomeContext = {
  isFetching: false,

  /* Actions */
  fetchData: () => {},
};

export const HomeContext = React.createContext(initValue);
