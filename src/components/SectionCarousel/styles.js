import styled from "styled-components";

export const Container = styled.div`
  /* margin: 0 100px 40px 100px;
  @media (max-width: 768px) {
    margin: 0 0 40px 70px;
  } */

  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1rem;

  .carrousel-arrows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    button {
      border: 3px solid var(--white);
      width: 40px;
      height: 40px;
      background: transparent;
      & + button {
        margin-left: 10px;
      }

      svg {
        color: var(--white);
        font-size: 22px;
      }
    }
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

  div.buttons {
    display: flex;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .rec.rec-pagination {
    display: none;
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

export const ItemCaroussel = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 250px;
  width: 100%;
  max-width: 210px;
  border-bottom: 4px solid var(--red);

  h3 {
    color: #fff;
    margin: 15px;
    font: normal normal normal 18px/26px Oswald;
  }

  background-image: url("${(props) => props.image}");
  background-size: cover;
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
