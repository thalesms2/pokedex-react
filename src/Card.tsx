import { CardDiv, DescribeDiv, TitleCard, TypesDiv, Type } from './style/styled'

interface CardProps {
    name: string
    id: number
    img: any
    types: any
}

export default function Card(props: CardProps) {
    const imgUrl = props.img.other['official-artwork'].front_default

    return (
        <CardDiv>
            <img src={imgUrl} alt="" />
            <DescribeDiv>
                <span>{props.id}</span>
                <TitleCard>{props.name}</TitleCard>
                <TypesDiv>
                    {
                        props.types.map((type: any) => {
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
