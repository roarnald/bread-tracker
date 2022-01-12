import React from 'react';
import styled, { css } from 'styled-components';

import { useHome } from '~/src/contexts/Home';

const HomeTokenList: React.FC = () => {
  const { isFetching, userCoinList } = useHome();

  return (
    <HomeTokenListContainer className="">
      <table className="table-auto min-w-full">
        <thead>
          <tr className="text-left text-xs border-b-2">
            <th className="p-4 pb-2 w-96">Name</th>
            <th className="p-4 pb-2">Price</th>
            <th className="p-4 pb-2">Market Cap</th>
            <th className="p-4 pb-2">24h Change</th>
            <th className="p-4 pb-2">24h Volume</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(userCoinList).map(([key, { usd, usd_market_cap, usd_24h_change, usd_24h_vol }]) => (
            <DataTableRow $isLoading={isFetching} className="border-b-2 border-gray-50 text-gray-600">
              <td className="p-4 capitalize">{key}</td>
              <td className="p-4">{usd}</td>
              <td className="p-4">{usd_market_cap}</td>
              <td className="p-4">{usd_24h_change}</td>
              <td className="p-4">{usd_24h_vol}</td>
            </DataTableRow>
          ))}
        </tbody>
      </table>
    </HomeTokenListContainer>
  );
};

export default HomeTokenList;

const HomeTokenListContainer = styled.div`
  margin: auto;

  width: 80vw;
  min-width: 450px;

  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

interface IDataTableRowProps {
  $isLoading?: boolean;
}

const DataTableRow = styled.tr<IDataTableRowProps>`
  animation: fadeIn 0.7s;

  @keyframes fadeIn {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  ${({ $isLoading }) =>
    $isLoading
      ? css`
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.6;
            }
            50% {
              opacity: 0.2;
            }
          }
        `
      : ''}
`;
