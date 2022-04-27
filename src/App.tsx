import { useState, useEffect } from 'react'
import api from './api/api'
import Card from './Card'
import { PokedexDiv } from './style/styled'

function App() {
  const [pokemons, setPokemons] = useState<Array<{value: object}>>([])
  
  const fetchPokemons = () => {
    for(let i = 1; i < 20; i++){
      api.get(`pokemon/${ i }`)
        .then((response) => {
          setPokemons(pokemon => [...pokemon, response.data]);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err)
        })
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <PokedexDiv>
      {pokemons?.map((pokemon: any ) => {
          return (<Card name={pokemon.name} id={pokemon.id} img={pokemon.sprites} types={pokemon.types}/>)
      })}
    </PokedexDiv>
  )
}

export default App
