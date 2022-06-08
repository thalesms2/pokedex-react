import styled from 'styled-components'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import PokemonCard from './components/PokemonCard'
import Header from './components/Header'
import Filter from './components/Filter'

import useApi from './hooks/useApi'
import useHandles from './hooks/useHandles'
import Loading from './components/Loading'
import axios from 'axios'

const PokemonList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const AppDiv = styled.div`
  margin: 0 20vw;
`

export default function App() {
  const { getAll } = useApi()
  const {
    search,
    handleInputChange
  } = useHandles()

  const { data: pokemons, isLoading } = useQuery('pokemons', getAll);

  function pokemonList() {
    if (isLoading) {
      return <Loading />
    } else {
      return (
        <PokemonList>
          {
            pokemons?.map((pokemon: any) => {
              return (
                <Link to={pokemon.name} key={pokemon.id.toString()}>
                  <PokemonCard info={pokemon}/>
                </Link>
              )
            })
          }
        </PokemonList>
      )
    }
  }

  return (
    <AppDiv>
      <Header title="Pokédex" />
      <Filter handleInputChange={handleInputChange} value={search}/> 
      { pokemonList() }
    </AppDiv>
  )
}