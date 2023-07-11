import { CardCharacter } from "../components/cardCharacter";
import { Header } from "../components/header";
import { SectionHero } from "../components/home/sectionHero";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <CardCharacter />
    </>
  );
}
