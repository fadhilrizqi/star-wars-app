import React from "react";
import { useEffect, useState } from "react";
import { fetchSwapiData } from "../utils/api";
import { Link } from "react-router-dom";

const List = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchSwapiData().then((data) => setCharacters(data));
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index + 1}>
            <Link to={`/character/${index + 1}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
