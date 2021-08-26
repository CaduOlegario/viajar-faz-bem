import styled from "styled-components";

export const Container = styled.div`
  opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  .flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .flex-container > div {
    padding-top: 10px;
  }
  .paginate-ctn {
    display: flex;
  }
  .square-effect {
    color: var(--gray-200);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 9px;
    height: 40px;
    width: 40px;
    margin: 5px;
    text-decoration: none;
    opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  .square-effect:hover {
    text-decoration: none;
    background: #dd4124;
    color: #fff;
  }
  .square-effect:hover a {
    text-decoration: none;
    color: #fff;
  }

  .active {
    background: #dd4124;
    color: #fff;
    opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
  a:link {
    text-decoration: none;
    color: #dd4124;
  }
`;
