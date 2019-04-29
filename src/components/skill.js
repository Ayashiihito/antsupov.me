import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0.5rem 0.2rem;
  padding: 10px;
  width: ${props => props.theme.iconWidth};
  background: ${props => props.theme.primaryLight};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.shadow};
`;

const Name = styled.span`
  padding-top: 0.3rem;
  font-size: 1rem;
  display: block;
  text-align: center;
  font-weight: bold;
`;

const Skill = ({ icon, name }) => (
  <Container>
    {icon}
    <Name>{name}</Name>
  </Container>
);

export default Skill;
