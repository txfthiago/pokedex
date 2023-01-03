import axios from "axios";

const getPokemons = async (pokeIndice) => {
  const dados = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokeIndice}`
  );
  return dados.data ;
};

export default getPokemons;
