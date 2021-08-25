import { useEffect, useState } from "react";
import { Container, ContentCarousel, ContentCharacters } from "./styles";
import { CardCharacter } from "../CardCharacter/index";
import { ContainerCards } from "../ContainerCards/index";
import { SectionCTA } from "../SectionCTA/index";
import { SectionNewsletter } from "../SectionNewsletter/index";
import axios from "axios";
import md5 from "md5";

const publicKey = "e78b2b907db56d5c440dbf144d5aadf4";
const privateKey = "421ed3e927f78e17978e44134a3eaa41f54478b1";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

export function Main() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }, []);

  console.log(data?.data?.data?.results);

  return (
    <>
      <ContentCarousel>
        <Container>
          <h2>Personagens em destaque</h2>

          <div className="carousel">Carrossel</div>
        </Container>
      </ContentCarousel>
      <ContentCharacters>
        <Container>
          <h2>Lista de Personagens da Marvel</h2>
        </Container>

        <ContainerCards>
          {data?.data?.data?.results.map((item) => (
            <CardCharacter
              image={item.thumbnail.path}
              name={item.name}
              key={item.id}
            />
          ))}
        </ContainerCards>
      </ContentCharacters>

      <SectionCTA />

      <SectionNewsletter />
    </>
  );
}
