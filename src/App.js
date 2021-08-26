import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Main } from "./components/Main/index";
import { useState } from "react";
import { useEffect } from "react";
import ReactLoading from "react-loading";
import { ContainerLoading } from "./style";
import { Footer } from "./components/Footer";

function App() {
  const [initialSite, setInitialSite] = useState(false);

  useEffect(() => {
    setInitialSite(true);

    setTimeout(() => {
      setInitialSite(false);
    }, 1200);
  }, []);

  return initialSite ? (
    <ContainerLoading>
      <ReactLoading type="spinningBubbles" color="var(--red)" width={200} />
    </ContainerLoading>
  ) : (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}

export default App;
