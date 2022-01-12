import React from 'react';
import styled from 'styled-components';

import { HomeProvider, useHome } from '~/src/contexts/Home';
import { withProvider } from '~/src/utils/ProviderHOC';
import HomeTokenList from './HomeTokenList';

const Home: React.FC = () => {
  const {} = useHome();

  return (
    <HomeContainer>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">bread.tracker</h2>
            <TypewriterHeaderWrapper>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A lightweight way to track that bread. 🍞
              </p>
            </TypewriterHeaderWrapper>

            <HomeSearchBar className="outline-neutral-600 border-2 my-6 rounded-full px-5 py-2 w-2/5" />
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"></dl>
          </div>
        </div>
      </div>

      <HomeTokenList />
    </HomeContainer>
  );
};

export default withProvider(HomeProvider, Home);

const HomeContainer = styled.div``;

const TypewriterHeaderWrapper = styled.span`
  @media screen and (min-width: 1024px) {
    p {
      width: 660px;
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
        width: 660px;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: indigo;
      }
    }
  }
`;

const HomeSearchBar = styled.input`
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
