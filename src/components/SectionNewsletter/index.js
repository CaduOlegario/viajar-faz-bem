import { Container, Content } from "./styles";

export function SectionNewsletter() {
  return (
    <Container>
      <Content>
        <div className="containerNews">
          <div className="news">
            <p>Receba as Novidades da Marvel</p>
          </div>
        </div>
        <div className="containerCtaEmail">
          <div className="ctaEmail">
            <h3>
              Cadastre-se para receber nossas notícias em primeira mão
              <span className="red">!</span>
            </h3>

            <p>Seu Melhor Email</p>
            <div className="inputCta">
              <input type="text" placeholder="Informe o seu melhor email" />
              <button type="submit">Enviar</button>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
