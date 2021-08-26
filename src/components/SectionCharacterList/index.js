/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Container, ContentCharacters, LoadingContainer } from "./styles";
import { CardCharacter } from "../CardCharacter/index";
import { ContainerCards } from "../ContainerCards/index";
import axios from "axios";
import md5 from "md5";
import { Paginate } from "../Paginate";

const publicKey = process.env.REACT_APP_PUBLIC_API_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_API_KEY;

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

export function SectionCharacterList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(1);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setOffset(currentPage * 24 + 1);
    setIsLoadingData(true);

    setTimeout(() => {
      setIsLoadingData(false);
    }, 1000);
  }, [currentPage]);

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=24&ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }, [offset]);

  return (
    <ContentCharacters>
      <Container>
        <h2>Lista de Personagens da Marvel</h2>
      </Container>

      <ContainerCards>
        {!isLoadingData &&
          data?.data?.data?.results.map((item) => (
            <CardCharacter
              image={item.thumbnail.path}
              extension={item.thumbnail.extension}
              name={item.name}
              key={item.id}
            />
          ))}
      </ContainerCards>

      {isLoadingData && (
        <LoadingContainer>
          <ReactLoading type="spinningBubbles" color="var(--red)" width={200} />
        </LoadingContainer>
      )}

      <Paginate
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        disabled={isLoadingData}
      />
    </ContentCharacters>
  );
}
