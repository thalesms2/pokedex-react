import axios from 'axios'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import Pokemon from './components/Pokemon'
import Header from './components/Header'

export type Pokemon = {
  name: string;
  id: number;
  sprites: any;
  types: any;
}

export default function App() {
  const Content = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
  `

  const AppDiv = styled.div`
    margin: 0 5em;
  `

  const { data } = useQuery<Pokemon[]>('pokemons', async () => {
    let response: Array<Pokemon> = [] 
    for(let i = 1; i < 200; i++) {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      response.push(res.data)
    }
    return response
  }, {
    staleTime: 1000 * 120, // 2 minutes
  })

  return (
    <AppDiv>
      <Header title="Pokédex" />
      <Content>
        {
          data?.map((pokemon: any ) => {
            return (
                <Pokemon info={pokemon}/>
            )
          })
        }
      </Content>
    </AppDiv>
  )
}