import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Something has to be done about those static queries, they look out of place here
const works = [
  {
    name: 'Калькулятор расходов',
    githubLink: 'https://github.com/Ayashiihito/mern-expenses-app',
    projectLink: 'http://mern-expenses-calc.herokuapp.com',
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
