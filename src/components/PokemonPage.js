import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

const[pokemon, setPokemon] = useState([])
const[filteredPokemon, setFilteredPokemon] = useState('')

useEffect(()=>{
  fetch('http://localhost:3001/pokemon')
  .then((resp)=> resp.json())
  .then((pokemon) => setPokemon(pokemon))
},[])

function filterPokemon(input){
  setFilteredPokemon(input)
}

const pokemonToShow = pokemon.filter((charecter)=>{
  return ((charecter.name).toLowerCase()).match(filteredPokemon.toLowerCase());
})

function handleAddPokemon(newPokemon) {
  setPokemon([...pokemon, newPokemon]);
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search filterPokemon={filterPokemon}/>
      <br />
      <PokemonCollection pokemon={pokemonToShow}/>
    </Container>
  );
}

export default PokemonPage;
