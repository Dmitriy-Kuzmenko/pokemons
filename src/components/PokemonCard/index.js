import {
	Card,
	CardContent,
	CardMedia,
	Chip,
	CircularProgress,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({ item, setSelectedPokemon, selectedType }) => {
	const [pokemon, setPokemon] = useState();
	const test = async (url) => {
		const res = await fetch(url);
		const result = await res.json();
		setPokemon(result);
	};

	useEffect(() => {
		test(item.url);
	}, []);

	const colorType = {
		fire: 'red',
		water: 'blue',
		grass: 'green',
		poison: 'violet',
		electric: 'yellow',
	};

	if (!pokemon) return <CircularProgress />;
	const filterPokemon = pokemon.types.find(
		(item) => item.type.name === selectedType
	);
	if (selectedType === 'All' || !!filterPokemon) {
		return (
			<Grid item sm={12} xs={12} lg={4}>
				<Card
					className='pokemon--card'
					onClick={() => setSelectedPokemon({ ...pokemon })}
				>
					<CardMedia
						className='pokemon_image'
						component='img'
						image={`${pokemon.sprites.front_default}`}
						alt='Pokemon'
					/>
					<CardContent>
						<Typography variant='h5' className='pokemon_name'>
							{pokemon.name}
						</Typography>

						<Stack className='pokemon_types'>
							{pokemon?.types.map((item, i) => (
								<Chip
									color='primary'
									key={i}
									label={item.type.name}
									sx={{
										backgroundColor: colorType[item.type.name],
										width: '100%',
									}}
								/>
							))}
						</Stack>
					</CardContent>
				</Card>
			</Grid>
		);
	}
};

export default PokemonCard;
