import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--black);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
  padding: 0 22px;

  img {
    width: 138px;
  }

  nav.nav-desktop ul {
    display: flex;

    li {
      list-style-type: none;

      a {
        color: var(--white);
        text-decoration: none;
        font-size: 0.875rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      & + li {
        margin-left: 36px;
      }
    }
  }

  .nav-mobile {
    .menuNav {
      overflow-y: scroll;
      list-style: none;
      position: fixed;
      top: 0;
      background: #000000e3;
      left: 0;
      bottom: 0;
      height: 100vh;
      width: 0;
      overflow: hidden;
      max-width: 290px;
      z-index: 10;
      transition: all 0.2s linear;
    }

    .menuNav.showMenu {
      width: 210px;
    }

    .menuNav li:first-child {
      margin-top: 7rem;
    }

    .menuNav li {
      margin-top: 1rem;
    }

    ul li a {
      color: var(--white);
      text-decoration: none;
      font-size: 1.2rem;
      padding: 2rem;
    }
  }

  @media (max-width: 768px) {
    .nav-desktop {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .nav-mobile {
      display: none;
    }
  }
`;
