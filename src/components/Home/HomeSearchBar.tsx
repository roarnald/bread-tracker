import React, { useState } from 'react';
import { useVirtual } from 'react-virtual';
import styled from 'styled-components';
import { useHome } from '~/src/contexts/Home';

const HomeSearchBar: React.FC = () => {
  const { filteredCoinList, filterCoinList } = useHome();

  const [searchFocused, setSearchFocused] = useState(false);

  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtual({
    size: filteredCoinList.length,
    parentRef,
    overscan: 5,
  });

  const handleSearchFocused = (focused: boolean) => () => setSearchFocused(focused);

  return (
    <>
      <StyledHomeSearchBar
        onChange={(e) => filterCoinList(e.target.value)}
        onBlur={handleSearchFocused(false)}
        onFocus={handleSearchFocused(true)}
        className="outline-neutral-600 border-2 mt-6 rounded-full px-5 py-2 z-20"
      />

      <SearchResultDropdown
        ref={parentRef}
        className={`${
          searchFocused ? 'fixed' : 'hidden'
        } left-0 right-0 m-auto border-2 border-t-0 bg-white z-10 rounded-b-xl overflow-auto`}
      >
        <div
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.virtualItems.map((virtualRow) => (
            <div
              key={virtualRow.index}
              className={virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {filteredCoinList[virtualRow.index].name}
            </div>
          ))}
        </div>
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
  max-height: 50vw;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 48px);
  }
`;
