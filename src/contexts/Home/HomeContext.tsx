import React from 'react';

import { ICoinItem } from '~/src/api/Coins';
import { SimplePriceItemType } from '~/src/api/Simple';

export const STORAGE_KEY = 'coin-list';

export interface IHomeContext {
  isFirstLoad: boolean;
  isFetching: boolean;
  coinList: ICoinItem[];
  filteredCoinList: ICoinItem[];
  userCoinList: SimplePriceItemType;

  /* Actions */
  fetchCoinList: () => void;
  fetchUserCoins: () => void;
  filterCoinList: (filterKey: string) => void;
}

export const initValue: IHomeContext = {
  isFirstLoad: true,
  isFetching: true,
  coinList: [],
  filteredCoinList: [],
  userCoinList: {},

  /* Actions */
  fetchCoinList: () => {},
  fetchUserCoins: () => {},
  filterCoinList: () => {},
};

export const HomeContext = React.createContext(initValue);
