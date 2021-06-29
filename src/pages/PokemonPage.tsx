import useGetPokemon from "hook/useGetPokemon";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function PokemonPage() {
  const { nome } = useParams<{ nome? : string }>();
  const history = useHistory();

  const { pokemon, error } = useGetPokemon(nome ?? 1);

  useEffect(() => {
    if (!nome) history.push('/');
  }, [nome, history]);



  return (
    <div>
      {
        error && (
          <div>
            Pokemón não encontrado!
          </div>
        )
      }
      {
        pokemon && (
          <>
            <h2>
              {pokemon.id} - {pokemon?.name}
            </h2>
            <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          </>
        )
      }

    </div>
  );
}

export default PokemonPage;
