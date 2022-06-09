import styled from "styled-components"

interface HeaderProps {
    title: string
    pokemonPage? : boolean
}

interface TitleProps {
    page?: boolean
}

const Title = styled.h1<TitleProps>`
    color: ${props => props.page ? '#313131' : '#919191'};
    font-family: "Flexo",arial,sans-serif;
    font-weight: 600;
    line-height: 125%;
    font-size: ${props => props.page ? 'font-size: 145%;' : '3em'};
    ${props => props.page ? 'text-transform: capitalize;': ''}
    ${props => props.page ? 'margin-bottom: 5px;': ''}
`

export default function Header(props: HeaderProps) {

    return(
        <div>
            <Title page={props.pokemonPage}>{props.title}</Title>
        </div>
    )
}