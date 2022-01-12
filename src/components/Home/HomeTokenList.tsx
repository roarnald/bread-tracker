import React from 'react';
import styled from 'styled-components';

import Table from '~/src/components/Public/Table';

const HomeTokenList: React.FC = () => {
  return (
    <HomeTokenListContainer>
      <Table />
    </HomeTokenListContainer>
  );
};

export default HomeTokenList;

const HomeTokenListContainer = styled.div``;
