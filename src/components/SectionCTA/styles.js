import styled from "styled-components";

export const Container = styled.section`
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Oswald";
    text-transform: uppercase;
    font-size: 3.875rem;
    color: var(--black);
    width: 100%;
    text-align: center;
  }

  p {
    font-size: 1.25rem;
    font-weight: normal;
    color: var(--gray-200);
    width: 100%;
    text-align: center;
    margin-bottom: 43px;
  }

  img {
    width: 100%;
    max-width: 1016px;
    margin-bottom: 20px;
  }

  button {
    background: var(--red);
    padding: 21px 90px;
    font-size: 0.875rem;
    font-weight: bold;
    color: var(--white);
    border: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  span {
    color: var(--red);
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 15px 0 220px 0;
  }
`;
