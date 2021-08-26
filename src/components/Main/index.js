import { SectionCTA } from "../SectionCTA/index";
import { SectionNewsletter } from "../SectionNewsletter/index";
import { SectionCarousel } from "../SectionCarousel/index";
import { SectionCharacterList } from "../SectionCharacterList/index";

export function Main() {
  return (
    <>
      <SectionCarousel />
      <SectionCharacterList />
      <SectionCTA />
      <SectionNewsletter />
    </>
  );
}
