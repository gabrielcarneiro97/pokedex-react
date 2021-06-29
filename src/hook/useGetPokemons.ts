import { useEffect, useState } from "react";
import { PokemonLight } from "types";
import useGet from "./useGet";

function useGetPokemons(quantidade = 20) {
  const { data, loading, error } = useGet<{ results: PokemonLight[] }>(`https://pokeapi.co/api/v2/pokemon?limit=${quantidade}`);
  const [pokemons, setPokemons] = useState<PokemonLight[]>([]);

  useEffect(() => {
    if (loading) return;
    if (error) return console.log(error);
    if (data) setPokemons(data.results);
  }, [data, loading, error]);

  return pokemons;
}

export default useGetPokemons;
