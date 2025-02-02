import React from "react";
import { pokemonTypeColors } from "../utils";

export default function TypeCard(props) {
  const { type } = props;

  return (
    <span
      className="text-base px-2 py-1 rounded-md"
      style={{
        color: pokemonTypeColors.type.color,
        backgroundColor: pokemonTypeColors.type.background,
      }}
    >
      {type.type.name}
    </span>
  );
}
