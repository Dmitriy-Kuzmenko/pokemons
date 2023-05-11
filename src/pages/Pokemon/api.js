export const getPokemonListApi = async (
  link = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
) => {
  const res = await fetch(link);
  const result = await res.json();
  return result;
};

export const getPokemonTypes = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type");
  const result = await res.json();
  return result;
};
