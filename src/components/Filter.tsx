import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface FilterProps {
    handleInputChange: (value: string) => void
    value: string
    handleSubmitSearch: () => void
}

export default function Filter(props: FilterProps) {
    return(
        <div>
            <label htmlFor="searchPokemonByName">Procure um Pokemon pelo nome</label>
            <input type="text" id="searchPokemonByName" value={props.value} onChange={e => props.handleInputChange(e.target.value)}/>
            <Link to={`/${props.value}`}><button onClick={props.handleSubmitSearch}>Procurar</button></Link>
        </div>
    )
}