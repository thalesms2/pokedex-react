import styled from 'styled-components'
import Type from './Type'

interface PokemonCardProps {
    info: any
}

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
    color: white;
    max-width: 250px;
    margin: .5em;
`

const DescribeDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: .5em;
`

const TitleCard = styled.span`
    font-size: 145%;
    margin-bottom: 5px;
    line-height: 125%;
    text-transform: capitalize;
    font-family: 'Flexo',arial,sans-serif;
    font-weight: 600;
    color: #313131;
`

const TypesDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const IdParagraph = styled.p`
    font-family: "Flexo",arial,sans-serif;
    font-weight: 600;
    padding-top: 2px;
    color: #919191;
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
