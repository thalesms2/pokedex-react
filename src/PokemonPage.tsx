import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"

import Type from "./components/Type"
import Loading from "./components/Loading"
import Stats from "./components/PokemonPage/Stats"
import Description from "./components/PokemonPage/Description"

import styled from "styled-components"
import useApi from "./hooks/useApi"

const PokemonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TypesDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const Title = styled.h2`
    font-size: 145%;
    margin-bottom: 5px;
    line-height: 125%;
    text-transform: capitalize;
    font-family: 'Flexo',arial,sans-serif;
    font-weight: 600;
    color: #313131;
`

const ImgStatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    img {
        background-color: #F2F2F2;
        max-width: 430px;
        padding-bottom: 30px;
    }
`

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const InfoWrapper = styled.div`
    background-color: #30A7D7;
    border-radius: 10px;
    padding: 1em;
`

const BackButton = styled.button`
    background-color: #EE6B2F;
    border-radius: 5px;
    color: white;
    padding: .8em 1.5em;
    font-family: "Flexo",arial,sans-serif;
    font-weight: 600;
    font-size: 1em;

    &:hover {
        background-color: #DA471B;
    }
`

const PokemonPage: React.FC = () => {
    const { pokemonName } = useParams()
    const { 
        searchPokemon,
    } = useApi()
    const { data: pokemon, isLoading } = useQuery('pokemon', () => searchPokemon(pokemonName as string))
    // const { data: evolution} = useQuery('evolution', () => getEvolution(pokemon?.id))
    const imgUrl = pokemon?.sprites.other['official-artwork'].front_default
    const id = `N°${String(pokemon?.id).padStart(3, '0')}`
    const description: any = []
    function pokemonRender() {
        if(isLoading) {
            return <Loading />
        } else {
            return (
                <PokemonWrapper>
                    <Title>{pokemon?.name} {id}</Title>
                    <RowWrapper>
                        <ImgStatsWrapper>
                            <img src={imgUrl} alt={`image of ${pokemon?.name}`} />
                            <Stats stats={pokemon?.stats}/>
                        </ImgStatsWrapper>
                        <div>
                            <Description pokemonName={pokemonName as string}/>
                            <InfoWrapper>
                                Information Height Category Weight Abilities Gender
                                <RowWrapper>
                                    <div>
                                        <span>Height</span>
                                        <span>{pokemon?.height}</span>
                                        <span>Weight</span>
                                        <span>{pokemon?.weight}</span>
                                        <span>Gender</span>
                                        <span></span>
                                    </div>
                                    <div>
                                        <span>Category</span>
                                        <span>Seed</span>
                                        <span>Abilities</span>
                                        <span>Overgrow</span>
                                    </div>
                                </RowWrapper>
                            </InfoWrapper>
                            <TypesDiv>
                                <h3>Type</h3>
                                {
                                    pokemon?.types.map((type: any) => {
                                        return (
                                            <Type key={type.type.name} type={type.type.name}/>
                                        )
                                    })
                                }
                            </TypesDiv>
                            <TypesDiv>
                                <h3>Weakness</h3>
                            </TypesDiv>
                        </div>
                    </RowWrapper>
                    <div>
                        Evoluções
                        <div>

                        </div>
                    </div>
                    <Link to="/">
                        <BackButton>Explorar mais Pokémon</BackButton>
                    </Link>
                </PokemonWrapper>
            )
        }
    }
    return (
        pokemonRender()
    )
}

export default PokemonPage