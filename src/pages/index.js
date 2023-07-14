import { SectionHero } from "../components/home/sectionHero";
import { ListCharacters } from "../components/home/listCharacter";
import { PageTitle } from "../components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle
        title="What If? - Codeboost"
        description="Um projeto desenvolvido no curso Codeboost"
      />
      <SectionHero />
      <ListCharacters />
    </>
  );
}
