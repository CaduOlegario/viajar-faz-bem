import styled from "styled-components";

export const Container = styled.section`
  background: var(--black);
`;

export const Content = styled.div`
  margin: 0 100px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 0 90px;
  }

  div.containerNews {
    flex: 1;

    div.news {
      background: var(--red);
      width: 408px;
      height: 329px;
      position: relative;
      top: -80px;

      @media (max-width: 768px) {
        width: 308px;
        height: 229px;
      }
      p {
        font: normal normal bold 62px/78px "Oswald";
        color: var(--white);
        padding: 38px 60px;
        text-transform: uppercase;

        @media (max-width: 768px) {
          font-size: 38px;
          line-height: 55px;
        }
      }
    }
  }

  div.containerCtaEmail {
    flex: 1;

    h3 {
      font-family: "Oswald";
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--white);
      width: 274px;
      margin: 75px 0 20px 0;

      @media (max-width: 768px) {
        margin: 0;
      }

      & .red {
        color: var(--red);
      }
    }

    p {
      color: var(--white);
      font-size: 0.8125rem;
      font-weight: bold;
      text-transform: uppercase;
      margin: 24px 0 12px 0;
    }

    .inputCta {
      display: flex;
      input {
        width: 370px;
        height: 60px;

        @media (max-width: 768px) {
          width: 220px;
          height: 50px;
        }

        &::placeholder {
          font: normal normal normal 14px/14px "Open Sans";
          padding: 1rem;
        }
      }

      button {
        width: 120px;
        height: 60px;
        background: var(--red);
        color: var(--white);
        text-transform: uppercase;
        font-size: 0.875rem;
        border: 0;

        @media (max-width: 768px) {
          width: 80px;
          height: 50px;

          margin-bottom: 70px;
        }
      }
    }
  }
`;
