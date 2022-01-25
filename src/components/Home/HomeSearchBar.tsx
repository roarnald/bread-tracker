import React, { useState } from 'react';
import { useVirtual } from 'react-virtual';
import styled, { css } from 'styled-components';

import { ICoinItem } from '~/src/api/Coins';
import { STORAGE_KEY } from '~/src/contexts/Home/HomeContext';
import { useHome } from '~/src/contexts/Home';

const HomeSearchBar: React.FC = () => {
  const { filteredCoinList, userCoinList, filterCoinList, fetchUserCoins } = useHome();

  const [searchFocused, setSearchFocused] = useState(false);

  const parentRef = React.useRef<HTMLDivElement>(null);

  const { totalSize, virtualItems } = useVirtual({
    size: filteredCoinList.length,
    parentRef,
    overscan: 5,
  });

  const handleSearchFocused = (focused: boolean) => () => setSearchFocused(focused);

  const handleDropdownItemClick =
    ({ id }: ICoinItem) =>
    () => {
      const currentSavedList = localStorage.getItem(STORAGE_KEY);
      if (!currentSavedList?.split(',').includes(id)) {
        localStorage.setItem(STORAGE_KEY, `${currentSavedList || ''}${id},`);
        fetchUserCoins();
      }
    };

  return (
    <>
      <div className="flex justify-center">
        <StyledHomeSearchBar
          onChange={(e) => filterCoinList(e.target.value)}
          onBlur={handleSearchFocused(false)}
          onFocus={handleSearchFocused(true)}
          className="outline-neutral-600 border-2 mt-6 rounded-full px-5 py-2 z-30"
        />
      </div>

      <SearchResultDropdown
        ref={parentRef}
        className={`${
          searchFocused ? 'fixed' : 'hidden'
        } left-0 right-0 m-auto border-2 border-t-0 bg-white z-20 rounded-b-xl overflow-auto mt-2px`}
      >
        <DropdownContainer $height={`${totalSize}px`}>
          {console.log({ totalSize })}
          {virtualItems.map(({ index, size, start }) => (
            <DropdownVirtualItem
              className="flex items-center p-2 hover:bg-indigo-100 hover:cursor-pointer"
              key={index}
              onMouseDown={handleDropdownItemClick(filteredCoinList[index])}
              $height={size}
              $transform={start}
              $selected={!!userCoinList[filteredCoinList[index].id]}
            >
              {filteredCoinList[index].name}
            </DropdownVirtualItem>
          ))}
        </DropdownContainer>
      </SearchResultDropdown>
    </>
  );
};

export default HomeSearchBar;

const StyledHomeSearchBar = styled.input`
  width: 450px;
  @media screen and (max-width: 1024px) {
    width: calc(100%);
  }
`;

const SearchResultDropdown = styled.div`
  width: 420px;
  max-height: 50vh;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 78px);
  }
`;

const DropdownContainer = styled.div<{ $height: string }>`
  height: ${({ $height }) => $height};
  width: 100%;
  position: relative;
`;

interface IDropdownVirtualItemProps {
  $height: number;
  $selected: boolean;
  $transform: number;
}

/**
 * For react-virtual styles
 */
const DropdownVirtualItem = styled.div<IDropdownVirtualItemProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ $height }) => `${$height}px`};
  transform: ${({ $transform }) => `translateY(${$transform}px)`};
  ${({ $selected }) =>
    $selected
      ? css`
          background: #eee;
          color: #aaa;
          cursor: not-allowed !important;
          :hover {
            background: #eee;
          }
        `
      : ''};
`;
