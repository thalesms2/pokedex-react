import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"

import Type from "./components/Type"
import Loading from "./components/Loading"

import styled from "styled-components"
import useApi from "./hooks/useApi"

import { Pokemon } from "./types/pokemonTypes"

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

const StatsWrapper = styled.div`
    background-color: #A4A4A4;
    border-radius: 10px;
    padding: 1em;
    margin-top: 1em;
    height: 280px;
    width: 430px;
    li {
        margin-bottom: 4px;
        height: 8px;
        width: 55px;
        background-color: black;
        position: relative;
        z-index: 0;
        vertical-align: baseline;
    }
    ul:nth-child(2) {
        position: relative;
    }
    li:nth-child(1) {
        background-color: #30a7d7;
        border: none;
        z-index: 1;
        position: absolute;
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

export default function PokemonPage() {
    const { pokemonName } = useParams()
    const { searchPokemon } = useApi()
    const { data: pokemon, isLoading } = useQuery<Pokemon>('pokemon', () => searchPokemon(pokemonName as string))
    const imgUrl = pokemon?.sprites.other['official-artwork'].front_default
    const id = `N°${String(pokemon?.id).padStart(3, '0')}`

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
                            <StatsWrapper>
                                <h2>Stats</h2>
                                <ul>
                                    <li> 
                                        <ul>
                                            <li></li> 
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                        <span>HP</span>
                                    </li>
                                </ul>
                            </StatsWrapper>
                        </ImgStatsWrapper>
                        <div>
                            <span>
                                {
                                    // https://pokeapi.co/api/v2/pokemon-species/1/
                                    // flavor_text of the first object in the array 
                                    // contents the description, but has to clean the text
                                }
                            </span>
                            <button>Change description to other version</button>
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

// TODO Prev and next buttons on the top of the page
// Component Pokemon recebendo as evoluções 
// TODO adicionar variavel cm circulo no component Pokemon
// https://pokeapi.co/docs/v2#pokemon-species
// https://pokeapi.co/api/v2/evolution-chain/1

// esse vai por cima como marcador os de baixo são só os slots