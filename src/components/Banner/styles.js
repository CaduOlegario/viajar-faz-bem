import styled from "styled-components";
import imageBanner from "../../assets/banner.jpg";

export const Container = styled.section`
  background: url(${imageBanner});
  background-size: cover;
  height: calc(100vh - 105px);
`;

export const Content = styled.div`
  width: 50px;
  height: auto;
  position: relative;
  top: 185px;
  left: 100px;
  @media (max-width: 768px) {
    top: 245px;
  }

  h1 {
    color: var(--white);
    font-family: "Oswald", sans-serif;
    font-size: 6.25rem;
    line-height: 8.4375rem;
    opacity: 1;

    @media (max-width: 768px) {
      font-size: 4rem;
      line-height: 5.4375rem;
    }
  }
`;
