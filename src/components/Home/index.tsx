import React from 'react';
import styled from 'styled-components';
import { HomeProvider } from '~/src/contexts/Home';
import { withProvider } from '~/src/utils/ProviderHOC';

import Footer from '../Public/Footer';
import HomeSearchBar from './HomeSearchBar';
import HomeTokenList from './HomeTokenList';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <div className="pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HomeHeaderContainer className="lg:text-center flex items-center flex-col	">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide">breadtracker.xyz</h2>
            <TypewriterHeaderWrapper>
              <p className="mt-2 text-3xl leading-normal font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A lightweight way to track that bread. 🍞
              </p>
            </TypewriterHeaderWrapper>
          </HomeHeaderContainer>

          <HomeSearchBar />
        </div>
      </div>

      <HomeTokenList />
      <Footer />
    </HomeContainer>
  );
};

export default withProvider(HomeProvider, Home);

const HomeContainer = styled.div``;

const HomeHeaderContainer = styled.div`
  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;

const TypewriterHeaderWrapper = styled.span`
  @media screen and (min-width: 1024px) {
    p {
      width: 100%;
      overflow: hidden;
      border-right: 0.15em solid indigo;
      white-space: nowrap;
      margin: 0 auto;
      animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
    }

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: rgb(79 70 229 / var(--tw-text-opacity));
      }
    }
  }
`;
