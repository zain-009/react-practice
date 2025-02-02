import React, { useEffect, useState } from "react";
import { getPokedexNumber } from "../utils";
import TypeCard from "./TypeCard";

function PokeCard(props) {
  const { selectedPokemon } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { name, height, abilities, stats, types, moves, sprites } = data || {};

  useEffect(() => {
    if (loading || !localStorage) return;

    let cache = {};

    if (localStorage.getItem("pokedex")) {
      cache = JSON.parse(localStorage.getItem("pokedex"));
    }

    if (selectedPokemon in cache) {
      setData(cache[selectedPokemon]);
      return;
    }

    async function fetchPokemonData() {
      setLoading(true);
      try {
        const pokemonNumber = getPokedexNumber(selectedPokemon);
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
        console.log(url);
        const res = await fetch(url);
        const pokemonData = await res.json();
        setData(pokemonData);
        console.log(pokemonData);

        cache[selectedPokemon] = pokemonData;
        localStorage.setItem("pokedex", JSON.stringify(cache));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonData();
  }, [selectedPokemon]);

  if (loading || !data) {
    return (
      <div className="flex flex-col bg-gray-200 w-full rounded-lg p-10 text-5xl">
        Loading
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-y-3 bg-gray-200 w-full rounded-lg p-10 text-5xl font-mono">
        <img
          className="w-36"
          src={data.sprites?.front_default}
          alt={data.name}
        />
        <span>#{selectedPokemon}</span>
        <div className="flex gap-x-3">
          {types.map((type, typeIndex) => (
            <TypeCard key={typeIndex} type={type} />
          ))}
        </div>
        <span className="text-8xl">{data.name}</span>
      </div>
    );
  }
}

export default PokeCard;
