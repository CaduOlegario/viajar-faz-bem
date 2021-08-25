import { Container } from "./styles";
import imageMarvelCard from "../../assets/cards-fan-desktop.png";

export function SectionCTA() {
  return (
    <Container>
      <h2>Marvel Mastercard</h2>
      <p>Desbloqueie seus super poderes</p>
      <img src={imageMarvelCard} alt="Marvel Mastercard" />
      <button>Cadastre-se agora</button>
      <span>Entenda como funciona</span>
    </Container>
  );
}
