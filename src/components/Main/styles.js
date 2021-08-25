import styled from "styled-components";

export const Container = styled.div`
  margin: 0 100px 40px 100px;
  @media (max-width: 768px) {
    margin: 0 0 40px 70px;
  }
`;

export const ContentCarousel = styled.section`
  padding: 120px 0;
  h2 {
    font-family: "Oswald";
    font-size: 1.75rem;
    color: var(--white);
    text-transform: uppercase;
  }

  div.carousel {
    width: 100%;
    height: 200px;
    background: var(--red);
    margin: 25px 0;
  }
`;

export const ContentCharacters = styled.div`
  background-color: var(--white);
  padding: 120px 0;

  h2 {
    font-family: "Oswald";
    font-size: 1.75rem;
    letter-spacing: 0px;
    color: var(--black);
    text-transform: uppercase;
  }
`;
