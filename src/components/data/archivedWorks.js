import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const imagesQuery = graphql`
  fragment fluidIMG on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  query {
    tictactoe: file(relativePath: { eq: "archive/tictactoe.png" }) {
      ...fluidIMG
    }
    leeter: file(relativePath: { eq: "archive/leeter.png" }) {
      ...fluidIMG
    }
    perlin: file(relativePath: { eq: "archive/perlin.png" }) {
      ...fluidIMG
    }
    circles: file(relativePath: { eq: "archive/circles.png" }) {
      ...fluidIMG
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

const archivedWorks = [
  {
    name: 'Tic Tac Toe',
    githubLink: null,
    projectLink:
      'https://archived-projects.netlify.com/projects/tictactoe/index.html',
    desc: null,
    stack: 'p5.js',
    img: withImage('tictactoe'),
  },
  {
    name: 'Perlin Noise',
    githubLink: null,
    projectLink:
      'https://archived-projects.netlify.com/projects/perlin/index.html',
    desc: null,
    stack: 'p5.js',
    img: withImage('perlin'),
  },
  {
    name: 'Leeter',
    githubLink: null,
    projectLink:
      'https://archived-projects.netlify.com/projects/leetify/index.html',
    desc: null,
    stack: null,
    img: withImage('leeter'),
  },
  {
    name: 'Circles',
    githubLink: null,
    projectLink:
      'https://archived-projects.netlify.com/projects/circles/index.html',
    desc: null,
    stack: null,
    img: withImage('circles'),
  },
];

export default archivedWorks;
