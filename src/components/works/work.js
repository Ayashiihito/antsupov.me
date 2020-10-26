import React from 'react';
import styled from 'styled-components/macro';

import ButtonLink, { GatsbyLink } from '../common/buttonLink';
import ButtonsContainer from '../common/buttonsContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.primaryLight};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadow};
  overflow: hidden;
  margin-bottom: 1.56rem;
  & > div {
    display: flex;
    flex-direction: column;
    & > h2 {
      margin: 1rem;
    }
    & > span {
      margin: 1rem;
    }
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    .gatsby-image-wrapper {
      width: 50%;
    }
  }
`;
const StackItem = styled.span`
  background: ${props => props.theme.primaryDark};
  color: ${props => props.theme.primaryLight};
  border-radius: 3px;
  padding: 1px 5px;
  margin: 10px 3px;
`;

const Work = props => {
  const { name, img, desc, stack, githubLink, projectLink } = props.contents;
  return (
    <Container>
      {img}
      <div>
        <h2>{name}</h2>
        <span>
          {desc ? desc : null}
          <br />
          <b>
            {stack
              ? stack
                  .split(',')
                  .map(stackItem => (
                    <StackItem key={stackItem}>{stackItem}</StackItem>
                  ))
              : null}
          </b>
        </span>
        <ButtonsContainer
          css={`
            margin: 1rem;
          `}>
          {githubLink ? (
            <ButtonLink
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </ButtonLink>
          ) : null}
          {projectLink ? (
            projectLink[0] === '/' ? (
              <GatsbyLink to={projectLink}>Open</GatsbyLink>
            ) : (
              <ButtonLink
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer">
                Open
              </ButtonLink>
            )
          ) : null}
        </ButtonsContainer>
      </div>
    </Container>
  );
};

export default Work;
