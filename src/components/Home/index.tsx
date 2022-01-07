import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;
