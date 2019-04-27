import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
    render={data => <Img alt="me" fixed={data.photo.childImageSharp.fixed} />}
  />
);
export default Photo;
