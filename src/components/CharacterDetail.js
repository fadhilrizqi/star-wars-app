import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchCharacter();
  });

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair: {character.hair_color}</p>
      <p>Skin: {character.skin_color}</p>
      <p>Eyes: {character.eye_color}</p>
    </div>
  );
};

export default CharacterDetail;
