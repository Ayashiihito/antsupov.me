import React from 'react';
import styled from 'styled-components';

import Photo from './photo';
import ButtonLink from '../common/buttonLink';
import ButtonsContainer from '../common/buttonsContainer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Bio = styled.div`
  margin: 2rem;
`;
const Header = styled.h1`
  color: black;
`;
const Text = styled.p`
  color: #333;
`;
const Hero = () => (
  <Container>
    <Photo />
    <Bio>
      <Header>Hi</Header>
      <Text>
        My name is Vladimir, <br></br>
        I am passionate about web&#8209;development and <br></br>
        always trying to be up to date with new web&#8209;standards and technologies
      </Text>
      <ButtonsContainer>
        <ButtonLink
          href="https://github.com/Ayashiihito"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </ButtonLink>
        <ButtonLink href="https://twitter.com/antsupov_v" target="_blank"
          rel="noopener noreferrer">Twitter</ButtonLink>
      </ButtonsContainer>
    </Bio>
  </Container>
);

export default Hero;
