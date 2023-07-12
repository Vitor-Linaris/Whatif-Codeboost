import { CardCharacter } from "../components/cardCharacter";
import { Header } from "../components/header";
import { ListCharacters } from "../components/home/listCharacter";
import { SectionHero } from "../components/home/sectionHero";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <ListCharacters />
    </>
  );
}
