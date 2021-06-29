
export type PokemonLight = {
  name: string;
  url: string;
};

type PokemonSprites = {
  front_default: string;
}

export type Pokemon = {
  name: string;
  id: number;
  url: string;
  sprites: PokemonSprites;
}
