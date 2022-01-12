import React, { memo } from 'react';
import styled from 'styled-components';

interface ILoadingProps {
  type?: 'card' | 'spinnner';
}

const Loading: React.FC<ILoadingProps> = ({ type }) => {
  switch (type) {
    case 'card':
      return (
        <div className="rounded-md p-4  min-w-full mx-auto transition-all">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="h-2 bg-gray-200 rounded"></div>

                <div className="grid grid-cols-5 gap-4">
                  <div className="h-2 bg-gray-200 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-200 rounded col-span-3"></div>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  <div className="h-2 bg-gray-200 rounded col-span-1"></div>
                  <div className="h-2 bg-gray-200 rounded col-span-4"></div>
                </div>

                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <SpinnerContainer>
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </SpinnerContainer>
      );
  }
};

export default memo(Loading);

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    margin: 8px;
    border: 4px solid lightgray;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: lightgray transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
