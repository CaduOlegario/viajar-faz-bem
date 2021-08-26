import { Container } from "./styles";

export function CardCharacter(props) {
  return (
    <Container>
      <img src={props.image + "." + props.extension} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
      </div>
    </Container>
  );
}
