import { useEffect, useState } from "react";
import { Pokemon } from "types";
import useGet from "./useGet";

function useGetPokemon(nomeOuId : string | number) {
  const { data, error, loading } = useGet<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (loading) return;
    if (error) return console.log(error);
    if (data) setPokemon(data);
  }, [data, loading, error]);

  return { pokemon, loading, error };
}

export default useGetPokemon;
