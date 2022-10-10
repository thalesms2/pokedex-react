import Type from '../../Type'

import {
    CardDiv,
    DescribeDiv,
    IdParagraph,
    TitleCard,
    TypesDiv,
} from './PokemonCard.styled'
interface PokemonCardProps {
    info: any
}

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
