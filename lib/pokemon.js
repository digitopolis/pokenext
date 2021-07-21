export async function getPokemonData(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemonData = await res.json()
    const dreamWorldSprite = pokemonData.sprites.other.dream_world.front_default
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      sprite: dreamWorldSprite,
      types: pokemonData.types
    }
  } catch (error) {
    return {
      error: 'There was an error fetching data'
    }
  }
}

export async function getPokemonNames(numberToFetch) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberToFetch}`)
  const resJSON = await res.json()
  return resJSON.results.map(({ name }) => {
    return {
      params: {
        name 
      }
    }
  })
}

export async function getInitialPokemonData(numberToFetch) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberToFetch}`)
  const pokemonNames = await res.json()
  return pokemonNames.results
}