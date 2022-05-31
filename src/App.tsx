import axios from 'axios'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import PokemonCard from './components/PokemonCard'
import Header from './components/Header'
import Filter from './components/Filter'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export type Pokemon = {
  name: string;
  id: number;
  sprites: any;
  types: any;
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const AppDiv = styled.div`
  margin: 0 6em;
`

export default function App() {

  const [search, setSearch] = useState<string>('')


  const searchPokemon = async (value: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
    return response.data
  }
  

  const handleInputChange = (value: string) => {
    setSearch(value)
  }

  const handleSubmitSearch = () => {
    searchPokemon(search)
  }

  const { data } = useQuery<Pokemon[]>('pokemons', async () => {
    let response: Array<Pokemon> = [] 
    for(let i = 1; i < 152; i++) {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      response.push(res.data)
    }
    return response
  }, {
    staleTime: 1000 * (60 * 20), // 20 minutes
  })

  return (
    <AppDiv>
      <Header title="Pokédex" />
      <Filter handleInputChange={handleInputChange} value={search} handleSubmitSearch={handleSubmitSearch}/>
      <Content>
        {
          data?.map((pokemon: any ) => {
            return (
              <Link to={pokemon.name}>
                <PokemonCard key={pokemon.id} info={pokemon}/>
              </Link>
            )
          })
        }
      </Content>
    </AppDiv>
  )
}

// TODO pokemon page with more information about it
// TODO search page with the pokemon search



