import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer className="text-xs text-gray-500">
      <div>
        {`Built by `}
        <GithubLink className=" text-indigo-600" target="_blank" href="https://github.com/roarnald">
          @roarnald
        </GithubLink>
      </div>
      <div>Powered by CoinGecko API v3</div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  text-align: center;

  position: absolute;
  bottom: 0;

  padding: 18px;
  min-width: max-content;
`;

const GithubLink = styled.a``;
