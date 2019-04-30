import React from 'react';
import styled from 'styled-components/macro';

import ButtonLink from '../common/buttonLink';
import ButtonsContainer from '../common/buttonsContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.primaryLight};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadow};
  overflow: hidden;
  margin: 1rem 0;
  & > div {
    display: flex;
    flex-direction: column;
  }
  h2,
  span {
    margin: 1rem;
  }
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    .gatsby-image-wrapper {
      width: 50%;
    }
  }
`;

const Work = ({ img, name, desc, stack }) => (
  <Container>
    {img}
    <div>
      <h2>{name}</h2>
      <span>
        {desc}
        <br />
        <b>{stack}</b>
      </span>
      <ButtonsContainer
        css={`
          margin: 1rem;
        `}
      >
        <ButtonLink href="https://github.com/Ayashiihito">GitHub</ButtonLink>
        <ButtonLink href="http://mern-expenses-calc.herokuapp.com">
          Open
        </ButtonLink>
      </ButtonsContainer>
    </div>
  </Container>
);

export default Work;
