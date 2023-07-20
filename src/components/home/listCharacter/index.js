import Image from "next/image";
import { Container } from "@/src/styles/global";
import { StyleListCharacters, StyleSectionCharacters } from "./styles";
import { CardCharacter } from "../../cardCharacter";
import LogoMarvel from "../../../assets/logo.svg";
import ImageCharacter from "../../../assets/character.jpg";

export function ListCharacters({ data }) {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className="title">
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>
          {data.map((character) => {
            return (
              <CardCharacter
                key={character.id}
                slug={character.data.slug}
                image={character.data.image_character.url}
                name={character.data.name_character}
              />
            );
          })}
          <div className="marvel">
            <Image src={LogoMarvel} alt="Marvel Studios" />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleSectionCharacters>
  );
}
