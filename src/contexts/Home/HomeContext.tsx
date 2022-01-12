import React from 'react';

import { ICoinItem } from '~/src/api/Coins';
import { SimplePriceItemType } from '~/src/api/Simple';

export interface IHomeContext {
  isFetching: boolean;
  coinList: ICoinItem[];
  userCoinList: SimplePriceItemType;

  /* Actions */
  fetchCoinList: () => void;
  fetchUserCoins: () => void;
}

export const initValue: IHomeContext = {
  isFetching: true,
  coinList: [],
  userCoinList: {},

  /* Actions */
  fetchCoinList: () => {},
  fetchUserCoins: () => {},
};

export const HomeContext = React.createContext(initValue);
