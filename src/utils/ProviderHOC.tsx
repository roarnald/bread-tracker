import React from 'react';

interface IProviderHOCProps {}

export function withProvider<T = IProviderHOCProps>(Provider: React.ElementType, Component: React.ElementType) {
  const ProviderComp: React.FC<T> = (props) => {
    return (
      <Provider {...props}>
        <Component />
      </Provider>
    );
  };

  return ProviderComp;
}
