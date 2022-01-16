import React from 'react';

import { getCoinList } from '~/src/api/Coins';
import { getSimplePrice } from '~/src/api/Simple';
import { HomeContext, IHomeContext, initValue } from './HomeContext';

const TEMP_USER_COINS = 'bitcoin,ethereum,cardano';

interface IHomeProviderProps {}

interface IHomeProviderState extends IHomeContext {}

export class HomeProvider extends React.PureComponent<IHomeProviderProps, IHomeProviderState> {
  constructor(props: IHomeProviderProps) {
    super(props);
    this.state = {
      ...initValue,
      ...this.actions,
    };
  }

  componentDidMount() {
    this.fetchCoinList();
    this.fetchUserCoins();
  }

  fetchCoinList = async () => {
    try {
      this.setState({ isFetching: true });
      const coinList = await getCoinList();
      this.setState({ coinList, filteredCoinList: coinList });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  fetchUserCoins = async () => {
    try {
      const userCoinList = await getSimplePrice({
        ids: TEMP_USER_COINS,
        vs_currencies: 'usd',
        include_market_cap: true,
        include_24hr_vol: true,
        include_24hr_change: true,
        include_last_updated_at: true,
      });
      this.setState({ userCoinList });
    } finally {
      const { isFirstLoad } = this.state;

      this.setState({ isFetching: false });

      if (isFirstLoad) {
        this.setState({ isFirstLoad: false });
      }
    }
  };

  tempToggleLoading = () => this.setState(({ isFetching }) => ({ isFetching: !isFetching }));

  filterCoinList = (filterKey: string) => {
    const filterKeyLower = filterKey.toLowerCase();

    this.setState(({ coinList }) => ({
      filteredCoinList: coinList
        .filter(({ symbol, name }) => symbol.includes(filterKeyLower) || name.toLowerCase().includes(filterKeyLower))
        .sort((a, b) => {
          if (a.symbol === filterKeyLower || a.name.toLowerCase() === filterKeyLower) {
            return -1;
          }
          if (b.symbol === filterKeyLower || b.name.toLowerCase() === filterKeyLower) {
            return 1;
          }
          return 0;
        }),
    }));
  };

  actions: PickByType<IHomeContext, Function> = {
    fetchCoinList: this.fetchCoinList,
    fetchUserCoins: this.fetchUserCoins,
    filterCoinList: this.filterCoinList,
  };

  render() {
    return <HomeContext.Provider value={this.state} {...this.props} />;
  }
}
