import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"

import Type from "./components/Type"
import Loading from "./components/Loading"
import Stats from "./components/PokemonPage/Stats"
import Description from "./components/PokemonPage/Description"
import Info from "./components/PokemonPage/Info"

import styled from "styled-components"
import useApi from "./hooks/useApi"

const PokemonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TypesDiv = styled.div`
    display: flex;
    flex-direction: column;
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
const SubTitle = styled.h3`
    font-family: "Flexo",arial,sans-serif;
    font-weight: 400;
    font-size: 1.4em;
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
    const { searchPokemon } = useApi()
    const { data: pokemon, isLoading } = useQuery('pokemon', () => searchPokemon(pokemonName as string))
    const imgUrl = pokemon?.info.img.other['official-artwork'].front_default
    const id = `N°${String(pokemon?.info.id).padStart(3, '0')}`

    function pokemonRender() {
        if(isLoading) {
            return <Loading />
        } else {
            return (
                <PokemonWrapper>
                    <Title>{pokemon?.info.name} {id}</Title>
                    <RowWrapper>
                        <ImgStatsWrapper>
                            <img src={imgUrl} alt={`image of ${pokemon?.info.name}`} />
                            <Stats stats={pokemon?.info.stats}/>
                        </ImgStatsWrapper>
                        <div>
                            <Description info={pokemon?.description} />
                            <Info 
                                height={pokemon?.info.height} 
                                weight={pokemon?.info.weight}
                                abilities={pokemon?.info.abilities}
                                gender={pokemon?.info.gender} />
                            <TypesDiv>
                                <SubTitle>Type</SubTitle>
                                {pokemon?.info.types.map((type: any) => {
                                    return (
                                        <Type key={type.type.name} type={type.type.name}/>
                                    )
                                })}
                            </TypesDiv>
                            <TypesDiv>
                                <SubTitle>Weakness</SubTitle>
                                {

                                }
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