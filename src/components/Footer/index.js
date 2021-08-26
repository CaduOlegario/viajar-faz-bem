import { Container, Content } from "./styles";
import ImgMarvel from "../../assets/logo-marvel.svg";
import Facebook from "../../assets/socialMedia/facebook.svg";
import Instagram from "../../assets/socialMedia/instagram.svg";
import Spotify from "../../assets/socialMedia/spotify.svg";
import Youtube from "../../assets/socialMedia/youtube.svg";

export function Footer() {
  return (
    <Container>
      <Content>
        <div className="imageIcon">
          <img src={ImgMarvel} alt="Marvel" />
        </div>

        <div className="theMarvel">
          <h3>A Marvel</h3>
          <nav>
            <ul>
              <li>Sobre a Marvel</li>
              <li>Ajuda</li>
              <li>Carreiras</li>
            </ul>
          </nav>
        </div>

        <div className="media">
          <h3>Mídia</h3>
          <nav>
            <ul>
              <li>Filmes</li>
              <li>Quadrinhos</li>
              <li>Programas de TV</li>
              <li>Jogos</li>
            </ul>
          </nav>
        </div>

        <div className="blog">
          <h3>Última do blog</h3>
          <div className="flex">
            <img
              src="https://image.api.playstation.com/vulcan/img/cfn/11307mfB_C9XcqTOrc2UYKVwNS-Im4Ncsv0WDC50BU-j1hyUXTfzKxgxKSMz_mbBtVoQmuvDLHzPclp__egUa2LmmHoD6uEO.png"
              alt="Marvel"
            />
            <p>Captain Marvel Challenge invadiu o tapete vermelho do Oscar</p>
          </div>
          <span>Continuar Lendo</span>
        </div>
        <div className="followMarvel">
          <h3>Siga a Marvel</h3>
          <div className="socialMedia">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Spotify} alt="Spotify" />
            <img src={Youtube} alt="Youtube" />
          </div>
        </div>
      </Content>
    </Container>
  );
}
