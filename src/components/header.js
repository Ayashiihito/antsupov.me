import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components/macro';

const HeaderLink = styled(Link)`
  padding: 0.5rem 1rem;
  color: ${props => props.theme.primaryDark};
  border-bottom: 2px solid transparent;
  &:hover {
    text-decoration: none;
    border-bottom: 2px solid ${props => props.theme.primaryDark};
    color: ${props => props.theme.primaryDark};
  }
`;

const Header = () => (
  <div
    css={`
      position: absolute;
      left: 0;
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    `}
  >
    <HeaderLink to="/">Home</HeaderLink>
    <HeaderLink as="a" href="#contacts">
      Контакты
    </HeaderLink>
  </div>
);

export default Header;
