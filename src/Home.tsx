import styled from 'styled-components'
import { useInfiniteQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'

import PokemonCard from './components/PokemonCard'
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
    
`

const Home: React.FC = () => {
    const { infinityScroll } = useApi()
    const { search, handleInputChange } = useHandles() 
    const { ref, inView } = useInView()
    const {
        data,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery (
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
        </Wrapper>
    )
}

export default Home