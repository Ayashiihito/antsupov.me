import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  width: 220px;
  height: 220px;
  perspective: 600px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${Container}: hover & {
    transform: rotateY(180deg);
  }
`;

const StyledImg = styled(Img)`
  backface-visibility: hidden;
  border-radius: 50%;
`;
const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* rotateY(0) to remove flickering and make backface hidden */
  transform: rotateY(0deg);
  backface-visibility: hidden;
`;

const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  font-size: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = () => (
  <StaticQuery
    query={graphql`
      {
        photo: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fixed(width: 220, height: 220) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Card>
          <FrontCard>
            <StyledImg
              alt="me"
              fixed={data.photo.childImageSharp.fixed}
              loading="eager"
            />
          </FrontCard>
          <BackCard>☕</BackCard>
        </Card>
      </Container>
    )}
  />
);
export default Photo;
