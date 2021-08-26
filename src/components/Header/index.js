import { Container, Content } from "./styles";
import logoImg from "../../assets/logo-marvel.svg";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Marvel" />

        <nav class="nav-desktop">
          <ul>
            <li>
              <a href="#films">Filmes</a>
            </li>
            <li>
              <a href="#comics">Quadrinhos</a>
            </li>
            <li>
              <a href="#TVprogram">Programa de TV</a>
            </li>
            <li>
              <a href="#GamesProgram">Jogos</a>
            </li>
          </ul>
        </nav>

        <div className="nav-mobile">
          <nav class="navbar navbar-mobile">
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
              <li>
                <a href="#films">Filmes</a>
              </li>
              <li>
                <a href="#comics">Quadrinhos</a>
              </li>
              <li>
                <a href="#TVprogram">Programa de TV</a>
              </li>
              <li>
                <a href="#GamesProgram">Jogos</a>
              </li>
            </ul>
          </nav>

          <button
            onClick={handleToggle}
            style={{ background: "transparent", border: "0", outline: "0" }}
          >
            {navbarOpen ? (
              <MdClose
                style={{
                  color: "#fff",
                  width: "30px",
                  height: "30px",
                }}
              />
            ) : (
              <FiMenu
                style={{
                  color: "var(--red)",
                  width: "30px",
                  height: "30px",
                }}
              />
            )}
          </button>
        </div>
      </Content>
    </Container>
  );
}
