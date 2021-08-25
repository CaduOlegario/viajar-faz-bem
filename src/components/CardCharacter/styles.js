import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--black);
  width: 175px;
  height: 270px;

  img {
    width: 175px;
    height: 193px;
    object-fit: cover;
    border-bottom: 4px solid var(--red);
  }

  div {
    padding: 20px;
    h3 {
      color: var(--white);
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.1875rem;
    }
  }
`;
