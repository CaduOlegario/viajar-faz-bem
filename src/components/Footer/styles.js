import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--gray-900);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 70px 1rem;
  flex-wrap: wrap;

  div.imageIcon {
    margin-right: 50px;

    @media (max-width: 768px) {
      margin: 0 30px 15px 0;
    }
    img {
      width: 120px;
    }
  }

  div.theMarvel {
    margin-right: 50px;
    @media (max-width: 768px) {
      margin: 0 40px 15px 0;
    }

    h3 {
      font: normal normal 600 19px/28px "Oswald";
      color: var(--white);
      margin-bottom: 15px;
    }

    ul li {
      color: var(--gray-200);
      font: normal normal normal 14px/25px "Open Sans";
      list-style-type: none;
    }
  }

  div.media {
    margin-right: 200px;
    @media (max-width: 768px) {
      margin: 0 30px 15px 0;
    }

    h3 {
      font: normal normal 600 19px/28px "Oswald";
      color: var(--white);
      margin-bottom: 15px;
    }

    ul li {
      color: var(--gray-200);
      font: normal normal normal 14px/25px "Open Sans";
      list-style-type: none;
    }
  }

  div.blog {
    margin-right: 50px;
    @media (max-width: 768px) {
      margin-right: 25px;
    }

    h3 {
      font: normal normal 600 19px/28px "Oswald";
      color: var(--white);
      margin-bottom: 15px;
    }

    span {
      text-decoration: underline;
      font: normal normal normal 14px/25px Open Sans;
      color: var(--gray-200);
      cursor: pointer;
    }

    .flex {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }

      p {
        width: 240px;
        font: normal normal bold 14px/20px "Open Sans";
        color: var(--white);

        @media (max-width: 768px) {
          font-size: 13px;
          line-height: 16px;
          width: 130px;
        }
      }
    }
  }

  div.followMarvel {
    h3 {
      font: normal normal 600 19px/28px "Oswald";
      color: var(--white);
      margin-bottom: 15px;
    }

    img {
      cursor: pointer;

      & + img {
        margin-left: 18px;
      }
    }
  }
`;
