import styled from "styled-components";

export const Container = styled.div`
  /* margin: 0 100px 40px 100px;
  @media (max-width: 768px) {
    margin: 0 0 40px 70px;
  } */

  width: 100%;
  max-width: 1180px;
  margin: 0 auto 40px auto;
  padding: 0 1rem;
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

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;

  ul {
    display: flex;

    li {
      list-style: none;
      padding: 6px 10px;
      color: var(--gray-200);
      font-weight: 600;
      cursor: pointer;

      &.active {
        border: 1px solid var(--red);
        background: var(--red);
        color: var(--white);
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;
