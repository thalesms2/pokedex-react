import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"

import Type from "./components/Type"
import Loading from "./components/Loading"
import Stats from "./components/PokemonPage/Stats"
import Description from "./components/PokemonPage/Description"
import Info from "./components/PokemonPage/Info"
import Weaknesses from "./components/PokemonPage/Weaknesses"

import useApi from "./hooks/useApi"
import useHandles from "./hooks/useHandles"
import {
    PokemonWrapper,
    TypesDiv,
    ColumnWrapper,
    RowWrapper,
    SubTitle,
    BackButton,
    Select
} from './PokemonPage.styled'



const PokemonPage: React.FC = () => {
    const { pokemonName } = useParams()
    const { searchPokemon } = useApi()
    const { handleSpriteChange, sprite, setTitle } = useHandles()
    const { data: pokemon, isLoading } = useQuery(pokemonName as string, () => searchPokemon(pokemonName as string))
    
    const id = `N°${String(pokemon?.info.id).padStart(3, '0')}`
    function pokemonRender() {
        if(isLoading) {
            return <Loading />
        } else {
            return (
                <PokemonWrapper>
                        <RowWrapper>
                            <ColumnWrapper>
                                <img src={sprite} alt={`image of ${pokemon?.info.name}`} />
                                {/* <Select name="sprite" defaultValue={sprite} onChange={(e) => handleSpriteChange(e.target.value)}>
                                    {pokemon?.info.img.map((art: any) => {
                                        return <option key={`${art.toString()}-${pokemon?.info.name}}`} value={'placeholder'}>{'placeholder'}</option>
                                    })}
                                </Select> */}
                                <TypesDiv>
                                    <SubTitle>Type</SubTitle>
                                    {pokemon?.info.types.map((type: any) => {
                                        return <Type key={type.type.name} type={type.type.name} big/>
                                    })}
                                </TypesDiv>
                                <TypesDiv>
                                    <SubTitle>Weakness</SubTitle>
                                    <Weaknesses info={pokemon?.info.weaknesses}/>
                                </TypesDiv>
                            </ColumnWrapper>
                            <ColumnWrapper>
                                <Description info={pokemon?.description} />
                                <Info 
                                    height={pokemon?.info.height} 
                                    weight={pokemon?.info.weight}
                                    abilities={pokemon?.info.abilities}
                                    gender={pokemon?.info.gender} />
                                <Stats stats={pokemon?.info.stats}>
                                    <SubTitle>Stats</SubTitle>
                                </Stats>
                            </ColumnWrapper>
                        </RowWrapper>
                        <Link to="/">
                            <BackButton>Explorar mais Pokémons</BackButton>
                        </Link>
                </PokemonWrapper>
            )
        }
    }
    return pokemonRender()
}

export default PokemonPage