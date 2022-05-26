import styled from "styled-components"

interface HeaderProps {
    title: string
}

const Title = styled.h1`
    color: #919191;
    font-family: "Flexo-Regular",arial,sans-serif;
    line-height: 125%;
    font-size: 187.5%;
`

export default function Header(props: HeaderProps) {

    return(
        <div>
            <Title>{props.title}</Title>
        </div>
    )
}