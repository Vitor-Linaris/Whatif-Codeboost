import { PageTitle } from "@/src/components/PageTitle";
import { SectionHeroCharacter } from "@/src/components/details/sectionHeroCharacter";
import { ListCharacters } from "@/src/components/home/listCharacter";

export default function PageCharacter() {
  return (
    <>
      <PageTitle
        title="What If? - Codeboost │ Detalhes do personagem"
        description="Um projeto desenvolvido no curso Codeboost"
      />
      <SectionHeroCharacter />
      <ListCharacters />
    </>
  );
}
