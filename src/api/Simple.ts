import request from '~/src/utils/request';

interface IGetSimplePriceParams {
  /**
   * @param id of coins, comma-separated if querying more than 1 coin
   * *refers to coins/list
   */
  ids: string;
  /**
   * @param vs_currencies of coins, comma-separated if querying more than 1 vs_currency
   * *refers to simple/supported_vs_currencies
   */
  vs_currencies: string;

  include_market_cap?: boolean;
  include_24hr_vol?: boolean;
  include_24hr_change?: boolean;
  include_last_updated_at?: boolean;
}

export type SimplePriceItemType = Record<
  string,
  {
    usd: number;
    usd_market_cap: number;
    usd_24h_vol: number;
    usd_24h_change: number;
    last_updated_at: number;
  }
>;

export const getSimplePrice = (params: IGetSimplePriceParams) =>
  request.get<SimplePriceItemType>('/simple/price', { params });
