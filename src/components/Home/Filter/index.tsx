import { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import {
    SearchLabel, 
    Wrapper, 
    SearchInput, 
    SearchButton
} from './Filter.styled'
interface FilterProps {
    handleInputChange: (value: string) => void
    value: string
}

export default function Filter(props: FilterProps) {
    const theme = useTheme()
    return(
        <form>
            <SearchLabel htmlFor="searchPokemonByName">Nome ou número</SearchLabel>
            <Wrapper>
                <SearchInput type="text" id="searchPokemonByName" value={props.value} onChange={e => props.handleInputChange(e.target.value)}/>
                <Link to={`/${props.value}`}><SearchButton><FaSearch color={theme.colors.backgroundCard} fontSize={25} /></SearchButton></Link>
            </Wrapper>
        </form>
    )
}