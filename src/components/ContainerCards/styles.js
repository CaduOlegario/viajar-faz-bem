import styled from "styled-components";

export const Container = styled.section`
  margin: 0 100px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1rem;

  @media (max-width: 768px) {
    margin: 0 70px;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;
