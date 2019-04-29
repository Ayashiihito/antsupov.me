import React from 'react';
import styled from 'styled-components';

import Skill from './skill';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const SkillsContainer = ({ skills }) => (
  <div>
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
  </div>
);

export default SkillsContainer;
