import { CardDiv } from './style/styled'

interface CardProps {
    name: string
    id: number
    img: any
    types: any
}

export default function Card(props: CardProps) {
    return (
        <CardDiv>
            <h2>{props.id} - {props.name}</h2>
            <img src={props.img.front_default} alt="" />
            {
                props.types.map((type: any) => {
                    return (
                        <div>
                            <span>{type.type.name}</span>
                        </div>
                    )
                })
            }
        </CardDiv>
    )
}
