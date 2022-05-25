import axios from 'axios'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import Pokemon from './Pokemon'

export type Pokemon = {
  name: string;
  id: number;
  sprites: any;
  types: any;
}

const PokedexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export default function App() {
  const { data } = useQuery<Pokemon[]>('pokemons', async () => {
    let response: Array<Pokemon> = [] 
    for(let i = 1; i < 20; i++) {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      response.push(res.data)
    }
    return response
  }, {
    staleTime: 1000 * 120, // 2 minutes
  })

  return (
    <PokedexDiv>
      {
        data?.map((pokemon: any ) => {
          return (
              <Pokemon info={pokemon}/>
          )
        })
      }
    </PokedexDiv>
  )
}