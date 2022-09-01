import React from 'react';
import { ICoinItem } from '~/src/api/Coins';
import { SimplePriceItemType } from '~/src/api/Simple';

export const STORAGE_KEY = 'coin-list';

export interface IHomeContext {
  isFirstLoad: boolean;
  isFetchingTokenList: boolean;
  isFetchingTokenPrice: boolean;
  coinList: ICoinItem[];
  filteredCoinList: ICoinItem[];
  userCoinList: SimplePriceItemType;
  pinnedToken: string | null;

  /* Actions */
  fetchCoinList: () => void;
  fetchUserCoins: () => void;
  filterCoinList: (filterKey: string) => void;
  handleDelete: (id: string) => () => void;
  setPinnedToken: (token: string) => void;
}

export const initValue: IHomeContext = {
  isFirstLoad: true,
  isFetchingTokenList: true,
  isFetchingTokenPrice: false,
  coinList: [],
  filteredCoinList: [],
  userCoinList: {},
  pinnedToken: localStorage.getItem('pinned'),

  /* Actions */
  fetchCoinList: () => {},
  fetchUserCoins: () => {},
  filterCoinList: () => {},
  handleDelete: () => () => {},
  setPinnedToken: () => {},
};

export const HomeContext = React.createContext(initValue);
