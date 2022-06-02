import axios from "axios"
import { useQuery } from "react-query"
import { Link,useParams } from "react-router-dom"

import Type from "./components/Type"

import styled from "styled-components"

type Pokemon = {
    name: string
    id: number
    abilities: any
    sprites: any
    types: Array<Object>
    height: number
    weight: number
}

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
    li {
        margin-bottom: 4px;
        height: 4px;
        width: 55px;
        background-color: white;
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
    const { data } = useQuery<Pokemon>('pokemon', async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        console.log(res.data)
        return res.data
    })

    const imgUrl = data?.sprites.other['official-artwork'].front_default
    const id = `N°${String(data?.id).padStart(3, '0')}`
    return (
        <PokemonWrapper>
            <Title>{data?.name} {id}</Title>
            <RowWrapper>
                <ImgStatsWrapper>
                    <img src={imgUrl} alt={`image of ${data?.name}`} />
                    <StatsWrapper>
                        <ul>
                            <li> 
                                <ul>
                                    <li>esse vai por cima como marcador os de baixo são só os slots</li>
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
                                <span>{data?.height}</span>
                                <span>Weight</span>
                                <span>{data?.weight}</span>
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
                            data?.types.map((type: any) => {
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

// TODO Prev and next buttons on the top of the page
// Component Pokemon recebendo as evoluções 
// TODO adicionar variavel cm circulo no component Pokemon
// https://pokeapi.co/docs/v2#pokemon-species
// https://pokeapi.co/api/v2/evolution-chain/1