import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"

import Type from "./components/Type"
import Loading from "./components/Loading"
import Header from "./components/Header"
import Stats from "./components/PokemonPage/Stats"
import Description from "./components/PokemonPage/Description"
import Info from "./components/PokemonPage/Info"
import Evolutions from "./components/PokemonPage/Evolutions"

import styled from "styled-components"
import useApi from "./hooks/useApi"
import Weaknesses from "./components/PokemonPage/Weaknesses"

const PokemonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1200px) {
        margin: 0 20vw;
    }
    @media (max-width: 1200px) {
        margin: 0 10vw;
    }
    @media (max-width: 1000px) {
        margin: 0 5vw;
        
    }
    @media (max-width: 500px) {
        margin: 0 5vw;   
    }
`

const TypesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1em;
`

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 430px;
    img {
        background-color: #F2F2F2;
        padding-bottom: 30px;
    }
    @media (min-width: 500px) {
        &:nth-child(1) {
            margin-right: 1em;
        }
    }
`

const RowWrapper = styled.div`
    display: flex;
    @media (min-width: 1200px) {
        flex-direction: row;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
const SubTitle = styled.h3`
    font-family: "Flexo",arial,sans-serif;
    font-weight: 400;
    font-size: 1.4em;
    width: 100%;
`

const BackButton = styled.button`
    background-color: #EE6B2F;
    border-radius: 5px;
    color: white;
    padding: .8em 1.5em;
    font-family: "Flexo",arial,sans-serif;
    font-weight: 600;
    font-size: 1em;
    margin: 1em;
    &:hover {
        background-color: #DA471B;
    }
`

const PokemonPage: React.FC = () => {
    const { pokemonName } = useParams()
    const { searchPokemon } = useApi()
    const { data: pokemon, isLoading } = useQuery(pokemonName as string, () => searchPokemon(pokemonName as string))

    const imgUrl = pokemon?.info.img.other['official-artwork'].front_default
    const id = `N°${String(pokemon?.info.id).padStart(3, '0')}`

    function pokemonRender() {
        if(isLoading) {
            return <Loading />
        } else {
            return (
                <PokemonWrapper>
                    <Header pokemonPage title={`${pokemon?.info.name} ${id}`}/>
                    <RowWrapper>
                        <ColumnWrapper>
                            <img src={imgUrl} alt={`image of ${pokemon?.info.name}`} />
                            <Stats stats={pokemon?.info.stats}>
                                <SubTitle>Stats</SubTitle>
                            </Stats>
                        </ColumnWrapper>
                        <ColumnWrapper>
                            <Description info={pokemon?.description} />
                            <Info 
                                height={pokemon?.info.height} 
                                weight={pokemon?.info.weight}
                                abilities={pokemon?.info.abilities}
                                gender={pokemon?.info.gender} />
                            <TypesDiv>
                                <SubTitle>Type</SubTitle>
                                {pokemon?.info.types.map((type: any) => {
                                    return <Type key={type.type.name} type={type.type.name} big/>
                                })}
                            </TypesDiv>
                            <TypesDiv>
                                <SubTitle>Weakness</SubTitle>
                                <Weaknesses info={pokemon?.info.damageRelations}/>
                            </TypesDiv>
                        </ColumnWrapper>
                    </RowWrapper>
                    <Evolutions>
                        <SubTitle>Evolutions</SubTitle>
                    </Evolutions>
                    <Link to="/">
                        <BackButton>Explorar mais Pokémon</BackButton>
                    </Link>
                </PokemonWrapper>
            )
        }
    }
    return pokemonRender()
}

export default PokemonPage