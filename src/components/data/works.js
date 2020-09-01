import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const imagesQuery = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }

  query {
    expensesApp: file(relativePath: { eq: "works/expenses-app.png" }) {
      ...fluidImage
    }
  }
`;

const withImage = imgName => (
  <StaticQuery
    query={imagesQuery}
    render={data => (
      <Img
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={data[imgName].childImageSharp.fluid}
      />
    )}
  />
);

const works = [
  {
    name: 'Калькулятор расходов',
    githubLink: 'https://github.com/Ayashiihito/mern-expenses-app',
    desc: 'Простой калькулятор расходов в стиле material.',
    stack: 'react, redux, material-ui, node, express, mongoose',
    img: withImage('expensesApp'),
  },
];

export default works;
