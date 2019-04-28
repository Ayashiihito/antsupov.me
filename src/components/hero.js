import React from 'react';
import styled from 'styled-components';

import Photo from './photo';
import ButtonLink from './buttonLink';

const Container = styled.div`
  height: 100vh;
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
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  & > a {
    margin-right: 1rem;
  }
  @media screen and (min-width: 1000px) {
    justify-content: flex-start;
  }
`;
const Hero = () => (
  <Container>
    <Photo />
    <Bio>
      <Header>Привет</Header>
      <Text>
        меня зовут Владимир, я занимаюсь web-разработкой, обожаю
        программирование и старюсь выучить что-то новое каждый день.
      </Text>
      <ButtonsContainer>
        <ButtonLink href="https://github.com/Ayashiihito">GitHub</ButtonLink>
        <ButtonLink href="mailto:antsupov.dev@gmail.com">Email</ButtonLink>
      </ButtonsContainer>
    </Bio>
  </Container>
);

export default Hero;
