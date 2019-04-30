import styled from 'styled-components';

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

export default ButtonsContainer;
