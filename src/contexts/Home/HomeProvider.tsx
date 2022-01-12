import React from 'react';

import { getCoinList } from '~/src/api/Coins';
import { HomeContext, IHomeContext, initValue } from './HomeContext';

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
    this.fetchData();
  }

  fetchData = async () => {
    try {
      this.setState({ isFetching: true });
      const result = await getCoinList();
    } finally {
      this.setState({ isFetching: false });
    }
  };

  actions: PickByType<IHomeContext, Function> = {
    fetchData: this.fetchData,
  };

  render() {
    return <HomeContext.Provider value={this.state} {...this.props} />;
  }
}
