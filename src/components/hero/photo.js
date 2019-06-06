import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  border-radius: 50%;
  min-width: 220px;
  min-height: 220px;
`;

const Photo = () => (
  <StaticQuery
    query={graphql`
      {
        photo: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fixed(width: 220, height: 220) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <StyledImg
        alt="me"
        fixed={data.photo.childImageSharp.fixed}
        loading="eager"
      />
    )}
  />
);
export default Photo;
