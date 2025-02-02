import React from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils";

function SideNav(props) {
  const { selectedPokemon, setSelectedPokemon } = props;

  return (
    <nav className="w-72 bg-gray-300 flex flex-col gap-y-2 px-3 pb-2 h-screen overflow-auto">
      <div className="sticky py-2 top-0 bg-gray-300">
        <h1 className="text-center text-cyan-600 text-2xl font-bold">
          Pokedex
        </h1>
        <input
          placeholder="search pokemon..."
          className="bg-gray-200 w-full rounded-sm border-gray-200 border-2 focus:border-gray-400 focus:outline-none ps-2 mt-2"
        />
      </div>
      {first151Pokemon.map((pokemon, pokemonIndex) => {
        return (
          <button
            key={pokemonIndex}
            onClick={() => {
              setSelectedPokemon(pokemonIndex);
            }}
            className="flex gap-5 px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-all rounded-sm"
          >
            <p>{getFullPokedexNumber(pokemonIndex)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}

export default SideNav;
