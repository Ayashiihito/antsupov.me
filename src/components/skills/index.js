import React from 'react';
import styled from 'styled-components';

import Skill from './skill';
import skills from './skills';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
  @media screen and (min-width: 1000px) {
    justify-content: flex-start;
  }
`;

const SkillsContainer = () => (
  <>
    <h2>Языки:</h2>
    <Container>
      {skills.languages.map(lang => (
        <Skill icon={lang.icon} name={lang.name} />
      ))}
    </Container>
    <h2>Технологии:</h2>
    <Container>
      {skills.technologies.map(tech => (
        <Skill icon={tech.icon} name={tech.name} />
      ))}
    </Container>
  </>
);

export default SkillsContainer;
// export default Container;