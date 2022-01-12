import request from '~/src/utils/request';

interface ICoinItem {
  id: string;
  name: string;
  symbol: string;
}

export const getCoinList = () => request.get<ICoinItem[]>('/coins/list');
