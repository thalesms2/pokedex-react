import styled from 'styled-components'

interface PokemonProps {
    info: any
}

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
    color: white;
    max-width: 200px;
    margin: .5em;
    padding: .5em;
`

const DescribeDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #808080;
    padding: .5em;
`

const TitleCard = styled.span`
    font-size: 1.2em;
    font-weight: bold;
`

const TypesDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const Type = styled.span`
    background-color: #9BCC50;
    color: black;
    padding: .2em 1em;
    margin-right: .5em;
`

export default function Pokemon(props: PokemonProps) {
    const imgUrl = props.info.sprites.other['official-artwork'].front_default

    return (
        <CardDiv>
            <img src={imgUrl} alt="" />
            <DescribeDiv>
                <span>{props.info.id}</span>
                <TitleCard>{props.info.name}</TitleCard>
                <TypesDiv>
                    {
                        props.info.types.map((type: any) => {
                            return (
                                <Type>{type.type.name}</Type>
                            )
                        })
                    }
                </TypesDiv>
            </DescribeDiv>
        </CardDiv>
    )
}
