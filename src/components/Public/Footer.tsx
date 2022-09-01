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
      <div className="italic">
        drop me some{' '}
        <a href="https://forms.gle/1huQcJFuUiJeft7N7" className=" text-indigo-600" target="_blank">
          feedback
        </a>{' '}
        or features you wanna see!
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  text-align: center;

  padding: 18px;
  min-width: max-content;
`;

const GithubLink = styled.a``;
