import {
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPokemonListApi, getPokemonTypes } from "./api";
import PokemonCard from "../../components/PokemonCard";
import SelectedCard from "../../components/SelectedCard";
import { ContainerStyles } from "./pokemon.styles";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState({
    results: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = async () => {
    const result = await getPokemonListApi(pokemonList.next);
    const newArr = JSON.parse(JSON.stringify(pokemonList.results));
    newArr.push(...result?.results);
    setIsLoading(false);
    setPokemonList({
      ...pokemonList,
      next: result.next,
      results: newArr,
    });
  };

  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const handleChange = (e) => {
    setSelectedType(e.target.value);
  };
  useEffect(() => {
    handleClick();
    const test = async () => {
      const { results } = await getPokemonTypes();
      setTypes([...results]);
    };
    test();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedPokemon, setSelectedPokemon] = useState();

  if (isLoading || !types) return <CircularProgress />;
  return (
    <ContainerStyles>
      <Typography variant="h3" textAlign="center">
        Pokedex
      </Typography>

      <Select
        className="filter_select"
        value={selectedType}
        placeholder="Selected pokemon type"
        onChange={handleChange}
      >
        <MenuItem value="All">All</MenuItem>
        {types?.map((item) => (
          <MenuItem value={item.name} key={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <Grid container>
        <Grid item sm={4} md={6} xs={4}>
          <Grid container spacing={2} textAlign="center" marginBottom={10}>
            {pokemonList?.results?.map((item) => (
              <PokemonCard
                key={item.name}
                item={item}
                setSelectedPokemon={setSelectedPokemon}
                selectedType={selectedType}
              />
            ))}
          </Grid>
          <Button type="success" onClick={handleClick}>
            Show more
          </Button>
        </Grid>
        <Grid item sm={8} md={6} className="pokemon--info">
          <SelectedCard selectedPokemon={selectedPokemon} />
        </Grid>
      </Grid>
    </ContainerStyles>
  );
};

export default Pokemon;
