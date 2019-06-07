import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components/macro';

import theme from '../theme';

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
  background: ${props => props.theme.primaryDark};
  &,
  & h3 {
    color: ${props => props.theme.secondaryLight};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    list-style-type: none;
    a {
      color: ${props => props.theme.primaryLight};
    }
  }
`;

const FooterContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  max-width: 960px;
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
            <FooterContainer>
              <h3>Связаться со мной:</h3>
              <ul>
                <li>
                  <a href="https://github.com/Ayashiihito" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:antsupov.dev@gmail.com">
                    antsupov.dev@gmail.com
                  </a>
                </li>
              </ul>
            </FooterContainer>
            <span
              css={`
                background: rgba(0, 0, 0, 0.4);
                padding: 0.5rem 2rem;
                width: 100%;
              `}
            >
              © {new Date().getFullYear()} Vladimir Antsupov
            </span>
          </Footer>
        </>
      </ThemeProvider>
    )}
  />
);

export default Layout;
