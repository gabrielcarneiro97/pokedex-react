import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import useGetPokemon from "hook/useGetPokemon";
import Pokemon from 'components/Pokemon';

function PokemonPage() {
  const { nome } = useParams<{ nome? : string}>();
  const history = useHistory();

  const { pokemon, error } = useGetPokemon(nome ?? 1);

  useEffect(() => {
    if (!nome) history.push('/');
  }, [nome, history]);

  return (
    <div>
      {error && <div> Pokémon não encontrado </div>}
      {pokemon && <Pokemon id={pokemon.id} nome={pokemon.name} img={pokemon.sprites.front_default} />}
    </div>
  );
}

export default PokemonPage;
