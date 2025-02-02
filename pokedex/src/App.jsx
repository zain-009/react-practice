import { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import PokeCard from "./components/PokeCard";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  return (
    <>
      <Header />
      <div className="flex">
        <SideNav
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
        <PokeCard selectedPokemon={selectedPokemon} />
      </div>
    </>
  );
}

export default App;
