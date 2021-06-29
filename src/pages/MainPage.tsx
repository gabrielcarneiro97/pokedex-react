import useGetPokemons from "hook/useGetPokemons";
import { Link } from "react-router-dom";

function MainPage() {
  const pokemons = useGetPokemons();

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => <li key={pokemon.url}><Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default MainPage;
