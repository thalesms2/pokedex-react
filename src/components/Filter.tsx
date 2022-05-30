import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

interface FilterProps {
    handleInputChange: (value: string) => void
    value: string
    handleSubmitSearch: () => void
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const SearchLabel = styled.label`
    font-family: "Flexo",arial,sans-serif;
    font-size: 1.5em;
` 

const SearchInput = styled.input`
    border: solid 3px #616161;
    border-radius: 5px;
    color: #313131;
    line-height: 1.5;
    text-indent: .5em;
    height: auto;
    width: 100%;
    padding: .5em 0;
    font-size: 100%;

    &:focus{
        box-shadow: 
            inset 0 0 0 1px white,
            inset 0 0 0 2px black;
    }
`

const SearchButton = styled.button`
    height: 100%;
    width: 50px;
    border-radius: 5px;
    background-color: #EE6B2F;
    margin-left: .5em;

    &:hover {
        background-color:#DA471B;
    }
`

export default function Filter(props: FilterProps) {
    return(
        <form>
            <SearchLabel htmlFor="searchPokemonByName">Nome ou número</SearchLabel>
            <Wrapper>
                <SearchInput type="text" id="searchPokemonByName" value={props.value} onChange={e => props.handleInputChange(e.target.value)}/>
                <Link to={`/${props.value}`}><SearchButton onClick={props.handleSubmitSearch}><FaSearch color='white' fontSize={25} /></SearchButton></Link>
            </Wrapper>
        </form>
    )
}