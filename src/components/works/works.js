import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Something has to be done about those static queries, code like this is too coupled
const works = [
  {
    name: 'Калькулятор расходов',
    desc: 'Простой калькулятор расходов в стиле material.',
    stack: 'react, redux, material-ui, node, express, mongoose',
    img: (
      <StaticQuery
        query={graphql`
          {
            photo: file(relativePath: { eq: "works/expenses-app.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={({ photo }) => (
          <Img
            objectFit="cover"
            objectPosition="50% 50%"
            fluid={photo.childImageSharp.fluid}
          />
        )}
      />
    ),
  },
];

export default works;
