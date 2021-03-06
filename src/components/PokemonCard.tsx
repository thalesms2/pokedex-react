import styled from 'styled-components'
import Type from './Type'

interface PokemonCardProps {
    info: any
}

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.backgroundCard};
    color: white;
    margin-top: .5em;
    @media (min-width: 1200px) {
        width: 14vw;
    }
    @media (max-width: 1200px) {
        width: 18vw;
    }
    @media (max-width: 1000px) {
        width: 28vw;
    }
    @media (max-width: 700px) {
        width: 43vw;
    }
`

const DescribeDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.background};
    padding: .5em;
`

const TitleCard = styled.span`
    font-size: 1.45em;
    margin-bottom: 5px;
    line-height: 125%;
    text-transform: capitalize;
    font-family: 'Flexo',arial,sans-serif;
    font-weight: 600;
    color: ${({theme}) => theme.colors.text};
`

const TypesDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const IdParagraph = styled.p`
    font-family: "Flexo",arial,sans-serif;
    font-weight: 600;
    padding-top: 2px;
    color: ${({theme}) => theme.colors.subtext};
    font-size: 80%;
    line-height: 125%;
    margin: .5em 0;
`

export default function PokemonCard(props: PokemonCardProps) {
    const imgUrl = props.info.sprites.other['official-artwork'].front_default
    const id = `N°${String(props.info.id).padStart(3, '0')}`

    return (
        <CardDiv>
            <img src={imgUrl} alt="" />
            <DescribeDiv>
                <IdParagraph>{id}</IdParagraph>
                <TitleCard>{props.info.name}</TitleCard>
                <TypesDiv>
                    {
                        props.info.types.map((type: any) => {
                            return (
                                <Type key={type.type.name} type={type.type.name}/>
                            )
                        })
                    }
                </TypesDiv>
            </DescribeDiv>
        </CardDiv>
    )
}
