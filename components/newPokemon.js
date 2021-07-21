import React from 'react'

export default function NewPokemon() {
  const [name, setName] = React.useState('')
  const [weight, setWeight] = React.useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const pokemonBody = { name, weight }
    const response = await fetch('http://localhost:3000/api/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemonBody)
    })
    const pokeResponse = await response.json()
    console.log(pokeResponse);
    setName('')
    setWeight('')
  }

  return (
    <div >
      <h2>Add a pokemon!</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Weight: </label>
        <input name='weight' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}