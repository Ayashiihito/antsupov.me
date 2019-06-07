import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Something has to be done about those static queries, they look out of place here

const images = graphql`
  fragment servicesImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }

  query {
    expensesApp: file(relativePath: { eq: "works/expenses-app.png" }) {
      ...servicesImage
    }

    archive: file(relativePath: { eq: "works/archive.png" }) {
      ...servicesImage
    }
  }
`;

const works = [
  {
    name: 'Калькулятор расходов',
    githubLink: 'https://github.com/Ayashiihito/mern-expenses-app',
    projectLink: 'http://mern-expenses-calc.herokuapp.com',
    desc: 'Простой калькулятор расходов в стиле material.',
    stack: 'react, redux, material-ui, node, express, mongoose',
    img: (
      <StaticQuery
        query={images}
        render={({ expensesApp }) => (
          <Img
            objectFit="cover"
            objectPosition="50% 50%"
            fluid={expensesApp.childImageSharp.fluid}
          />
        )}
      />
    ),
  },
  {
    name: 'Мои старые проекты\\Архив',
    githubLink: null,
    projectLink: 'https://archived-projects.netlify.com/',
    desc: 'Нерелевантные проекты которые я сделал когда-то давно',
    stack: 'p5.js',
    img: (
      <StaticQuery
        query={images}
        render={({ archive }) => (
          <Img
            objectFit="cover"
            objectPosition="50% 50%"
            fluid={archive.childImageSharp.fluid}
          />
        )}
      />
    ),
  },
];

export default works;
