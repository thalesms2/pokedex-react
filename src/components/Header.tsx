import styled from "styled-components"

interface HeaderProps {
    title: string
}

const Title = styled.h1`
    color: #919191;
    font-family: "Flexo",arial,sans-serif;
    font-weight: 600;
    line-height: 125%;
    font-size: 3em;
`

export default function Header(props: HeaderProps) {

    return(
        <div>
            <Title>{props.title}</Title>
        </div>
    )
}