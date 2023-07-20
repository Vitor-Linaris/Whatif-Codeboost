import { Container } from "@/src/styles/global";
import { SectionCharacterStyle } from "./styles";
import ImageCharacter from "../../../assets/character.jpg";
import Image from "next/image";

export function SectionHeroCharacter({ data }) {
  return (
    <SectionCharacterStyle>
      <Container>
        <div className="image">
          <Image
            src={data.image_character.url}
            width={data.image_character.dimensions.width}
            height={data.image_character.dimensions.height}
            alt="Image do personagem"
          />
        </div>
        <div className="info">
          <span>A História</span>
          <div>
            <h1>{data.name_character}</h1>
            <p>{data.description_character[0].text}</p>
          </div>
        </div>
      </Container>
    </SectionCharacterStyle>
  );
}
