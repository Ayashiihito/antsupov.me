import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  border-radius: 50%;
  min-width: 250px;
  min-height: 250px;
`;

const Photo = () => (
  <StaticQuery
    query={graphql`
      {
        photo: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledImg alt="me" fixed={data.photo.childImageSharp.fixed} />
    )}
  />
);
export default Photo;
