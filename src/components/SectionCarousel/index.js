import { useState } from "react";
import { Container, ContentCarousel, ItemCaroussel } from "./styles";
import Carousel from "react-elastic-carousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { itemsCarrousel } from "../../utils/itemsCarousel/index";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 3 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];

export function SectionCarousel() {
  const [refCarousel, setRefCarousel] = useState();

  return (
    <ContentCarousel>
      <Container>
        <div className="carrousel-arrows">
          <h2>Personagens em destaque</h2>

          <div class="buttons">
            <button onClick={() => refCarousel.slidePrev()}>
              <FaAngleLeft />
            </button>
            <button onClick={() => refCarousel.slideNext()}>
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="carousel-wrapper">
          <Carousel
            breakPoints={breakPoints}
            disableArrowsOnEnd={false}
            showArrows={false}
            ref={(ref) => setRefCarousel(ref)}
          >
            {itemsCarrousel.map((item) => (
              <ItemCaroussel
                key={item.id}
                image={item.thumbnail.path + "." + item.thumbnail.extension}
              >
                <h3>{item.name}</h3>
              </ItemCaroussel>
            ))}
          </Carousel>
        </div>
      </Container>
    </ContentCarousel>
  );
}
