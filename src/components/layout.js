import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../theme';
import './layout.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.secondaryLight};;
  }
`;

const SiteContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const Footer = styled.footer`
  height: 15rem;
  background: ${props => props.theme.primaryDark};
  color: ${props => props.theme.primaryLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <SiteContainer>
            <main>{children}</main>
          </SiteContainer>
          <Footer>
            <h4>Связаться со мной:</h4>
            <ul>
              <li>GitHub</li>
              <li>Email</li>
              <li>3</li>
            </ul>
            <span>© {new Date().getFullYear()}, Built by me</span>
          </Footer>
        </>
      </ThemeProvider>
    )}
  />
);

export default Layout;
