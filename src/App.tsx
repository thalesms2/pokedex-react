import styled from 'styled-components'
import { useInfiniteQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'

import PokemonCard from './components/PokemonCard'
import Header from './components/Header'
import Filter from './components/Filter'
import Loading from './components/Loading'

import useApi from './hooks/useApi'
import useHandles from './hooks/useHandles'

const PokemonList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Wrapper = styled.div`
  @media (min-width: 1200px) {
    margin: 0 20vw;
  }
  @media (max-width: 1200px) {
    margin: 0 10vw;
  }
  @media (max-width: 1000px) {
    margin: 0 5vw;
  }
`

export default function App() {
  const { 
    infinityScroll
  } = useApi()
  const {
    search,
    handleInputChange
  } = useHandles()
  
  const { ref, inView } = useInView()
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'pokemons',
    ({pageParam = 0}) => infinityScroll(pageParam),
    {
      getNextPageParam: (page, all) => (page.length * all.length)
    }
  )

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Wrapper>
      <Header title="Pokédex">
        <Filter handleInputChange={handleInputChange} value={search}/> 
        <PokemonList>
          {data?.pages.map((page: any) => (
            <React.Fragment key={`pokemon${page[0].id}`}>
              {page.map((pokemon: any) => {
                return (
                  <Link to={pokemon.name} key={pokemon.id.toString()}>
                    <PokemonCard info={pokemon}/>
                  </Link>
                )
              })}
            </React.Fragment>
          ))}
        </PokemonList>
        <div ref={ref}>
          {isFetchingNextPage
            ? <Loading />
            : hasNextPage
            ? 'Load Newer'
            : 'Nothing more to load'}
        </div>
      </Header>
    </Wrapper>
  )
}