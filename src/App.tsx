import { Route, Routes } from 'react-router-dom'

import Card from './Card'
import { PokedexDiv } from './style/styled'

import axios from 'axios'
import { useQuery } from 'react-query'

export type Pokemon = {
  name: string;
  id: number;
  sprites: any;
  types: any;
}

export default function App() {
  const { data, isFetching } = useQuery<Pokemon[]>('pokemons', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')

    return response.data.results
  }, {
    staleTime: 1000 * 120, // 2 minutes
  })
  console.log(data)
  return (
    <PokedexDiv>
      {
        data?.map((pokemon: any ) => {
          return (
            <div>
              <span>{pokemon.name}</span>
            </div>
          )
        })
      }
    </PokedexDiv>
  )
}