import Image from "next/image";
import { Container } from "@/src/styles/global";
import { StyleListCharacters, StyleSectionCharacters } from "./styles";
import { CardCharacter } from "../../cardCharacter";
import LogoMarvel from "../../../assets/logo.svg";
import ImageCharacter from "../../../assets/character.jpg";

const characters = [
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger",
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger",
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger",
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger",
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger",
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger",
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger",
  },
];

export function ListCharacters() {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className="title">
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>
          {characters.map(({ name, image, slug }) => {
            return (
              <CardCharacter key={name} slug={slug} image={image} name={name} />
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
