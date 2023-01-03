import React, { useEffect } from "react";
import Card from "../components/card";
import NavBar from "../components/navBar";
import Service from "../../service/pokeService";
import { useState } from "react";
import { listSubheaderClasses } from "@mui/material";

const Home = () => {
  const [pokeList, setPokeList] = useState([]);

  const fechPokemon = async () => {
    let list = [];

    for (let i = 1; i <= 30; i = i + 1) {
      list.push(await Service(i));
    }
    console.log(list);

    setPokeList(list);
  };
  useEffect(() => {
    fechPokemon();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="card-container">
          {pokeList.map((pokemon) => (
            <Card
              image={pokemon.sprites.front_default}
              name={pokemon.name}
              key={pokemon.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
