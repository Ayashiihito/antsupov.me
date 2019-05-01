import styled from 'styled-components';

const ButtonLink = styled.a`
  background: ${props => props.theme.primaryDark};
  padding: 0.7rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadow};
  color: ${props => props.theme.primaryLight};
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  &:hover {
    color: ${props => props.theme.primaryLight};
    text-decoration: none;
    background: ${props => props.theme.primaryDark};
    opacity: 0.9;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.primaryDark};
    opacity: 0.5;
  }
`;

export default ButtonLink;
