import React, { memo, useCallback, FC } from 'react';
import styled from 'styled-components';
import { useHome } from '~/src/contexts/Home';

interface IPinTitleButtonProps {
  token: string;
}

const PinTitleButton: FC<IPinTitleButtonProps> = ({ token }) => {
  const { pinnedToken, setPinnedToken } = useHome();

  const handleButtonClick = useCallback(() => setPinnedToken(token), [token]);

  return (
    <PinTitleButtonContainer onClick={handleButtonClick}>{pinnedToken === token ? '★' : '☆'}</PinTitleButtonContainer>
  );
};

export default memo(PinTitleButton);

const PinTitleButtonContainer = styled.div`
  cursor: pointer;
  color: orange;
  font-size: 20px;
`;
