import styled from "styled-components"

interface TypeProps {
    type: string
    big?: boolean
}

interface TypeCellProps {
    backgroundColor?: string
    textColor?: string
    big?: boolean
}

const TypeCell = styled.span<TypeCellProps>`
    background: ${props => props.backgroundColor || 'white' };
    color: ${props => props.textColor || 'black'};
    margin: ${props => props.big ? '1% 0 0 1%' : '0 1.5625% 0 0'};
    line-height: ${props => props.big ? '32px' : '18px'};
    border-radius: 3px;
    width: 38.4375%;
    max-width: ${props => props.big ? '140px' : '110px'};
    font-size: ${props => props.big ? '' : '12px'};
    text-align: center;
    font-family: "Flexo",arial,sans-serif;
    font-weight: ${props => props.big ? '' : '600'};
    text-transform: capitalize;
    @media (min-width: 1200px) {
        max-width: ${props => props.big ? '140px' : '110px'};
    }
    @media (max-width: 1200px) {
        max-width: ${props => props.big ? '135px' : '110px'};
    }
`

export default function Type(props: TypeProps) {
    const backgroundColor = {
        'grass': '#9BCC50',
        'poison': '#B97FC9',
        'fire': '#FD7D24',
        'flying': 'linear-gradient(to bottom, #3DC7EF 50%,#BDB9B8 50%)',
        'water': '#4592C4',
        'bug': '#729F3F',
        'normal': '#A4ACAF',
        'electric': '#EED535',
        'ground': 'linear-gradient(to bottom, #F7DE3F 50%,#AB9842 50%)',
        'fairy': '#FDB9E9',
        'fighting': 'linear-gradient(to bottom, #3DC7EF 50%,#BDB9B8 50%)',
        'psychic': '#F366B9',
        'rock': '#A38C21',
        'steel': '#9EB7B8',
        'ice': '#51C4E7',
        'ghost': '#7B62A3',
        'dragon': 'linear-gradient(to bottom, #53A4CF 50%,#F16E57 50%)',
        'dark': '#707070',

    }[props.type]
    const textColor = {
        'grass': '#fff',
        'poison': '#fff',
        'fire': '#fff',
        'flying': '#000',
        'water': '#fff',
        'bug': '#fff',
        'normal': '#000',
        'electric': '#000',
        'ground': '#000',
        'fairy': '#000',
        'fighting': '#000',
        'psychic': '#fff',
        'rock': '#fff',
        'steel': '#000',
        'ice': '#000',
        'ghost': '#fff',
        'dragon': '#fff',
        'dark': '#fff',
    }[props.type]

    return(
        <TypeCell big={props.big} backgroundColor={backgroundColor} textColor={textColor}>
            {props.type}
        </TypeCell>
    )
}