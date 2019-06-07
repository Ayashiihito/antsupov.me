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
      <Header>Привет</Header>
      <Text>
        Меня зовут Владимир, я обожаю программирование, мой приоритет &#8212;
        web&#8209;разработка. Я слежу за разработкой новых web&#8209;стандартов
        и актуальными технологиями.
      </Text>
      <ButtonsContainer>
        <ButtonLink href="https://github.com/Ayashiihito" target="_blank">
          GitHub
        </ButtonLink>
        <ButtonLink href="mailto:antsupov.dev@gmail.com">Email</ButtonLink>
      </ButtonsContainer>
    </Bio>
  </Container>
);

export default Hero;
