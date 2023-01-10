import React, { useEffect } from "react";
import Card from "../components/card";
import NavBar from "../components/navBar";
import Service from "../../service/pokeService";
import { useState, useRef } from "react";
import ModalDetails from "../components/modalDetails";
import MyContext from "../helpers/contex";
import Button from "@mui/material/Button";

const Home = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeSelected, setPokeSelected] = useState({});
  const [numberPokeRender, setNumberPokeRender] = useState(0);
  const [indice, setIndice] = useState(-29);
  const firstUpdate = useRef(true);

  const fetchPokemon = async () => {
    let list = [];

    for (let i = indice; i <= numberPokeRender; i = i + 1) {
      list.push(await Service(i));
    }

    setPokeList((prevState) => [...prevState, ...list]);
  };

  const handleSelectPoke = async (value) => {
    setPokeSelected(pokeList.filter((pokemon) => pokemon.id === value));
  };

  const observer = new IntersectionObserver((ent) => {
    if (ent.some((entry) => entry.isIntersecting)) {
      setIndice((ind) => ind + 30);
      setNumberPokeRender((numberPoke) => numberPoke + 30);
    }
  });

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      observer.observe(document.querySelector(".limit"));
    } else {
      fetchPokemon();
    }
  }, [numberPokeRender]);

  const [searchValue, setSearchValue] = useState("");

  function handleSearchValueChange(newValue) {
    const lowerCaseValue = newValue.toLowerCase();
    console.log(lowerCaseValue);
    setSearchValue(lowerCaseValue);
  }

  const handlePokemonSearch = async () => {
    if (searchValue === "") {
      location.reload()
    } else {
      const pokeSearch = await Service(searchValue);
      setIndice(0);
      setNumberPokeRender(-1);

      setPokeList([pokeSearch]);
    }
  };

  return (
    <>
      <NavBar
        onSearchValueChange={handleSearchValueChange}
        handlePokemonSearch={handlePokemonSearch}
      />

      <div className="container">
        <div className="card-container">
          {pokeList.map((pokemon) => {
            return (
              <MyContext.Provider value={{ data: pokeSelected }}>
                <Card
                  image={pokemon.sprites.front_default}
                  name={pokemon.name}
                  id={pokemon.id}
                  handleSelectPoke={handleSelectPoke}
                />
              </MyContext.Provider>
            );
          })}
          <li className="limit" />
        </div>
      </div>
    </>
  );
};

export default Home;
