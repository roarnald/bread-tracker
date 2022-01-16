import React from 'react';
import styled from 'styled-components';

const HomeSearchBar: React.FC = () => {
  return (
    <>
      <StyledHomeSearchBar className="outline-neutral-600 border-2 mt-6 rounded-full px-5 py-2 z-20" />

      <SearchResultDropdown className="fixed left-0 right-0 m-auto border-2 border-t-0 bg-white z-10 rounded-b-xl overflow-auto"></SearchResultDropdown>
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
