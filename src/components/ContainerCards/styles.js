import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto 40px auto;
  padding: 0 1rem;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
