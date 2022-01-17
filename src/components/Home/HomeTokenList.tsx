import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { useHome } from '~/src/contexts/Home';
import { formatNumber } from '~/src/utils/Common';
import Loading from '../Public/Loading';

const getChangeIndicator = (change: number) => {
  if (change < 0) {
    return 'text-red-800	';
  }

  if (change > 0) {
    return 'text-emerald-500	';
  }
  return '';
};

const HomeTokenList: React.FC = () => {
  const { isFirstLoad, isFetching, userCoinList, handleDelete } = useHome();

  const tableRef = useRef<HTMLDivElement>(null);
  const [showDelete, setShowDelete] = useState(false);

  const toggleDeleteState = () => setShowDelete(!showDelete);

  const sortedUserCoinList = useMemo(
    () => Object.entries(userCoinList).sort(([, a], [, b]) => (a.usd_market_cap > b.usd_market_cap ? -1 : 1)),
    [userCoinList],
  );

  useEffect(() => {
    if (showDelete) {
      tableRef.current?.scrollBy({ left: 50, behavior: 'smooth' });
    }
  }, [showDelete]);

  return (
    <HomeTokenListContainer className="overflow-auto" ref={tableRef}>
      <table className="table-auto min-w-full border-separate">
        <thead>
          <tr className="text-left text-xs sticky top-0 z-10 bg-white">
            <th className="p-4 pb-2 w-80 sticky left-0 border-b-2 bg-white">Name</th>
            <th className="p-4 pb-2 border-b-2">Price</th>
            <th className="p-4 pb-2 border-b-2">Market Cap</th>
            <th className="p-4 pb-2 border-b-2 whitespace-nowrap">24h Change</th>
            <th className="p-4 pb-2 border-b-2 pr-0">
              <div className="flex justify-between cursor-pointer">
                <div>24h Volume</div>
                <div onClick={toggleDeleteState}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {isFirstLoad && (
            <tr>
              <td colSpan={10}>
                <Loading type="card" />
              </td>
            </tr>
          )}

          {sortedUserCoinList.length > 0 ? (
            sortedUserCoinList.map(([key, { usd, usd_market_cap, usd_24h_change, usd_24h_vol }]) => (
              <DataTableRow $isLoading={isFetching} className="border-b-2 border-gray-50 text-gray-600" key={key}>
                <td className="p-4 capitalize sticky left-0 bg-white">{key.replaceAll('-', ' ')}</td>
                <td className={`p-4 ${getChangeIndicator(usd_24h_change)}`}>{formatNumber(usd)}</td>
                <td className="p-4">{formatNumber(usd_market_cap)}</td>
                <td className={`p-4 ${getChangeIndicator(usd_24h_change)}`}>{formatNumber(usd_24h_change)} %</td>
                <td className="p-4 pr-0">
                  <div className="flex justify-between">
                    <div>{formatNumber(usd_24h_vol)}</div>
                    {showDelete && (
                      <div className="ml-3 cursor-pointer" onClick={handleDelete(key)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="red"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </td>
              </DataTableRow>
            ))
          ) : (
            <tr>
              <td colSpan={10}>
                <div className={`flex justify-center items-center h-24 text-gray-400 ${isFirstLoad ? 'hidden' : ''}`}>
                  Whoops! You deleted everything. Search up a new coin to add to list!
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </HomeTokenListContainer>
  );
};

export default HomeTokenList;

const HomeTokenListContainer = styled.div`
  width: 90vw;
  max-width: 900px;
  max-height: calc(100vh - 380px);
  margin: auto;

  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

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
